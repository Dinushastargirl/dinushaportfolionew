
import React, { useState } from 'react';
import { PROJECTS, PROJECTS_INTRO, PROJECTS_SUMMARY, MINI_TOOLS } from '../../constants';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Construction, Box, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

const Projects: React.FC = () => {
  // Filter out projects
  const highlightProjects = PROJECTS.filter(p => p.status === 'highlight');
  const completedProjects = PROJECTS.filter(p => p.status === 'completed');
  const devProjects = PROJECTS.filter(p => p.status === 'development');

  const [expandedStory, setExpandedStory] = useState<string | null>(null);

  return (
    <div className="pb-12 px-2 md:px-4">
      
      {/* Header & Intro */}
      <div className="mb-12 border-b border-white/10 pb-8">
        <h2 className="text-4xl font-bold text-neon-cyan mb-4">Project Portfolio</h2>
        <div className="p-6 bg-white/5 rounded-xl border-l-4 border-neon-pink">
            <p className="text-gray-300 leading-relaxed italic">
                "{PROJECTS_INTRO}"
            </p>
        </div>
      </div>

      {/* HIGHLIGHT SECTION (PickHer) */}
      {highlightProjects.map((project) => (
        <div key={project.id} className="mb-16">
            <h3 className="text-xl font-bold text-neon-pink mb-6 flex items-center gap-2 animate-pulse">
                <Sparkles className="text-neon-pink" /> Featured Solution
            </h3>
            
            <div className="relative p-[2px] rounded-2xl overflow-hidden">
                {/* Moving Border Animation Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-pink via-purple-500 to-neon-cyan animate-[spin_4s_linear_infinite] opacity-75" />
                
                <div className="relative bg-[#15151a] rounded-2xl overflow-hidden p-6 md:p-8 flex flex-col lg:flex-row gap-8">
                    <div className="w-full lg:w-1/2 h-64 md:h-auto min-h-[300px] rounded-xl overflow-hidden shadow-2xl border border-white/10 relative">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                            <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                        <div>
                            <p className="text-gray-300 mb-6 text-lg leading-relaxed border-l-2 border-neon-pink pl-4">
                                {project.description}
                            </p>
                            
                            {project.story && (
                                <div className="bg-white/5 rounded-lg p-6 mb-6 border border-white/5">
                                    <button 
                                        onClick={() => setExpandedStory(expandedStory === project.id ? null : project.id)}
                                        className="flex items-center justify-between w-full text-left mb-2 group"
                                    >
                                        <h4 className="text-neon-yellow font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                            Why this solution? 
                                        </h4>
                                        {expandedStory === project.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                    </button>
                                    
                                    <motion.div 
                                        initial={false}
                                        animate={{ height: expandedStory === project.id ? 'auto' : '3rem', opacity: 1 }}
                                        className={`overflow-hidden text-gray-400 text-sm leading-relaxed ${expandedStory === project.id ? '' : 'mask-fade-bottom'}`}
                                    >
                                        <div className="whitespace-pre-line">
                                            {project.story}
                                        </div>
                                    </motion.div>
                                    {expandedStory !== project.id && (
                                        <button onClick={() => setExpandedStory(project.id)} className="text-xs text-neon-cyan mt-1 hover:underline">Read full story</button>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t, ti) => (
                                    <span key={ti} className="px-3 py-1 bg-gradient-to-r from-pink-900/30 to-purple-900/30 border border-pink-500/30 rounded-full text-xs text-pink-200">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            
                            {project.links && (
                                <div className="flex gap-4">
                                    {project.links.map((link, li) => (
                                        <a 
                                            key={li} 
                                            href={link.url} 
                                            target="_blank" 
                                            rel="noreferrer"
                                            className="px-8 py-3 bg-gradient-to-r from-neon-pink to-purple-600 hover:from-neon-pink hover:to-neon-pink text-white font-bold rounded-lg shadow-lg shadow-pink-500/20 flex items-center gap-2 transition-all transform hover:-translate-y-1"
                                        >
                                            <ExternalLink size={18} /> {link.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      ))}

      {/* Main Projects Grid */}
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <Box className="text-neon-cyan" /> Built & Delivered
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {completedProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className={`group relative bg-[#15151a] rounded-xl overflow-hidden border border-white/5 hover:border-white/20 hover:shadow-2xl transition-all duration-500 flex flex-col`}
          >
            {/* Image Header */}
            <div className="h-48 overflow-hidden relative">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors" />
            </div>

            <div className="p-6 flex-1 flex flex-col">
                <h3 className={`text-xl font-bold mb-2 text-white group-hover:text-neon-cyan transition-colors`}>
                    {project.title}
                </h3>
                
                <p className="text-sm text-gray-400 mb-6 flex-grow leading-relaxed line-clamp-4">
                  {project.description}
                </p>

                <div className="space-y-4 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, ti) => (
                      <span key={ti} className="text-[10px] px-2 py-1 bg-black/40 rounded border border-white/10 text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {project.links && project.links.length > 0 ? (
                        project.links.map((link, li) => (
                            <a 
                                key={li} 
                                href={link.url} 
                                target="_blank" 
                                rel="noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-medium bg-white/10 hover:bg-neon-cyan hover:text-black rounded transition-colors"
                            >
                                <ExternalLink size={14} /> {link.label}
                            </a>
                        ))
                    ) : (
                        <span className="text-xs text-gray-500 italic">Internal Tool / No Public Link</span>
                    )}
                  </div>
                </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mini Tools Section */}
      <div className="mb-16 bg-white/5 rounded-xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-neon-yellow mb-4">🎨 Additional Mini Tools</h3>
        <p className="text-sm text-gray-400 mb-6">Built to solve fast internal requirements or workshop needs.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {MINI_TOOLS.map((tool, i) => (
                <a 
                    key={i} 
                    href={tool.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="block p-4 bg-black/40 rounded-lg border border-white/5 hover:border-neon-yellow/50 hover:bg-white/5 transition-all"
                >
                    <div className="text-sm font-bold text-white mb-1">{tool.title}</div>
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                        View Tool <ExternalLink size={10} />
                    </div>
                </a>
            ))}
        </div>
      </div>

      {/* Under Development Section */}
      {devProjects.length > 0 && (
          <div className="mb-16">
             <h3 className="text-xl font-bold text-neon-pink mb-6 flex items-center gap-2">
                <Construction className="text-neon-pink" /> Under Development
             </h3>
             <div className="grid grid-cols-1 gap-6">
                {devProjects.map((project) => (
                    <div key={project.id} className="relative overflow-hidden rounded-xl border border-neon-pink/30 bg-gradient-to-r from-pink-900/20 to-purple-900/20 p-8 flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-full md:w-1/3 h-48 rounded-lg overflow-hidden shadow-2xl border border-white/10">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80" />
                        </div>
                        <div className="flex-1">
                            <div className="inline-block px-3 py-1 bg-neon-pink/20 text-neon-pink text-xs font-bold rounded-full mb-3">IN PROGRESS</div>
                            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <div className="flex gap-2">
                                {project.tech.map((t, ti) => (
                                <span key={ti} className="text-xs px-3 py-1 bg-black/40 rounded border border-neon-pink/20 text-pink-200">
                                    {t}
                                </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
             </div>
          </div>
      )}

      {/* Summary Footer */}
      <div className="text-center max-w-2xl mx-auto mt-20 opacity-80">
        <div className="w-16 h-1 bg-gradient-to-r from-neon-cyan to-neon-pink mx-auto mb-6 rounded-full" />
        <p className="text-lg font-light text-gray-300 italic">
            "{PROJECTS_SUMMARY}"
        </p>
      </div>

    </div>
  );
};

export default Projects;