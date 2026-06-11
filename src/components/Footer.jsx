import React from 'react';
import { Mail } from 'lucide-react';
import logo from '../assets/logo.png';

const GithubIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.1-.34 6.33-1.54 6.33-7.36 0-1.6-.57-2.9-1.5-3.9.15-.38.65-1.85-.15-3.85 0 0-1.25-.4-4 1.4a13.9 13.9 0 0 0-7 0c-2.75-1.8-4-1.4-4-1.4-.8 2-.3 3.47-.15 3.85-.93 1-1.5 2.3-1.5 3.9 0 5.8 3.23 7 6.33 7.35-.9.8-1.1 2-1.1 3.02V22"></path>
    <path d="M9 20c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

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
            <GithubIcon size={18} />
          </a>
          <a href="https://linkedin.com/in/athayahanif" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-primary dark:text-gray-300 hover:border-gundamBlue dark:hover:border-gundamBlue hover:text-gundamBlue dark:hover:text-gundamBlue transition-colors target-lock-hover">
            <LinkedinIcon size={18} />
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
