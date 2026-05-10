export default function OrbitIcon({ className = "w-8 h-8" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 56 56" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="28" cy="28" r="18" fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1"/>
      <path d="M28 10 A18 18 0 0 1 46 28" fill="none" stroke="#C4341A" strokeWidth="3" strokeLinecap="round"/>
      <path d="M46 28 A18 18 0 0 1 28 46" fill="none" stroke="#C4341A" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
      <path d="M28 10 A18 18 0 0 0 10 28" fill="none" stroke="#C4341A" strokeWidth="3" strokeLinecap="round" opacity="0.3"/>
      <circle cx="28" cy="28" r="4" fill="#C4341A"/>
      <circle cx="28" cy="10" r="3" fill="currentColor"/>
    </svg>
  );
}
