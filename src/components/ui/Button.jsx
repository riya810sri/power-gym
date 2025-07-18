export function Button({ children, className = "", ...props }) {
  return (
    <button 
      className={`cta-button font-medium hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
} 