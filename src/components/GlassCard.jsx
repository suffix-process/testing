const GlassCard = ({ children, className = '' }) => {
  return (
    <div className={`bg-white/80 backdrop-blur-lg rounded-xl border border-white/90 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
