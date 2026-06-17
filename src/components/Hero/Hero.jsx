/**
 * Hero Component
 * 
 * Eye-catching hero section with animated gradient background,
 * compelling headline, and CTA to scroll to the calculator.
 */
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero" aria-label="Hero section">
      {/* Decorative floating shapes */}
      <div className="hero__shapes" aria-hidden="true">
        <div className="hero__shape hero__shape--1"></div>
        <div className="hero__shape hero__shape--2"></div>
        <div className="hero__shape hero__shape--3"></div>
      </div>

      <div className="hero__container container">
        <div className="hero__content">
          {/* Badge */}
          <div className="hero__badge animate-fade-in-up">
            <span className="hero__badge-dot"></span>
            Free Shopify Tool
          </div>

          {/* Headline */}
          <h1 className="hero__title animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Know Your <span className="hero__title-highlight">Profit</span>
            <br />Before You Sell
          </h1>

          {/* Subheadline */}
          <p className="hero__subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Calculate net profit, margins, and break-even ROAS for your Shopify products
            in seconds. Make data-driven decisions before launching or scaling your ads.
          </p>

          {/* CTA buttons */}
          <div className="hero__actions animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a href="#calculator" className="hero__cta hero__cta--primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <line x1="8" y1="6" x2="16" y2="6" />
                <line x1="8" y1="10" x2="10" y2="10" />
                <line x1="14" y1="10" x2="16" y2="10" />
                <line x1="8" y1="14" x2="10" y2="14" />
                <line x1="14" y1="14" x2="16" y2="14" />
                <line x1="8" y1="18" x2="16" y2="18" />
              </svg>
              Start Calculating
            </a>
            <a href="#tips" className="hero__cta hero__cta--secondary">
              Learn Profit Tips
            </a>
          </div>

          {/* Trust indicators */}
          <div className="hero__trust animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
            <div className="hero__trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
              100% Free
            </div>
            <div className="hero__trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
              No Sign-up
            </div>
            <div className="hero__trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
              Instant Results
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
