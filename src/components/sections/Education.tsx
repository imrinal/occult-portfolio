import React from 'react';
import { GlassCard } from '../layout/GlassCard';
import { ScrollReveal } from '../layout/ScrollReveal';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import srmLogo from '../../assets/srm.jpeg';
import spsLogo from '../../assets/sps.png';
import svsLogo from '../../assets/svs.png';

export const Education: React.FC = () => {
  const educationList = [
    {
      id: 1,
      institution: "SRMIST",
      location: "Chennai, Tamil Nadu",
      degree: "B.Tech in CSE (Software Engineering)",
      period: "2023 – 2027",
      grade: "9.1 CGPA",
      logo: srmLogo
    },
    {
      id: 2,
      institution: "St. Patrick's H.S. School",
      location: "Asansol, West Bengal",
      degree: "12th Class, Higher Secondary",
      period: "2021 – 2023",
      grade: "86.25%",
      logo: spsLogo
    },
    {
      id: 3,
      institution: "St. Vincent's High School",
      location: "Asansol, West Bengal",
      degree: "10th Class, Secondary School",
      period: "2011 – 2021",
      grade: "85.4%",
      logo: svsLogo
    }
  ];

  return (
    <section id="education" className="w-full flex flex-col justify-center py-16 px-4 md:px-6 max-w-5xl mx-auto overflow-hidden">
      
      <ScrollReveal className="text-center mb-10 shrink-0 flex flex-col items-center">
        <div className="inline-flex items-center justify-center gap-4 mb-3 group">
          <div className="p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 shadow-sm group-hover:scale-110 transition-transform duration-500">
            <GraduationCap size={28} />
          </div>
          <div className="text-left">
            <h2 className="text-[11px] uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400 font-semibold mb-0.5">
              Academic Foundation
            </h2>
            <h3 className="text-2xl md:text-3xl font-brand font-bold text-slate-900 dark:text-silver-100 tracking-wide">
              Educational Milestones
            </h3>
          </div>
        </div>
      </ScrollReveal>

      <div className="relative w-full max-w-3xl mx-auto mt-2">
        
        <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500/80 via-emerald-500/20 to-transparent rounded-full" />
        
        {educationList.map((edu, idx) => (
          <ScrollReveal key={edu.id} delay={idx === 0 ? 0 : 100} className="relative flex items-center justify-start w-full mb-8">
            
            <div className="absolute left-5 sm:left-6 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white dark:border-[#0a0a0a] shadow-[0_0_15px_rgba(16,185,129,0.8)] transform -translate-x-1/2 z-20 hover:scale-125 transition-transform duration-500" />

            <div className="w-full pl-12 sm:pl-16">
              <GlassCard className="w-full p-5 md:p-6 flex flex-col justify-between border-emerald-500/20 bg-white/60 dark:bg-black/40 backdrop-blur-lg overflow-hidden relative group shadow-md">
                
                <div className="absolute -right-20 -top-20 w-48 h-48 bg-[radial-gradient(circle,rgba(16,185,129,0.12)_0%,transparent_70%)] opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-3.5">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white p-1.5 shadow-sm shrink-0 border border-slate-200 dark:border-none flex items-center justify-center overflow-hidden transform group-hover:scale-110 transition-transform duration-500">
                        <img src={edu.logo} alt={edu.institution} loading="lazy" className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h4 className="text-base md:text-lg font-medium text-slate-900 dark:text-silver-100 font-brand leading-tight group-hover:text-emerald-500 transition-colors duration-300">
                          {edu.degree}
                        </h4>
                        <p className="text-xs md:text-sm font-medium text-emerald-600 dark:text-emerald-400 mt-1">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    <div className="bg-gold-500/10 border border-gold-500/30 px-3.5 py-1.5 rounded-xl flex items-center gap-1.5 shadow-sm self-start shrink-0 group-hover:-translate-y-0.5 transition-transform duration-300">
                      <Award size={16} className="text-gold-500" />
                      <span className="text-xs font-bold text-gold-600 dark:text-gold-400 font-brand whitespace-nowrap">{edu.grade}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 text-[10px] md:text-[11px] font-medium">
                    <div className="flex items-center gap-1.5 bg-white/60 dark:bg-white/5 text-slate-700 dark:text-silver-300 px-2.5 py-1 rounded-md border border-slate-200/60 dark:border-white/10">
                      <Calendar size={12} className="text-emerald-500" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/60 dark:bg-white/5 text-slate-700 dark:text-silver-300 px-2.5 py-1 rounded-md border border-slate-200/60 dark:border-white/10">
                      <MapPin size={12} className="text-emerald-500" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                </div>
              </GlassCard>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};