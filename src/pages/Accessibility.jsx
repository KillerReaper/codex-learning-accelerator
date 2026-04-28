import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Accessibility({ language, setLanguage }) {
  const sections =
    language === 'en'
      ? [
          {
            title: 'Voice Input',
            summary: 'Enables fast, hands-free interaction with Nexis.',
            description: 'Allows users to interact hands-free using speech.',
            usefulFor: [
              'players actively gaming',
              'users who prefer speaking over typing',
              'quick commands during gameplay',
              'users who want hands-free interaction',
            ],
          },
          {
            title: 'Text Input (Terminal Style)',
            summary: 'Provides a reliable alternative when voice input is not ideal.',
            description:
              'Provides a keyboard-based way to interact with Nexis using typed commands.',
            usefulFor: [
              'users who do not like speaking',
              'users with speech difficulties',
              'users without a microphone',
              'users with poor microphone quality',
              'people in public or noisy environments',
              'users who prefer typing commands',
            ],
          },
          {
            title: 'Multi-Language Understanding',
            summary: 'Expands usability beyond English-speaking users.',
            description:
              'Nexis can understand input in multiple languages such as Spanish.',
            usefulFor: [
              'non-native English speakers',
              'bilingual users',
              'users more comfortable in another language',
              'improving overall accessibility',
            ],
          },
        ]
      : [
          {
            title: 'Entrada por voz',
            summary: 'Permite una interacción rápida y manos libres con Nexis.',
            description:
              'Permite a los usuarios interactuar sin usar las manos mediante la voz.',
            usefulFor: [
              'jugadores que están jugando activamente',
              'usuarios que prefieren hablar en lugar de escribir',
              'comandos rápidos durante la partida',
              'usuarios que quieren interacción manos libres',
            ],
          },
          {
            title: 'Entrada de texto (estilo terminal)',
            summary: 'Ofrece una alternativa confiable cuando la voz no es lo ideal.',
            description:
              'Ofrece una forma de interactuar con Nexis mediante comandos escritos con teclado.',
            usefulFor: [
              'usuarios a quienes no les gusta hablar',
              'usuarios con dificultades del habla',
              'usuarios sin micrófono',
              'usuarios con mala calidad de micrófono',
              'personas en lugares públicos o ruidosos',
              'usuarios que prefieren escribir comandos',
            ],
          },
          {
            title: 'Comprensión multilingüe',
            summary: 'Amplía la utilidad más allá de los usuarios que hablan inglés.',
            description:
              'Nexis puede entender entradas en varios idiomas, como español.',
            usefulFor: [
              'personas que no tienen el inglés como lengua principal',
              'usuarios bilingües',
              'usuarios más cómodos en otro idioma',
              'mejorar la accesibilidad general',
            ],
          },
        ];

  const futureImprovements =
    language === 'en'
      ? [
          'Voice output (text-to-speech responses)',
          'Expanded language support',
          'Customizable interaction speed',
          'Improved keyboard navigation',
        ]
      : [
          'Salida por voz (respuestas de texto a voz)',
          'Soporte de idiomas ampliado',
          'Velocidad de interacción personalizable',
          'Mejor navegación con teclado',
        ];

  return (
    <div className="page">
      <Navbar language={language} setLanguage={setLanguage} />

      <main className="shell page-content detail-page">
        <section className="page-intro">
          <span className="section-tag">
            {language === 'en' ? 'Accessibility' : 'Accesibilidad'}
          </span>
          <h1 className="page-title">
            {language === 'en' ? 'Accessibility Features' : 'Funciones de accesibilidad'}
          </h1>
          <p className="page-lead">
            {language === 'en'
              ? 'Nexis is designed to be accessible for a wide range of users. Whether you prefer speaking, typing, or using different environments, Nexis adapts to your needs.'
              : 'Nexis está diseñado para ser accesible para una amplia variedad de usuarios. Ya sea que prefieras hablar, escribir o usar diferentes entornos, Nexis se adapta a tus necesidades.'}
          </p>
        </section>

        <section className="page-stack">
          <article className="panel-card">
            <h2 className="panel-title">
              {language === 'en' ? 'Why Accessibility Matters' : 'Por qué importa la accesibilidad'}
            </h2>
            <p className="panel-lead">
              {language === 'en'
                ? 'Not every user interacts with technology the same way. Some users may not be able to speak, while others may not have access to a microphone. Nexis is designed to support different environments, preferences, and abilities.'
                : 'No todos los usuarios interactúan con la tecnología de la misma manera. Algunos usuarios quizá no puedan hablar, mientras que otros quizá no tengan acceso a un micrófono. Nexis está diseñado para apoyar diferentes entornos, preferencias y capacidades.'}
            </p>
          </article>

          {sections.map((section) => (
            <article key={section.title} className="panel-card">
              <h2 className="panel-title">{section.title}</h2>
              <p className="panel-summary">{section.summary}</p>
              <p className="panel-copy">{section.description}</p>
              <div className="inset-panel">
                <p className="panel-label">{language === 'en' ? 'Useful for' : 'Útil para'}</p>
                <ul className="inset-list">
                  {section.usefulFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}

          <article className="panel-card">
            <h2 className="panel-title">
              {language === 'en'
                ? 'Future Accessibility Improvements'
                : 'Mejoras futuras de accesibilidad'}
            </h2>
            <div className="inset-panel">
              <ul className="inset-list inset-list-compact">
                {futureImprovements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Accessibility;
