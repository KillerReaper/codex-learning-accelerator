import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function HomePage({ language, setLanguage }) {
  const content =
    language === 'en'
      ? {
          prototypeTitle:
            'This is a prototype demo of Nexis. The current experience showcases one supported game as an example.',
          prototypeSubtitle:
            'Additional games, deeper memory tools, and broader assistant workflows are planned.',
          heroEyebrow: 'Text and voice AI platform',
          heroTitle: 'Your AI Memory for Every Game',
          heroDescription:
            'Nexis understands and remembers your gameplay using AI through text or voice—helping you keep track of progress, items, and decisions as you play. Just type or say "Hey Nexis..." to tell Nexis what matters.',
          heroPrimary: 'Start Demo',
          heroNote: 'Voice support is included, but the demo uses text input for consistency.',
          heroSecondary: 'Explore Demo',
          heroStatus: 'Voice Session Active',
          heroMetrics: ['Captured Notes', 'Saved Memories', 'Games Ready'],
          heroGrowth: 'Growing',
          heroHistoryTitle: 'Assistant History',
          heroHistorySubtitle:
            'Built from what you tell Nexis and ready to review on the website',
          heroHistoryEntries: [
            '"Hey Nexis, remember the blue vault chest has rare loot"',
            'Saved',
            '"I stored medkits near the south gate"',
            'Remembered',
            '"What did I stash before the raid?"',
            'Answered',
          ],
          ctaTag: 'Start Now',
          ctaTitle: 'Experience Nexis in Action',
          ctaDescription:
            'Try Nexis through a focused Minecraft Java Edition demo set in the latest Overworld experience.',
          ctaButton: 'Launch Demo',
          featuresTag: 'Features',
          featuresTitle: 'Designed as a scalable memory layer for the games you already play',
          features: [
            {
              title: 'Voice Tracking',
              description:
                'Speak naturally while playing and tell Nexis what matters as it builds your session memory.',
            },
            {
              title: 'Intent-Based Memory',
              description:
                'Nexis remembers what you tell it - from item locations to discoveries and decisions across your gameplay.',
            },
            {
              title: 'Ask Nexis',
              description:
                'Ask Nexis when you need it and get quick answers about your progress, items, or decisions.',
            },
            {
              title: 'Voice Response System',
              description:
                'Nexis responds through voice so you can stay focused on your game, while your information and history are available on the Nexis website.',
            },
          ],
          stepsTag: 'How It Works',
          stepsTitle: 'One voice-first workflow that fits naturally into any session',
          steps: [
            'Speak naturally while playing any game',
            'Tell Nexis what matters and let it save your memory',
            'Ask Nexis anything when you need it',
          ],
          previewTag: 'Website Preview',
          previewTitle: 'A companion dashboard that stays in sync with what you say',
          previewDescription:
            'Nexis speaks back while you play, and your information stays organized on the Nexis website for quick review whenever you need it.',
          previewTopbar: ['Nexis Listening...', 'Website Memory Synced'],
          previewLines: [
            '5 iron added to your session history',
            'Blue vault chest marked for rare loot',
            'Ask Nexis for saved items, locations, and decisions anytime',
          ],
          demoTag: 'Demo Scope',
          demoTitle: 'What This Demo Shows',
          demoDescription:
            'This prototype demonstrates Minecraft Java Edition on the latest version, limited to the Overworld for now.',
          demoLead: 'Speak naturally while playing in the Overworld, and Nexis will:',
          demoPoints: [
            'Remember actions, resources, and discoveries you call out',
            'Keep your running history organized on the Nexis website',
            'Help you stay focused on Minecraft gameplay instead of managing information',
          ],
          directionTag: 'Platform Direction',
          directionTitle: 'Prototype Today, broader platform tomorrow',
          currentLabel: 'Current',
          currentPoints: ['Voice-first assistant memory', 'Web-based limitations'],
          futureLabel: 'Future',
          futurePoints: [
            'Deeper memory automation',
            'Richer desktop companion workflows',
            'Expanded game-specific capabilities',
          ],
          whyTag: 'Why Nexis Matters',
          whyTitle: 'Memory support changes how players stay in the flow',
          whyDescription:
            'Players often lose track of items, resources, and progress in complex games.',
          whyCopy:
            'Nexis removes that problem by acting as a real-time memory system, allowing players to focus on gameplay instead of managing information.',
          clarity:
            'Voice is the primary interaction in this prototype, and the Nexis website is where your saved information and history live.',
        }
      : {
          prototypeTitle:
            'Esta es una demostración prototipo de Nexis. La experiencia actual muestra un juego compatible como ejemplo.',
          prototypeSubtitle:
            'Se planean más juegos, herramientas de memoria más profundas y flujos del asistente más amplios.',
          heroEyebrow: 'Plataforma de IA con texto y voz',
          heroTitle: 'Tu memoria con IA para cada juego',
          heroDescription:
            'Nexis entiende y recuerda tu partida con IA mediante texto o voz, ayudándote a seguir tu progreso, objetos y decisiones mientras juegas. Solo escribe o di "Hey Nexis..." para decirle a Nexis lo que importa.',
          heroPrimary: 'Comenzar demo',
          heroNote:
            'La compatibilidad con voz está incluida, pero la demo usa texto para mantener la consistencia.',
          heroSecondary: 'Explorar demo',
          heroStatus: 'Sesión de voz activa',
          heroMetrics: ['Notas capturadas', 'Memorias guardadas', 'Juegos listos'],
          heroGrowth: 'En aumento',
          heroHistoryTitle: 'Historial del asistente',
          heroHistorySubtitle:
            'Se construye con lo que le dices a Nexis y está listo para revisarlo en el sitio web',
          heroHistoryEntries: [
            '"Hey Nexis, recuerda que el cofre azul de la bóveda tiene botín raro"',
            'Guardado',
            '"Guardé botiquines cerca de la puerta sur"',
            'Recordado',
            '"¿Qué guardé antes de la incursión?"',
            'Respondido',
          ],
          ctaTag: 'Empieza ahora',
          ctaTitle: 'Prueba Nexis en acción',
          ctaDescription:
            'Prueba Nexis con una demo enfocada que muestra cómo funciona la memoria por voz en una situación real de juego.',
          ctaButton: 'Abrir demo',
          featuresTag: 'Funciones',
          featuresTitle:
            'Diseñado como una capa de memoria escalable para los juegos que ya juegas',
          features: [
            {
              title: 'Seguimiento por voz',
              description:
                'Habla con naturalidad mientras juegas y dile a Nexis lo que importa mientras crea la memoria de tu sesión.',
            },
            {
              title: 'Memoria basada en intención',
              description:
                'Nexis recuerda lo que le dices, desde ubicaciones de objetos hasta descubrimientos y decisiones durante tu partida.',
            },
            {
              title: 'Pregúntale a Nexis',
              description:
                'Pregúntale a Nexis cuando lo necesites y recibe respuestas rápidas sobre tu progreso, objetos o decisiones.',
            },
            {
              title: 'Sistema de respuesta por voz',
              description:
                'Nexis responde con voz para que sigas concentrado en tu juego, mientras tu información e historial quedan disponibles en el sitio web de Nexis.',
            },
          ],
          stepsTag: 'Cómo funciona',
          stepsTitle: 'Un flujo por voz que encaja de forma natural en cualquier sesión',
          steps: [
            'Habla con naturalidad mientras juegas cualquier juego',
            'Dile a Nexis lo que importa y deja que guarde tu memoria',
            'Pregúntale a Nexis lo que necesites en cualquier momento',
          ],
          previewTag: 'Vista previa del sitio',
          previewTitle: 'Un panel complementario que se mantiene en sintonía con lo que dices',
          previewDescription:
            'Nexis te responde mientras juegas, y tu información queda organizada en el sitio web de Nexis para revisarla rápidamente cuando la necesites.',
          previewTopbar: ['Nexis escuchando...', 'Memoria del sitio sincronizada'],
          previewLines: [
            '5 de hierro añadidos al historial de tu sesión',
            'Cofre azul de la bóveda marcado con botín raro',
            'Pregúntale a Nexis por objetos, ubicaciones y decisiones guardadas cuando quieras',
          ],
          demoTag: 'Alcance de la demo',
          demoTitle: 'Qué muestra esta demo',
          demoDescription:
            'Este prototipo demuestra cómo Nexis puede recordar detalles del juego mediante entrada por voz.',
          demoLead: 'Habla con naturalidad mientras juegas, y Nexis podrá:',
          demoPoints: [
            'Recordar acciones, recursos y descubrimientos que menciones',
            'Mantener organizado tu historial en el sitio web de Nexis',
            'Ayudarte a seguir concentrado en el juego en lugar de gestionar información',
          ],
          directionTag: 'Dirección de la plataforma',
          directionTitle: 'Prototipo hoy, plataforma más amplia mañana',
          currentLabel: 'Actual',
          currentPoints: ['Memoria del asistente por voz', 'Limitaciones web'],
          futureLabel: 'Futuro',
          futurePoints: [
            'Automatización de memoria más profunda',
            'Flujos más ricos para un asistente de escritorio',
            'Capacidades ampliadas para juegos específicos',
          ],
          whyTag: 'Por qué importa Nexis',
          whyTitle: 'El apoyo de memoria cambia la forma en que los jugadores mantienen el ritmo',
          whyDescription:
            'Los jugadores suelen perder de vista objetos, recursos y progreso en juegos complejos.',
          whyCopy:
            'Nexis elimina ese problema al actuar como un sistema de memoria en tiempo real, permitiendo que los jugadores se concentren en jugar en lugar de gestionar información.',
          clarity:
            'La voz es la interacción principal en este prototipo, y el sitio web de Nexis es donde viven tu información guardada y tu historial.',
        };

  return (
    <div className="page page-home">
      <div className="prototype-banner">
        <div className="shell prototype-banner-content">
          <span>{content.prototypeTitle}</span>
          <span className="prototype-banner-subtle">{content.prototypeSubtitle}</span>
        </div>
      </div>

      <Navbar language={language} setLanguage={setLanguage} />

      <main className="shell page-content">
        <section className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow">{content.heroEyebrow}</div>
            <h1>{content.heroTitle}</h1>
            <p>{content.heroDescription}</p>
            <p>{content.heroNote}</p>

            <div className="hero-actions">
              <Link className="button button-primary" to="/minecraft">
                {content.heroPrimary}
              </Link>
              <a className="button button-secondary" href="#overlay-preview">
                {content.heroSecondary}
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-header">
              <span className="status-dot" />
              <span>{content.heroStatus}</span>
              <button type="button" className="mic-button" aria-label="Microphone preview">
                <span className="mic-stem" />
                <span className="mic-base" />
              </button>
            </div>

            <div className="hero-grid">
              <div className="metric-card">
                <span className="metric-label">{content.heroMetrics[0]}</span>
                <strong>18</strong>
              </div>
              <div className="metric-card">
                <span className="metric-label">{content.heroMetrics[1]}</span>
                <strong>42</strong>
              </div>
              <div className="metric-card accent">
                <span className="metric-label">{content.heroMetrics[2]}</span>
                <strong>{content.heroGrowth}</strong>
              </div>
            </div>

            <div className="scan-card">
              <div>
                <p className="scan-title">{content.heroHistoryTitle}</p>
                <p className="scan-subtitle">{content.heroHistorySubtitle}</p>
              </div>

              <div className="scan-list">
                {content.heroHistoryEntries.map((entry) => (
                  <span key={entry}>{entry}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-copy">
            <span className="section-tag">{content.ctaTag}</span>
            <h2>{content.ctaTitle}</h2>
            <p>{content.ctaDescription}</p>
          </div>

          <Link className="button button-primary" to="/minecraft">
            {content.ctaButton}
          </Link>
        </section>

        <section className="content-section" id="features">
          <div className="section-heading">
            <span className="section-tag">{content.featuresTag}</span>
            <h2>{content.featuresTitle}</h2>
          </div>

          <div className="feature-grid">
            {content.features.map((feature, index) => (
              <article
                className="feature-card"
                key={feature.title}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="feature-icon">{`0${index + 1}`}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <span className="section-tag">{content.stepsTag}</span>
            <h2>{content.stepsTitle}</h2>
          </div>

          <div className="steps-grid">
            {content.steps.map((step, index) => (
              <div className="step-card" key={step}>
                <span className="step-number">{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section" id="overlay-preview">
          <div className="section-heading">
            <span className="section-tag">{content.previewTag}</span>
            <h2>{content.previewTitle}</h2>
            <p>{content.previewDescription}</p>
          </div>

          <div className="overlay-preview-card">
            <div className="overlay-window">
              <div className="overlay-topbar">
                <span className="overlay-pill active">{content.previewTopbar[0]}</span>
                <span className="overlay-pill">{content.previewTopbar[1]}</span>
              </div>

              <div className="overlay-feed">
                <div className="overlay-line positive">{content.previewLines[0]}</div>
                <div className="overlay-line">{content.previewLines[1]}</div>
                <div className="overlay-line highlight">{content.previewLines[2]}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <span className="section-tag">{content.demoTag}</span>
            <h2>{content.demoTitle}</h2>
            <p>{content.demoDescription}</p>
          </div>

          <div className="info-card">
            <p>{content.demoLead}</p>
            <ul className="info-list">
              {content.demoPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <span className="section-tag">{content.directionTag}</span>
            <h2>{content.directionTitle}</h2>
          </div>

          <div className="comparison-grid">
            <article className="comparison-card">
              <span className="comparison-label">{content.currentLabel}</span>
              <ul className="info-list">
                {content.currentPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>

            <article className="comparison-card future">
              <span className="comparison-label">{content.futureLabel}</span>
              <ul className="info-list">
                {content.futurePoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <span className="section-tag">{content.whyTag}</span>
            <h2>{content.whyTitle}</h2>
            <p>{content.whyDescription}</p>
          </div>

          <div className="info-card">
            <p>{content.whyCopy}</p>
          </div>
        </section>

        <p className="clarity-line">{content.clarity}</p>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
