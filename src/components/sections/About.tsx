import React, { useRef } from 'react';
import { GlassCard } from '../layout/GlassCard';
import { ScrollReveal } from '../layout/ScrollReveal';
import { ExternalLink } from 'lucide-react';

import profile1 from '../../assets/profile1.png';
import profile2 from '../../assets/profile2.png';

export const About: React.FC = () => {
  const bioRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  // Advanced Cursor Tracking Engine
  const handleMove = (e: React.MouseEvent<HTMLDivElement>, ref: React.RefObject<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--x', `${e.clientX - rect.left}px`);
    ref.current.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="about" className="w-full flex flex-col justify-center py-16 px-4 md:px-8 max-w-7xl mx-auto">
      
      {/* Vibe-Centric Heading */}
      <ScrollReveal className="text-center mb-10 shrink-0 flex flex-col items-center">
        <h2 className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-emerald-500 font-semibold mb-2">
          Behind The Code
        </h2>
        <h3 className="text-3xl md:text-5xl font-brand bg-gradient-to-r from-emerald-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent tracking-wide">
          THE ORIGIN STORY
        </h3>
      </ScrollReveal>

      <div className="flex flex-col gap-5 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Liquid Glass Bio */}
          <div className="lg:col-span-7 flex flex-col justify-center h-full gap-3">
            
            <ScrollReveal delay={100} className="flex flex-col">
              <div 
                ref={bioRef}
                onMouseMove={(e) => handleMove(e, bioRef)}
                className="group relative w-full h-full rounded-3xl"
              >
                <GlassCard className="p-6 md:p-8 flex flex-col justify-center w-full relative">
                  
                  {/* Subtle Liquid Glow Backdrop */}
                  <div className="absolute -left-32 -top-32 w-80 h-80 bg-[radial-gradient(circle,rgba(16,185,129,0.08)_0%,transparent_70%)] pointer-events-none" />

                  {/* Ultra-Subtle Golden Cursor Tracker (Inner Fill) */}
                  <div 
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0"
                    style={{ background: 'radial-gradient(400px circle at var(--x, 0) var(--y, 0), rgba(251,191,36,0.04), transparent 40%)' }}
                  />
                  
                  {/* Sleek Golden Cursor Tracker (Glowing Border) */}
                  <div 
                    className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-30"
                    style={{ 
                      background: 'radial-gradient(300px circle at var(--x, 0) var(--y, 0), rgba(251,191,36,0.3), transparent 40%) border-box',
                      border: '1px solid transparent',
                      WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude'
                    }}
                  />

                  <h4 className="text-2xl md:text-3xl font-medium text-slate-900 dark:text-silver-100 tracking-tight mb-4 relative z-10">
                    Hi, I'm <span className="font-brand bg-gradient-to-r from-emerald-400 to-gold-500 bg-clip-text text-transparent tracking-wider">MRINAL.</span>
                  </h4>

                  <div className="space-y-3 text-[14px] md:text-[15px] text-slate-700 dark:text-silver-300 leading-relaxed font-light relative z-10">
                    <p>
                      I'm a final-year Software Engineering student at <strong className="font-medium text-slate-900 dark:text-silver-100">SRMIST</strong>, originally from Asansol, West Bengal. Growing up, I loved coding to build cool things from scratch.
                    </p>
                    <p>
                      But university changed my perspective. I realized my true superpower isn't just writing code—it's <strong className="font-medium text-emerald-600 dark:text-emerald-400">team building, community development, and people management</strong>.
                    </p>
                    <p>
                      I thrive on connecting with people and working hard to create an impact. Genuine appreciation is my ultimate fuel. Off-screen, I love networking, sharing ideas, and giving a bit of <em className="italic text-slate-500 dark:text-silver-400">"Thoda bohot gyan"</em>.
                    </p>
                    <p>
                      Mostly, I'm always down for a classic <strong className="font-medium text-gold-500">Chai Pe Charcha</strong> to discuss anything under the sun!
                    </p>
                  </div>
                </GlassCard>
              </div>
            </ScrollReveal>

            {/* Social Links Ribbon */}
            <ScrollReveal delay={200}>
              <div 
                ref={socialRef}
                onMouseMove={(e) => handleMove(e, socialRef)}
                className="group relative w-full shrink-0 rounded-3xl"
              >
                <GlassCard className="w-full py-3 px-5 relative">
                  
                  {/* Ultra-Subtle Golden Cursor Tracker (Inner Fill) */}
                  <div 
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0"
                    style={{ background: 'radial-gradient(300px circle at var(--x, 0) var(--y, 0), rgba(251,191,36,0.04), transparent 40%)' }}
                  />
                  
                  {/* Sleek Golden Cursor Tracker (Glowing Border) */}
                  <div 
                    className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-30"
                    style={{ 
                      background: 'radial-gradient(200px circle at var(--x, 0) var(--y, 0), rgba(251,191,36,0.4), transparent 40%) border-box',
                      border: '1px solid transparent',
                      WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude'
                    }}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center divide-y md:divide-y-0 md:divide-x divide-slate-200/50 dark:divide-white/10 relative z-10">
                    
                    <a href="https://www.linkedin.com/in/mrinalpaul12/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2.5 py-1.5 md:py-0 group/link cursor-pointer">
                      <div className="text-sky-500 group-hover/link:scale-110 transition-transform">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                          <rect width="4" height="12" x="2" y="9"/>
                          <circle cx="4" cy="4" r="2"/>
                        </svg>
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-semibold text-slate-900 dark:text-silver-100 group-hover/link:text-sky-400 transition-colors">LinkedIn</span>
                          <ExternalLink size={12} className="text-slate-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>
                    </a>
                    
                    <a href="https://www.instagram.com/mrinal.paul_/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2.5 py-1.5 md:py-0 group/link cursor-pointer">
                      <div className="text-pink-500 group-hover/link:scale-110 transition-transform">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                        </svg>
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-semibold text-slate-900 dark:text-silver-100 group-hover/link:text-pink-400 transition-colors">Instagram</span>
                          <ExternalLink size={12} className="text-slate-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>
                    </a>

                  </div>
                </GlassCard>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Instagram-Style Tilted Collage */}
          <ScrollReveal delay={300} className="lg:col-span-5 flex items-center justify-center mt-6 lg:mt-0">
            <div 
              ref={imgRef}
              onMouseMove={(e) => handleMove(e, imgRef)}
              className="relative w-full max-w-[360px] aspect-square group mx-auto"
            >
              
              {/* Interactive Golden Ambient Glow that tracks the cursor behind the images! */}
              <div 
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 z-0"
                style={{ background: 'radial-gradient(200px circle at var(--x, 0) var(--y, 0), rgba(251,191,36,0.12), transparent 50%)' }}
              />

              {/* Back Image (profile2) - Pushed to Top Right */}
              <div className="absolute top-0 right-0 w-[58%] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/10 z-10 rotate-6 group-hover:rotate-12 group-hover:translate-x-3 group-hover:-translate-y-2 transition-all duration-700 ease-out pointer-events-none">
                <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay z-10"></div>
                <img 
                  src={profile2} 
                  alt="Mrinal Lifestyle" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Front Image (profile1) - Pushed to Bottom Left */}
              <div className="absolute bottom-0 left-0 w-[60%] aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/30 dark:border-white/15 z-20 -rotate-3 group-hover:-rotate-6 group-hover:-translate-x-3 group-hover:translate-y-2 transition-all duration-700 ease-out pointer-events-none">
                <img 
                  src={profile1} 
                  alt="Mrinal Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Static Default Glow (fades out when hover activates) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl z-0 transition-opacity duration-500 group-hover:opacity-0" />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};