
import React, { useState } from 'react';
import Scene3D from './components/Scene3D';
import { WindowType } from './types';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  User, 
  Layers, 
  Map, 
  Mail, 
  GraduationCap, 
  X, 
  Terminal,
  Menu
} from 'lucide-react';

// Import Pages
import Home from './components/pages/Home';
import Journey from './components/pages/Journey';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Qualifications from './components/pages/Qualifications';

const App: React.FC = () => {
  const [activeZone, setActiveZone] = useState<WindowType | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateTo = (type: WindowType) => {
    setActiveZone(type);
    setMobileMenuOpen(false);
  };

  const getPage = () => {
    switch (activeZone) {
      case WindowType.HOME: return <Home />;
      case WindowType.JOURNEY: return <Journey />;
      case WindowType.PROJECTS: return <Projects />;
      case WindowType.CONTACT: return <Contact />;
      case WindowType.QUALIFICATIONS: return <Qualifications />;
      default: return null;
    }
  };

  const menuItems = [
    { type: WindowType.HOME, icon: User, label: "Profile" },
    { type: WindowType.PROJECTS, icon: Layers, label: "Projects" },
    { type: WindowType.JOURNEY, icon: Map, label: "Path" },
    { type: WindowType.QUALIFICATIONS, icon: GraduationCap, label: "Archive" },
    { type: WindowType.CONTACT, icon: Mail, label: "Signal" },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#020203] text-[#00ff41] font-mono selection:bg-[#00ff41] selection:text-black">
      {/* 3D Cyber Layer */}
      <Scene3D onNavigate={navigateTo} activeZone={activeZone || undefined} />

      {/* Global Interface HUD */}
      <header className="fixed top-0 left-0 right-0 z-[200] p-4 md:p-8 flex justify-between items-center pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 group cursor-crosshair pointer-events-auto"
        >
          <Terminal size={20} className="animate-pulse" />
          <span className="text-xs tracking-[0.4em] font-black uppercase">Dinusha.Sys</span>
        </motion.div>

        {/* Desktop Nav - Pointer Events Auto is critical here */}
        <nav className="hidden md:flex items-center gap-2 p-1 bg-black/60 backdrop-blur-xl border border-[#00ff41]/20 rounded-full pointer-events-auto shadow-[0_0_20px_rgba(0,255,65,0.1)]">
          {menuItems.map((item) => (
            <button
              key={item.type}
              onClick={() => navigateTo(item.type)}
              className={`relative px-5 py-2 rounded-full flex items-center gap-2 transition-all hover:bg-[#00ff41]/10 z-10 ${
                activeZone === item.type ? 'text-black' : 'text-[#00ff41]'
              }`}
            >
              <item.icon size={14} className="pointer-events-none" />
              <span className="text-[10px] font-bold uppercase tracking-widest pointer-events-none">{item.label}</span>
              {activeZone === item.type && (
                <motion.div 
                  layoutId="active-pill"
                  className="absolute inset-0 bg-[#00ff41] rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-3 bg-black/40 border border-[#00ff41]/20 rounded-full text-[#00ff41] pointer-events-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[250] bg-black/95 backdrop-blur-2xl flex flex-col p-8 pt-24 gap-6"
          >
            <button onClick={() => setMobileMenuOpen(false)} className="absolute top-8 right-8 text-[#00ff41] p-2">
              <X size={32} />
            </button>
            {menuItems.map((item) => (
              <button
                key={item.type}
                onClick={() => navigateTo(item.type)}
                className={`flex items-center gap-4 text-3xl font-black uppercase tracking-tighter hover:text-white text-left p-2 border-b border-white/5 ${activeZone === item.type ? 'text-white' : 'text-[#00ff41]'}`}
              >
                <item.icon size={24} />
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Overlay */}
      <AnimatePresence>
        {activeZone && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            className="fixed inset-0 z-[150] bg-[#020203]/95 backdrop-blur-3xl overflow-y-auto custom-scrollbar"
          >
            <div className="min-h-screen flex flex-col items-center py-24 md:py-32 px-4 md:px-6">
              <div className="w-full max-w-6xl relative">
                <div className="flex justify-between items-center mb-12 border-b border-[#00ff41]/20 pb-4">
                  <div className="text-[10px] tracking-[0.3em] font-bold opacity-50 uppercase flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#00ff41] rounded-full animate-ping" />
                    Module_Active: {activeZone}
                  </div>
                  <button 
                    onClick={() => setActiveZone(null)}
                    className="p-3 border border-[#00ff41]/40 rounded hover:bg-[#00ff41] hover:text-black transition-all flex items-center gap-2 group"
                  >
                    <span className="text-[10px] uppercase tracking-widest hidden sm:inline">Terminate</span>
                    <X size={20} />
                  </button>
                </div>
                {getPage()}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ambient Hacker Elements */}
      <div className="absolute top-1/2 left-8 -translate-y-1/2 hidden xl:flex flex-col gap-4 opacity-20 text-[8px] pointer-events-none select-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="font-mono">
            {`SEC_LOG::${i} -> ${Math.random().toString(16).slice(2, 10).toUpperCase()}`}
            <span className="ml-2 text-white/20">{`[${new Date().toLocaleTimeString()}]`}</span>
          </div>
        ))}
      </div>

      {/* CRT Scanline & Grain Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-[300] mix-blend-overlay" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[200] bg-[length:100%_2px,3px_100%]" />
    </div>
  );
};

export default App;
