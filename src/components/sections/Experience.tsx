import React from 'react';
import { GlassCard } from '../layout/GlassCard';
import { MapPin, Calendar, Briefcase } from 'lucide-react';
import jupiterImage from '../../assets/jupiter.png';

// Local Logo Imports
import ieeeLogo from '../../assets/IEEE.jpg';
import unstopLogo from '../../assets/unstop.jpg';
import gfgLogo from '../../assets/gfg.png';
import geeksLogo from '../../assets/geeks.png';
import kgpLogo from '../../assets/kgp.png';
import qdcLogo from '../../assets/qdc.jpeg';
import srmhLogo from '../../assets/SRMH.jpeg';
import gscLogo from '../../assets/gsc.png';
import csiLogo from '../../assets/CSI.jpeg';
import srmLogo from '../../assets/srm.jpeg';

export const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      role: "Research Intern",
      company: "IIT Kharagpur",
      logo: kgpLogo,
      date: "May 2026 - Jul 2026",
      location: "Kharagpur, India",
      type: "Internship",
      description: (
        <>
          Engineered a Cyber-Physical System for hydroponics agriculture. Fused XGBoost telemetry with MobileNetV2 CNN for real-time crop analysis, achieving an <strong className="text-gold-500 dark:text-gold-400 font-bold">85.0% validation accuracy</strong>. Validated robust PoC primed for <strong className="text-gold-500 dark:text-gold-400 font-bold">Q1 publication</strong>.
        </>
      ),
      tags: ["Python", "TensorFlow", "OpenCV", "XGBoost", "Computer Vision"]
    },
    {
      id: 2,
      role: "President",
      company: "GeeksforGeeks SRMIST",
      logo: gfgLogo,
      date: "Feb 2026 - Present",
      location: "Chennai, India",
      type: "Full-time",
      description: (
        <>
          Scaled campus community to <strong className="text-gold-500 dark:text-gold-400 font-bold">800+ active members</strong>. Spearheaded massive flagship recurring events ('IGNISIA', 'Java Verse') while directing a core team of <strong className="text-gold-500 dark:text-gold-400 font-bold">50+ members</strong>.
        </>
      ),
      tags: ["Leadership", "Team Collaboration", "Community Building", "Problem Solving"]
    },
    {
      id: 3,
      role: "Undergrad Research Intern",
      company: "SRMIST (UROP)",
      logo: srmLogo,
      date: "Aug 2025 - May 2026",
      location: "Chennai, India",
      type: "Research",
      description: (
        <>
          Co-authored a <strong className="text-gold-500 dark:text-gold-400 font-bold">Scopus-indexed ARCC Journal</strong> paper. Developed an AI framework achieving a <strong className="text-gold-500 dark:text-gold-400 font-bold">0.9797 R² score</strong> via Random Forest and an <strong className="text-gold-500 dark:text-gold-400 font-bold">87.69% accuracy</strong> CNN.
        </>
      ),
      tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "TensorFlow"]
    },
    {
      id: 4,
      role: "Peer Reviewer",
      company: "IEEE",
      logo: ieeeLogo,
      date: "Mar 2026 - Present",
      location: "Remote",
      type: "Part-time",
      description: (
        <>
          Evaluating advanced academic research papers focusing on Artificial Intelligence, Machine Learning models, and Software Engineering. Successfully reviewed <strong className="text-gold-500 dark:text-gold-400 font-bold">2 full publications</strong> to date.
        </>
      ),
      tags: ["Artificial Intelligence", "Machine Learning", "Communication", "Rapid Learning"]
    },
    {
      id: 5,
      role: "Campus Ambassador",
      company: "Unstop",
      logo: unstopLogo,
      date: "Aug 2025 - Present",
      location: "Hybrid",
      type: "Full-time",
      description: (
        <>
          Served as the sole Point of Contact for SRM KTR Campus. Negotiated strategic multi-club partnerships with ACM-W and Hackathon clubs to facilitate sponsorships and cross-platform events.
        </>
      ),
      tags: ["Communication", "Leadership", "Team Collaboration", "Problem Solving"]
    },
    {
      id: 6,
      role: "Campus Ambassador",
      company: "GirlScript Summer of Code",
      logo: gscLogo,
      date: "Sep 2024 - Feb 2025",
      location: "Remote",
      type: "Internship",
      description: (
        <>
          Secured <strong className="text-gold-500 dark:text-gold-400 font-bold">All India Rank 24</strong> with <strong className="text-gold-500 dark:text-gold-400 font-bold">1,420 points</strong> and 142 successful referrals, expanding developer network to <strong className="text-gold-500 dark:text-gold-400 font-bold">11.5K+ followers</strong>.
        </>
      ),
      tags: ["GitHub", "Git", "Rapid Learning", "Communication"]
    },
    {
      id: 7,
      role: "Campus Mantri",
      company: "GeeksforGeeks",
      logo: geeksLogo,
      date: "Apr 2025 - Present",
      location: "Remote",
      type: "Full-time",
      description: (
        <>
          Retained leadership standing for <strong className="text-gold-500 dark:text-gold-400 font-bold">2 consecutive years</strong> due to exceptional execution metrics, guiding strategic campus-wide technical roadmaps.
        </>
      ),
      tags: ["Leadership", "Decision Intelligence", "Community Building", "Communication"]
    },
    {
      id: 8,
      role: "Corporate Associate Lead",
      company: "Qwiklabs Developer Club",
      logo: qdcLogo,
      date: "Sep 2024 - Jul 2025",
      location: "Chennai, India",
      type: "Leadership",
      description: (
        <>
          Managed corporate outreach, event financing, budgeting, and campus-wide execution of technical workshops and multi-company sponsorships.
        </>
      ),
      tags: ["Team Collaboration", "Leadership", "Communication", "Problem Solving"]
    },
    {
      id: 9,
      role: "Content Writer",
      company: "SRM Hackathon",
      logo: srmhLogo,
      date: "Oct 2024 - Jun 2025",
      location: "Chennai, India",
      type: "Part-time",
      description: (
        <>
          Handled administrative frameworks, official drafts, and direct faculty coordination to ensure seamless planning and approval of major campus hackathons.
        </>
      ),
      tags: ["Communication", "Problem Solving", "Rapid Learning", "Team Collaboration"]
    },
    {
      id: 10,
      role: "Member of Management",
      company: "Computer Society of India",
      logo: csiLogo,
      date: "Jul 2024 - Oct 2024",
      location: "Chennai, India",
      type: "Management",
      description: (
        <>
          Core founding member. Spearheaded ground-up organizational structuring and membership recruitment drives for the newly established university chapter.
        </>
      ),
      tags: ["Leadership", "Team Collaboration", "Community Building", "Problem Solving"]
    }
  ];

  return (
    <section id="experience" className="w-full flex flex-col justify-center py-16 px-4 md:px-6 max-w-6xl mx-auto overflow-hidden">
      
      {/* Section Header with Tighter Spacing */}
      <div className="text-center mb-6 shrink-0 flex flex-col items-center">
        <div className="inline-flex items-center justify-center gap-4 mb-2">
          <img 
            src={jupiterImage} 
            alt="Jupiter Logo" 
            className="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-[0_0_15px_rgba(249,115,22,0.65)] shrink-0" 
          />
          <div className="text-left">
            <h2 className="text-[11px] uppercase tracking-[0.3em] text-orange-500 font-semibold mb-0.5">
              Professional Experience
            </h2>
            <h3 className="text-2xl md:text-3xl font-brand font-bold text-slate-900 dark:text-silver-100 tracking-wide">
              Career & Impact Milestones
            </h3>
          </div>
        </div>
      </div>

      {/* Sleek Vertical Timeline with Reduced Gaps */}
      <div className="relative w-full max-w-5xl mx-auto mt-2">
        
        {/* The Central Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent md:-translate-x-1/2 rounded-full" />
        
        {experiences.map((exp, index) => {
          const isLeftAligned = index % 2 === 0;

          return (
            <div 
              key={exp.id} 
              className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-full mb-6 ${isLeftAligned ? 'md:flex-row-reverse' : ''}`}
            >
              
              {/* Timeline Dot Node */}
              <div className="absolute left-6 md:left-1/2 w-3.5 h-3.5 rounded-full bg-emerald-500 border-4 border-white dark:border-[#0a0a0a] shadow-[0_0_10px_rgba(16,185,129,0.8)] transform -translate-x-1/2 mt-5 md:mt-0 z-20" />

              {/* Empty Spacer Div */}
              <div className="hidden md:block w-5/12" />

              {/* Content Card Wrapper */}
              <div className="w-full md:w-5/12 pl-12 md:pl-0">
                <GlassCard className="w-full p-4 md:p-5 flex flex-col justify-between border-emerald-500/20 bg-white/60 dark:bg-black/40 backdrop-blur-3xl overflow-hidden relative group hover:border-emerald-500/50 transition-colors duration-300 shadow-md">
                  
                  {/* Subtle Background Glow */}
                  <div className="absolute -right-20 -top-20 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/10 transition-all duration-700" />

                  <div className="relative z-10">
                    {/* Top: Logo & Role */}
                    <div className="flex items-start gap-3 mb-2.5">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white p-1 shadow-sm shrink-0 border border-slate-200 dark:border-none flex items-center justify-center overflow-hidden">
                        <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h4 className="text-sm md:text-base font-medium text-slate-900 dark:text-silver-100 font-brand leading-tight">
                          {exp.role}
                        </h4>
                        <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Meta Details with Clean Uniform White/Neutral Styling */}
                    <div className="flex flex-wrap items-center gap-2 mb-2 text-[10px] md:text-[11px] font-medium">
                      <div className="flex items-center gap-1 bg-white/60 dark:bg-white/5 text-slate-700 dark:text-silver-300 px-2 py-0.5 rounded-md border border-slate-200/60 dark:border-white/10">
                        <Calendar size={11} className="text-emerald-500" />
                        <span>{exp.date}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-white/60 dark:bg-white/5 text-slate-700 dark:text-silver-300 px-2 py-0.5 rounded-md border border-slate-200/60 dark:border-white/10">
                        <MapPin size={11} className="text-emerald-500" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-white/60 dark:bg-white/5 text-slate-700 dark:text-silver-300 px-2 py-0.5 rounded-md border border-slate-200/60 dark:border-white/10">
                        <Briefcase size={11} className="text-emerald-500" />
                        <span>{exp.type}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-700 dark:text-silver-300 leading-relaxed mb-3">
                      {exp.description}
                    </p>

                    {/* Sleek Skill Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-0.5 text-[9px] uppercase tracking-wider font-semibold rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};