import React from 'react';
import { GlassCard } from '../layout/GlassCard';
import { ScrollReveal } from '../layout/ScrollReveal';
import { 
  Terminal, Brain, Users, Layout, Database, Sparkles, Code2, 
  Cpu, Layers, Network, LineChart, FlaskConical, Workflow, 
  ShieldCheck, CpuIcon, Boxes, MessageSquare, Lightbulb
} from 'lucide-react';
import geminiImage from '../../assets/gemini.png';

interface Skill {
  name: string;
  logo?: string;
  lucide?: React.ElementType;
}

export const Skills: React.FC = () => {
  const rowOneCategories = [
    {
      title: "Core Programming & Architecture",
      icon: Terminal,
      skills: [
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "DSA", lucide: Code2 },
        { name: "OOPs", lucide: Boxes },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      ]
    },
    {
      title: "Web Engineering & UI",
      icon: Layout,
      skills: [
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
      ]
    },
    {
      title: "Databases & Management",
      icon: Database,
      skills: [
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Data Science", lucide: Database },
        { name: "BI Analyst Pipelines", lucide: Workflow },
        { name: "Statistical Mining", lucide: LineChart },
      ]
    }
  ];

  const rowTwoCategories = [
    {
      title: "AI, ML & Deep Learning",
      icon: Brain,
      skills: [
        { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "Keras", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
        { name: "Scikit-learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
        { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "OpenCV", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
        { name: "XGBoost", lucide: Network },
        { name: "LightGBM", lucide: Cpu },
        { name: "CNNs", lucide: CpuIcon },
        { name: "Random Forest", lucide: Layers },
        { name: "Ensemble Learning", lucide: Network },
        { name: "Predictive Modeling", lucide: LineChart },
      ]
    },
    {
      title: "Methodologies & Soft Skills",
      icon: Users,
      skills: [
        { name: "Hypothesis Testing", lucide: FlaskConical },
        { name: "Decision Intelligence", lucide: Lightbulb },
        { name: "Leadership", lucide: ShieldCheck },
        { name: "Community Building", lucide: Users },
        { name: "Team Collaboration", lucide: Users },
        { name: "Problem Solving", lucide: Code2 },
        { name: "Communication", lucide: MessageSquare },
        { name: "Rapid Learning", lucide: Sparkles },
        { name: "Prompt Engineering", lucide: Sparkles },
      ]
    }
  ];

  return (
    <section id="skills" className="w-full flex flex-col justify-center py-16 px-4 md:px-6 max-w-7xl mx-auto">
      
      <ScrollReveal className="text-center mb-10 shrink-0 flex flex-col items-center">
        <div className="inline-flex items-center justify-center gap-4 mb-3 group">
          <img 
            src={geminiImage} 
            alt="Gemini Logo"
            loading="lazy"
            decoding="async" 
            className="w-14 h-14 md:w-16 md:h-16 object-contain drop-shadow-[0_0_15px_rgba(250,204,21,0.65)] shrink-0 group-hover:scale-110 transition-transform duration-500" 
          />
          <div className="text-left">
            <h2 className="text-[11px] uppercase tracking-[0.3em] text-gold-500 font-semibold mb-0.5">
              Cognitive Arsenal & Tech Stack
            </h2>
            <h3 className="text-2xl md:text-3xl font-brand font-bold text-slate-900 dark:text-silver-100 tracking-wide">
              Neural Pathways & Capabilities
            </h3>
          </div>
        </div>
      </ScrollReveal>

      <div className="flex flex-col gap-5 pb-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rowOneCategories.map((category, idx) => {
            const CategoryIcon = category.icon;
            return (
              <ScrollReveal key={idx} delay={idx === 0 ? 0 : (idx === 1 ? 100 : 200)}>
                <GlassCard className="p-5 flex flex-col border-emerald-500/20 bg-white/40 dark:bg-black/40 backdrop-blur-lg relative overflow-hidden group h-full">
                  <div className="absolute -right-20 -top-20 w-48 h-48 bg-[radial-gradient(circle,rgba(16,185,129,0.12)_0%,transparent_70%)] opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-200/50 dark:border-white/10 relative z-10">
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                      <CategoryIcon size={20} />
                    </div>
                    <h4 className="text-lg font-bold font-brand text-slate-900 dark:text-silver-100 tracking-wide leading-snug">
                      {category.title}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2.5 relative z-10">
                    {category.skills.map((skill: Skill, skillIdx) => (
                      <div 
                        key={skillIdx}
                        className="group/skill flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/60 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(16,185,129,0.12)] transition-all duration-300 ease-out cursor-default"
                      >
                        <div className="w-4 h-4 flex items-center justify-center shrink-0">
                          {skill.logo ? (
                            <img 
                              src={skill.logo} 
                              alt={skill.name}
                              loading="lazy" 
                              className="w-full h-full object-contain group-hover/skill:scale-110 transition-transform duration-300 dark:invert-[0.8] dark:brightness-200" 
                            />
                          ) : skill.lucide ? (
                            <skill.lucide 
                              className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 group-hover/skill:scale-110 group-hover/skill:text-emerald-500 transition-all duration-300" 
                            />
                          ) : null}
                        </div>
                        
                        <span className="text-xs font-medium text-slate-700 dark:text-silver-300 group-hover/skill:text-emerald-700 dark:group-hover/skill:text-emerald-400 transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {rowTwoCategories.map((category, idx) => {
            const CategoryIcon = category.icon;
            return (
              <ScrollReveal key={idx} delay={idx === 0 ? 0 : 100}>
                <GlassCard className="p-5 flex flex-col border-emerald-500/20 bg-white/40 dark:bg-black/40 backdrop-blur-lg relative overflow-hidden group h-full">
                  <div className="absolute -right-20 -top-20 w-48 h-48 bg-[radial-gradient(circle,rgba(16,185,129,0.12)_0%,transparent_70%)] opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-200/50 dark:border-white/10 relative z-10">
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                      <CategoryIcon size={20} />
                    </div>
                    <h4 className="text-lg font-bold font-brand text-slate-900 dark:text-silver-100 tracking-wide leading-snug">
                      {category.title}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2.5 relative z-10">
                    {category.skills.map((skill: Skill, skillIdx) => (
                      <div 
                        key={skillIdx}
                        className="group/skill flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/60 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(16,185,129,0.12)] transition-all duration-300 ease-out cursor-default"
                      >
                        <div className="w-4 h-4 flex items-center justify-center shrink-0">
                          {skill.logo ? (
                            <img 
                              src={skill.logo} 
                              alt={skill.name}
                              loading="lazy" 
                              className="w-full h-full object-contain group-hover/skill:scale-110 transition-transform duration-300 dark:invert-[0.8] dark:brightness-200" 
                            />
                          ) : skill.lucide ? (
                            <skill.lucide 
                              className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 group-hover/skill:scale-110 group-hover/skill:text-emerald-500 transition-all duration-300" 
                            />
                          ) : null}
                        </div>
                        
                        <span className="text-xs font-medium text-slate-700 dark:text-silver-300 group-hover/skill:text-emerald-700 dark:group-hover/skill:text-emerald-400 transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};