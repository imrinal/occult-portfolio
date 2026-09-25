import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className = '' }: GlassCardProps) => {
  return (
    <div className={`
      relative overflow-hidden
      bg-white/10 dark:bg-white/[0.03] 
      backdrop-blur-2xl border border-white/20 dark:border-white/10
      shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)]
      rounded-3xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
      hover:shadow-[0_12px_40px_0_rgba(16,185,129,0.15)] hover:-translate-y-1
      ${className}
    `}>
      {children}
    </div>
  );
};