/**
 * Calculator Component
 * 
 * Core calculator section that handles all input state,
 * validation, and live profit calculations.
 * 
 * Formulas:
 *   Revenue              = Selling Price
 *   Gateway Fee Amount    = (Selling Price × Gateway Fee %) / 100
 *   Total Cost            = Product Cost + Shipping + Marketing + Gateway Fee Amount
 *   Net Profit            = Revenue - Total Cost
 *   Profit Margin (%)     = (Net Profit / Revenue) × 100
 *   Break-Even ROAS       = Revenue / (Revenue - Net Profit)  →  i.e. Revenue / Total Cost
 */
import { useState, useMemo, useCallback } from 'react';
import InputField from '../InputField/InputField.jsx';
import ResultsPanel from '../ResultsPanel/ResultsPanel.jsx';
import './Calculator.css';

const Calculator = () => {
  // --- Input State ---
  const [inputs, setInputs] = useState({
    productCost: '',
    sellingPrice: '',
    shippingCost: '',
    gatewayFee: '',
    marketingCost: '',
  });

  // --- Validation Errors ---
  const [errors, setErrors] = useState({});

  /**
   * Validate a single field value.
   * Returns an error string or empty string if valid.
   */
  const validateField = useCallback((name, value) => {
    if (value === '') return '';
    const num = parseFloat(value);
    if (isNaN(num)) return 'Please enter a valid number';
    if (num < 0) return 'Value cannot be negative';
    // Gateway fee percentage cap
    if (name === 'gatewayFee' && num > 100) return 'Percentage cannot exceed 100%';
    return '';
  }, []);

  /**
   * Handle input changes — update state & validate in real-time.
   */
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setInputs((prev) => ({ ...prev, [name]: value }));

    // Real-time validation
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  }, [validateField]);

  /**
   * Memoized calculations — recalculated whenever inputs change.
   * Returns null if selling price is empty (no calculation to show).
   */
  const results = useMemo(() => {
    const productCost = parseFloat(inputs.productCost) || 0;
    const sellingPrice = parseFloat(inputs.sellingPrice) || 0;
    const shippingCost = parseFloat(inputs.shippingCost) || 0;
    const gatewayFee = parseFloat(inputs.gatewayFee) || 0;
    const marketingCost = parseFloat(inputs.marketingCost) || 0;

    // Don't show results if selling price is not set
    if (sellingPrice <= 0) return null;

    // Check if there are any validation errors
    const hasErrors = Object.values(errors).some((e) => e !== '' && e !== undefined);
    if (hasErrors) return null;

    const revenue = sellingPrice;
    const gatewayFeeAmount = (sellingPrice * gatewayFee) / 100;
    const totalCost = productCost + shippingCost + marketingCost + gatewayFeeAmount;
    const netProfit = revenue - totalCost;
    const profitMargin = (netProfit / revenue) * 100;
    // Break-Even ROAS = Revenue / Total Cost  (how much revenue per ₹1 of cost)
    const breakEvenRoas = totalCost > 0 ? revenue / totalCost : 0;

    return {
      revenue,
      gatewayFeeAmount,
      totalCost,
      netProfit,
      profitMargin,
      breakEvenRoas,
    };
  }, [inputs, errors]);

  /**
   * Reset all fields to defaults.
   */
  const handleReset = useCallback(() => {
    setInputs({
      productCost: '',
      sellingPrice: '',
      shippingCost: '',
      gatewayFee: '',
      marketingCost: '',
    });
    setErrors({});
  }, []);

  return (
    <section className="calculator" id="calculator" aria-label="Profit calculator">
      <div className="calculator__container container">
        {/* Section header */}
        <div className="calculator__header">
          <span className="calculator__badge">Calculator</span>
          <h2 className="calculator__title">Calculate Your Product Profitability</h2>
          <p className="calculator__description">
            Enter your product costs and pricing to instantly see your profit margins,
            net profit, and break-even ROAS.
          </p>
        </div>

        {/* Two-column layout: inputs + results */}
        <div className="calculator__grid">
          {/* Left: Input form */}
          <div className="calculator__form-card">
            <div className="calculator__form-header">
              <h3 className="calculator__form-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" />
                </svg>
                Enter Your Numbers
              </h3>
              <button
                type="button"
                className="calculator__reset-btn"
                onClick={handleReset}
                aria-label="Reset all fields"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                </svg>
                Reset
              </button>
            </div>

            {/* Input fields */}
            <form className="calculator__fields" onSubmit={(e) => e.preventDefault()}>
              <InputField
                id="productCost"
                label="Product Cost"
                value={inputs.productCost}
                onChange={handleChange}
                prefix="₹"
                placeholder="e.g. 200"
                error={errors.productCost}
                helperText="Your cost to source or manufacture the product"
              />

              <InputField
                id="sellingPrice"
                label="Selling Price"
                value={inputs.sellingPrice}
                onChange={handleChange}
                prefix="₹"
                placeholder="e.g. 599"
                error={errors.sellingPrice}
                helperText="The price customers pay on your store"
              />

              <InputField
                id="shippingCost"
                label="Shipping Cost"
                value={inputs.shippingCost}
                onChange={handleChange}
                prefix="₹"
                placeholder="e.g. 50"
                error={errors.shippingCost}
                helperText="Cost per order for shipping & handling"
              />

              <InputField
                id="gatewayFee"
                label="Payment Gateway Fee"
                value={inputs.gatewayFee}
                onChange={handleChange}
                suffix="%"
                placeholder="e.g. 2"
                error={errors.gatewayFee}
                helperText="Razorpay / Stripe charges (typically 2-3%)"
              />

              <InputField
                id="marketingCost"
                label="Marketing Cost"
                value={inputs.marketingCost}
                onChange={handleChange}
                prefix="₹"
                placeholder="e.g. 80"
                error={errors.marketingCost}
                helperText="Ad spend per unit (Facebook, Google, etc.)"
              />
            </form>
          </div>

          {/* Right: Results panel */}
          <ResultsPanel results={results} />
        </div>
      </div>
    </section>
  );
};

export default Calculator;
