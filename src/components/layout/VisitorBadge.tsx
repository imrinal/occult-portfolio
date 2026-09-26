import React, { useEffect, useState } from 'react';
import { Activity } from 'lucide-react';

export const VisitorBadge: React.FC = () => {
  const [count, setCount] = useState<number | null>(null);
  const BASE_OFFSET = 259; 

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const hasCountedSession = sessionStorage.getItem('portfolio_session_counted');
        
        let endpoint = 'https://api.counterapi.dev/v1/mrinal-portfolio/visits';
        
        if (!hasCountedSession) {
          endpoint = 'https://api.counterapi.dev/v1/mrinal-portfolio/visits/up';
          sessionStorage.setItem('portfolio_session_counted', 'true');
        }

        let response = await fetch(endpoint);
        
        // If the endpoint hasn't been initialized on CounterAPI yet, fetch/initialize it
        if (!response.ok) {
          response = await fetch('https://api.counterapi.dev/v1/mrinal-portfolio/visits');
          if (!response.ok) throw new Error("CounterAPI endpoint not initialized");
        }

        const data = await response.json();
        
        if (data && typeof data.count === 'number') {
          setCount(data.count + BASE_OFFSET);
        } else {
          setCount(BASE_OFFSET + 1);
        }
      } catch (error) {
        console.error("Failed to sync visitor count:", error);
        // Fallback local increment if offline or blocked by ad-blockers
        const local = parseInt(localStorage.getItem('fallback_visits') || '250', 10) + 1;
        localStorage.setItem('fallback_visits', local.toString());
        setCount(local);
      }
    };

    trackVisitor();
  }, []);

  return (
    // 'hidden md:flex' ensures it's hidden on mobile, but useEffect above still runs on all devices!
    <div className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/70 dark:bg-[#0a0a0a]/85 backdrop-blur-2xl border border-emerald-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-105 group pointer-events-auto">
      
      {/* Live Pulsing Indicator */}
      <div className="relative flex items-center justify-center w-2.5 h-2.5">
        <span className="absolute w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
        <span className="relative w-2 h-2 rounded-full bg-emerald-500" />
      </div>

      <div className="flex items-center gap-2">
        <Activity size={15} className="text-emerald-500 dark:text-emerald-400 transition-transform group-hover:rotate-12" />
        <div className="flex flex-col">
          <span className="text-[9px] uppercase tracking-wider font-semibold text-slate-400 dark:text-silver-400 leading-none">
            Live Traffic
          </span>
          <span className="text-xs font-bold font-mono text-slate-800 dark:text-silver-100 mt-0.5">
            {count !== null ? count.toLocaleString() : 'Syncing...'} <span className="text-[10px] font-normal text-emerald-500">visits</span>
          </span>
        </div>
      </div>
    </div>
  );
};