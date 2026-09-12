import { PORTFOLIO_DATA } from '../../data';
import { GlassCard } from '../layout/GlassCard';
import { ExternalLink } from 'lucide-react';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-light tracking-widest uppercase bg-gradient-to-r from-emerald-600 to-gold-500 bg-clip-text text-transparent">
          04. Engineered Constructs (Projects)
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PORTFOLIO_DATA.projects.map((project, idx) => (
          <GlassCard key={idx} className="p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-medium text-slate-900 dark:text-silver-100">{project.name}</h3>
                <a href={project.link} className="text-emerald-500 hover:text-gold-400 transition-colors">
                  <ExternalLink size={18} />
                </a>
              </div>
              <p className="text-slate-600 dark:text-silver-300 text-sm font-light mb-6 leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-white/10">
              {project.tech.map((t, tIdx) => (
                <span key={tIdx} className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  {t}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};