import React from 'react';
import { GlassCard } from '../layout/GlassCard';
import { ScrollReveal } from '../layout/ScrollReveal';
import { ExternalLink, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import sunImage from '../../assets/sun.png';

interface ProjectLink {
  label: string;
  url: string;
  icon?: React.ElementType;
  isGithub?: boolean;
}

interface Project {
  id: number;
  title: string;
  type: string;
  role: string;
  status: string;
  doi?: string;
  description: React.ReactNode;
  tags: string[];
  icon: React.ElementType;
  links: ProjectLink[];
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Next-Gen Farming: Machine Learning–Driven Disruptive Technologies",
      type: "Research Publication",
      role: "Co-Author | UROP, SRMIST",
      status: "Published by ARCC Journal (Scopus Indexed)",
      doi: "10.18805/IJARe.A-6504",
      description: (
        <div className="space-y-3">
          <p className="text-sm text-slate-700 dark:text-silver-300 leading-relaxed">
            Engineered an AI-driven precision agriculture framework to revolutionize crop yield predictions and disease classification through advanced ensemble modeling and computer vision.
          </p>
          <ul className="text-xs text-slate-700 dark:text-silver-300 space-y-2 mt-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
              <span>Achieved an <strong className="text-gold-500 dark:text-gold-400 font-bold">R² score of 0.9797</strong> for crop yield prediction using a Random Forest Regressor trained on 19,698 historical records.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
              <span>Developed a CNN trained on 50,000 augmented images classifying 38 crop disease classes with <strong className="text-gold-500 dark:text-gold-400 font-bold">87.69% accuracy</strong> and an F1-Score of 0.8363.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
              <span>Implemented K-Means clustering for soil classification (Silhouette Score: 0.3647), integrated into a Decision Intelligence Layer for actionable farming recommendations.</span>
            </li>
          </ul>
        </div>
      ),
      tags: ["Python", "Scikit-learn", "TensorFlow", "Keras", "NumPy", "Pandas", "Matplotlib"],
      icon: BookOpen,
      links: [
        { label: "DOI Link", url: "https://doi.org/10.18805/IJARe.A-6504", icon: ExternalLink, isGithub: false }
      ]
    },
    {
      id: 2,
      title: "Employee Management System 🏢",
      type: "Full-Stack Web Application",
      role: "Lead Developer",
      status: "Production-Ready Setup",
      description: (
        <div className="space-y-3">
          <p className="text-sm text-slate-700 dark:text-silver-300 leading-relaxed">
            A robust full-stack web application designed to streamline HR operations, minimize manual processes, and boost organizational productivity through secure role-based portals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-4">
              <h5 className="text-xs font-bold text-slate-900 dark:text-silver-100 flex items-center gap-1.5 mb-2">
                👑 Admin Capabilities
              </h5>
              <ul className="text-[11px] text-slate-600 dark:text-silver-400 space-y-1.5">
                <li>• Real-time Dashboard & Announcements</li>
                <li>• Employee Record & Task Management</li>
                <li>• Payroll & Payslip Generation</li>
                <li>• Attendance & Leave Approvals</li>
              </ul>
            </div>
            <div className="bg-sky-500/5 border border-sky-500/10 rounded-xl p-4">
              <h5 className="text-xs font-bold text-slate-900 dark:text-silver-100 flex items-center gap-1.5 mb-2">
                👤 Employee Features
              </h5>
              <ul className="text-[11px] text-slate-600 dark:text-silver-400 space-y-1.5">
                <li>• Personal Profile & Leave Applications</li>
                <li>• Secure Payslip Downloads</li>
                <li>• Task Tracking & Status Updates</li>
                <li>• Company Announcement Feed</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      tags: ["PHP 7.x", "MySQL 8.x", "Tailwind CSS", "JavaScript", "HTML5/CSS3", "XAMPP"],
      icon: Layers,
      links: [
        { label: "Source Code", url: "https://github.com/mrinalpaul12", isGithub: true }
      ]
    }
  ];

  return (
    <section id="projects" className="w-full flex flex-col justify-center py-16 px-4 md:px-6 max-w-6xl mx-auto overflow-hidden">
      
      <ScrollReveal className="text-center mb-10 shrink-0 flex flex-col items-center">
        <div className="inline-flex items-center justify-center gap-4 mb-3 group">
          <img 
            src={sunImage} 
            alt="Sun Icon" 
            loading="lazy"
            decoding="async"
            className="w-14 h-14 md:w-16 md:h-16 object-contain drop-shadow-[0_0_15px_rgba(234,179,8,0.5)] shrink-0 animate-[spin_20s_linear_infinite]" 
          />
          <div className="text-left">
            <h2 className="text-[11px] uppercase tracking-[0.3em] text-gold-500 font-semibold mb-0.5">
              Technical Portfolio
            </h2>
            <h3 className="text-2xl md:text-3xl font-brand font-bold text-slate-900 dark:text-silver-100 tracking-wide">
              Featured Projects & Research
            </h3>
          </div>
        </div>
      </ScrollReveal>

      <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto">
        {projects.map((project, idx) => (
          <ScrollReveal key={project.id} delay={idx === 0 ? 100 : 200}>
            <GlassCard className="w-full p-6 md:p-8 border-emerald-500/20 bg-white/60 dark:bg-black/40 backdrop-blur-lg overflow-hidden relative group shadow-lg">
              <div className="absolute -right-32 -top-32 w-80 h-80 bg-[radial-gradient(circle,rgba(16,185,129,0.12)_0%,transparent_70%)] opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
                
                <div className="w-full lg:w-1/4 shrink-0 flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <project.icon size={24} strokeWidth={1.5} />
                  </div>
                  
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold mb-1">
                      {project.type}
                    </h4>
                    <p className="text-sm font-bold text-slate-900 dark:text-silver-100 font-brand">
                      {project.role}
                    </p>
                    <p className="text-[11px] text-gold-600 dark:text-gold-400 font-semibold mt-1.5 bg-gold-500/10 inline-block px-2.5 py-1 rounded-md border border-gold-500/20">
                      {project.status}
                    </p>
                    {project.doi && (
                      <p className="text-[10px] text-slate-500 dark:text-silver-400 mt-2.5 font-mono">
                        DOI: {project.doi}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.links.map((link, i) => (
                      <a 
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-silver-300 bg-slate-100 dark:bg-white/5 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 px-3.5 py-2 rounded-lg border border-slate-200 dark:border-white/10 hover:border-emerald-500/30 transition-all hover:scale-105 active:scale-95"
                      >
                        {link.isGithub ? (
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                            <path d="M9 18c-4.51 2-5-2-7-2"/>
                          </svg>
                        ) : (
                          <ExternalLink size={14} />
                        )}
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="w-full lg:w-3/4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-silver-100 font-brand leading-tight mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.description}
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/10">
                    <div className="flex flex-wrap gap-2.5">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1.5 text-[10px] md:text-xs font-semibold rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-silver-300 border border-slate-200/60 dark:border-white/10 hover:border-emerald-500/40 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};