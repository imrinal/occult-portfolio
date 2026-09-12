import { PORTFOLIO_DATA } from '../../data';
import { GlassCard } from '../layout/GlassCard';

export const Education = () => {
  return (
    <section id="education" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-light tracking-widest uppercase bg-gradient-to-r from-emerald-600 to-gold-500 bg-clip-text text-transparent">
          05. Academic Foundation & Honors
        </h2>
      </div>

      <div className="space-y-6">
        <GlassCard className="p-6 md:p-8">
          <h3 className="text-lg font-medium text-slate-900 dark:text-silver-100">{PORTFOLIO_DATA.education.degree}</h3>
          <p className="text-emerald-600 dark:text-emerald-400 text-sm mt-1">{PORTFOLIO_DATA.education.institution}</p>
          <p className="text-slate-500 dark:text-silver-300 text-xs uppercase tracking-wider mt-2">{PORTFOLIO_DATA.education.timeline}</p>
          <p className="text-slate-600 dark:text-silver-300 text-sm font-light mt-4">{PORTFOLIO_DATA.education.details}</p>
        </GlassCard>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PORTFOLIO_DATA.certifications.map((cert, idx) => (
            <GlassCard key={idx} className="p-5 flex flex-col justify-between">
              <div>
                <span className="text-xs text-gold-500 dark:text-gold-400 uppercase tracking-widest">{cert.date}</span>
                <h4 className="text-sm font-medium text-slate-800 dark:text-silver-100 mt-2">{cert.title}</h4>
              </div>
              <p className="text-xs text-slate-500 dark:text-silver-300 mt-4 pt-3 border-t border-slate-200 dark:border-white/10">{cert.issuer}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};