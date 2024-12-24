interface GlassCardProps {
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const GlassCard = ({ title, description, className = '', style, children }: GlassCardProps) => (
  <div 
    className={`glass-card p-8 rounded-xl transition-all duration-500 hover:scale-105 backdrop-blur-lg bg-white/10 ${className}`}
    style={style}
  >
    {children}
    <h3 className="text-xl font-montserrat font-bold text-white mb-4">
      {title}
    </h3>
    <p className="text-white/90 leading-relaxed">
      {description}
    </p>
  </div>
);
