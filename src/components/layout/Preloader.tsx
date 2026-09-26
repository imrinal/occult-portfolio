import React, { useEffect, useState } from 'react';

export const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Locked for a full 3 seconds as requested
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setIsLoading(false), 800); // 800ms smooth fade out
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030303] transition-opacity duration-800 ease-in-out ${
        fadeOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Ambient Fluid Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-emerald-500/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-sky-500/10 rounded-full blur-[120px] animate-[spin_15s_linear_infinite]" />
      </div>

      {/* Massive Typographic Water-Fill Effect */}
      <div className="relative z-10 flex flex-col items-center select-none">
        
        {/* Background Ghost Text (Frosted Glass Outline) */}
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-brand font-black tracking-[0.2em] text-white/10 uppercase">
          MRINAL
        </h1>

        {/* Liquid Water-Fill Mask Text Overlay */}
        <div 
          className="absolute inset-0 flex items-center justify-center overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to top, black 100%, transparent 0%)',
            WebkitMaskImage: 'linear-gradient(to top, black 100%, transparent 0%)'
          }}
        >
          <h1 
            className="text-6xl sm:text-8xl md:text-9xl font-brand font-black tracking-[0.2em] uppercase bg-gradient-to-r from-emerald-400 via-teal-300 to-gold-400 bg-clip-text text-transparent animate-[liquidFill_3s_cubic-bezier(0.65,0,0.35,1)_forwards]"
            style={{
              backgroundSize: '200% 100%',
            }}
          >
            MRINAL
          </h1>
        </div>

        {/* Subtitle Status */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.6em] font-medium text-emerald-400/80 animate-pulse">
            Synthesizing Workspace
          </span>
        </div>

      </div>

      <style>{`
        @keyframes liquidFill {
          0% {
            clip-path: inset(100% 0 0 0);
            filter: brightness(0.5);
          }
          50% {
            filter: brightness(1.2);
          }
          100% {
            clip-path: inset(0 0 0 0);
            filter: brightness(1);
          }
        }
      `}</style>
    </div>
  );
};