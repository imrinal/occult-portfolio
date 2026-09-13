import React from 'react';
import { GlassCard } from '../layout/GlassCard';
import { ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import profileImage from '../../assets/profile.png';
import leoImage from '../../assets/leo.png';

export const About: React.FC = () => {
  return (
    <section id="about" className="w-full flex flex-col justify-center py-6 px-4 md:px-6 max-w-6xl mx-auto">
      
      {/* Section Header with increased logo size and balanced spacing gap */}
      <div className="text-center mb-6 shrink-0 flex flex-col items-center">
        <div className="inline-flex items-center justify-center gap-4 mb-3">
          <img 
            src={leoImage} 
            alt="Leo Logo" 
            className="w-14 h-14 md:w-14 md:h-14 object-contain drop-shadow-[0_0_12px_rgba(16,185,129,0.6)] shrink-0" 
          />
          <div className="text-left">
            <h2 className="text-[11px] uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400 font-semibold mb-0.5">
              Identity & Core Architecture
            </h2>
            <h3 className="text-2xl md:text-3xl font-brand font-bold text-slate-900 dark:text-silver-100 tracking-wide">
              Who I Am & What Drives Me
            </h3>
          </div>
        </div>
      </div>

      {/* Main Content Wrapper */}
      <div className="flex flex-col gap-3 pb-16">
        
        {/* Top Grid: Left Side (Bio + Social Strip matching Right Height) & Right Side (Photo) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          
          {/* Left Column: Personal Bio + Social Strip Stacked to Match Right Photo Height */}
          <div className="lg:col-span-8 flex flex-col justify-between h-full gap-3">
            
            {/* Bio Container with a single subtle logo/icon on the left of the greeting */}
            <GlassCard className="p-5 md:p-6 flex flex-col justify-center border-emerald-500/20 bg-white/40 dark:bg-black/40 backdrop-blur-2xl relative overflow-hidden flex-1">
              
              <div className="absolute -right-20 -top-20 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Single clean icon logo on the left of the greeting */}
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 shadow-sm">
                  <Sparkles size={20} />
                </div>
                <h4 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-silver-100 tracking-tight">
                  Hey guys! 👋
                </h4>
              </div>

              <p className="text-base md:text-lg font-light text-slate-700 dark:text-silver-300 leading-relaxed">
                Myself <span className="font-semibold text-emerald-600 dark:text-emerald-400">Mrinal Paul</span>. I am a tech enthusiast currently pursuing my <span className="text-slate-900 dark:text-silver-100 font-medium">B.Tech CSE Software Engineering</span> degree. As a final year student deeply fascinated by how <span className="text-emerald-600 dark:text-emerald-400 font-medium">Artificial Intelligence</span> and code can solve real-world problems, I am constantly exploring the edge of technology. When I am not building full-stack applications or researching machine learning architectures, you will find me leading tech communities, organizing hackathons, or reviewing academic papers as an official peer reviewer for <span className="text-gold-500 font-medium">IEEE Access</span>. I love turning bold ideas into reality and collaborating with fellow creators!
              </p>
            </GlassCard>

            {/* Social Links Strip placed below Bio with clean styling */}
            <GlassCard className="w-full border-emerald-500/20 bg-white/40 dark:bg-black/40 backdrop-blur-2xl py-3 px-4 shrink-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center divide-y md:divide-y-0 md:divide-x divide-slate-200/50 dark:divide-white/10">
                
                {/* LinkedIn Link */}
                <a 
                  href="https://www.linkedin.com/in/mrinalpaul12/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-1.5 md:py-0 group cursor-pointer"
                >
                  <div className="p-2 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 group-hover:scale-110 transition-transform">
                    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect width="4" height="12" x="2" y="9"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold font-brand text-slate-900 dark:text-silver-100 group-hover:text-emerald-500 transition-colors">LinkedIn</span>
                      <ExternalLink size={12} className="text-slate-400" />
                    </div>
                    <p className="text-xs text-slate-500 dark:text-silver-300 font-medium">11,633 followers</p>
                  </div>
                </a>
                
                {/* Instagram Link */}
                <a 
                  href="https://www.instagram.com/mrinal.paul_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-1.5 md:py-0 group cursor-pointer"
                >
                  <div className="p-2 rounded-xl bg-pink-500/10 text-pink-600 dark:text-pink-400 group-hover:scale-110 transition-transform">
                    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold font-brand text-slate-900 dark:text-silver-100 group-hover:text-emerald-500 transition-colors">Instagram</span>
                      <ExternalLink size={12} className="text-slate-400" />
                    </div>
                    <p className="text-xs text-slate-500 dark:text-silver-300 font-medium">@mrinal.paul_</p>
                  </div>
                </a>

              </div>
            </GlassCard>

          </div>

          {/* Right Column: Photo Frame matching total height of left side */}
          <div className="lg:col-span-4 flex flex-col h-full">
            <GlassCard className="p-2 h-full border-emerald-500/30 bg-white/40 dark:bg-black/50 backdrop-blur-2xl flex flex-col justify-between relative overflow-hidden shadow-2xl">
              
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent z-10 pointer-events-none" />

              {/* Photo Container using module import */}
              <div className="relative w-full flex-1 min-h-[380px] lg:min-h-[440px] rounded-xl overflow-hidden border border-white/20 dark:border-emerald-500/30">
                <img 
                  src={profileImage} 
                  alt="Mrinal Paul - Occult Tech Architect"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Floating Verified Badge */}
                <div className="absolute bottom-2 left-2 right-2 z-20 flex items-center justify-between p-2 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[10px] font-semibold text-silver-100 tracking-wider uppercase">Mrinal Paul</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-400 text-[10px] font-medium bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/40">
                    <ShieldCheck size={12} className="fill-emerald-500/30" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>

              {/* Footer Caption */}
              <div className="pt-1.5 px-1 pb-0.5 text-center shrink-0">
                <p className="text-[9px] text-slate-500 dark:text-silver-300 tracking-widest uppercase font-brand">
                  CS SE Undergrad • SRMIST
                </p>
              </div>
            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
};