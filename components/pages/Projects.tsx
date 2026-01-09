
import React from 'react';
import { PROJECTS } from '../../constants';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const highlight = PROJECTS.find(p => p.status === 'highlight');
  const others = PROJECTS.filter(p => p.status !== 'highlight');

  return (
    <div className="space-y-32">
      {/* Featured Project */}
      {highlight && (
        <section className="relative group">
          <div className="flex flex-col gap-12">
            <div className="flex items-center gap-4">
              <span className="text-[10px] tracking-[0.5em] font-bold text-white/20 uppercase">Featured Experiment</span>
              <div className="flex-1 h-px bg-white/5" />
            </div>
            
            <div className="grid lg:grid-cols-5 gap-12 items-end">
              <div className="lg:col-span-3">
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
                  {highlight.title}
                </h2>
                <p className="text-2xl text-white/40 font-light leading-relaxed max-w-2xl">
                  {highlight.description}
                </p>
              </div>
              <div className="lg:col-span-2 space-y-8">
                <div className="flex flex-wrap gap-3">
                  {highlight.tech.map(t => (
                    <span key={t} className="px-4 py-2 bg-white/5 rounded-full text-[10px] uppercase tracking-widest border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
                <a href={highlight.links?.[0]?.url} className="inline-flex items-center gap-6 px-10 py-5 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-white/90 transition-all">
                  Launch Project <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="aspect-[21/9] w-full overflow-hidden rounded-3xl border border-white/10">
               <img 
                 src={highlight.image} 
                 alt={highlight.title} 
                 className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
               />
            </div>
          </div>
        </section>
      )}

      {/* Projects Grid */}
      <section className="space-y-12">
        <div className="flex items-center gap-4">
          <span className="text-[10px] tracking-[0.5em] font-bold text-white/20 uppercase">Archive</span>
          <div className="flex-1 h-px bg-white/5" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {others.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] w-full bg-white/5 rounded-2xl overflow-hidden mb-6 border border-white/5 group-hover:border-white/20 transition-all">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 flex items-center justify-between">
                {project.title}
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-white/40 font-light line-clamp-2">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
