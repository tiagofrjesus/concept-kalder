export default function Logo({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect x="2" y="2" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M9 8 V24 M9 16 L22 8 M13 14 L22 24" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="22" y="14" width="4" height="4" fill="var(--accent)" />
    </svg>
  );
}
