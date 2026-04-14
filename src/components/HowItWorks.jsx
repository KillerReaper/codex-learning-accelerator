const steps = [
  'Speak naturally while playing',
  'Nexis understands and stores item data',
  'Ask Nexis anything about your items',
];

function HowItWorks() {
  return (
    <section className="content-section">
      <div className="section-heading">
        <span className="section-tag">How It Works</span>
        <h2>A lightweight memory loop built for Minecraft</h2>
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
