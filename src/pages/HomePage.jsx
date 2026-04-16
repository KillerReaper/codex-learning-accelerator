import CtaSection from '../components/CtaSection';
import FeatureCards from '../components/FeatureCards';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import Navbar from '../components/Navbar';
import OverlayPreview from '../components/OverlayPreview';

function HomePage() {
  return (
    <div className="page page-home">
      <div className="prototype-banner">
        <div className="shell prototype-banner-content">
          <span>
            This is a prototype demo of Nexis. The current experience showcases one
            supported game as an example.
          </span>
          <span className="prototype-banner-subtle">
            Additional games, deeper memory tools, and broader assistant workflows are planned.
          </span>
        </div>
      </div>

      <Navbar />

      <main className="shell page-content">
        <HeroSection />
        <CtaSection />
        <FeatureCards />
        <HowItWorks />
        <OverlayPreview />

        <section className="content-section">
          <div className="section-heading">
            <span className="section-tag">Demo Scope</span>
            <h2>What This Demo Shows</h2>
            <p>
              This prototype demonstrates how Nexis can remember gameplay details
              through voice input.
            </p>
          </div>

          <div className="info-card">
            <p>Speak naturally while playing, and Nexis will:</p>
            <ul className="info-list">
              <li>Remember actions, resources, and discoveries you call out</li>
              <li>Keep your running history organized on the Nexis website</li>
              <li>
                Help you stay focused on gameplay instead of managing information
              </li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <span className="section-tag">Platform Direction</span>
            <h2>Prototype Today, broader platform tomorrow</h2>
          </div>

          <div className="comparison-grid">
            <article className="comparison-card">
              <span className="comparison-label">Current</span>
              <ul className="info-list">
                <li>Voice-first assistant memory</li>
                <li>Web-based limitations</li>
              </ul>
            </article>

            <article className="comparison-card future">
              <span className="comparison-label">Future</span>
              <ul className="info-list">
                <li>Deeper memory automation</li>
                <li>Richer desktop companion workflows</li>
                <li>Expanded game-specific capabilities</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <span className="section-tag">Why Nexis Matters</span>
            <h2>Memory support changes how players stay in the flow</h2>
            <p>
              Players often lose track of items, resources, and progress in complex
              games.
            </p>
          </div>

          <div className="info-card">
            <p>
              Nexis removes that problem by acting as a real-time memory system,
              allowing players to focus on gameplay instead of managing information.
            </p>
          </div>
        </section>

        <p className="clarity-line">
          Voice is the primary interaction in this prototype, and the Nexis website is
          where your saved information and history live.
        </p>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
