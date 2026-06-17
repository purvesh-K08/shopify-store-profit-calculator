/**
 * InputField Component
 * 
 * Reusable controlled input field with label, prefix/suffix,
 * validation, and animated focus states.
 * 
 * @param {string}   id          — Unique ID for the input (accessibility)
 * @param {string}   label       — Visible label text
 * @param {string}   value       — Controlled input value
 * @param {function} onChange     — Change handler
 * @param {string}   prefix      — Currency or other prefix (e.g., "₹")
 * @param {string}   suffix      — Suffix symbol (e.g., "%")
 * @param {string}   placeholder — Placeholder text
 * @param {string}   error       — Error message to display
 * @param {string}   helperText  — Optional helper text below the input
 */
import './InputField.css';

const InputField = ({
  id,
  label,
  value,
  onChange,
  prefix = '',
  suffix = '',
  placeholder = '0',
  error = '',
  helperText = '',
}) => {
  return (
    <div className={`input-field ${error ? 'input-field--error' : ''}`}>
      <label htmlFor={id} className="input-field__label">
        {label}
      </label>
      <div className="input-field__wrapper">
        {/* Prefix icon/symbol */}
        {prefix && (
          <span className="input-field__prefix" aria-hidden="true">
            {prefix}
          </span>
        )}

        <input
          type="number"
          id={id}
          name={id}
          className="input-field__input"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          min="0"
          step="any"
          aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
          aria-invalid={!!error}
        />

        {/* Suffix symbol */}
        {suffix && (
          <span className="input-field__suffix" aria-hidden="true">
            {suffix}
          </span>
        )}
      </div>

      {/* Error message */}
      {error && (
        <p className="input-field__error" id={`${id}-error`} role="alert">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          {error}
        </p>
      )}

      {/* Helper text */}
      {helperText && !error && (
        <p className="input-field__helper" id={`${id}-helper`}>
          {helperText}
        </p>
      )}
    </div>
  );
};

export default InputField;
