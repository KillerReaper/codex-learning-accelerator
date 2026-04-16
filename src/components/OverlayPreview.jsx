function OverlayPreview() {
  return (
    <section className="content-section" id="overlay-preview">
      <div className="section-heading">
        <span className="section-tag">Website Preview</span>
        <h2>A companion dashboard that stays in sync with what you say</h2>
        <p>
          Nexis speaks back while you play, and your information stays organized on the
          Nexis website for quick review whenever you need it.
        </p>
      </div>

      <div className="overlay-preview-card">
        <div className="overlay-window">
          <div className="overlay-topbar">
            <span className="overlay-pill active">Nexis Listening...</span>
            <span className="overlay-pill">Website Memory Synced</span>
          </div>

          <div className="overlay-feed">
            <div className="overlay-line positive">5 iron added to your session history</div>
            <div className="overlay-line">
              Blue vault chest marked for rare loot
            </div>
            <div className="overlay-line highlight">
              Ask Nexis for saved items, locations, and decisions anytime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OverlayPreview;
