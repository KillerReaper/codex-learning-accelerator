function OverlayPreview() {
  return (
    <section className="content-section" id="overlay-preview">
      <div className="section-heading">
        <span className="section-tag">Overlay Preview</span>
        <h2>In-game feedback that feels immediate and useful</h2>
        <p>
          Nexis can respond with compact overlay messages and optional voice output while
          keeping your stored item memory easy to query.
        </p>
      </div>

      <div className="overlay-preview-card">
        <div className="overlay-window">
          <div className="overlay-topbar">
            <span className="overlay-pill active">Nexis Active...</span>
            <span className="overlay-pill">Voice Memory Synced</span>
          </div>

          <div className="overlay-feed">
            <div className="overlay-line positive">+5 Iron Recorded</div>
            <div className="overlay-line">
              Stored in <strong>Furnace Chest</strong>
            </div>
            <div className="overlay-line highlight">
              Diamonds located in Blue Shulker (Ender Chest)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OverlayPreview;
