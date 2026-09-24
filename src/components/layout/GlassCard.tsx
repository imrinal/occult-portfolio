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
      backdrop-blur-lg border border-white/20 dark:border-white/10
      shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]
      rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
      hover:shadow-[0_12px_40px_0_rgba(16,185,129,0.15)] hover:-translate-y-1
      ${className}
    `}>
      {children}
    </div>
  );
};