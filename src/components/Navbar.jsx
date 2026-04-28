import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const gameItems = [
  { label: 'Minecraft', to: '/minecraft', available: true },
  { label: 'Arc Raiders', to: '#', available: false },
  { label: 'Delta Force', to: '#', available: false },
];

function Navbar({ language, setLanguage }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const languageDropdownRef = useRef(null);

  const languages = [
    { label: 'English', value: 'en' },
    { label: 'Español', value: 'es' },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }

      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target)
      ) {
        setIsLanguageDropdownOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
        setIsLanguageDropdownOpen(false);
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
              {language === 'en' ? 'Home' : 'Inicio'}
            </NavLink>

            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              to="/accessibility"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {language === 'en' ? 'Accessibility' : 'Accesibilidad'}
            </NavLink>

            <div className="dropdown" ref={dropdownRef}>
              <button
                type="button"
                className={`nav-link dropdown-trigger ${isDropdownOpen ? 'open' : ''}`}
                aria-expanded={isDropdownOpen}
                onClick={() => {
                  setIsDropdownOpen((open) => !open);
                  setIsLanguageDropdownOpen(false);
                }}
              >
                {language === 'en' ? 'Games' : 'Juegos'}
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
                      <span className="coming-soon">
                        {language === 'en' ? 'Coming Soon' : 'Próximamente'}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="dropdown" ref={languageDropdownRef}>
              <button
                type="button"
                className={`nav-link dropdown-trigger ${isLanguageDropdownOpen ? 'open' : ''}`}
                aria-expanded={isLanguageDropdownOpen}
                aria-label="Language options"
                onClick={() => {
                  setIsLanguageDropdownOpen((open) => !open);
                  setIsDropdownOpen(false);
                }}
              >
                {'\uD83C\uDF10'}
              </button>

              <div className={`dropdown-menu ${isLanguageDropdownOpen ? 'open' : ''}`}>
                {languages.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className="dropdown-item"
                    onClick={() => {
                      setLanguage(option.value);
                      setIsLanguageDropdownOpen(false);
                    }}
                    style={{
                      background:
                        option.value === language ? 'rgba(59, 130, 246, 0.12)' : 'transparent',
                      color:
                        option.value === language
                          ? 'var(--text-primary)'
                          : 'var(--text-secondary)',
                    }}
                  >
                    <span>{option.label}</span>
                    <span
                      style={{
                        color: option.value === language ? '#bfdbfe' : 'transparent',
                        fontWeight: 700,
                      }}
                    >
                      ✓
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
