const steps = [
  'Speak naturally while playing any game',
  'Nexis understands and stores important information',
  'Ask Nexis anything about your gameplay',
];

function HowItWorks() {
  return (
    <section className="content-section">
      <div className="section-heading">
        <span className="section-tag">How It Works</span>
        <h2>One voice-first workflow that scales across games</h2>
      </div>

      <div className="steps-grid">
        {steps.map((step, index) => (
          <div className="step-card" key={step}>
            <span className="step-number">{index + 1}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
