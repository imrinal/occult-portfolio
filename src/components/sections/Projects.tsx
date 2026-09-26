import React, { useRef, useState, useEffect } from 'react';
import { GlassCard } from '../layout/GlassCard';
import { ScrollReveal } from '../layout/ScrollReveal';
import { ExternalLink, BookOpen, Layers, Cpu, Calculator, CloudSun } from 'lucide-react';

// Import your actual project screenshots
import nextGenImg from '../../assets/NextGen.png';
import agriGuardImg from '../../assets/AgriGuard.png';
import workSphereImg from '../../assets/WorkSphere.png';
import climoraImg from '../../assets/Climora.png';
import auraImg from '../../assets/AURA.png';

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
  status: string;
  doi?: string;
  description: string;
  tags: string[];
  icon: React.ElementType;
  links: ProjectLink[];
  gradient: string;
  image: string; 
}

const projects: Project[] = [
  {
    id: 1,
    title: "NextGen Farming",
    type: "AI Research Publication",
    status: "Published (Scopus Indexed)",
    doi: "10.18805/IJARe.A-6504",
    description: "An AI-driven precision agriculture framework revolutionizing crop yield forecasting and disease classification. By integrating ensemble machine learning models with advanced computer vision, this research achieved a 0.9797 R² score for yield prediction and 87.69% diagnostic accuracy across 38 crop disease classes, providing an actionable Decision Intelligence Layer for modern sustainable farming.",
    tags: ["Python", "TensorFlow", "Scikit-learn", "CNNs", "NumPy", "Pandas"],
    icon: BookOpen,
    gradient: "from-emerald-500 to-teal-500",
    image: nextGenImg,
    links: [
      { label: "DOI Publication", url: "https://doi.org/10.18805/IJARe.A-6504", isGithub: false }
    ]
  },
  {
    id: 2,
    title: "AgriGuard AI",
    type: "Automated Hydroponics IoT System",
    status: "Advanced PoC & Simulated",
    description: "A Multi-Modal Cyber-Physical System (CPS) automating hydroponic nutrient management through deep learning and environmental telemetry. Fusing an XGBoost baseline predictor with a MobileNetV2 CNN, it visually diagnoses crop deficiencies with an 85% safety-critical confidence threshold. Validated overrides trigger non-linear Fuzzy Logic pump actuation, monitored via a real-time containerized HMI dashboard.",
    tags: ["Python", "XGBoost", "OpenCV", "Streamlit", "Fuzzy Logic", "IoT"],
    icon: Cpu,
    gradient: "from-green-500 to-emerald-600",
    image: agriGuardImg,
    links: [
      { label: "Source Code", url: "https://github.com/imrinal", isGithub: true }
    ]
  },
  {
    id: 3,
    title: "WorkSphere",
    type: "Employee Management Portal",
    status: "Production-Ready",
    description: "A robust full-stack web architecture designed to centralize and streamline enterprise human resource operations. Through secure, role-based portals, it automates critical administrative workflows including real-time telemetry dashboards, dynamic payroll generation, attendance approvals, and task tracking, significantly minimizing manual overhead and boosting organizational efficiency.",
    tags: ["PHP 7.x", "MySQL 8.x", "JavaScript", "Tailwind CSS", "XAMPP"],
    icon: Layers,
    gradient: "from-purple-500 to-indigo-500",
    image: workSphereImg,
    links: [
      { label: "Repository", url: "https://github.com/mrinalpaul12", isGithub: true }
    ]
  },
  {
    id: 4,
    title: "Climora",
    type: "Real-Time Weather Tracker",
    status: "Live Production",
    description: "A highly dynamic, fully responsive meteorological application fetching real-time telemetry from the OpenWeather API. Wrapped in a seamless translucent liquid glassmorphism aesthetic, it features advanced CSS backdrop filtering, dynamic blob animations, automatic metric conversions, and live DOM error-handling to deliver an immersive, ultra-smooth weather tracking experience.",
    tags: ["JavaScript (ES6)", "HTML5", "CSS3", "OpenWeatherMap", "DOM Manipulation"],
    icon: CloudSun,
    gradient: "from-gold-500 to-orange-500",
    image: climoraImg,
    links: [
      { label: "Live Tracker", url: "https://imrinal-weather.vercel.app/", isGithub: false },
      { label: "Source Code", url: "https://github.com/imrinal/Weather-APP", isGithub: true }
    ]
  },
  {
    id: 5,
    title: "AURA",
    type: "Advanced Web Calculator Engine",
    status: "Live Production",
    description: "A state-of-the-art computational platform engineered with Apple Vision Glassmorphism principles and real-time liquid background dynamics. This universal engine features sophisticated standard, scientific, interactive matrix, and commercial financial modules, all enhanced by custom cubic-bezier spring haptics and a real-time glass history register for seamless mathematical modeling.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Math.js", "Vite"],
    icon: Calculator,
    gradient: "from-sky-500 to-blue-600",
    image: auraImg,
    links: [
      { label: "Live Engine", url: "https://imrinal-calculator.vercel.app/", isGithub: false },
      { label: "Architecture", url: "https://github.com/imrinal/Calculator", isGithub: true }
    ]
  }
];

export const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          const rect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          
          const scrollDistance = rect.height - viewportHeight;
          let scrollY = -rect.top;
          
          if (scrollY < 0) scrollY = 0;
          if (scrollY > scrollDistance) scrollY = scrollDistance;
          
          const progress = scrollY / scrollDistance;
          
          // Math.round creates a "snapping" feel so it commits to the next slide faster
          const newIndex = Math.min(
            projects.length - 1,
            Math.max(0, Math.round(progress * (projects.length - 1)))
          );
          
          setActiveIndex(newIndex);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // MATHEMATICAL SCROLL FIX: 
    // Set height to precisely 100vh + (120px per project). 
    // Since 1 mouse wheel tick is ~100px, a single flick instantly hits the threshold to change the slide.
    <section id="projects" ref={sectionRef} className="relative w-full" style={{ height: `calc(100vh + ${projects.length * 120}px)` }}>
      
      <div className="sticky top-0 h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden py-10 px-4 md:px-8">
        
        <ScrollReveal className="text-center z-20 absolute top-[10vh] md:top-[12vh] flex flex-col items-center">
          <div className="text-center mb-4">
            <h2 className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold-500 font-semibold mb-2">
              Technical Portfolio
            </h2>
            <h3 className="text-3xl md:text-4xl font-brand font-bold bg-gradient-to-r from-emerald-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent tracking-wide">
              PRODUCT SHOWCASE
            </h3>
          </div>
        </ScrollReveal>

        <div className="relative w-full max-w-5xl mx-auto h-[70vh] md:h-[60vh] mt-16 md:mt-24">
          
          {projects.map((project, index) => {
            const isActive = index === activeIndex;
            const isPast = index < activeIndex;
            
            return (
              <div 
                key={project.id}
                // HARDWARE ACCELERATION: Added will-change-transform for zero-lag GPU rendering
                // Reduced translate-y to 12 (3rem) for a tighter, faster snap
                className={`absolute inset-0 w-full h-full will-change-transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive 
                    ? 'opacity-100 scale-100 translate-y-0 z-20 pointer-events-auto' 
                    : isPast 
                      ? 'opacity-0 scale-95 -translate-y-12 z-10 pointer-events-none'
                      : 'opacity-0 scale-95 translate-y-12 z-10 pointer-events-none'
                }`}
              >
                <GlassCard className={`w-full h-full p-5 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10 border-emerald-500/20 bg-white/70 dark:bg-[#0a0a0a]/80 backdrop-blur-2xl overflow-hidden group ${isActive ? 'shadow-2xl' : 'shadow-none'}`}>
                  
                  {/* Subtle Ambient Glow */}
                  <div className={`absolute -right-32 -top-32 w-80 h-80 bg-gradient-to-br ${project.gradient} opacity-10 blur-[100px] pointer-events-none transition-opacity duration-700`} />

                  {/* LEFT SIDE: Square Product Image */}
                  <div className="w-full md:w-2/5 aspect-video md:aspect-square rounded-xl md:rounded-2xl overflow-hidden shrink-0 relative flex items-center justify-center border border-slate-200/50 dark:border-white/10 shadow-inner bg-slate-900">
                    
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-700 group-hover:scale-105" 
                      loading={index === 0 ? "eager" : "lazy"} // Optimize loading
                    />

                    {/* Glossy Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none z-30" />
                  </div>

                  {/* RIGHT SIDE: Product Details */}
                  <div className="w-full md:w-3/5 flex flex-col justify-center h-full relative z-10">
                    
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h4 className={`text-[10px] md:text-xs uppercase tracking-widest font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                          {project.type}
                        </h4>
                        <span className="px-2 py-0.5 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 text-[9px] font-semibold text-slate-600 dark:text-silver-400">
                          {project.status}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-silver-100 font-brand leading-tight mb-4 group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-[13px] md:text-[15px] text-slate-700 dark:text-silver-300 leading-relaxed font-light mb-6 line-clamp-6 md:line-clamp-none">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="px-2.5 py-1 text-[9px] md:text-[11px] font-medium rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-silver-300 border border-slate-200/60 dark:border-white/10 hover:border-emerald-500/40 hover:text-emerald-600 transition-colors cursor-default"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {project.links.map((link, i) => (
                          <a 
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[11px] md:text-xs font-semibold text-slate-800 dark:text-white bg-slate-200 dark:bg-white/10 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 px-4 py-2.5 rounded-lg transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]"
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

                  </div>

                </GlassCard>
              </div>
            );
          })}
        </div>

        {/* Vertical Tracker */}
        <div className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30">
          {projects.map((_, index) => (
            <div 
              key={index}
              className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-500 ${
                index === activeIndex 
                  ? 'bg-emerald-400 h-6 md:h-8 shadow-[0_0_10px_rgba(52,211,153,0.8)]' 
                  : 'bg-slate-300 dark:bg-white/20 scale-75'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};