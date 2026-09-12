import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      // Forces exactly 100vh viewport height. Features seamless gradient blending from royal green at the top down to absolute black/white for an effortless transition to the next section.
      className="relative h-[100dvh] w-full flex flex-col p-4 md:pt-6 md:px-6 pb-28 md:pb-28 overflow-hidden bg-gradient-to-b from-emerald-100/80 via-slate-50 to-slate-200 dark:from-[#064e3b] dark:via-[#032216] dark:to-[#050505] transition-colors duration-500"
    >
      {/* 1. The Dotted Universe Texture Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiIvPjwvc3ZnPg==')] opacity-30 dark:opacity-50 pointer-events-none" />

      {/* 2. Main Content Constraint Area */}
      <div className="relative z-10 flex flex-col h-full w-full max-w-7xl mx-auto">
        
        {/* 3. The Banner Container (Responsive swapping between desktop and mobile wallpapers with smooth glassmorphism edges) */}
        <div className="flex-1 w-full rounded-[2rem] overflow-hidden border border-emerald-500/30 dark:border-emerald-500/20 bg-white/60 dark:bg-black/40 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-all duration-500">
          
          {/* Desktop Banner - Automatically displays on md screens and up */}
          <img 
            src="/desk-hero.png"
            alt="Mrinal Paul - Occult Tech Architect"
            className="hidden md:block w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://placehold.co/1920x1080/041a10/34d399?text=Insert+desk-hero.png";
            }}
          />
          
          {/* Mobile Banner - Automatically displays on smaller screen sizes */}
          <img 
            src="/mobile-hero.png"
            alt="Mrinal Paul - Occult Tech Architect"
            className="block md:hidden w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://placehold.co/800x1200/041a10/34d399?text=Insert+mobile-hero.png";
            }}
          />
          
        </div>
      </div>
    </section>
  );
};
