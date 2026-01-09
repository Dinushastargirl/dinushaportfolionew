
import React from 'react';
import { motion } from 'framer-motion';
import { BIO, SKILLS } from '../../constants';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 py-8">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-neon-pink font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Creative Technologist</span>
          <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter">
            CODE <span className="text-transparent border-t-2 border-b-2 border-white px-2">MEETS</span> ART
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl"
        >
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
            I am <span className="text-white font-bold">Dinusha Pushparajah</span>. 
            I architect digital experiences that bridge the gap between technical complexity and human intuition.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-4 bg-white text-black font-bold flex items-center gap-3 hover:bg-neon-cyan transition-colors">
            VIEW EXPERIMENTS <ArrowRight size={18} />
          </button>
          <div className="flex gap-2">
            <a href="#" className="p-4 bg-white/5 border border-white/10 hover:border-white transition-colors">
                <Github size={20} />
            </a>
            <a href="#" className="p-4 bg-white/5 border border-white/10 hover:border-white transition-colors">
                <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 border-t border-white/10 pt-12">
        <div className="space-y-2">
          <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Approach</div>
          <h3 className="text-xl font-bold text-neon-cyan">Rapid Prototyping</h3>
          <p className="text-sm text-gray-400">Turning abstract concepts into functional proof-of-concepts at lightning speed.</p>
        </div>
        <div className="space-y-2">
          <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Stack</div>
          <h3 className="text-xl font-bold text-neon-pink">AI & Computer Vision</h3>
          <p className="text-sm text-gray-400">Leveraging PoseNet, MediaPipe, and Generative AI to create interactive interfaces.</p>
        </div>
        <div className="space-y-2">
          <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Vision</div>
          <h3 className="text-xl font-bold text-neon-yellow">Future Interfaces</h3>
          <p className="text-sm text-gray-400">Exploring spatial computing, hardware integration, and decentralized systems.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;