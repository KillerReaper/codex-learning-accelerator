import { Link } from 'react-router-dom';

function CtaSection() {
  return (
    <section className="cta-section">
      <div className="cta-copy">
        <span className="section-tag">Start Now</span>
        <h2>Experience Nexis in Action</h2>
        <p>
          Try Nexis through a focused demo that showcases how voice-first memory works
          in a real gameplay scenario.
        </p>
      </div>

      <Link className="button button-primary" to="/minecraft">
        Launch Demo
      </Link>
    </section>
  );
}

export default CtaSection;
