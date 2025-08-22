export const WoodCuttingIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 12L44 12L44 52L20 52L20 12Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M20 20L44 20" stroke="currentColor" strokeWidth="2"/>
    <path d="M20 28L44 28" stroke="currentColor" strokeWidth="2"/>
    <path d="M20 36L44 36" stroke="currentColor" strokeWidth="2"/>
    <path d="M20 44L44 44" stroke="currentColor" strokeWidth="2"/>
    <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M28 28L36 36" stroke="currentColor" strokeWidth="2"/>
    <path d="M36 28L28 36" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

export const StackedLogsIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bottom logs */}
    <ellipse cx="20" cy="40" rx="8" ry="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <ellipse cx="44" cy="40" rx="8" ry="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 40L52 40" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 36L52 36" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 44L52 44" stroke="currentColor" strokeWidth="2"/>
    
    {/* Top log */}
    <ellipse cx="32" cy="28" rx="12" ry="6" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M20 28L44 28" stroke="currentColor" strokeWidth="2"/>
    <path d="M20 22L44 22" stroke="currentColor" strokeWidth="2"/>
    <path d="M20 34L44 34" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

export const LoggingTruckIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Truck cab */}
    <rect x="8" y="32" width="16" height="12" stroke="currentColor" strokeWidth="2" fill="none"/>
    <rect x="10" y="34" width="4" height="3" stroke="currentColor" strokeWidth="1" fill="none"/>
    <rect x="18" y="34" width="4" height="3" stroke="currentColor" strokeWidth="1" fill="none"/>
    
    {/* Truck bed */}
    <rect x="24" y="36" width="24" height="8" stroke="currentColor" strokeWidth="2" fill="none"/>
    
    {/* Wheels */}
    <circle cx="16" cy="48" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="48" cy="48" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    
    {/* Logs on truck */}
    <ellipse cx="32" cy="40" rx="8" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <ellipse cx="32" cy="36" rx="6" ry="1.5" stroke="currentColor" strokeWidth="2" fill="none"/>
    <ellipse cx="32" cy="44" rx="6" ry="1.5" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
)

