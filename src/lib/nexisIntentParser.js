const OPENAI_CHAT_COMPLETIONS_URL = 'https://api.openai.com/v1/chat/completions';
const MAX_REQUESTS_PER_MINUTE = 3;
const TIME_WINDOW_MS = 60000;

let requestCount = 0;
let lastResetTime = Date.now();

const INTENT_SCHEMA = {
  name: 'nexis_intent_result',
  strict: true,
  schema: {
    type: 'object',
    additionalProperties: false,
    properties: {
      intent: {
        type: 'string',
        enum: ['STORE', 'RECALL', 'ASK'],
      },
      subject: {
        type: 'string',
      },
      details: {
        type: 'string',
      },
    },
    required: ['intent', 'subject', 'details'],
  },
};

const BASE_SYSTEM_PROMPT = `
You are the Nexis core brain loop for Section 1 only.

Your only job is to classify a plain text user input into structured JSON with:
- intent
- subject
- details

Intent rules:
- STORE: the user is telling Nexis to remember something
- RECALL: the user is asking Nexis to recall something previously remembered
- ASK: the user is asking a general question that is not a memory recall request

Output rules:
- Return valid JSON only
- No markdown
- No explanation
- No extra keys
- intent must be one of STORE, RECALL, ASK
- subject must be concise
- details must be concise
- Keep subject and details lowercase unless capitalization is required

Important limits:
- Do not add memory logic
- Do not add wake phrase logic
- Do not mention UI, voice, or future sections
- For the current Minecraft demo, assume Minecraft Java Edition on the latest version
- For the current Minecraft demo, assume the player is in the Overworld only
- Do not consider Nether or End logic for the current Minecraft demo
- Use only in-game logic when game context is provided
- Do not use real-world assumptions
- Interpret ambiguous words inside the provided game context
- Adapt your behavior based on the provided world context
`.trim();

function isPlainObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function resolveParserOptions(context, options) {
  if (!isPlainObject(context)) {
    return {
      context: {},
      options: isPlainObject(options) ? options : {},
    };
  }

  const optionKeys = ['apiKey', 'model', 'fetchImpl'];
  const hasExplicitOptions = isPlainObject(options) && Object.keys(options).length > 0;
  const derivedOptions = optionKeys.reduce((result, key) => {
    if (key in context) {
      result[key] = context[key];
    }

    return result;
  }, {});
  const derivedContext = Object.keys(context).reduce((result, key) => {
    if (!optionKeys.includes(key)) {
      result[key] = context[key];
    }

    return result;
  }, {});

  return {
    context: derivedContext,
    options: hasExplicitOptions ? options : derivedOptions,
  };
}

function buildContextBlock(context) {
  const game = typeof context.game === 'string' ? context.game.trim() : '';
  const edition = typeof context.edition === 'string' ? context.edition.trim() : '';
  const world = typeof context.world === 'string' ? context.world.trim() : '';
  const isMinecraftJavaOverworld =
    game.toLowerCase() === 'minecraft' &&
    edition.toLowerCase() === 'java' &&
    world.toLowerCase() === 'overworld';

  const contextLines = [
    game && `- game: ${game}`,
    edition && `- edition: ${edition}`,
    world && `- world: ${world}`,
  ].filter(Boolean);

  if (contextLines.length === 0) {
    return '';
  }

  return `

Game context:
${contextLines.join('\n')}

Context rules:
- Use only game-specific logic for this context
- Do not use real-world assumptions
- Interpret everything within the given game context
- Adapt behavior based on the world context (for example, Nether vs Overworld)
${isMinecraftJavaOverworld ? '- This Minecraft context is Java Edition on the latest version\n- Treat this demo as Overworld only\n- Do not consider Nether or End logic' : ''}
`.trimEnd();
}

function buildSystemPrompt(context) {
  return `${BASE_SYSTEM_PROMPT}${buildContextBlock(context)}`;
}

function normalizeIntentResult(result) {
  const intent = typeof result?.intent === 'string' ? result.intent.trim() : '';
  const subject = typeof result?.subject === 'string' ? result.subject.trim() : '';
  const details = typeof result?.details === 'string' ? result.details.trim() : '';

  if (!['STORE', 'RECALL', 'ASK'].includes(intent)) {
    throw new Error('OpenAI returned an invalid intent value.');
  }

  return {
    intent,
    subject,
    details,
  };
}

async function readErrorMessage(response) {
  try {
    const errorBody = await response.json();
    return JSON.stringify(errorBody);
  } catch {
    return response.text();
  }
}

export async function parseNexisIntent(input, context = {}, options = {}) {
  if (typeof input !== 'string' || input.trim().length === 0) {
    throw new Error('Input must be a non-empty string.');
  }

  const resolved = resolveParserOptions(context, options);
  const {
    apiKey = import.meta.env?.VITE_OPENAI_API_KEY,
    model = 'gpt-4o-mini',
    fetchImpl = fetch,
  } = resolved.options;

  if (!apiKey) {
    throw new Error('Missing OpenAI API key.');
  }

  if (typeof fetchImpl !== 'function') {
    throw new Error('A valid fetch implementation is required.');
  }

  const now = Date.now();

  if (now - lastResetTime >= TIME_WINDOW_MS) {
    requestCount = 0;
    lastResetTime = now;
  }

  if (requestCount >= MAX_REQUESTS_PER_MINUTE) {
    throw new Error('Rate limit reached: Please wait before making another request.');
  }

  requestCount += 1;

  const response = await fetchImpl(OPENAI_CHAT_COMPLETIONS_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      temperature: 0,
      response_format: {
        type: 'json_schema',
        json_schema: INTENT_SCHEMA,
      },
      messages: [
        {
          role: 'system',
          content: buildSystemPrompt(resolved.context),
        },
        {
          role: 'user',
          content: input.trim(),
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorMessage = await readErrorMessage(response);
    throw new Error(`OpenAI request failed (${response.status}): ${errorMessage}`);
  }

  // Read the OpenAI response and extract the first assistant message.
  const data = await response.json();
  const message = data?.choices?.[0]?.message;

  // Validate that the assistant message exists before reading any fields from it.
  if (!message || typeof message !== 'object') {
    throw new Error('OpenAI did not return a valid message object.');
  }

  // Surface explicit refusal responses clearly instead of attempting to parse them.
  if (message?.refusal) {
    throw new Error(`OpenAI refused the request: ${message.refusal}`);
  }

  // The model must return structured JSON content as a string.
  if (typeof message.content !== 'string') {
    throw new Error('OpenAI did not return structured JSON content as a string.');
  }

  const content = message.content.trim();

  if (!content) {
    throw new Error('OpenAI returned an empty structured JSON content string.');
  }

  let parsed;

  // Parse the JSON safely and attach a clear error message if it fails.
  try {
    parsed = JSON.parse(content);
  } catch (error) {
    const reason = error instanceof Error ? error.message : 'Unknown JSON parse error.';
    throw new Error(`Failed to parse OpenAI JSON content: ${reason}`);
  }

  // Normalize and validate the final structured intent payload.
  return normalizeIntentResult(parsed);
}
