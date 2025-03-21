
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children,
  className
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={cn(
        "relative rounded-2xl bg-card border border-white/5 overflow-hidden transition-all duration-300",
        isHovered ? "shadow-[0_10px_30px_-10px_rgba(124,58,237,0.3)] scale-[1.02] border-primary/20" : "",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dynamic glow effect */}
      {isHovered && (
        <div 
          className="absolute inset-0 opacity-80 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.15), transparent 70%)`,
          }}
        />
      )}
      
      {/* Card content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedCard;
