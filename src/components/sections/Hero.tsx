import React from 'react';
import deskHero from '../../assets/desk-hero.png';
import mobileHero from '../../assets/mobile-hero.png';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-[100dvh] w-full flex flex-col p-4 md:pt-6 md:px-6 pb-28 md:pb-28 overflow-hidden bg-gradient-to-b from-emerald-100/80 via-slate-50 to-slate-200 dark:from-[#064e3b] dark:via-[#032216] dark:to-[#050505] transition-colors duration-500"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiIvPjwvc3ZnPg==')] opacity-30 dark:opacity-50 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full w-full max-w-7xl mx-auto">
        <div className="flex-1 w-full rounded-[2rem] overflow-hidden border border-emerald-500/30 dark:border-emerald-500/20 bg-white/60 dark:bg-black/40 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-all duration-500">
          
          {/* Desktop Banner */}
          <img 
            src={deskHero} 
            alt="Mrinal Paul - Occult Tech Architect"
            className="hidden md:block w-full h-full object-cover"
          />
          
          {/* Mobile Banner */}
          <img 
            src={mobileHero} 
            alt="Mrinal Paul - Occult Tech Architect"
            className="block md:hidden w-full h-full object-cover"
          />
          
        </div>
      </div>
    </section>
  );
};
