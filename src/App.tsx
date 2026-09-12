import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen selection:bg-emerald-500 selection:text-white relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="py-8 text-center text-xs text-slate-500 dark:text-silver-300 font-light border-t border-slate-200 dark:border-white/10 mt-12">
        © {new Date().getFullYear()} Mrinal Paul. Architected with React, TypeScript & Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;