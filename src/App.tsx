import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Preloader } from './components/layout/Preloader';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';
import { ResumeViewer } from './components/sections/ResumeViewer';

function App() {
  const [isResumeView, setIsResumeView] = useState(false);

  return (
    <div className="min-h-screen selection:bg-emerald-500 selection:text-white relative">
      <Preloader />
      
      <Navbar 
        onViewResume={() => setIsResumeView(true)} 
        onNavigateHome={() => setIsResumeView(false)} 
      />
      
      {isResumeView ? (
        <ResumeViewer />
      ) : (
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
      )}
    </div>
  );
}

export default App;