import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className = '' }: GlassCardProps) => {
  return (
    <div className={`
      relative overflow-hidden
      bg-white/40 dark:bg-black/40 
      backdrop-blur-2xl border border-white/20 dark:border-white/10
      shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]
      rounded-2xl transition-all duration-500
      hover:shadow-[0_8px_32px_0_rgba(16,185,129,0.15)]
      ${className}
    `}>
      {children}
    </div>
  );
};