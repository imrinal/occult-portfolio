import React from 'react';
import { GlassCard } from '../layout/GlassCard';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

// Local Logo Imports with exact lowercase matching your file system
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
      
      {/* Section Header */}
      <div className="text-center mb-10 shrink-0 flex flex-col items-center">
        <div className="inline-flex items-center justify-center gap-4 mb-3">
          <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 shadow-sm">
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
      </div>

      {/* Vertical Timeline with All Containers on the Right Side */}
      <div className="relative w-full max-w-3xl mx-auto mt-2">
        
        {/* The Vertical Line positioned on the left */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent rounded-full" />
        
        {educationList.map((edu) => (
          <div key={edu.id} className="relative flex items-center justify-start w-full mb-6">
            
            {/* Timeline Dot Node */}
            <div className="absolute left-6 w-3.5 h-3.5 rounded-full bg-emerald-500 border-4 border-white dark:border-[#0a0a0a] shadow-[0_0_10px_rgba(16,185,129,0.8)] transform -translate-x-1/2 z-20" />

            {/* Content Card Wrapper pushed to the Right */}
            <div className="w-full pl-14">
              <GlassCard className="w-full p-4 md:p-5 flex flex-col justify-between border-emerald-500/20 bg-white/60 dark:bg-black/40 backdrop-blur-3xl overflow-hidden relative group hover:border-emerald-500/50 transition-colors duration-300 shadow-md">
                
                {/* Background Glow */}
                <div className="absolute -right-20 -top-20 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/10 transition-all duration-700" />

                <div className="relative z-10">
                  
                  {/* Top: Logo, Degree, and Grade Badge */}
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white p-1 shadow-sm shrink-0 border border-slate-200 dark:border-none flex items-center justify-center overflow-hidden">
                        <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h4 className="text-sm md:text-base font-medium text-slate-900 dark:text-silver-100 font-brand leading-tight">
                          {edu.degree}
                        </h4>
                        <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mt-0.5">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    <div className="bg-gold-500/10 border border-gold-500/30 px-3 py-1 rounded-xl flex items-center gap-1.5 shadow-sm shrink-0">
                      <Award size={14} className="text-gold-500" />
                      <span className="text-xs font-bold text-gold-600 dark:text-gold-400 font-brand">{edu.grade}</span>
                    </div>
                  </div>

                  {/* Meta Details */}
                  <div className="flex flex-wrap items-center gap-2 text-[10px] md:text-[11px] font-medium">
                    <div className="flex items-center gap-1 bg-white/60 dark:bg-white/5 text-slate-700 dark:text-silver-300 px-2 py-0.5 rounded-md border border-slate-200/60 dark:border-white/10">
                      <Calendar size={11} className="text-emerald-500" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-white/60 dark:bg-white/5 text-slate-700 dark:text-silver-300 px-2 py-0.5 rounded-md border border-slate-200/60 dark:border-white/10">
                      <MapPin size={11} className="text-emerald-500" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                </div>
              </GlassCard>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};