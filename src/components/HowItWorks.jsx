const steps = [
  'Speak naturally while playing any game',
  'Tell Nexis what matters and let it save your memory',
  'Ask Nexis anything when you need it',
];

function HowItWorks() {
  return (
    <section className="content-section">
      <div className="section-heading">
        <span className="section-tag">How It Works</span>
        <h2>One voice-first workflow that fits naturally into any session</h2>
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
