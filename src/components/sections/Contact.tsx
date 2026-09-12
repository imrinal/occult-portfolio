import React from 'react';
import { GlassCard } from '../layout/GlassCard';
import { Mail, FileText, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-light tracking-widest uppercase bg-gradient-to-r from-emerald-600 to-gold-500 bg-clip-text text-transparent">
          06. Resume & Transmission (Contact)
        </h2>
      </div>

      <div id="resume" className="mb-12">
        <GlassCard className="p-8 text-center flex flex-col items-center">
          <FileText size={36} className="text-emerald-500 mb-4" />
          <h3 className="text-xl font-medium text-slate-900 dark:text-silver-100 mb-2">Curriculum Vitae</h3>
          <p className="text-slate-600 dark:text-silver-300 text-sm font-light max-w-md mb-6">
            Access the complete architectural document of technical proficiencies, research publications, and career milestones.
          </p>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-all shadow-lg shadow-emerald-600/20"
          >
            Download PDF Resume
          </a>
        </GlassCard>
      </div>

      <GlassCard className="p-8 md:p-12">
        <div className="text-center mb-8">
          <Mail size={32} className="mx-auto text-emerald-500 mb-2" />
          <h3 className="text-xl font-medium text-slate-900 dark:text-silver-100">Establish Connection</h3>
          <p className="text-slate-500 dark:text-silver-300 text-sm mt-1">Open for research collaborations, engineering roles, and technical discussions.</p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); alert("Transmission received successfully."); }} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Identifier / Name"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-silver-100 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <input
              type="email"
              placeholder="Your Frequency / Email"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-silver-100 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
          <textarea
            rows={4}
            placeholder="Your Transmission / Message"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-silver-100 text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-medium text-sm flex items-center justify-center space-x-2 transition-all shadow-lg shadow-emerald-600/20"
          >
            <span>Transmit Message</span>
            <Send size={16} />
          </button>
        </form>
      </GlassCard>
    </section>
  );
};