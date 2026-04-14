const features = [
  {
    title: 'Voice Tracking',
    description:
      'Speak naturally while playing and Nexis tracks your actions automatically.',
  },
  {
    title: 'Smart Memory',
    description:
      'Nexis remembers items, locations, and decisions across your gameplay sessions.',
  },
  {
    title: 'Ask Nexis',
    description:
      "Ask questions like 'Where did I store my items?' or 'What did I collect earlier?'",
  },
  {
    title: 'Overlay + Voice Output',
    description: 'Get real-time feedback through on-screen overlays or spoken responses.',
  },
];

function FeatureCards() {
  return (
    <section className="content-section" id="features">
      <div className="section-heading">
        <span className="section-tag">Features</span>
        <h2>Designed as a scalable memory layer for the games you already play</h2>
      </div>

      <div className="feature-grid">
        {features.map((feature, index) => (
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
  );
}

export default FeatureCards;
