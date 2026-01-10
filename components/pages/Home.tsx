
import React from 'react';
import { motion } from 'framer-motion';
import { USER_PORTRAIT_MAIN, SKILLS } from '../../constants';
import { ArrowUpRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="pt-40 px-6 md:px-12 pb-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-studio-text/30">Profile / Creative Technologist</span>
              <h1 className="text-6xl md:text-8xl font-serif italic leading-[0.9] pink-gradient-text">
                Solving problems <br /> through code <br /> and design.
              </h1>
            </div>

            <p className="text-xl md:text-2xl font-light leading-relaxed text-studio-text/70 max-w-lg">
              I am <span className="text-studio-text font-medium">Dinusha Pushparajah</span>. 
              I specialize in bridging high-level engineering with immersive artistic vision. 
              From IoT hardware to real-time AI interactions.
            </p>

            <div className="pt-8 grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <h4 className="text-[10px] uppercase tracking-widest font-black">Expertise</h4>
                <ul className="text-sm space-y-1 text-studio-text/60">
                  <li>Full Stack Development</li>
                  <li>IoT & Hardware Eng.</li>
                  <li>AI / Machine Learning</li>
                  <li>Product Strategy</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-[10px] uppercase tracking-widest font-black">Currently</h4>
                <ul className="text-sm space-y-1 text-studio-text/60">
                  <li>Uni. of Colombo, CS</li>
                  <li>UoPeople Scholarship</li>
                  <li>One Dial Hardware</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-studio-pink/20 rounded-2xl overflow-hidden soft-glow">
              <img 
                src={USER_PORTRAIT_MAIN} 
                alt="Dinusha" 
                className="w-full h-full object-cover mix-blend-multiply opacity-80"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl border border-studio-pink/20 hidden md:block">
              <span className="block text-4xl font-serif italic mb-2">20+</span>
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Projects Launched</span>
            </div>
          </motion.div>
        </div>

        {/* Skills Marquee style */}
        <div className="mt-40 border-t border-studio-pink/30 pt-12">
          <h3 className="text-[10px] uppercase tracking-[0.3em] font-black mb-12 text-center opacity-30 italic">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            {SKILLS.map((skill) => (
              <span key={skill} className="text-3xl md:text-5xl font-serif italic text-studio-text/20 hover:text-studio-accent transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
