import { useState, useEffect, useRef } from 'react';
import { User, Code2, Briefcase, FolderGit2, GraduationCap, Send, Sun, Moon, Home, Download } from 'lucide-react';

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme ? savedTheme === 'dark' : true; 
    }
    return true;
  });
  
  const [active, setActive] = useState('Home');
  const navRef = useRef<HTMLDivElement>(null);

  // Track cursor position for the golden hover spotlight
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!navRef.current) return;
    const rect = navRef.current.getBoundingClientRect();
    navRef.current.style.setProperty('--x', `${e.clientX - rect.left}px`);
    navRef.current.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            const navItem = navLinks.find(link => link.href === `#${id}`);
            if (navItem) setActive(navItem.name);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home, hideOnMobile: true },
    { name: 'About', href: '#about', icon: User, hideOnMobile: false },
    { name: 'Skills', href: '#skills', icon: Code2, hideOnMobile: false },
    { name: 'Career', href: '#experience', icon: Briefcase, hideOnMobile: false },
    { name: 'Works', href: '#projects', icon: FolderGit2, hideOnMobile: false },
    { name: 'Edu', href: '#education', icon: GraduationCap, hideOnMobile: false },
    { name: 'Contact', href: '#contact', icon: Send, hideOnMobile: false },
  ];

  return (
    <header className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-max max-w-[96vw]">
      <div 
        ref={navRef}
        onMouseMove={handleMouseMove}
        className="relative group bg-white/70 dark:bg-[#0a0a0a]/80 backdrop-blur-3xl border border-white/60 dark:border-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-full px-3 sm:px-5 py-2.5 flex items-center gap-1.5 sm:gap-3 transition-all duration-500 overflow-hidden"
      >
        
        {/* Cursor Tracking Spotlight (Background Fill) */}
        <div 
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0"
          style={{ background: 'radial-gradient(150px circle at var(--x, 0) var(--y, 0), rgba(251,191,36,0.15), transparent 40%)' }}
        />
        
        {/* Cursor Tracking Spotlight (Glowing Border) */}
        <div 
          className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0"
          style={{ 
            background: 'radial-gradient(150px circle at var(--x, 0) var(--y, 0), rgba(251, 191, 36, 0.8), transparent 40%) border-box',
            border: '1px solid transparent',
            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude'
          }}
        />

        {/* Name with Emerald-to-Gold gradient */}
        <div className="relative z-10 hidden md:flex items-center pl-1 pr-3.5 border-r border-slate-300 dark:border-white/10">
          <span className="text-sm sm:text-base tracking-wider bg-gradient-to-r from-emerald-400 to-gold-500 bg-clip-text text-transparent font-brand leading-none">
            MRINAL
          </span>
        </div>

        <nav className="relative z-10 flex items-center gap-0.5 sm:gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = active === link.name;
            
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.name)}
                className={`relative group/link flex items-center justify-center p-2.5 sm:px-3.5 sm:py-2.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden
                  ${link.hideOnMobile ? 'hidden md:flex' : 'flex'}
                  ${isActive 
                    ? 'bg-white/90 dark:bg-white/10 shadow-[0_2px_15px_rgba(16,185,129,0.2)] text-emerald-600 dark:text-emerald-400 border border-emerald-500/30' 
                    : 'text-slate-600 dark:text-silver-300 hover:bg-white/50 dark:hover:bg-white/5 hover:text-emerald-600 dark:hover:text-emerald-400 border border-transparent'}
                `}
                title={link.name}
                aria-label={link.name}
              >
                <Icon 
                  size={18} 
                  strokeWidth={isActive ? 2.5 : 2}
                  className={`transition-all duration-500 z-10 ${isActive ? 'scale-110' : 'group-hover/link:-translate-y-0.5 group-hover/link:scale-110'}`} 
                />
                <span className={`z-10 overflow-hidden whitespace-nowrap text-xs sm:text-sm font-medium tracking-wide transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hidden md:block
                  ${isActive ? 'max-w-[100px] opacity-100 ml-2' : 'max-w-0 opacity-0 ml-0'}
                `}>
                  {link.name}
                </span>
              </a>
            );
          })}
        </nav>

        <div className="relative z-10 flex items-center gap-1.5 sm:gap-2.5 pl-1.5 sm:pl-3 border-l border-slate-300 dark:border-white/10">
          <a
            href="/resume.pdf"
            download
            className="group/btn flex items-center justify-center p-2.5 sm:px-3.5 sm:py-2.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 transition-all duration-300 shadow-sm"
            title="Download Resume"
            aria-label="Download Resume"
          >
            <Download size={18} strokeWidth={2.5} className="transition-transform group-hover/btn:-translate-y-0.5" />
            <span className="hidden md:block text-xs sm:text-sm font-semibold ml-1.5">Resume</span>
          </a>

          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="relative w-12 sm:w-15 h-7 sm:h-8 rounded-full bg-slate-200 dark:bg-black shadow-inner border border-slate-300 dark:border-white/10 flex items-center p-0.5 cursor-pointer overflow-hidden transition-colors duration-500"
            aria-label="Toggle Dark Mode"
          >
            <div className="absolute left-1 text-gold-500/50 scale-90"><Sun size={12} /></div>
            <div className="absolute right-1 text-emerald-400/50 scale-90"><Moon size={12} /></div>
            
            <div className={`relative z-10 flex items-center justify-center w-6 sm:w-7 h-6 sm:h-7 rounded-full shadow-md transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
              ${darkMode ? 'translate-x-5 sm:translate-x-7 bg-[#1a1a1a] border border-emerald-500/50 text-emerald-400' : 'translate-x-0 bg-white border border-slate-200 text-gold-500'}
            `}>
              {darkMode ? <Moon size={12} fill="currentColor" /> : <Sun size={12} fill="currentColor" />}
            </div>
          </button>
        </div>

      </div>
    </header>
  );
};