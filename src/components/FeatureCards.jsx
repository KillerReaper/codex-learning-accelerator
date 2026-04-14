const features = [
  {
    title: 'Voice Tracking',
    description:
      'Speak naturally while playing and Nexis will track your items automatically.',
  },
  {
    title: 'Smart Memory',
    description:
      'Nexis remembers where your items are stored, including chests, shulker boxes, and locations.',
  },
  {
    title: 'Ask Nexis',
    description: "Ask questions like 'Where are my diamonds?' and get instant answers.",
  },
  {
    title: 'Overlay + Voice Output',
    description: 'Get responses as on-screen overlays or spoken feedback in real time.',
  },
];

function FeatureCards() {
  return (
    <section className="content-section" id="features">
      <div className="section-heading">
        <span className="section-tag">Features</span>
        <h2>Built to remember the details you do not want to lose mid-session</h2>
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
