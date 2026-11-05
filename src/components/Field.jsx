import { useId } from 'react';
import { CheckCircle } from '@phosphor-icons/react';

/**
 * Accessible form field: label is bound with htmlFor, errors/hints are wired
 * with aria-describedby, invalid state with aria-invalid.
 * Optional `icon` sits inside the control (decorative, aria-hidden); `valid`
 * shows a check once the value is accepted. The check is visual only: the
 * field stays the source of truth for assistive tech.
 * Children is a render function receiving the props to spread on the control.
 */
export default function Field({ label, required, error, hint, icon: Icon, valid = false, children }) {
  const id = useId();
  const errId = `${id}-err`;
  const hintId = `${id}-hint`;
  const describedBy = [error && errId, hint && hintId].filter(Boolean).join(' ') || undefined;
  const showValid = valid && !error;
  return (
    <div className="field">
      <label htmlFor={id}>
        {label}
        {required && <span className="req" aria-hidden="true">*</span>}
        {required && <span className="sr-only"> (obligatoire)</span>}
      </label>
      <div className={`control${Icon ? ' has-icon' : ''}${showValid ? ' is-valid' : ''}`}>
        {Icon && <Icon className="control-icon" size={20} aria-hidden="true" />}
        {children({
          id,
          'aria-invalid': error ? 'true' : undefined,
          'aria-describedby': describedBy,
          'aria-required': required ? 'true' : undefined,
        })}
        {showValid && <CheckCircle className="control-valid" size={20} weight="fill" aria-hidden="true" />}
      </div>
      {hint && !error && <span id={hintId} className="hint">{hint}</span>}
      {error && <span id={errId} className="error" role="alert">{error}</span>}
    </div>
  );
}
