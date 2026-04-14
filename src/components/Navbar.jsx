import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const gameItems = [
  { label: 'Minecraft', to: '/minecraft', available: true },
  { label: 'Arc Raiders', to: '#', available: false },
  { label: 'Delta Force', to: '#', available: false },
];

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="shell">
        <nav className="navbar">
          <Link className="brand" to="/">
            <span className="brand-mark">N</span>
            <span>Nexis</span>
          </Link>

          <button
            type="button"
            className="mobile-menu-button"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>

          <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>

            <div className="dropdown" ref={dropdownRef}>
              <button
                type="button"
                className={`nav-link dropdown-trigger ${isDropdownOpen ? 'open' : ''}`}
                aria-expanded={isDropdownOpen}
                onClick={() => setIsDropdownOpen((open) => !open)}
              >
                Games
              </button>

              <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
                {gameItems.map((item) =>
                  item.available ? (
                    <Link
                      key={item.label}
                      className="dropdown-item"
                      to={item.to}
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                    <div key={item.label} className="dropdown-item disabled" aria-disabled="true">
                      <span>{item.label}</span>
                      <span className="coming-soon">Coming Soon</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
