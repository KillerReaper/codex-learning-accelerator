import { parseNexisIntent } from './nexisIntentParser';

const MEMORY_STORAGE_KEY = 'nexis_memory';
const DEFAULT_CONTEXT = {
  game: 'minecraft',
  edition: 'java',
  world: 'overworld',
};

let inMemoryStore = {};

function getStorage() {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function normalizeSubject(subject) {
  return typeof subject === 'string' ? subject.trim().toLowerCase() : '';
}

function normalizeDetails(details) {
  return typeof details === 'string' ? details.trim() : '';
}

function buildSubjectCandidates(subject) {
  const normalized = normalizeSubject(subject);

  if (!normalized) {
    return [];
  }

  const candidates = new Set([normalized]);

  if (normalized.endsWith('s')) {
    candidates.add(normalized.slice(0, -1));
  } else {
    candidates.add(`${normalized}s`);
  }

  return [...candidates].filter(Boolean);
}

function readMemoryStore() {
  const storage = getStorage();

  if (!storage) {
    return { ...inMemoryStore };
  }

  try {
    const saved = storage.getItem(MEMORY_STORAGE_KEY);

    if (!saved) {
      return { ...inMemoryStore };
    }

    const parsed = JSON.parse(saved);
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return { ...inMemoryStore };
  }
}

function writeMemoryStore(memory) {
  const nextMemory =
    memory && typeof memory === 'object' && !Array.isArray(memory) ? memory : {};
  const storage = getStorage();

  if (!storage) {
    inMemoryStore = { ...nextMemory };
    return;
  }

  try {
    storage.setItem(MEMORY_STORAGE_KEY, JSON.stringify(nextMemory));
  } catch {
    inMemoryStore = { ...nextMemory };
  }
}

export function saveMemory(subject, details) {
  const normalizedSubject = normalizeSubject(subject);
  const normalizedDetails = normalizeDetails(details);

  if (!normalizedSubject || !normalizedDetails) {
    return false;
  }

  const memory = readMemoryStore();
  memory[normalizedSubject] = normalizedDetails;
  writeMemoryStore(memory);
  return true;
}

export function getMemory(subject) {
  const memory = readMemoryStore();
  const candidates = buildSubjectCandidates(subject);

  for (const candidate of candidates) {
    const saved = memory[candidate];

    if (typeof saved === 'string' && saved.trim()) {
      return saved.trim();
    }
  }

  return '';
}

export function getMemoryEntries() {
  const memory = readMemoryStore();

  return Object.entries(memory).reduce((entries, [subject, details]) => {
    if (typeof subject !== 'string' || typeof details !== 'string') {
      return entries;
    }

    const normalizedSubject = normalizeSubject(subject);
    const normalizedDetails = normalizeDetails(details);

    if (!normalizedSubject || !normalizedDetails) {
      return entries;
    }

    entries.push({
      subject: normalizedSubject,
      details: normalizedDetails,
    });

    return entries;
  }, []);
}

export function buildMemoryResponse(intentResult) {
  if (!intentResult || typeof intentResult !== 'object') {
    return "I don't have that saved yet.";
  }

  if (intentResult.intent === 'STORE') {
    return saveMemory(intentResult.subject, intentResult.details)
      ? "Got it. I'll remember that for you."
      : "I don't have that saved yet.";
  }

  if (intentResult.intent === 'RECALL') {
    const saved = getMemory(intentResult.subject);
    const subject = normalizeSubject(intentResult.subject);

    if (!subject || !saved) {
      return "I don't have that saved yet.";
    }

    return `Your ${subject} is ${saved}.`;
  }

  return intentResult.details || '';
}

export async function processNexisInput(input, options = {}) {
  const intentResult = await parseNexisIntent(input, DEFAULT_CONTEXT, options);

  return {
    ...intentResult,
    response: buildMemoryResponse(intentResult),
  };
}

export function clearMemory() {
  writeMemoryStore({});
}
