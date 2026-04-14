import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function MinecraftPage() {
  return (
    <div className="page">
      <Navbar />

      <main className="shell minecraft-page">
        <div className="placeholder-card">
          <span className="section-tag">Minecraft</span>
          <h1>Voice tracking workspace coming soon</h1>
          <p>
            This placeholder route is ready for the next step when you want to build out
            Nexis voice memory, saved item locations, and in-game responses.
          </p>
          <Link className="button button-primary" to="/">
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default MinecraftPage;
