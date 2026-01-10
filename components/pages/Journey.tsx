
import React from 'react';
import { TIMELINE } from '../../constants';
import { motion } from 'framer-motion';

const Journey: React.FC = () => {
  return (
    <div className="pt-48 px-6 md:px-12 pb-40">
      <div className="max-w-4xl mx-auto">
        <div className="mb-24 space-y-6">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-studio-accent">Career / Evolution</span>
          <h2 className="text-6xl md:text-8xl font-serif italic leading-none">The Story.</h2>
        </div>

        <div className="space-y-32">
          {TIMELINE.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-12 gap-8 items-start relative"
            >
              <div className="md:col-span-3">
                <span className="text-5xl font-serif italic text-studio-pink">{event.year}</span>
              </div>
              <div className="md:col-span-9 space-y-4">
                <h3 className="text-3xl font-serif italic leading-tight">{event.title}</h3>
                <p className="text-lg text-studio-text/60 font-light leading-relaxed max-w-xl">
                  {event.description}
                </p>
                <div className="w-12 h-px bg-studio-pink mt-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;
