import { Link } from 'react-router-dom';

function CtaSection() {
  return (
    <section className="cta-section">
      <div>
        <span className="section-tag">Start Now</span>
        <h2>Start building a voice memory layer for every session</h2>
      </div>

      <Link className="button button-primary" to="/minecraft">
        Start Voice Tracking
      </Link>
    </section>
  );
}

export default CtaSection;
