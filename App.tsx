
import React, { useState } from 'react';
import Scene3D from './components/Scene3D';
import Window from './components/Window';
import { WindowType } from './types';
import { AnimatePresence, motion } from 'framer-motion';
import { Terminal, Cpu, Zap, Activity, Home as HomeIcon, Layout, History, Mail, GraduationCap } from 'lucide-react';

// Import Pages
import Home from './components/pages/Home';
import Journey from './components/pages/Journey';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Qualifications from './components/pages/Qualifications';

const App: React.FC = () => {
  const [activeZone, setActiveZone] = useState<WindowType | null>(null);
  const [logs, setLogs] = useState<string[]>([
    "System initialized...", 
    "Establishing neural link...", 
    "Welcome, Creative Technologist."
  ]);

  const addLog = (msg: string) => {
    setLogs(prev => [...prev.slice(-4), `> ${msg}`]);
  };

  const navigateTo = (type: WindowType) => {
    setActiveZone(type);
    addLog(`Accessing ${type} module...`);
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
    { type: WindowType.HOME, icon: HomeIcon, label: "About" },
    { type: WindowType.PROJECTS, icon: Layout, label: "Projects" },
    { type: WindowType.JOURNEY, icon: History, label: "Journey" },
    { type: WindowType.CONTACT, icon: Mail, label: "Contact" },
    { type: WindowType.QUALIFICATIONS, icon: GraduationCap, label: "Certs" },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black font-mono text-white selection:bg-neon-cyan selection:text-black">
      {/* 3D Core Interaction Layer */}
      <Scene3D onNavigate={navigateTo} activeZone={activeZone || undefined} />

      {/* Interface HUD Overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-4 md:p-8">
        
        {/* Top Header */}
        <div className="flex justify-between items-start">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-neon-cyan/20 border border-neon-cyan flex items-center justify-center rounded">
                <Cpu size={20} className="text-neon-cyan" />
              </div>
              <div>
                <h1 className="text-xl font-black tracking-tighter text-white">DINUSHA.EXE</h1>
                <div className="flex items-center gap-2 text-[8px] text-neon-pink font-bold">
                  <Activity size={10} className="animate-pulse" />
                  <span>CORE_STATUS: OPERATIONAL</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Nav HUD */}
          <div className="hidden lg:flex gap-2 pointer-events-auto">
            {menuItems.map((item) => (
              <button
                key={item.type}
                onClick={() => navigateTo(item.type)}
                className={`flex flex-col items-center gap-1 p-3 rounded border transition-all ${
                  activeZone === item.type 
                    ? 'bg-neon-cyan/20 border-neon-cyan text-neon-cyan' 
                    : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/40 hover:text-white'
                }`}
              >
                <item.icon size={16} />
                <span className="text-[8px] font-bold uppercase tracking-widest">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Panel */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-4">
          {/* Terminal Diagnostics */}
          <div className="w-full max-w-sm pointer-events-auto">
            <div className="bg-black/80 backdrop-blur-xl border border-white/10 p-4 rounded-lg shadow-2xl">
              <div className="flex items-center justify-between mb-2 border-b border-white/5 pb-1">
                <div className="flex items-center gap-2 text-neon-yellow">
                  <Terminal size={12} />
                  <span className="text-[9px] font-bold uppercase tracking-widest">Diagnostics</span>
                </div>
                <div className="text-[8px] text-gray-600">LN 42 COL 10</div>
              </div>
              <div className="space-y-1 h-20 overflow-hidden">
                {logs.map((log, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -5 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    key={i} 
                    className="text-[10px] text-gray-400"
                  >
                    {log}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Controls */}
          <div className="flex gap-4 pointer-events-auto bg-white/5 p-2 rounded-full border border-white/10 backdrop-blur-md">
            <button 
              onClick={() => setActiveZone(null)}
              className="p-4 rounded-full bg-neon-pink/10 border border-neon-pink/30 hover:bg-neon-pink/20 transition-all text-neon-pink flex items-center justify-center shadow-[0_0_20px_rgba(255,0,255,0.2)]"
              title="Return to Core"
            >
              <Zap size={24} fill="currentColor" />
            </button>
          </div>
        </div>
      </div>

      {/* Active Module Container */}
      <AnimatePresence>
        {activeZone && (
          <Window
            id={activeZone}
            title={activeZone.toString()}
            zIndex={50}
            onClose={() => setActiveZone(null)}
            onMinimize={() => setActiveZone(null)}
            onClick={() => {}}
          >
            {getPage()}
          </Window>
        )}
      </AnimatePresence>

      {/* Static Visual Overlays */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50" />
      <div className="absolute inset-0 pointer-events-none border-[20px] border-white/5 z-40" />
    </div>
  );
};

export default App;
