import { PORTFOLIO_DATA } from '../../data';
import { GlassCard } from '../layout/GlassCard';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-light tracking-widest uppercase bg-gradient-to-r from-emerald-600 to-gold-500 bg-clip-text text-transparent">
          03. Timeline & Leadership
        </h2>
      </div>

      <div className="space-y-6">
        {PORTFOLIO_DATA.experience.map((exp, idx) => (
          <GlassCard key={idx} className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-silver-100">{exp.role}</h3>
                <p className="text-emerald-600 dark:text-emerald-400 text-sm">{exp.organization}</p>
              </div>
              <span className="mt-2 md:mt-0 text-xs tracking-wider uppercase px-3 py-1 rounded-full bg-emerald-500/10 text-gold-500 dark:text-gold-400 border border-gold-500/20 w-fit">
                {exp.period}
              </span>
            </div>
            <p className="text-slate-600 dark:text-silver-300 font-light text-sm leading-relaxed">
              {exp.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};