
import React from 'react';
import { PROJECTS } from '../../constants';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="pt-48 pb-40">
      {/* Hero Statement */}
      <section className="px-6 md:px-12 mb-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-studio-accent">Featured Experiments</span>
          <h2 className="text-6xl md:text-9xl font-serif italic leading-[0.85] tracking-tighter">
            Digital craftsmanship <br /> driven by <span className="pink-gradient-text">curiosity.</span>
          </h2>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 md:px-12">
        <div className="grid gap-40 max-w-7xl mx-auto">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`grid lg:grid-cols-12 gap-12 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
            >
              {/* Project Image */}
              <div className={`lg:col-span-8 group relative overflow-hidden rounded-2xl bg-studio-pink/10 soft-glow ${index % 2 === 0 ? '' : 'lg:order-2'}`}>
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-studio-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Project Info */}
              <div className={`lg:col-span-4 space-y-8 ${index % 2 === 0 ? '' : 'lg:order-1'}`}>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    {project.tech.slice(0, 2).map(t => (
                      <span key={t} className="text-[9px] uppercase tracking-widest font-bold opacity-40">{t}</span>
                    ))}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-serif italic leading-tight">{project.title}</h3>
                  <p className="text-sm text-studio-text/60 leading-relaxed font-light">
                    {project.description.slice(0, 160)}...
                  </p>
                </div>
                
                <div className="flex items-center gap-6">
                  <a 
                    href={project.links?.[0]?.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="group flex items-center gap-4 text-[10px] uppercase tracking-widest font-black"
                  >
                    View Project
                    <div className="w-10 h-10 border border-studio-text/10 rounded-full flex items-center justify-center group-hover:bg-studio-accent group-hover:border-studio-accent group-hover:text-white transition-all">
                      <ArrowUpRight size={14} />
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Archive / More */}
      <section className="mt-60 px-6 md:px-12 text-center">
        <h3 className="text-[10px] uppercase tracking-[0.5em] font-black mb-12 opacity-30">And many more...</h3>
        <div className="max-w-2xl mx-auto flex flex-wrap justify-center gap-4">
          {["AI Skin Scanner", "PickHer", "Heart Rate Art", "One Dial Hardware", "Nekatha Countdown"].map(item => (
            <span key={item} className="px-6 py-2 border border-studio-pink rounded-full text-xs font-medium text-studio-text/60">{item}</span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
