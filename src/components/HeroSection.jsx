import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <div className="eyebrow">Text and voice AI platform</div>
        <h1>Your AI Memory for Every Game</h1>
        <p>
          Nexis understands and remembers your gameplay using AI through text or
          voice—helping you keep track of progress, items, and decisions as you play.
          Just type or say &quot;Hey Nexis...&quot; to tell Nexis what matters.
        </p>
        <p>Voice support is included, but the demo uses text input for consistency.</p>

        <div className="hero-actions">
          <Link className="button button-primary" to="/minecraft">
            Start Demo
          </Link>
          <a className="button button-secondary" href="#overlay-preview">
            Explore Demo
          </a>
        </div>

      </div>

      <div className="hero-panel">
        <div className="hero-panel-header">
          <span className="status-dot" />
          <span>Voice Session Active</span>
          <button type="button" className="mic-button" aria-label="Microphone preview">
            <span className="mic-stem" />
            <span className="mic-base" />
          </button>
        </div>

        <div className="hero-grid">
          <div className="metric-card">
            <span className="metric-label">Captured Notes</span>
            <strong>18</strong>
          </div>
          <div className="metric-card">
            <span className="metric-label">Saved Memories</span>
            <strong>42</strong>
          </div>
          <div className="metric-card accent">
            <span className="metric-label">Games Ready</span>
            <strong>Growing</strong>
          </div>
        </div>

        <div className="scan-card">
          <div>
            <p className="scan-title">Assistant History</p>
            <p className="scan-subtitle">
              Built from what you tell Nexis and ready to review on the website
            </p>
          </div>

          <div className="scan-list">
            <span>&quot;Hey Nexis, remember the blue vault chest has rare loot&quot;</span>
            <span>Saved</span>
            <span>&quot;I stored medkits near the south gate&quot;</span>
            <span>Remembered</span>
            <span>&quot;What did I stash before the raid?&quot;</span>
            <span>Answered</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
