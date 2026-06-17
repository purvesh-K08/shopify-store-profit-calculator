/**
 * Footer Component
 * 
 * Professional footer displaying developer info (Purvesh Khandare),
 * contact email, and the mandatory "Built for Digital Heroes" button.
 */
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container container">
        {/* Top section — brand & links */}
        <div className="footer__top">
          {/* Brand column */}
          <div className="footer__brand-col">
            <div className="footer__brand">
              <span className="footer__logo" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="28" height="28" rx="8" fill="url(#footer-logo-grad)" />
                  <path d="M8 14.5L12 18.5L20 10.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="28" y2="28">
                      <stop stopColor="#00a67e" />
                      <stop offset="1" stopColor="#004c3f" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="footer__brand-name">ProfitCalc</span>
            </div>
            <p className="footer__tagline">
              A free Shopify profitability tool for smart store owners.
            </p>
          </div>

          {/* Quick links */}
          <div className="footer__links-col">
            <h4 className="footer__col-title">Quick Links</h4>
            <nav className="footer__links" aria-label="Footer navigation">
              <a href="#calculator" className="footer__link">Calculator</a>
              <a href="#results" className="footer__link">Results</a>
              <a href="#tips" className="footer__link">Profit Tips</a>
            </nav>
          </div>

          {/* Developer info — MANDATORY */}
          <div className="footer__dev-col">
            <h4 className="footer__col-title">Developer</h4>
            <div className="footer__dev-info">
              <p className="footer__dev-name">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
                Purvesh Khandare
              </p>
              <a
                href="mailto:purveshkhandare083@gmail.com"
                className="footer__dev-email"
                aria-label="Email Purvesh Khandare"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
                purveshkhandare083@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer__divider"></div>

        {/* Bottom section */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Shopify Profit Calculator. All rights reserved.
          </p>

          {/* Digital Heroes CTA — MANDATORY */}
          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__dh-btn"
            aria-label="Visit Digital Heroes website (opens in new tab)"
          >
            <span className="footer__dh-btn-glow" aria-hidden="true"></span>
            Built for Digital Heroes
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
