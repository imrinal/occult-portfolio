import React, { useRef } from 'react';
import { GlassCard } from '../layout/GlassCard';
import { ScrollReveal } from '../layout/ScrollReveal';
import { Brain, Layout, Users, TerminalSquare } from 'lucide-react';

const skillDomains = [
  {
    title: "Core Engineering",
    icon: <TerminalSquare className="w-4 h-4 md:w-5 md:h-5" />,
    gradient: "from-emerald-500 to-teal-500",
    skills: [
      "Java", "Python", "C", "Data Structures", "Algorithms", 
      "Object-Oriented Programming", "MySQL", "MongoDB", "Problem Solving"
    ]
  },
  {
    title: "Web & UI Development",
    icon: <Layout className="w-4 h-4 md:w-5 md:h-5" />,
    gradient: "from-sky-500 to-blue-500",
    skills: [
      "React.js", "Tailwind CSS", "TypeScript", "JavaScript", 
      "HTML5", "CSS3", "Figma", "Canva", "Git", "GitHub"
    ]
  },
  {
    title: "AI & Data Science",
    icon: <Brain className="w-4 h-4 md:w-5 md:h-5" />,
    gradient: "from-purple-500 to-indigo-500",
    skills: [
      "Machine Learning", "Deep Learning", "TensorFlow", "Keras", 
      "CNNs", "OpenCV", "Scikit-learn", "XGBoost", "LightGBM", 
      "Pandas", "NumPy", "Predictive Modeling", "BI Pipelines"
    ]
  },
  {
    title: "Leadership & Strategy",
    icon: <Users className="w-4 h-4 md:w-5 md:h-5" />,
    gradient: "from-gold-500 to-orange-500",
    skills: [
      "Community Building", "Leadership", "Team Collaboration", 
      "Prompt Engineering", "Decision Intelligence", "Rapid Learning", "Communication"
    ]
  }
];

const SkillCard = ({ domain, delay }: { domain: typeof skillDomains[0], delay: number }) => {
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
        className="group relative w-full h-full rounded-2xl md:rounded-3xl"
      >
        <GlassCard className="p-4 md:p-6 h-full flex flex-col relative overflow-hidden">
          
          {/* Subtle Domain Color Glow Backdrop */}
          <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${domain.gradient} opacity-5 blur-[80px] pointer-events-none transition-opacity duration-500 group-hover:opacity-15`} />

          {/* Golden Cursor Tracker (Inner Fill) */}
          <div 
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0"
            style={{ background: 'radial-gradient(400px circle at var(--x, 0) var(--y, 0), rgba(251,191,36,0.15), transparent 40%)' }}
          />
          
          {/* Sleek Golden Cursor Tracker (Glowing Border) */}
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

          <div className="relative z-10">
            <div className="flex items-center gap-2.5 mb-4">
              <div className={`p-2 rounded-xl bg-gradient-to-br ${domain.gradient} bg-opacity-10 text-white shadow-lg`}>
                {domain.icon}
              </div>
              <h4 className="text-lg md:text-xl font-medium tracking-tight text-slate-900 dark:text-silver-100">
                {domain.title}
              </h4>
            </div>

            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {domain.skills.map((skill, i) => (
                <span 
                  key={i}
                  className="px-2.5 py-1 text-[11px] md:text-[13px] font-medium rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 text-slate-700 dark:text-silver-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 cursor-default hover:bg-white/80 hover:text-emerald-600 hover:border-emerald-500/40 hover:shadow-[0_4px_12px_rgba(16,185,129,0.15)] dark:hover:bg-white/10 dark:hover:text-gold-400 dark:hover:border-gold-500/40 dark:hover:shadow-[0_4px_12px_rgba(251,191,36,0.2)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </ScrollReveal>
  );
};

export const Skills: React.FC = () => {
  return (
    // 100dvh ensures full screen framing; pb-28 creates a cushion so the navbar doesn't cover content
    <section id="skills" className="relative w-full min-h-[100dvh] flex flex-col justify-center pt-12 pb-28 px-4 md:px-8 max-w-7xl mx-auto">
      
      <ScrollReveal className="text-center mb-8 shrink-0 flex flex-col items-center">
        <h2 className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold-500 font-semibold mb-2">
          Technical Competencies
        </h2>
        <h3 className="text-3xl md:text-5xl font-brand bg-gradient-to-r from-emerald-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent tracking-wide">
          MY SKILLS
        </h3>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
        {skillDomains.map((domain, index) => (
          <SkillCard 
            key={domain.title} 
            domain={domain} 
            delay={100 + (index * 100)} 
          />
        ))}
      </div>
      
    </section>
  );
};