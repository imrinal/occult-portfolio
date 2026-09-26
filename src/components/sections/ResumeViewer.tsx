import React from 'react';
import { GlassCard } from '../layout/GlassCard';
import { ScrollReveal } from '../layout/ScrollReveal';
import { FileText, Download } from 'lucide-react';

export const ResumeViewer: React.FC = () => {
  return (
    <section className="relative w-full h-[100dvh] flex flex-col justify-between pt-20 pb-20 px-3 md:px-8 max-w-5xl mx-auto z-10 overflow-hidden">
      
      {/* Top Header Bar */}
      <ScrollReveal className="w-full flex items-center justify-between shrink-0 mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shadow-sm">
            <FileText size={20} />
          </div>
          <div>
            <h2 className="text-lg md:text-2xl font-bold font-brand text-slate-900 dark:text-silver-100 leading-tight">
              Curriculum Vitae
            </h2>
            <p className="text-[11px] md:text-xs text-slate-500 dark:text-silver-400">Interactive PDF Document Viewer</p>
          </div>
        </div>
        
        <a 
          href="/Mrinal_Paul_Resume.pdf" 
          download="Mrinal_Paul_Resume.pdf"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider transition-all hover:-translate-y-0.5 shadow-[0_4px_12px_rgba(16,185,129,0.3)]"
        >
          <Download size={14} />
          <span className="hidden sm:inline">Download PDF</span>
        </a>
      </ScrollReveal>

      {/* A4-Proportioned Centered Container */}
      <ScrollReveal delay={100} className="w-full flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-160px)]">
        <GlassCard className="w-full max-w-3xl h-full p-2.5 md:p-3 border-emerald-500/20 bg-white/70 dark:bg-[#0a0a0a]/80 backdrop-blur-3xl overflow-hidden shadow-2xl relative flex flex-col">
          
          <div className="absolute -right-32 -top-32 w-80 h-80 bg-[radial-gradient(circle,rgba(16,185,129,0.15)_0%,transparent_70%)] opacity-40 pointer-events-none" />
          
          <div className="w-full flex-1 rounded-xl overflow-hidden relative z-10 bg-slate-900/40 border border-white/10 shadow-inner">
            <iframe 
              src="/Mrinal_Paul_Resume.pdf#toolbar=0&view=FitH" 
              className="w-full h-full border-none block"
              title="Mrinal Paul Resume"
            />
          </div>
        </GlassCard>
      </ScrollReveal>

    </section>
  );
};