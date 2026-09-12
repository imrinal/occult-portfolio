import React from 'react';
import { GlassCard } from '../layout/GlassCard';
import { ShieldCheck, Award, Cpu, BookOpen } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="w-full flex flex-col justify-center py-6 px-4 md:px-6 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-4 shrink-0">
        <h2 className="text-[11px] uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400 font-semibold mb-1">
          Human Matrix & Core Philosophy
        </h2>
        <h3 className="text-2xl md:text-3xl font-brand font-brand font-bold text-slate-900 dark:text-silver-100 tracking-wide">
          Who I Am & What Drives Me
        </h3>
      </div>

      {/* Main Content Wrapper */}
      <div className="flex flex-col gap-3 pb-16">
        
        {/* Top Grid: Left Side (Bio + Role Strip matching Right Height) & Right Side (Photo) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          
          {/* Left Column: Personal Bio + Role Strip Stacked to Match Right Photo Height */}
          <div className="lg:col-span-8 flex flex-col justify-between h-full gap-3">
            
            {/* Bio Container */}
            <GlassCard className="p-5 md:p-6 flex flex-col justify-center border-emerald-500/20 bg-white/40 dark:bg-black/40 backdrop-blur-2xl relative overflow-hidden flex-1">
              
              <div className="absolute -right-20 -top-20 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <h4 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-silver-100 mb-2.5 tracking-tight">
                Hey guys! 👋
              </h4>

              <p className="text-base md:text-lg font-light text-slate-700 dark:text-silver-300 leading-relaxed">
                Myself <span className="font-semibold text-emerald-600 dark:text-emerald-400">Mrinal Paul</span>. I am a tech enthusiast currently pursuing my <span className="text-slate-900 dark:text-silver-100 font-medium">B.Tech CSE Software Engineering</span> degree. As a final year student deeply fascinated by how <span className="text-emerald-600 dark:text-emerald-400 font-medium">Artificial Intelligence</span> and code can solve real-world problems, I am constantly exploring the edge of technology. When I am not building full-stack applications or researching machine learning architectures, you will find me leading tech communities, organizing hackathons, or reviewing academic papers as an official peer reviewer for <span className="text-gold-500 font-medium">IEEE Access</span>. I love turning bold ideas into reality and collaborating with fellow creators!
              </p>
            </GlassCard>

            {/* Role Strip placed below Bio, with icons above writing and increased font size */}
            <GlassCard className="w-full border-emerald-500/20 bg-white/40 dark:bg-black/40 backdrop-blur-2xl py-3 px-4 shrink-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-center divide-y md:divide-y-0 md:divide-x divide-slate-200/50 dark:divide-white/10">
                
                <div className="flex flex-col items-center justify-center py-1.5 md:py-0">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-1.5 shadow-sm">
                    <Award size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-bold font-brand text-emerald-600 dark:text-emerald-400">President</h4>
                    <p className="text-xs text-slate-500 dark:text-silver-300 uppercase tracking-wider mt-0.5">GeeksforGeeks Club</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center justify-center py-1.5 md:py-0">
                  <div className="p-2 rounded-xl bg-gold-500/10 text-gold-500 mb-1.5 shadow-sm">
                    <BookOpen size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-bold font-brand text-gold-500">Peer Reviewer</h4>
                    <p className="text-xs text-slate-500 dark:text-silver-300 uppercase tracking-wider mt-0.5">IEEE Access</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center justify-center py-1.5 md:py-0">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 mb-1.5 shadow-sm">
                    <Cpu size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-bold font-brand text-emerald-500">Research Intern</h4>
                    <p className="text-xs text-slate-500 dark:text-silver-300 uppercase tracking-wider mt-0.5">IIT Kharagpur</p>
                  </div>
                </div>

              </div>
            </GlassCard>

          </div>

          {/* Right Column: Photo Frame matching total height of left side */}
          <div className="lg:col-span-4 flex flex-col h-full">
            <GlassCard className="p-2 h-full border-emerald-500/30 bg-white/40 dark:bg-black/50 backdrop-blur-2xl flex flex-col justify-between relative overflow-hidden shadow-2xl">
              
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent z-10 pointer-events-none" />

              {/* Photo Container */}
              <div className="relative w-full flex-1 min-h-[380px] lg:min-h-[440px] rounded-xl overflow-hidden border border-white/20 dark:border-emerald-500/30">
                <img 
                  src="/src/assets/profile.png" 
                  alt="Mrinal Paul"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Mrinal+Paul&background=041a10&color=34d399&size=600";
                  }}
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