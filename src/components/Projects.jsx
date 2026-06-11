import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Finance Tracker',
      year: '2026',
      tech: ['Spring Boot 4', 'Java 21', 'JWT', 'PostgreSQL', 'React'],
      description: 'Secure finance application with stateless authentication. Built complex financial calculations using Java Streams API and BigDecimal. Features a responsive React dashboard consuming the REST API.'
    },
    {
      title: 'UMKM Inventory Stock Prediction',
      year: '2026',
      tech: ['Java', 'Spring Boot', 'Python', 'Scikit-Learn'],
      description: 'RESTful API serving inventory predictions based on historical sales data. Integrated a time-series forecasting model (85% accuracy) into the Java backend via a REST endpoint.'
    },
    {
      title: 'Gym Reminder & Progress Tracker',
      year: '2026',
      tech: ['Spring Boot', 'MySQL', 'Spring Task', 'JPA'],
      description: 'Lifestyle productivity backend with automated notification scheduling and workout tracking. Designed a relational database schema and leveraged Lombok to reduce boilerplate.'
    },
    {
      title: 'FindQuest – Gamified Gig Platform',
      year: '2026',
      tech: ['Supabase', 'PostgreSQL', 'System Design'],
      description: 'Architected cloud backend infrastructure. Designed DB schema to handle user locations, points, and task queues. Translated PRD into technical backend specifications.'
    },
    {
      title: 'Respiratory Disease Classification',
      year: '2025',
      tech: ['Python', 'CNN-BiGRU', 'Machine Learning'],
      description: 'Co-authored a hybrid CNN-BiGRU model achieving 97% accuracy. Published at Brawijaya International Conference 2025.'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="flex items-center gap-4 mb-12 flex-row-reverse">
        <h2 className="text-3xl font-mono font-bold text-primary dark:text-gray-100 tracking-tighter uppercase">
          Deployed<span className="text-gundamBlue">_Systems</span>
        </h2>
        <div className="h-px bg-gray-200 dark:bg-slate-800 flex-grow relative">
           <span className="absolute left-0 -top-1 w-2 h-2 bg-gundamBlue"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white dark:bg-darkSurface border border-gray-200 dark:border-slate-800 p-6 flex flex-col h-full relative group target-lock-hover transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <FolderGit2 className="text-gundamBlue" size={28} strokeWidth={1.5} />
              <div className="font-mono text-xs font-bold text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-slate-800 px-2 py-1">
                {project.year}
              </div>
            </div>

            <h3 className="text-lg font-bold mb-3 text-primary dark:text-gray-200 group-hover:text-gundamBlue dark:group-hover:text-gundamBlue transition-colors">
              {project.title}
            </h3>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-slate-800">
              {project.tech.map(t => (
                <span key={t} className="text-xs font-mono text-gundamBlue bg-blue-50 dark:bg-gundamBlue/10 px-2 py-1">
                  {t}
                </span>
              ))}
            </div>

            {/* Hover overlay micro-animation */}
            <div className="absolute inset-0 bg-gundamBlue/5 dark:bg-gundamBlue/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center">
              <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 font-mono text-xs font-bold text-gundamBlue dark:text-gundamBlue tracking-widest bg-white dark:bg-slate-800 px-3 py-1 border border-gundamBlue dark:border-gundamBlue shadow-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-mechaRed animate-pulse"></span>
                SYSTEM ACTIVE
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
