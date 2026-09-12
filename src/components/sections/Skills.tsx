import { PORTFOLIO_DATA } from '../../data';
import { GlassCard } from '../layout/GlassCard';

export const Skills = () => {
  const skillCategories = [
    { title: "Languages", items: PORTFOLIO_DATA.skills.languages },
    { title: "Frameworks & Web", items: PORTFOLIO_DATA.skills.frameworks },
    { title: "AI & Data Science", items: PORTFOLIO_DATA.skills.ai_ml },
    { title: "Databases & Tools", items: [...PORTFOLIO_DATA.skills.databases, ...PORTFOLIO_DATA.skills.tools] },
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-light tracking-widest uppercase bg-gradient-to-r from-emerald-600 to-gold-500 bg-clip-text text-transparent">
          02. Technical Geometry (Skills)
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat, idx) => (
          <GlassCard key={idx} className="p-6">
            <h3 className="text-sm font-semibold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase mb-4">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/60 dark:bg-black/50 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-silver-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};