
import React, { useState, useEffect } from 'react';
import Scene3D from './components/Scene3D';
import { WindowType } from './types';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  ArrowUpRight,
  Menu,
  X,
  Instagram,
  Linkedin,
  Github
} from 'lucide-react';

// Import Pages (Refined for new theme)
import Home from './components/pages/Home';
import Journey from './components/pages/Journey';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

const App: React.FC = () => {
  const [activeZone, setActiveZone] = useState<WindowType>(WindowType.PROJECTS);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { type: WindowType.PROJECTS, label: "Work" },
    { type: WindowType.HOME, label: "Profile" },
    { type: WindowType.JOURNEY, label: "Journey" },
    { type: WindowType.CONTACT, label: "Connect" },
  ];

  const getActiveContent = () => {
    switch (activeZone) {
      case WindowType.PROJECTS: return <Projects />;
      case WindowType.HOME: return <Home />;
      case WindowType.JOURNEY: return <Journey />;
      case WindowType.CONTACT: return <Contact />;
      default: return <Projects />;
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-[#ffccd5]">
      {/* Luminous 3D Background */}
      <Scene3D />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 md:px-12 py-6 flex justify-between items-center ${scrolled ? 'bg-white/80 backdrop-blur-md py-4' : 'bg-transparent'}`}>
        <div 
          className="text-lg font-serif italic cursor-pointer tracking-tight"
          onClick={() => setActiveZone(WindowType.PROJECTS)}
        >
          Dinusha <span className="not-italic font-sans font-medium text-[10px] uppercase tracking-widest ml-2 opacity-40">Creative Technologist</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-12 items-center">
          {menuItems.map((item) => (
            <button
              key={item.type}
              onClick={() => setActiveZone(item.type)}
              className={`text-[11px] uppercase tracking-[0.2em] font-semibold transition-all hover:text-studio-accent ${activeZone === item.type ? 'text-studio-accent' : 'text-studio-text/40'}`}
            >
              {item.label}
            </button>
          ))}
          <a href="#contact" onClick={() => setActiveZone(WindowType.CONTACT)} className="px-5 py-2 bg-studio-text text-white text-[10px] uppercase tracking-widest font-bold hover:bg-studio-accent transition-colors rounded-full">
            Available for work
          </a>
        </div>

        {/* Mobile Nav Trigger */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
          <Menu size={20} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[200] bg-white p-12 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <span className="font-serif italic text-xl">D.P.</span>
              <button onClick={() => setIsMenuOpen(false)}><X size={24} /></button>
            </div>
            <div className="flex flex-col gap-8">
              {menuItems.map((item) => (
                <button
                  key={item.type}
                  onClick={() => { setActiveZone(item.type); setIsMenuOpen(false); }}
                  className="text-5xl font-serif italic text-left hover:translate-x-4 transition-transform"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="flex gap-6">
               <Github size={20} className="opacity-40" />
               <Linkedin size={20} className="opacity-40" />
               <Instagram size={20} className="opacity-40" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Area */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeZone}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {getActiveContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="py-24 px-6 md:px-12 border-t border-studio-pink/30 flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-6xl font-serif italic leading-tight mb-8">
            Let's build something <br /> memorable together.
          </h2>
          <a href="mailto:dinushapushparajah@gmail.com" className="text-xl md:text-2xl font-light border-b border-studio-text pb-2 hover:text-studio-accent hover:border-studio-accent transition-all">
            dinushapushparajah@gmail.com
          </a>
        </div>
        <div className="flex flex-col items-end gap-2 text-[10px] uppercase tracking-widest font-bold opacity-30">
          <span>&copy; 2025 Dinusha Pushparajah</span>
          <span>Designed with Intention</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
