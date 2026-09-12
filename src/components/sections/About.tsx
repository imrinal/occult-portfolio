import { PORTFOLIO_DATA } from '../../data';
import { GlassCard } from '../layout/GlassCard';

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-light tracking-widest uppercase bg-gradient-to-r from-emerald-600 to-gold-500 bg-clip-text text-transparent">
          01. The Architecture (About)
        </h2>
      </div>

      <GlassCard className="p-8 md:p-12">
        <p className="text-base md:text-lg text-slate-600 dark:text-silver-300 font-light leading-relaxed text-center md:text-left">
          {PORTFOLIO_DATA.personal.about}
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-slate-200 dark:border-white/10">
          <div className="text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Location</span>
            <p className="text-slate-800 dark:text-silver-100 font-medium mt-1">{PORTFOLIO_DATA.personal.location}</p>
          </div>
          <div className="text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Direct Comms</span>
            <p className="text-slate-800 dark:text-silver-100 font-medium mt-1">{PORTFOLIO_DATA.personal.email}</p>
          </div>
        </div>
      </GlassCard>
    </section>
  );
};