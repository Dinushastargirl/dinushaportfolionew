
import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../../constants';
import { ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="pt-48 px-6 md:px-12 pb-40 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-24">
        <div className="space-y-12">
          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-studio-accent">Availability / 2025</span>
            <h2 className="text-7xl md:text-9xl font-serif italic leading-[0.8] pink-gradient-text">
              Drop a <br /> signal.
            </h2>
          </div>
          <p className="text-2xl font-light text-studio-text/60 leading-relaxed max-w-md">
            I am currently open to collaborations, freelance projects, and design engineering opportunities.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-12">
          <div className="grid gap-8">
            <a href={`mailto:${CONTACT_INFO.email}`} className="group flex justify-between items-center border-b border-studio-pink/30 pb-8 hover:border-studio-accent transition-all">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest font-black opacity-30">Email</span>
                <p className="text-3xl font-serif italic">{CONTACT_INFO.email}</p>
              </div>
              <ArrowUpRight className="opacity-20 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="group flex justify-between items-center border-b border-studio-pink/30 pb-8 hover:border-studio-accent transition-all">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest font-black opacity-30">Network</span>
                <p className="text-3xl font-serif italic">LinkedIn</p>
              </div>
              <ArrowUpRight className="opacity-20 group-hover:opacity-100 transition-opacity" />
            </a>

            <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="group flex justify-between items-center border-b border-studio-pink/30 pb-8 hover:border-studio-accent transition-all">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest font-black opacity-30">Source</span>
                <p className="text-3xl font-serif italic">GitHub</p>
              </div>
              <ArrowUpRight className="opacity-20 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
