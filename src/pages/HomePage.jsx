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
      <Navbar />

      <main className="shell page-content">
        <HeroSection />
        <FeatureCards />
        <HowItWorks />
        <OverlayPreview />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
