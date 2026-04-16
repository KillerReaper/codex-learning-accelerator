import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const conversationEntries = [
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
];

const storedMemories = [
  { label: 'Diamonds', detail: 'Stored in base' },
  { label: 'Stronghold', detail: '120, -340' },
  { label: 'Iron', detail: 'Mine chest' },
  { label: 'Obsidian', detail: 'Nether room' },
];

function MinecraftPage() {
  return (
    <div className="page">
      <Navbar />

      <main
        className="shell"
        style={{
          padding: '3rem 0 5rem',
        }}
      >
        <section style={{ marginBottom: '1.8rem' }}>
          <span className="section-tag">Minecraft Demo</span>
          <h1
            style={{
              margin: 0,
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              letterSpacing: '-0.03em',
            }}
          >
            Voice-first memory workspace for Nexis
          </h1>
          <p
            style={{
              margin: '1rem 0 0',
              maxWidth: '48rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
            }}
          >
            This demo page focuses on the core Nexis loop: you talk to Nexis, it
            remembers what matters, and you ask for that information later.
          </p>
        </section>

        <section
          style={{
            display: 'grid',
            gap: '1.4rem',
          }}
        >
          <article
            style={{
              position: 'relative',
              overflow: 'hidden',
              padding: '1.6rem',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              background:
                'linear-gradient(180deg, rgba(18, 24, 38, 0.95), rgba(18, 24, 38, 0.82))',
              boxShadow: 'var(--shadow)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                marginBottom: '1.4rem',
              }}
            >
              <div>
                <span className="section-tag">Voice Assistant</span>
                <h2
                  style={{
                    margin: 0,
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
                    letterSpacing: '-0.03em',
                  }}
                >
                  Nexis Voice Interaction
                </h2>
              </div>

              <button type="button" className="button button-primary">
                {'\uD83C\uDFA4'} Start Listening
              </button>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  padding: '1.2rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(148, 163, 184, 0.08)',
                  background: 'rgba(11, 15, 25, 0.64)',
                }}
              >
                <p
                  style={{
                    margin: 0,
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem',
                  }}
                >
                  Status: Not Listening
                </p>
                <p
                  style={{
                    margin: '0.9rem 0 0',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.2rem',
                  }}
                >
                  Waiting for input...
                </p>
                <p
                  style={{
                    margin: '0.8rem 0 0',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                  }}
                >
                  Just say &quot;Hey Nexis...&quot; to store something important or ask a
                  question while you play.
                </p>
              </div>

              <div
                style={{
                  padding: '1.2rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(148, 163, 184, 0.08)',
                  background: 'rgba(11, 15, 25, 0.64)',
                }}
              >
                <p
                  style={{
                    margin: 0,
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  Example conversation
                </p>
                <div style={{ display: 'grid', gap: '0.8rem', marginTop: '1rem' }}>
                  <div
                    style={{
                      padding: '0.95rem 1rem',
                      borderRadius: '1rem',
                      background: 'rgba(59, 130, 246, 0.12)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <strong>You:</strong> &quot;Hey Nexis, remember my diamonds are in my
                    base&quot;
                  </div>
                  <div
                    style={{
                      padding: '0.95rem 1rem',
                      borderRadius: '1rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <strong>Nexis:</strong> &quot;Got it. I&apos;ll remember that.&quot;
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article
            style={{
              padding: '1.5rem',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              background:
                'linear-gradient(180deg, rgba(18, 24, 38, 0.95), rgba(18, 24, 38, 0.82))',
              boxShadow: 'var(--shadow)',
            }}
          >
            <div style={{ marginBottom: '1rem' }}>
              <span className="section-tag">Core Experience</span>
              <h2
                style={{
                  margin: 0,
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  letterSpacing: '-0.03em',
                }}
              >
                Conversation / Memory Feed
              </h2>
              <p
                style={{
                  margin: '0.85rem 0 0',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  maxWidth: '42rem',
                }}
              >
                This is the heart of the experience: every memory you store and every
                answer Nexis gives back lives here as a simple conversation history.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gap: '1rem',
                maxHeight: '320px',
                overflowY: 'auto',
                paddingRight: '0.35rem',
              }}
            >
              {conversationEntries.map((entry) => (
                <div
                  key={entry.user}
                  style={{
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(148, 163, 184, 0.08)',
                    background: 'rgba(11, 15, 25, 0.64)',
                    display: 'grid',
                    gap: '0.75rem',
                  }}
                >
                  <div
                    style={{
                      padding: '0.85rem 0.95rem',
                      borderRadius: '1rem',
                      background: 'rgba(59, 130, 246, 0.12)',
                    }}
                  >
                    <strong>You:</strong> {entry.user}
                  </div>
                  <div
                    style={{
                      padding: '0.85rem 0.95rem',
                      borderRadius: '1rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                    }}
                  >
                    <strong>Nexis:</strong> {entry.nexis}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <section>
            <div style={{ marginBottom: '1rem' }}>
              <span className="section-tag">Stored Memory</span>
              <h2
                style={{
                  margin: 0,
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  letterSpacing: '-0.03em',
                }}
              >
                Stored Memories
              </h2>
              <p
                style={{
                  margin: '0.85rem 0 0',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  maxWidth: '42rem',
                }}
              >
                A clean view of what Nexis has remembered for you so far, ready to
                recall whenever you ask.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                gap: '1rem',
              }}
            >
              {storedMemories.map((memory) => (
                <article
                  key={memory.label}
                  style={{
                    padding: '1.35rem',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    background:
                      'linear-gradient(180deg, rgba(18, 24, 38, 0.95), rgba(18, 24, 38, 0.82))',
                    boxShadow: 'var(--shadow)',
                  }}
                >
                  <div
                    style={{
                      width: '2.75rem',
                      height: '2.75rem',
                      borderRadius: '0.95rem',
                      background:
                        'linear-gradient(135deg, rgba(59, 130, 246, 0.16), rgba(29, 78, 216, 0.2))',
                      border: '1px solid rgba(59, 130, 246, 0.22)',
                      marginBottom: '1rem',
                    }}
                  />
                  <h3
                    style={{
                      margin: '0 0 0.7rem',
                      fontSize: '1.05rem',
                    }}
                  >
                    {memory.label}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                    }}
                  >
                    {memory.detail}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <article
            style={{
              padding: '1.4rem',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              background:
                'linear-gradient(180deg, rgba(18, 24, 38, 0.95), rgba(18, 24, 38, 0.82))',
              boxShadow: 'var(--shadow)',
            }}
          >
            <div style={{ marginBottom: '1rem' }}>
              <span className="section-tag">Prompt Example</span>
              <h2
                style={{
                  margin: 0,
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  letterSpacing: '-0.03em',
                }}
              >
                Ask Nexis
              </h2>
              <p
                style={{
                  margin: '0.85rem 0 0',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  maxWidth: '38rem',
                }}
              >
                Ask Nexis anything about the game, and use the website as your
                companion space for answers and saved context.
              </p>
            </div>

            <div
              style={{
                padding: '1rem 1.1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(148, 163, 184, 0.08)',
                background: 'rgba(11, 15, 25, 0.64)',
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Example
              </p>
              <p
                style={{
                  margin: '0.9rem 0 0',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.15rem',
                  lineHeight: 1.6,
                }}
              >
                &quot;What is the recipe for an iron pickaxe?&quot;
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
