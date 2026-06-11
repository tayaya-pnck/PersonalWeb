import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Web & Operations Assistant',
      company: 'AHA Food (Family Business)',
      period: 'January 2026 - present',
      points: [
        'Built, deployed, and currently maintain the company\'s business website to drive digital sales. (AHA Food — Premium Frozen Seafood dari Sulawesi Selatan)',
        'Support daily business operations, translating business needs into digital marketing strategies.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl font-mono font-bold text-primary dark:text-gray-100 tracking-tighter uppercase">
          Operation<span className="text-gundamBlue">_Logs</span>
        </h2>
        <div className="h-px bg-gray-200 dark:bg-slate-800 flex-grow relative">
           <span className="absolute right-0 -top-1 w-2 h-2 bg-gundamBlue"></span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-0"
          >
            {/* Desktop timeline line */}
            <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-px bg-gray-200 dark:bg-slate-800 transform -translate-x-1/2"></div>
            
            {/* Mobile timeline line */}
            <div className="md:hidden absolute left-0 top-2 bottom-0 w-px bg-gray-200 dark:bg-slate-800"></div>

            <div className="md:grid md:grid-cols-4 gap-8 relative">
              {/* Timeline Node (Desktop) */}
              <div className="hidden md:flex absolute left-1/4 top-1.5 w-4 h-4 bg-white dark:bg-darkBg border-2 border-visorYellow transform -translate-x-1/2 items-center justify-center z-10 transition-colors">
                <div className="w-1 h-1 bg-gundamBlue"></div>
              </div>

              {/* Timeline Node (Mobile) */}
              <div className="md:hidden absolute -left-1.5 top-1.5 w-4 h-4 bg-white dark:bg-darkBg border-2 border-visorYellow flex items-center justify-center z-10 transition-colors">
                <div className="w-1 h-1 bg-gundamBlue"></div>
              </div>

              {/* Time period */}
              <div className="col-span-1 md:text-right pt-1 mb-2 md:mb-0 pr-8">
                <span className="font-mono text-sm font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-slate-800 px-2 py-1 inline-block">
                  {exp.period}
                </span>
              </div>

              {/* Content */}
              <div className="col-span-3 bg-white dark:bg-darkSurface border border-gray-200 dark:border-slate-800 p-6 target-lock-hover group hover:border-visorYellow dark:hover:border-visorYellow transition-colors relative">
                <h3 className="text-xl font-bold text-primary dark:text-gray-100 mb-1">{exp.title}</h3>
                <div className="font-mono text-sm text-gundamBlue mb-4">{exp.company}</div>
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-mechaRed mt-1 font-mono">{'>'}</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
