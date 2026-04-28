import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { getMemoryEntries, processNexisInput } from '../lib/nexisMemory';

function MinecraftPage({ language, setLanguage }) {
  const exampleConversationEntries =
    language === 'en'
      ? [
          {
            user: 'I found a stronghold at 120, -340',
            nexis: 'Stronghold location saved.',
          },
          {
            user: 'Where are my diamonds?',
            nexis: 'Your diamonds are in your base.',
          },
          {
            user: 'Remember my iron is in the mine chest',
            nexis: 'Got it. I will keep that in your memory.',
          },
        ]
      : [
          {
            user: 'Encontre una fortaleza en 120, -340',
            nexis: 'Ubicacion de la fortaleza guardada.',
          },
          {
            user: 'Donde estan mis diamantes?',
            nexis: 'Tus diamantes estan en tu base.',
          },
          {
            user: 'Recuerda que mi hierro esta en el cofre de la mina',
            nexis: 'Entendido. Lo guardare en tu memoria.',
          },
        ];

  const emptyMemoryState =
    language === 'en'
      ? [{ label: 'No saved memory yet', detail: 'Store something and it will appear here.' }]
      : [{ label: 'Aun no hay memoria guardada', detail: 'Guarda algo y aparecera aqui.' }];

  const [userInput, setUserInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [displayText, setDisplayText] = useState(
    language === 'en' ? 'Waiting for input...' : 'Esperando entrada...',
  );
  const [conversationEntries, setConversationEntries] = useState(exampleConversationEntries);
  const [storedMemories, setStoredMemories] = useState(emptyMemoryState);

  function refreshStoredMemories() {
    const memoryEntries = getMemoryEntries();

    setStoredMemories(
      memoryEntries.length > 0
        ? memoryEntries.map((entry) => ({
            label: entry.subject,
            detail: entry.details,
          }))
        : emptyMemoryState,
    );
  }

  useEffect(() => {
    setConversationEntries(exampleConversationEntries);
    refreshStoredMemories();
  }, [language]);

  useEffect(() => {
    refreshStoredMemories();
  }, []);

  useEffect(() => {
    setDisplayText(language === 'en' ? 'Waiting for input...' : 'Esperando entrada...');
  }, [language]);

  async function handleSubmit(event) {
    event.preventDefault();

    const trimmedInput = userInput.trim();

    if (!trimmedInput || isProcessing) {
      return;
    }

    setIsProcessing(true);
    setDisplayText(language === 'en' ? 'Processing...' : 'Procesando...');

    try {
      const result = await processNexisInput(trimmedInput);

      setConversationEntries((previousEntries) => [
        ...previousEntries,
        {
          user: trimmedInput,
          nexis: result.response,
        },
      ]);
      refreshStoredMemories();
      setDisplayText(result.response);
      setUserInput('');
    } catch {
      setDisplayText(
        language === 'en'
          ? "I don't have that saved yet."
          : 'Todavia no tengo eso guardado.',
      );
    } finally {
      setIsProcessing(false);
    }
  }

  return (
    <div className="page">
      <Navbar language={language} setLanguage={setLanguage} />

      <main className="shell page-content detail-page">
        <section className="page-intro">
          <span className="section-tag">
            {language === 'en' ? 'Minecraft Demo' : 'Demo de Minecraft'}
          </span>
          <h1 className="page-title">
            {language === 'en'
              ? 'Text and voice memory workspace for Nexis'
              : 'Espacio de memoria por texto y voz para Nexis'}
          </h1>
          <p className="page-lead">
            {language === 'en'
              ? 'This demo focuses on Minecraft Java Edition, uses the latest version, and is currently limited to the Overworld. This demo uses text-based input to showcase Nexis\' AI memory system in Minecraft Java Edition (Overworld).'
              : 'Esta demo se centra en Minecraft Java Edition, usa la version mas reciente y por ahora se limita al Overworld. Esta demo usa entrada de texto para mostrar el sistema de memoria con IA de Nexis en Minecraft Java Edition (Overworld).'}
          </p>
        </section>

        <section className="page-stack">
          <article className="panel-card panel-card-emphasis">
            <div className="panel-card-header">
              <div>
                <span className="section-tag">
                  {language === 'en' ? 'Voice Assistant' : 'Asistente de voz'}
                </span>
                <h2 className="panel-title panel-title-lg">
                  {language === 'en' ? 'Nexis Voice Interaction' : 'Interaccion por voz de Nexis'}
                </h2>
              </div>

              <button type="button" className="button button-primary">
                {'\uD83C\uDFA4'} {language === 'en' ? 'Text Demo Active' : 'Demo de texto activa'}
              </button>
            </div>

            <div className="panel-grid">
              <div className="panel-subcard">
                <p className="panel-status">
                  {language === 'en'
                    ? `Status: ${isProcessing ? 'Processing' : 'Ready'}`
                    : `Estado: ${isProcessing ? 'Procesando' : 'Listo'}`}
                </p>
                <p className="panel-display-text">
                  {displayText}
                </p>
                <p className="panel-copy">
                  {language === 'en'
                    ? 'Just type or say "Hey Nexis..." to tell Nexis what matters.'
                    : 'Solo escribe o di "Hey Nexis..." para decirle a Nexis lo que importa.'}
                </p>
                <form className="inset-panel" onSubmit={handleSubmit}>
                  <textarea
                    rows="3"
                    value={userInput}
                    onChange={(event) => setUserInput(event.target.value)}
                    placeholder={
                      language === 'en'
                        ? 'Try: remember my base is at 100 64 200'
                        : 'Prueba: recuerda que mi base esta en 100 64 200'
                    }
                  />
                  <button type="submit" className="button button-secondary" disabled={isProcessing}>
                    {language === 'en' ? 'Send Text' : 'Enviar texto'}
                  </button>
                </form>
              </div>

              <div className="panel-subcard">
                <p className="panel-label">
                  {language === 'en' ? 'Example conversation' : 'Conversacion de ejemplo'}
                </p>
                <div className="stack-list">
                  <div className="chat-bubble chat-bubble-user">
                    <strong>{language === 'en' ? 'You:' : 'Tu:'}</strong>{' '}
                    {language === 'en'
                      ? '"Hey Nexis, remember my diamonds are in my base"'
                      : '"Hey Nexis, recuerda que mis diamantes estan en mi base"'}
                  </div>
                  <div className="chat-bubble">
                    <strong>Nexis:</strong>{' '}
                    {language === 'en'
                      ? '"Got it. I\'ll remember that for you."'
                      : '"Entendido. Lo recordare por ti."'}
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="panel-card">
            <div className="panel-section-copy">
              <span className="section-tag">
                {language === 'en' ? 'Core Experience' : 'Experiencia principal'}
              </span>
              <h2 className="panel-title">
                {language === 'en'
                  ? 'Conversation / Memory Feed'
                  : 'Conversacion / Historial de memoria'}
              </h2>
              <p className="panel-lead">
                {language === 'en'
                  ? 'This is the heart of the experience for Minecraft Java Edition in the Overworld: every memory you store and every answer Nexis gives back lives here as a simple conversation history.'
                  : 'Este es el corazon de la experiencia para Minecraft Java Edition en el Overworld: cada recuerdo que guardas y cada respuesta que Nexis te da vive aqui como un historial simple de conversacion.'}
              </p>
            </div>

            <div className="conversation-feed">
              {conversationEntries.map((entry) => (
                <div key={entry.user} className="conversation-entry">
                  <div className="chat-bubble chat-bubble-user">
                    <strong>{language === 'en' ? 'You:' : 'Tu:'}</strong> {entry.user}
                  </div>
                  <div className="chat-bubble">
                    <strong>Nexis:</strong> {entry.nexis}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <section>
            <div className="panel-section-copy">
              <span className="section-tag">
                {language === 'en' ? 'Stored Memory' : 'Memoria guardada'}
              </span>
              <h2 className="panel-title">
                {language === 'en' ? 'Stored Memories' : 'Memorias guardadas'}
              </h2>
              <p className="panel-lead">
                {language === 'en'
                  ? 'A clean view of what Nexis has remembered for you so far, ready to recall whenever you ask.'
                  : 'Una vista clara de lo que Nexis ha recordado por ti hasta ahora, lista para consultarla cuando quieras.'}
              </p>
            </div>

            <div className="memory-grid">
              {storedMemories.map((memory) => (
                <article key={memory.label} className="memory-card">
                  <div className="memory-card-icon" />
                  <h3 className="memory-card-title">{memory.label}</h3>
                  <p className="panel-copy">{memory.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <article className="panel-card">
            <div className="panel-section-copy">
              <span className="section-tag">
                {language === 'en' ? 'Prompt Example' : 'Ejemplo de consulta'}
              </span>
              <h2 className="panel-title">
                {language === 'en' ? 'Ask Nexis' : 'Preguntale a Nexis'}
              </h2>
              <p className="panel-lead panel-lead-narrow">
                {language === 'en'
                  ? 'Ask Nexis anything about the game, and use the website as your companion space for answers and saved context.'
                  : 'Preguntale a Nexis cualquier cosa sobre el juego y usa el sitio web como tu espacio complementario para respuestas y contexto guardado.'}
              </p>
            </div>

            <div className="inset-panel">
              <p className="panel-label">{language === 'en' ? 'Example' : 'Ejemplo'}</p>
              <p className="panel-display-prompt">
                {language === 'en'
                  ? '"What is the recipe for an iron pickaxe?"'
                  : '"Cual es la receta para un pico de hierro?"'}
              </p>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default MinecraftPage;
