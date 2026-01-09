
import React from 'react';
import { motion } from 'framer-motion';
// Fixed missing Terminal import
import { ArrowRight, Github, Linkedin, Cpu, Activity, ShieldCheck, Terminal } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="inline-block px-3 py-1 bg-[#00ff41]/10 border border-[#00ff41]/40 rounded text-[10px] font-bold uppercase tracking-[0.2em]">
            Permission: Admin
          </div>
          <h1 className="text-5xl md:text-8xl font-black leading-none tracking-tighter uppercase italic">
            Dinusha <br /> <span className="text-white">Pushparajah</span>
          </h1>
          <p className="text-xl text-[#00ff41]/60 leading-relaxed font-mono">
            Creative Technologist & Builder. <br />
            I bridge the gap between high-level engineering and immersive artistic vision. 
            Currently architecting digital experiences and hardware solutions.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#" className="px-6 py-3 bg-[#00ff41] text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-all">
              Execute Portfolio.sh
            </a>
            <div className="flex gap-4">
              <a href="#" className="p-3 border border-[#00ff41]/20 hover:bg-[#00ff41]/10"><Github size={18} /></a>
              <a href="#" className="p-3 border border-[#00ff41]/20 hover:bg-[#00ff41]/10"><Linkedin size={18} /></a>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 border border-[#00ff41]/20 bg-[#00ff41]/5 rounded group hover:border-[#00ff41] transition-all">
            <Cpu className="mb-4 opacity-50 group-hover:opacity-100" />
            <h3 className="text-lg font-bold mb-2 uppercase tracking-tighter">Hardware Eng</h3>
            <p className="text-xs opacity-60">Architecting 'One Dial' from scratch. IoT & PCB design.</p>
          </div>
          <div className="p-6 border border-[#00ff41]/20 bg-[#00ff41]/5 rounded group hover:border-[#00ff41] transition-all">
            <ShieldCheck className="mb-4 opacity-50 group-hover:opacity-100" />
            <h3 className="text-lg font-bold mb-2 uppercase tracking-tighter">CyberOps</h3>
            <p className="text-xs opacity-60">Security-first development mindset across all technical stacks.</p>
          </div>
          <div className="p-6 border border-[#00ff41]/20 bg-[#00ff41]/5 rounded group hover:border-[#00ff41] transition-all">
            <Activity className="mb-4 opacity-50 group-hover:opacity-100" />
            <h3 className="text-lg font-bold mb-2 uppercase tracking-tighter">AI Systems</h3>
            <p className="text-xs opacity-60">Integrating MediaPipe & computer vision for interaction.</p>
          </div>
          <div className="p-6 border border-[#00ff41]/20 bg-[#00ff41]/5 rounded group hover:border-[#00ff41] transition-all">
            <Terminal className="mb-4 opacity-50 group-hover:opacity-100" />
            <h3 className="text-lg font-bold mb-2 uppercase tracking-tighter">Full Stack</h3>
            <p className="text-xs opacity-60">Python, Rust, React. Building robust backend architectures.</p>
          </div>
        </div>
      </div>
      
      <div className="p-8 border-l-2 border-[#00ff41] bg-black/40">
        <p className="text-sm italic opacity-80 leading-relaxed">
          "The future belongs to those who build it, line by line, circuit by circuit."
        </p>
      </div>
    </div>
  );
};

export default Home;