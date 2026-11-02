import { useId } from 'react';

/**
 * Accessible form field: label is bound with htmlFor, errors/hints are wired
 * with aria-describedby, invalid state with aria-invalid.
 * Children is a render function receiving the props to spread on the control.
 */
export default function Field({ label, required, error, hint, children }) {
  const id = useId();
  const errId = `${id}-err`;
  const hintId = `${id}-hint`;
  const describedBy = [error && errId, hint && hintId].filter(Boolean).join(' ') || undefined;
  return (
    <div className="field">
      <label htmlFor={id}>
        {label}
        {required && <span className="req" aria-hidden="true">*</span>}
        {required && <span className="sr-only"> (obligatoire)</span>}
      </label>
      {children({
        id,
        'aria-invalid': error ? 'true' : undefined,
        'aria-describedby': describedBy,
        'aria-required': required ? 'true' : undefined,
      })}
      {hint && !error && <span id={hintId} className="hint">{hint}</span>}
      {error && <span id={errId} className="error" role="alert">{error}</span>}
    </div>
  );
}
