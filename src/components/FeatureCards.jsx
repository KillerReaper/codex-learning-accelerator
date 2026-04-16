const features = [
  {
    title: 'Voice Tracking',
    description:
      'Speak naturally while playing and tell Nexis what matters as it builds your session memory.',
  },
  {
    title: 'Intent-Based Memory',
    description:
      'Nexis remembers what you tell it - from item locations to discoveries and decisions across your gameplay.',
  },
  {
    title: 'Ask Nexis',
    description: "Ask Nexis when you need it and get quick answers about your progress, items, or decisions.",
  },
  {
    title: 'Voice Response System',
    description:
      'Nexis responds through voice so you can stay focused on your game, while your information and history are available on the Nexis website.',
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
