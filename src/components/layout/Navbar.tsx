import { useState, useEffect } from 'react';
import { User, Code2, Briefcase, FolderGit2, GraduationCap, Send, Sun, Moon, Home, Download } from 'lucide-react';

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home, hideOnMobile: true },
    { name: 'About', href: '#about', icon: User, hideOnMobile: false },
    { name: 'Skills', href: '#skills', icon: Code2, hideOnMobile: false },
    { name: 'Works', href: '#projects', icon: FolderGit2, hideOnMobile: false },
    { name: 'Career', href: '#experience', icon: Briefcase, hideOnMobile: false },
    { name: 'Edu', href: '#education', icon: GraduationCap, hideOnMobile: false },
    { name: 'Contact', href: '#contact', icon: Send, hideOnMobile: false },
  ];

  return (
    <header className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-max max-w-[96vw]">
      <div className="bg-white/70 dark:bg-black/80 backdrop-blur-3xl border border-white/60 dark:border-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] rounded-full px-3 sm:px-5 py-2.5 flex items-center gap-1.5 sm:gap-3 transition-all duration-500">
        
        {/* Brand Name - Properly sized to match the bar's visual height and weight */}
        <div className="hidden md:flex items-center pl-1 pr-3.5 border-r border-slate-300 dark:border-white/10">
          <span className="text-sm sm:text-base font-bold tracking-widest uppercase bg-gradient-to-r from-emerald-600 to-gold-500 bg-clip-text text-transparent font-brand leading-none">
            Mrinal Paul
          </span>
        </div>

        {/* Liquid iOS Nav Menu */}
        <nav className="flex items-center gap-0.5 sm:gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = active === link.name;
            
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.name)}
                className={`relative group flex items-center justify-center p-2.5 sm:px-3.5 sm:py-2.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden
                  ${link.hideOnMobile ? 'hidden md:flex' : 'flex'}
                  ${isActive 
                    ? 'bg-white/90 dark:bg-black/90 shadow-[0_2px_15px_rgba(16,185,129,0.2)] text-emerald-700 dark:text-emerald-400 border border-emerald-500/40 font-semibold' 
                    : 'text-slate-600 dark:text-silver-300 hover:bg-white/50 dark:hover:bg-white/10 hover:text-emerald-600 dark:hover:text-emerald-400 border border-transparent font-medium'}
                `}
                title={link.name}
              >
                <Icon 
                  size={18} 
                  strokeWidth={isActive ? 2.5 : 2}
                  className={`transition-all duration-500 z-10 ${isActive ? 'scale-110' : 'group-hover:-translate-y-0.5 group-hover:scale-110'}`} 
                />
                
                <span className={`z-10 overflow-hidden whitespace-nowrap text-xs sm:text-sm tracking-wide transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hidden md:block
                  ${isActive ? 'max-w-[100px] opacity-100 ml-2' : 'max-w-0 opacity-0 ml-0'}
                `}>
                  {link.name}
                </span>
              </a>
            );
          })}
        </nav>

        {/* Right Section: Resume Button + Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 pl-1.5 sm:pl-3 border-l border-slate-300 dark:border-white/10">
          
          {/* Actionable Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="group flex items-center justify-center p-2.5 sm:px-3.5 sm:py-2.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 transition-all duration-300 shadow-sm"
            title="Download Resume"
          >
            <Download size={18} strokeWidth={2.5} className="transition-transform group-hover:-translate-y-0.5" />
            <span className="hidden md:block text-xs sm:text-sm font-semibold ml-1.5">Resume</span>
          </a>

          {/* Flawless iOS Mechanical Toggle Switch */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="relative w-12 sm:w-15 h-7 sm:h-8 rounded-full bg-slate-200 dark:bg-[#111] shadow-inner border border-slate-300 dark:border-white/10 flex items-center p-0.5 cursor-pointer overflow-hidden transition-colors duration-500"
            aria-label="Toggle Ark Mode"
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