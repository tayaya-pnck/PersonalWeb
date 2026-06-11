import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-darkBg pt-16 pb-8 relative mt-20 transition-colors">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-darkBg px-4 transition-colors">
        <div className="w-12 h-1 bg-gundamBlue"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="flex items-center gap-3 font-mono font-bold text-xl tracking-tighter mb-2 text-primary dark:text-gray-100">
            <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
            <span>SYS.<span className="text-gundamBlue">ATHAYA</span></span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">
            Java Backend Engineer. Based in Jakarta, Indonesia.
          </p>
        </div>

        <div className="flex gap-4">
          <a href="https://github.com/tayaya-pnck" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-primary dark:text-gray-300 hover:border-gundamBlue dark:hover:border-gundamBlue hover:text-gundamBlue dark:hover:text-gundamBlue transition-colors target-lock-hover">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/athayahanif" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-primary dark:text-gray-300 hover:border-gundamBlue dark:hover:border-gundamBlue hover:text-gundamBlue dark:hover:text-gundamBlue transition-colors target-lock-hover">
            <Linkedin size={18} />
          </a>
          <a href="mailto:athayahanif.18@gmail.com" className="w-10 h-10 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-primary dark:text-gray-300 hover:border-mechaRed dark:hover:border-mechaRed hover:text-mechaRed dark:hover:text-mechaRed transition-colors target-lock-hover target-lock-red">
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 mt-12 pt-8 border-t border-gray-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-xs font-mono text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()} Athaya Abdan Hanif
        </div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-gray-400 dark:text-gray-500 tracking-widest bg-gray-50 dark:bg-slate-800 px-3 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-gundamBlue"></span>
          SYSTEM ONLINE // BUILT WITH REACT & TAILWIND
        </div>
      </div>
    </footer>
  );
};

export default Footer;
