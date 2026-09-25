import React, { useRef, useState, useEffect } from 'react';
import { GlassCard } from '../layout/GlassCard';
import { ScrollReveal } from '../layout/ScrollReveal';
import { MapPin, Calendar } from 'lucide-react'; // Briefcase removed
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

// Reordered strictly chronologically by joining date (NEWEST to OLDEST)
const experiences = [
  {
    id: 1,
    role: "Research Intern",
    company: "IIT Kharagpur",
    logo: kgpLogo,
    date: "May 2026 - Jul 2026",
    location: "Kharagpur, India",
    type: "Internship",
    description: "Engineered a Cyber-Physical System for hydroponics agriculture. Fused XGBoost telemetry with MobileNetV2 CNN for real-time crop analysis, achieving an 85.0% validation accuracy. Validated robust PoC primed for Q1 publication.",
    tags: ["Python", "TensorFlow", "OpenCV", "XGBoost", "Computer Vision"]
  },
  {
    id: 4,
    role: "Peer Reviewer",
    company: "IEEE",
    logo: ieeeLogo,
    date: "Mar 2026 - Present",
    location: "Remote",
    type: "Part-time",
    description: "Evaluating advanced academic research papers focusing on Artificial Intelligence, Machine Learning models, and Software Engineering. Successfully reviewed 2 full publications to date.",
    tags: ["Artificial Intelligence", "Machine Learning", "Communication", "Rapid Learning"]
  },
  {
    id: 2,
    role: "President",
    company: "GeeksforGeeks SRMIST",
    logo: gfgLogo,
    date: "Feb 2026 - Present",
    location: "Chennai, India",
    type: "Full-time",
    description: "Scaled campus community to 800+ active members. Spearheaded massive flagship recurring events ('IGNISIA', 'Java Verse') while directing a core team of 50+ members.",
    tags: ["Leadership", "Team Collaboration", "Community Building", "Problem Solving"]
  },
  {
    id: 3,
    role: "Research Intern",
    company: "SRMIST (UROP)",
    logo: srmLogo,
    date: "Aug 2025 - May 2026",
    location: "Chennai, India",
    type: "Research",
    description: "Co-authored a Scopus-indexed ARCC Journal paper. Developed an AI framework achieving a 0.9797 R² score via Random Forest and an 87.69% accuracy CNN.",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "TensorFlow"]
  },
  {
    id: 5,
    role: "Campus Ambassador",
    company: "Unstop",
    logo: unstopLogo,
    date: "Aug 2025 - Present",
    location: "Hybrid",
    type: "Full-time",
    description: "Served as the sole Point of Contact for SRM KTR Campus. Negotiated strategic multi-club partnerships with ACM-W and Hackathon clubs to facilitate sponsorships and cross-platform events.",
    tags: ["Communication", "Leadership", "Team Collaboration", "Problem Solving"]
  },
  {
    id: 7,
    role: "Campus Mantri",
    company: "GeeksforGeeks",
    logo: geeksLogo,
    date: "Apr 2025 - Present",
    location: "Remote",
    type: "Full-time",
    description: "Retained leadership standing for 2 consecutive years due to exceptional execution metrics, guiding strategic campus-wide technical roadmaps.",
    tags: ["Leadership", "Decision Intelligence", "Community Building", "Communication"]
  },
  {
    id: 9,
    role: "Content Writer",
    company: "SRM Hackathon",
    logo: srmhLogo,
    date: "Oct 2024 - Jun 2025",
    location: "Chennai, India",
    type: "Part-time",
    description: "Handled administrative frameworks, official drafts, and direct faculty coordination to ensure seamless planning and approval of major campus hackathons.",
    tags: ["Communication", "Problem Solving", "Rapid Learning", "Team Collaboration"]
  },
  {
    id: 8,
    role: "Corporate Associate",
    company: "Qwiklabs Developer Club",
    logo: qdcLogo,
    date: "Sep 2024 - Jul 2025",
    location: "Chennai, India",
    type: "Leadership",
    description: "Managed corporate outreach, event financing, budgeting, and campus-wide execution of technical workshops and multi-company sponsorships.",
    tags: ["Team Collaboration", "Leadership", "Communication", "Problem Solving"]
  },
  {
    id: 6,
    role: "Campus Ambassador",
    company: "GirlScript Summer of Code",
    logo: gscLogo,
    date: "Sep 2024 - Feb 2025",
    location: "Remote",
    type: "Internship",
    description: "Secured All India Rank 24 with 1,420 points and 142 successful referrals, expanding developer network to 11.5K+ followers.",
    tags: ["GitHub", "Git", "Rapid Learning", "Communication"]
  },
  {
    id: 10,
    role: "Member of Management",
    company: "Computer Society of India",
    logo: csiLogo,
    date: "Jul 2024 - Oct 2024",
    location: "Chennai, India",
    type: "Management",
    description: "Core founding member. Spearheaded ground-up organizational structuring and membership recruitment drives for the newly established university chapter.",
    tags: ["Leadership", "Team Collaboration", "Community Building", "Problem Solving"]
  }
];

const SliderCard = ({ exp }: { exp: typeof experiences[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty('--x', `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  return (
    <div className="shrink-0 w-[85vw] sm:w-[360px] md:w-[400px] h-[55vh] min-h-[350px] max-h-[450px] flex px-2 py-4">
      <div 
        ref={cardRef}
        onMouseMove={handleMove}
        className="group relative w-full h-full rounded-2xl md:rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-2"
      >
        <GlassCard className="w-full h-full p-5 flex flex-col border-emerald-500/20 bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-3xl overflow-hidden relative group">
          
          <div className="absolute -right-32 -top-32 w-64 h-64 bg-[radial-gradient(circle,rgba(16,185,129,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Golden Cursor Tracker */}
          <div 
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0"
            style={{ background: 'radial-gradient(400px circle at var(--x, 0) var(--y, 0), rgba(251,191,36,0.1), transparent 40%)' }}
          />
          <div 
            className="pointer-events-none absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-30"
            style={{ 
              background: 'radial-gradient(300px circle at var(--x, 0) var(--y, 0), rgba(251,191,36,0.6), transparent 40%) border-box',
              border: '1px solid transparent',
              WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude'
            }}
          />

          <div className="relative z-10 flex-1 flex flex-col h-full">
            <div className="flex flex-col gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white p-1.5 shadow-md shrink-0 border border-slate-200 dark:border-none flex items-center justify-center overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                  <img src={exp.logo} alt={exp.company} loading="lazy" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <h4 className="text-base md:text-lg font-semibold text-slate-900 dark:text-silver-100 tracking-tight group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors duration-300">
                    {exp.role}
                  </h4>
                  <p className="text-[13px] md:text-sm font-medium text-emerald-600 dark:text-emerald-400 mt-0.5">
                    {exp.company}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 text-[11px] md:text-xs font-medium shrink-0">
                <div className="flex items-center gap-1 bg-white/60 dark:bg-white/5 text-slate-700 dark:text-silver-300 px-2 py-0.5 rounded-md border border-slate-200/60 dark:border-white/10">
                  <Calendar size={12} className="text-gold-500" />
                  <span>{exp.date}</span>
                </div>
                <div className="flex items-center gap-1 bg-white/60 dark:bg-white/5 text-slate-700 dark:text-silver-300 px-2 py-0.5 rounded-md border border-slate-200/60 dark:border-white/10">
                  <MapPin size={12} className="text-gold-500" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            <p className="text-[13px] md:text-sm text-slate-700 dark:text-silver-300 leading-relaxed mb-4 font-light flex-1 line-clamp-4 md:line-clamp-5">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-auto">
              {exp.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="px-2 py-1 text-[9px] md:text-[10px] font-medium rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 text-slate-700 dark:text-silver-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 cursor-default hover:bg-white/80 hover:text-emerald-600 hover:border-emerald-500/40 dark:hover:bg-white/10 dark:hover:text-gold-400 dark:hover:border-gold-500/40"
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
};

export const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !sliderRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      const scrollDistance = rect.height - viewportHeight;
      let scrollY = -rect.top;
      
      if (scrollY < 0) scrollY = 0;
      if (scrollY > scrollDistance) scrollY = scrollDistance;
      
      const progress = scrollY / scrollDistance;
      const maxTranslate = sliderRef.current.scrollWidth - window.innerWidth;
      
      setTranslateX(progress * maxTranslate);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative w-full h-[350vh] scroll-mt-0">
      
      <div className="sticky top-0 h-[100dvh] w-full flex flex-col items-center justify-start pt-[12vh] md:pt-[15vh] overflow-hidden">
        
        <ScrollReveal className="text-center shrink-0 flex flex-col items-center z-10 mb-4 md:mb-6">
          <div className="text-center">
            <h2 className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold-500 font-semibold mb-2">
              Professional Experience
            </h2>
            <h3 className="text-3xl md:text-4xl font-brand font-bold bg-gradient-to-r from-emerald-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent tracking-wide">
              CAREER MILESTONES
            </h3>
          </div>
        </ScrollReveal>

        <div className="w-full flex items-start mt-2">
          <div 
            ref={sliderRef}
            className="flex gap-4 md:gap-6 px-[5vw] md:px-[10vw] will-change-transform"
            style={{ transform: `translateX(-${translateX}px)` }}
          >
            {experiences.map((exp) => (
              <SliderCard key={exp.id} exp={exp} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};