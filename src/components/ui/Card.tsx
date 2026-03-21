import type { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverEffect?: boolean;
  glassmorphism?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card = ({ 
  children, 
  className = '', 
  hoverEffect = false,
  glassmorphism = true,
  padding = 'md',
  ...props 
}: CardProps) => {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const glasses = glassmorphism 
    ? 'bg-slate-800/40 backdrop-blur-md border border-slate-700/50 shadow-xl' 
    : 'bg-slate-800 border border-slate-700 shadow-lg';

  const hover = hoverEffect 
    ? 'hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-900/20 hover:border-purple-500/30 transition-all duration-300' 
    : '';

  return (
    <div 
      className={`rounded-2xl overflow-hidden ${glasses} ${hover} ${paddings[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
