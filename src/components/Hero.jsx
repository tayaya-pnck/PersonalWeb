import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Java Backend Engineer.";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 relative">
      {/* Background aesthetic elements */}
      <div className="absolute top-1/4 right-0 opacity-10 dark:opacity-5 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 100 100" className="animate-spin" style={{ animationDuration: '60s' }}>
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          <polygon points="50,5 95,50 50,95 5,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl z-10"
      >
        <div className="flex items-center gap-3 text-mechaRed font-mono font-bold tracking-widest text-sm mb-6">
          <Terminal size={16} />
          <span>SYSTEM_READY</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-primary dark:text-gray-100">
          Athaya Abdan Hanif
        </h1>
        
        <div className="text-2xl md:text-4xl font-mono text-gundamBlue h-12 mb-8 flex items-center">
          <span className="text-visorYellow mr-3">{'>'}</span>
          {text}
          <motion.span 
            animate={{ opacity: [1, 0] }} 
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-3 h-8 bg-gundamBlue ml-1"
          />
        </div>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed">
          Detail-oriented Java Backend Engineer with a strong foundation in Spring Boot, RESTful API development, and system architecture. Building production-ready applications with clean code.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#projects" className="bg-gundamBlue text-white px-8 py-4 font-mono font-bold tracking-wider hover:bg-gundamBlue/90 transition-all flex items-center justify-center gap-2 target-lock-hover">
            VIEW PROJECTS
            <ArrowRight size={18} />
          </a>
          <a href="#contact" className="border-2 border-primary dark:border-gray-500 text-primary dark:text-gray-300 px-8 py-4 font-mono font-bold tracking-wider hover:border-mechaRed dark:hover:border-mechaRed hover:text-mechaRed dark:hover:text-mechaRed transition-all flex items-center justify-center target-lock-hover target-lock-red">
            CONTACT ME
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
