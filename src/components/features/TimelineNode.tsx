interface TimelineNodeProps {
  title: string;
  description: string;
  index: number;
}

export const TimelineNode = ({ title, description, index }: TimelineNodeProps) => (
  <div className="relative">
    {/* Connecting Line */}
    {index > 0 && (
      <div className="absolute -top-12 left-1/2 w-0.5 h-12 bg-gradient-to-b from-transparent via-white/50 to-white/50" />
    )}
    
    {/* Node Content */}
    <div 
      className="glass-card p-8 rounded-xl animate-fade-up backdrop-blur-lg bg-white/10"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <h3 className="text-xl font-montserrat font-bold text-white mb-4">
        {title}
      </h3>
      <p className="text-white/90 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);
