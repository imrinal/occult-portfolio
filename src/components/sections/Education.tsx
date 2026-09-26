import React, { useRef } from 'react';
import { GlassCard } from '../layout/GlassCard';
import { ScrollReveal } from '../layout/ScrollReveal';
import { MapPin, Calendar, Award } from 'lucide-react';

// Import your actual institution logos
import srmLogo from '../../assets/srm.jpeg';
import spsLogo from '../../assets/sps.png';
import svsLogo from '../../assets/svs.png';

const educationData = [
  {
    id: 1,
    degree: "B.Tech in CSE (Software Engineering)",
    institution: "SRM Institute of Science and Technology",
    date: "2023 - 2027",
    location: "Chennai, Tamil Nadu",
    description: "Specializing in Software Engineering, Advanced Data Structures, and AI. Actively involved in technical leadership and research.",
    marks: "CGPA: 9.09", 
    logo: srmLogo,
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    id: 2,
    degree: "Higher Secondary (ISC)",
    institution: "St. Patrick's Higher Secondary School",
    date: "Graduated 2023",
    location: "Asansol, West Bengal",
    description: "Completed 12th grade with a strong foundational focus in Physics, Chemistry, Mathematics, and Computer Science.",
    marks: "Score: 86.25%", 
    logo: spsLogo,
    gradient: "from-sky-500 to-blue-500"
  },
  {
    id: 3,
    degree: "Secondary Education (ICSE)",
    institution: "St. Vincent's High and Technical School",
    date: "Graduated 2021",
    location: "Asansol, West Bengal",
    description: "Completed 10th grade, establishing early fundamentals in analytical logic, science, and technical computing.",
    marks: "Score: 85.4%", 
    logo: svsLogo,
    gradient: "from-purple-500 to-indigo-500"
  }
];

const EduCard = ({ edu, delay }: { edu: typeof educationData[0], delay: 0 | 100 | 200 | 300 | 400 | 500 }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty('--x', `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  return (
    <ScrollReveal delay={delay} className="h-full">
      <div 
        ref={cardRef}
        onMouseMove={handleMove}
        className="group relative w-full h-full rounded-2xl md:rounded-3xl transition-transform duration-500 hover:-translate-y-2"
      >
        <GlassCard className="p-5 md:p-7 h-full flex flex-col relative overflow-hidden shadow-lg group-hover:shadow-2xl">
          
          <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${edu.gradient} opacity-5 blur-[80px] pointer-events-none transition-opacity duration-500 group-hover:opacity-20`} />

          {/* Golden Cursor Tracker */}
          <div 
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0"
            style={{ background: 'radial-gradient(400px circle at var(--x, 0) var(--y, 0), rgba(251,191,36,0.1), transparent 40%)' }}
          />
          <div 
            className="pointer-events-none absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-30"
            style={{ 
              background: 'radial-gradient(300px circle at var(--x, 0) var(--y, 0), rgba(251,191,36,0.8), transparent 40%) border-box',
              border: '1px solid transparent',
              WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude'
            }}
          />

          <div className="relative z-10 flex flex-col h-full">
            
            {/* Top Row: Institution Logo & Tags */}
            <div className="flex justify-between items-start mb-5">
              
              {/* Replaced Icon with actual Institution Logo */}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white p-1.5 shadow-md flex items-center justify-center shrink-0 border border-slate-200 dark:border-none transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 overflow-hidden">
                <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain" />
              </div>
              
              <div className="flex flex-col items-end gap-1.5 shrink-0">
                <span className="px-2.5 py-1 text-[9px] md:text-[10px] uppercase tracking-wider font-semibold rounded-md bg-white/60 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 text-slate-600 dark:text-silver-300 flex items-center gap-1.5 backdrop-blur-md">
                  <Calendar size={12} className="text-gold-500" />
                  {edu.date}
                </span>
                <span className="px-2.5 py-1 text-[9px] md:text-[10px] uppercase tracking-wider font-semibold rounded-md bg-white/60 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 text-slate-600 dark:text-silver-300 flex items-center gap-1.5 backdrop-blur-md">
                  <MapPin size={12} className="text-gold-500" />
                  {edu.location}
                </span>
              </div>
            </div>

            {/* Middle Row: Content */}
            <div className="flex-1 flex flex-col">
              <h4 className="text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-silver-100 font-brand group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors duration-300 leading-tight">
                {edu.degree}
              </h4>
              <p className="text-[13px] md:text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-2 mb-3">
                {edu.institution}
              </p>
              <p className="text-[13px] text-slate-700 dark:text-silver-300 leading-relaxed font-light flex-1">
                {edu.description}
              </p>
            </div>

            {/* Bottom Row: Marks/CGPA */}
            <div className="mt-5 pt-4 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between">
              
              {/* FIXED: Text color changed to highly visible slate-900 / white for maximum contrast */}
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest">
                <Award size={14} className="text-gold-500" />
                Score
              </div>
              
              <span className={`px-3 py-1 rounded-full text-[11px] md:text-xs font-bold bg-gradient-to-r ${edu.gradient} text-white shadow-md transform group-hover:scale-105 transition-transform duration-300`}>
                {edu.marks}
              </span>
            </div>

          </div>
        </GlassCard>
      </div>
    </ScrollReveal>
  );
};

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative w-full min-h-[100dvh] flex flex-col justify-center pt-12 pb-28 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-0">
      
      <ScrollReveal className="text-center mb-10 shrink-0 flex flex-col items-center">
        <h2 className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold-500 font-semibold mb-2">
          Academic Background
        </h2>
        <h3 className="text-3xl md:text-5xl font-brand font-bold bg-gradient-to-r from-emerald-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent tracking-wide">
          EDUCATION
        </h3>
      </ScrollReveal>

      {/* Grid precisely forces 3 columns on desktop so it isn't too lengthy */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6 w-full max-w-6xl mx-auto">
        {educationData.map((edu, index) => {
          const strictDelay = (100 + (index * 100)) as 0 | 100 | 200 | 300 | 400 | 500;
          return (
            <EduCard 
              key={edu.id} 
              edu={edu} 
              delay={strictDelay} 
            />
          );
        })}
      </div>
      
    </section>
  );
};