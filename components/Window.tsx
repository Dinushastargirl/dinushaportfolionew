
import React from 'react';
import { motion } from 'framer-motion';
import { X, CornerRightDown } from 'lucide-react';
import { WindowType } from '../types';

interface WindowProps {
  id: WindowType;
  title: string;
  children: React.ReactNode;
  onClose: (id: WindowType) => void;
  onMinimize: (id: WindowType) => void;
  zIndex: number;
  onClick: (id: WindowType) => void;
}

const Window: React.FC<WindowProps> = ({ id, title, children, onClose, onMinimize, zIndex, onClick }) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0, x: '10%' }}
      animate={{ scale: 1, opacity: 1, x: 0 }}
      exit={{ scale: 0.8, opacity: 0, x: '-10%' }}
      transition={{ type: 'spring', damping: 20, stiffness: 100 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 pointer-events-none"
      onMouseDown={() => onClick(id)}
    >
      <div className="w-full max-w-6xl h-full bg-[#050508]/90 backdrop-blur-3xl border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.8)] pointer-events-auto flex flex-col relative overflow-hidden">
        {/* Holographic Border Elements */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-cyan" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-cyan" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-cyan" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-cyan" />
        
        {/* Window Header */}
        <div className="h-16 flex items-center justify-between px-8 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-4">
            <CornerRightDown size={20} className="text-neon-cyan" />
            <h2 className="text-lg font-black tracking-[0.2em] uppercase text-white">{title}</h2>
          </div>
          <button 
            onClick={(e) => { e.stopPropagation(); onClose(id); }}
            className="group flex items-center gap-2 hover:bg-neon-pink/20 px-4 py-2 transition-all border border-transparent hover:border-neon-pink"
          >
            <span className="text-[10px] font-bold text-gray-500 group-hover:text-neon-pink">CLOSE_MODULE</span>
            <X size={20} className="text-gray-500 group-hover:text-neon-pink" />
          </button>
        </div>

        {/* Window Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 scroll-smooth custom-scrollbar">
          {children}
        </div>

        {/* Footer info line */}
        <div className="h-6 bg-white/5 border-t border-white/5 px-8 flex items-center justify-between">
          <span className="text-[8px] text-gray-600 tracking-widest font-bold">SECURE_CONNECTION_STABLE</span>
          <span className="text-[8px] text-gray-600 font-mono tracking-widest">MODULE_ID: {id}_001</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Window;