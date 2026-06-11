import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowRight } from 'lucide-react';
import photo from '../assets/formalphoto.jpg';

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

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl flex-1"
        >
          <div className="flex items-center gap-3 text-mechaRed font-mono font-bold tracking-widest text-sm mb-6">
            <Terminal size={16} />
            <span>SYSTEM_READY</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-4 text-primary dark:text-gray-100">
            Athaya Abdan Hanif
          </h1>
          
          <div className="text-2xl lg:text-4xl font-mono text-gundamBlue h-12 mb-8 flex items-center">
            <span className="text-visorYellow mr-3">{'>'}</span>
            {text}
            <motion.span 
              animate={{ opacity: [1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-3 h-8 bg-gundamBlue ml-1"
            />
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-xl leading-relaxed">
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

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group w-64 md:w-80 aspect-[3/4]"
        >
          {/* Stylized Frame Background */}
          <div className="absolute inset-0 border border-gray-300 dark:border-slate-700 bg-white dark:bg-darkSurface translate-x-3 translate-y-3 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
          
          {/* Target Lock Frame (Persistent 4 corners) */}
          <div className="target-lock-frame">
            <div className="target-lock-corner tl-top-left"></div>
            <div className="target-lock-corner tl-top-right"></div>
            <div className="target-lock-corner tl-bottom-left"></div>
            <div className="target-lock-corner tl-bottom-right"></div>
          </div>

          {/* Image Container */}
          <div className="absolute inset-0 overflow-hidden border border-gray-200 dark:border-slate-700 bg-gray-100 dark:bg-slate-800">
            <img 
              src={photo} 
              alt="Athaya Abdan Hanif" 
              className="w-full h-full object-cover object-top filter grayscale opacity-90 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 mix-blend-multiply dark:mix-blend-luminosity"
            />
            {/* Scanlines Overlay */}
            <div className="absolute inset-0 scanlines opacity-50"></div>
            {/* Blue Tint Overlay (Cyberpunk/Mecha effect) */}
            <div className="absolute inset-0 bg-gundamBlue/10 mix-blend-overlay pointer-events-none"></div>
          </div>
          
          {/* Technical decorative text */}
          <div className="absolute -bottom-6 right-0 font-mono text-[10px] text-gray-400 dark:text-gray-500 tracking-widest text-right">
            IMG_ID // 0x414148 <br/>
            STATUS // ONLINE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
