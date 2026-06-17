/**
 * ProfitTips Component
 * 
 * Educational section with actionable profit tips for
 * Shopify store owners, displayed as visually appealing tip cards.
 */
import './ProfitTips.css';

/* Tip data with icons and descriptions */
const tips = [
  {
    id: 'tip-1',
    icon: '📊',
    title: 'Target 30%+ Margins',
    description: 'Healthy margins are generally above 30%. This buffer covers unexpected costs and allows reinvestment into growth.',
  },
  {
    id: 'tip-2',
    icon: '📦',
    title: 'Factor in Shipping',
    description: 'Include shipping costs in your pricing calculations. Hidden shipping expenses can silently erode your profit margins.',
  },
  {
    id: 'tip-3',
    icon: '💳',
    title: 'Track Gateway Charges',
    description: 'Track payment gateway charges carefully. Razorpay, Stripe, or PayPal fees (2-3%) add up fast at scale.',
  },
  {
    id: 'tip-4',
    icon: '📈',
    title: 'Monitor Ad Spend',
    description: 'Monitor advertising spend regularly. Set daily budgets and track cost-per-acquisition to maintain profitable campaigns.',
  },
  {
    id: 'tip-5',
    icon: '🔍',
    title: 'Review Before Scaling',
    description: 'Review profitability before scaling campaigns. A product that breaks even at low volume may lose money at high ad spend.',
  },
];

const ProfitTips = () => {
  return (
    <section className="tips" id="tips" aria-label="Shopify profit tips">
      <div className="tips__container container">
        {/* Section header */}
        <div className="tips__header">
          <span className="tips__badge">Pro Advice</span>
          <h2 className="tips__title">Shopify Profit Tips</h2>
          <p className="tips__description">
            Essential strategies every Shopify store owner should follow
            to maximize profitability and grow sustainably.
          </p>
        </div>

        {/* Tips grid */}
        <div className="tips__grid">
          {tips.map((tip, index) => (
            <article
              key={tip.id}
              className="tip-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              aria-labelledby={`${tip.id}-title`}
            >
              <span className="tip-card__icon" aria-hidden="true">{tip.icon}</span>
              <h3 className="tip-card__title" id={`${tip.id}-title`}>{tip.title}</h3>
              <p className="tip-card__description">{tip.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfitTips;
