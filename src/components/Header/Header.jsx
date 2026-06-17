/**
 * Header Component
 * 
 * Sticky navigation bar with the Shopify Profit Calculator branding
 * and a dark/light mode toggle with animated sun/moon icons.
 * 
 * @param {boolean}  isDarkMode     — Current theme state
 * @param {function} onToggleTheme  — Callback to toggle theme
 */
import './Header.css';

const Header = ({ isDarkMode, onToggleTheme }) => {
  return (
    <header className="header" role="banner">
      <div className="header__container container">
        {/* Brand logo & name */}
        <a href="#hero" className="header__brand" aria-label="Shopify Profit Calculator - Home">
          <span className="header__logo" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="28" height="28" rx="8" fill="url(#logo-grad)" />
              <path d="M8 14.5L12 18.5L20 10.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="logo-grad" x1="0" y1="0" x2="28" y2="28">
                  <stop stopColor="#00a67e" />
                  <stop offset="1" stopColor="#004c3f" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="header__title">ProfitCalc</span>
        </a>

        {/* Navigation links + theme toggle */}
        <div className="header__right">
          <nav className="header__nav" aria-label="Main navigation">
            <a href="#calculator" className="header__link">Calculator</a>
            <a href="#results" className="header__link">Results</a>
            <a href="#tips" className="header__link">Tips</a>
          </nav>

          {/* Dark/Light Mode Toggle */}
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className={`theme-toggle__icon ${isDarkMode ? 'theme-toggle__icon--hidden' : ''}`} aria-hidden="true">
              {/* Sun icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            </span>
            <span className={`theme-toggle__icon ${!isDarkMode ? 'theme-toggle__icon--hidden' : ''}`} aria-hidden="true">
              {/* Moon icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
