export default function Pill({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-mono font-medium ${className}`}
      style={{
        background: 'var(--surface-strong)',
        border: '1px solid var(--border)',
        color: 'var(--text-dim)',
      }}
    >
      {children}
    </span>
  );
}
