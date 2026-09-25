import React, { useRef } from 'react';
import deskHero from '../../assets/desk-hero.png';
import mobileHero from '../../assets/mobile-hero.png';
import { ScrollReveal } from '../layout/ScrollReveal';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Track cursor position for the golden spotlight over the Hero frame
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    heroRef.current.style.setProperty('--x', `${e.clientX - rect.left}px`);
    heroRef.current.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[100dvh] w-full flex flex-col p-4 md:pt-6 md:px-6 pb-28 md:pb-28 overflow-hidden bg-gradient-to-b from-emerald-100/80 via-slate-50 to-slate-200 dark:from-[#064e3b] dark:via-[#032216] dark:to-[#050505] transition-colors duration-500"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiIvPjwvc3ZnPg==')] opacity-30 dark:opacity-50 pointer-events-none" />

      <ScrollReveal className="relative z-10 flex flex-col h-full w-full max-w-7xl mx-auto flex-1 h-full">
        <div 
          ref={heroRef}
          onMouseMove={handleMouseMove}
          className="flex-1 w-full h-full rounded-[2rem] overflow-hidden border border-emerald-500/30 dark:border-emerald-500/20 bg-white/60 dark:bg-black/40 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-all duration-500 relative group cursor-crosshair"
        >
          
          {/* Cursor Tracking Spotlight (Inner Glow) */}
          <div 
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-20"
            style={{ background: 'radial-gradient(500px circle at var(--x, 0) var(--y, 0), rgba(251,191,36,0.15), transparent 40%)' }}
          />
          
          {/* Cursor Tracking Spotlight (Glowing Gold Border) */}
          <div 
            className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-30"
            style={{ 
              background: 'radial-gradient(400px circle at var(--x, 0) var(--y, 0), rgba(251,191,36,0.7), transparent 40%) border-box',
              border: '2px solid transparent',
              WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude'
            }}
          />

          <img 
            src={deskHero} 
            alt="Mrinal Paul - Occult Tech Architect Desktop Banner"
            fetchPriority="high"
            className="hidden md:block w-full h-full object-cover absolute inset-0 z-10"
          />
          
          <img 
            src={mobileHero} 
            alt="Mrinal Paul - Occult Tech Architect Mobile Banner"
            fetchPriority="high"
            className="block md:hidden w-full h-full object-cover absolute inset-0 z-10"
          />
          
        </div>
      </ScrollReveal>
    </section>
  );
};