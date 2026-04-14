import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <div className="eyebrow">Multi-game voice memory</div>
        <h1>Your AI Memory for Every Game</h1>
        <p>
          Nexis listens, understands, and remembers what you do in-game - so you
          never lose track of items, progress, or decisions.
        </p>

        <div className="hero-actions">
          <Link className="button button-primary" to="/minecraft">
            Start Voice Tracking
          </Link>
          <a className="button button-secondary" href="#overlay-preview">
            Watch Demo
          </a>
        </div>

        <p className="hero-note">
          Currently optimized for Minecraft, with support for more games coming soon.
        </p>
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
            <span className="metric-label">Tracked Actions</span>
            <strong>18</strong>
          </div>
          <div className="metric-card">
            <span className="metric-label">Stored Memories</span>
            <strong>42</strong>
          </div>
          <div className="metric-card accent">
            <span className="metric-label">Games Ready</span>
            <strong>Growing</strong>
          </div>
        </div>

        <div className="scan-card">
          <div>
            <p className="scan-title">Memory Feed</p>
            <p className="scan-subtitle">
              Stored from natural voice input and ready to recall across sessions
            </p>
          </div>

          <div className="scan-list">
            <span>"Marked the blue vault chest for rare loot"</span>
            <span>Saved</span>
            <span>"Stored medkits near the south gate"</span>
            <span>Remembered</span>
            <span>"What did I stash before the raid?"</span>
            <span>Answered</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
