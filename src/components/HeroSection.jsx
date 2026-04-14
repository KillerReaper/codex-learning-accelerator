import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <div className="eyebrow">Voice-powered AI companion</div>
        <h1>Your AI Memory for Minecraft</h1>
        <p>
          Nexis listens, understands, and remembers where your items are - so you
          never lose track again.
        </p>

        <div className="hero-actions">
          <Link className="button button-primary" to="/minecraft">
            Start Voice Tracking
          </Link>
          <a className="button button-secondary" href="#overlay-preview">
            View Demo
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
            <span className="metric-label">Voice Notes Today</span>
            <strong>18</strong>
          </div>
          <div className="metric-card">
            <span className="metric-label">Saved Locations</span>
            <strong>42</strong>
          </div>
          <div className="metric-card accent">
            <span className="metric-label">Quick Answers</span>
            <strong>Instant</strong>
          </div>
        </div>

        <div className="scan-card">
          <div>
            <p className="scan-title">Memory Feed</p>
            <p className="scan-subtitle">Stored from natural voice input and ready to recall</p>
          </div>

          <div className="scan-list">
            <span>"Put 5 diamonds in blue shulker"</span>
            <span>Saved</span>
            <span>"Coal is in the furnace chest"</span>
            <span>Remembered</span>
            <span>"Where are my rockets?"</span>
            <span>Answered</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
