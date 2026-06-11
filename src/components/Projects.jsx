import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import placeholderImg from '../assets/project_placeholder.png';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Finance Tracker',
      year: '2026',
      tech: ['Spring Boot 4', 'Java 21', 'JWT', 'PostgreSQL', 'React'],
      description: 'Secure finance application with stateless authentication. Built complex financial calculations using Java Streams API and BigDecimal. Features a responsive React dashboard consuming the REST API.',
      githubLink: 'https://github.com/tayaya-pnck/personal-finance-tracker'
    },
    {
      title: 'UMKM Inventory Stock Prediction',
      year: '2026',
      tech: ['Java', 'Spring Boot', 'Python', 'Scikit-Learn'],
      description: 'RESTful API serving inventory predictions based on historical sales data. Integrated a time-series forecasting model (85% accuracy) into the Java backend via a REST endpoint.',
      githubLink: 'https://github.com/tayaya-pnck/umkm-inventory-prediction'
    },
    {
      title: 'Gym Reminder & Progress Tracker',
      year: '2026',
      tech: ['Spring Boot', 'MySQL', 'Spring Task', 'JPA'],
      description: 'Lifestyle productivity backend with automated notification scheduling and workout tracking. Designed a relational database schema and leveraged Lombok to reduce boilerplate.',
      githubLink: 'https://github.com/tayaya-pnck/gym-tracker-backend'
    },
    {
      title: 'FindQuest – Gamified Gig Platform',
      year: '2026',
      tech: ['Supabase', 'PostgreSQL', 'System Design'],
      description: 'Architected cloud backend infrastructure. Designed DB schema to handle user locations, points, and task queues. Translated PRD into technical backend specifications.',
      githubLink: 'https://github.com/tayaya-pnck/findquest-system-design'
    },
    {
      title: 'Respiratory Disease Classification',
      year: '2025',
      tech: ['Python', 'CNN-BiGRU', 'Machine Learning'],
      description: 'Co-authored a hybrid CNN-BiGRU model achieving 97% accuracy. Published at Brawijaya International Conference 2025.',
      githubLink: 'https://github.com/tayaya-pnck/respiratory-disease-ml'
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
          <motion.a 
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="block bg-white dark:bg-darkSurface border border-gray-200 dark:border-slate-800 flex flex-col h-full relative group transition-all hover:border-gundamBlue dark:hover:border-gundamBlue cursor-pointer"
          >
            {/* Top Image Section */}
            <div className="relative w-full h-48 overflow-hidden bg-gray-100 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-800">
              <img 
                src={placeholderImg} 
                alt={`${project.title} architecture`} 
                className="w-full h-full object-cover filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 mix-blend-multiply dark:mix-blend-luminosity"
              />
              <div className="absolute inset-0 scanlines opacity-40"></div>
              <div className="absolute inset-0 bg-gundamBlue/10 mix-blend-overlay"></div>
              
              {/* Year Badge on Image */}
              <div className="absolute top-4 right-4 font-mono text-xs font-bold text-gray-400 dark:text-gray-300 bg-white/90 dark:bg-slate-900/90 px-2 py-1 border border-gray-200 dark:border-slate-700 shadow-sm">
                {project.year}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-3">
                <FolderGit2 className="text-gundamBlue" size={24} strokeWidth={1.5} />
                <ExternalLink className="text-gray-400 group-hover:text-mechaRed transition-colors" size={20} strokeWidth={1.5} />
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
            </div>

            {/* Target Lock Frame */}
            <div className="target-lock-frame opacity-0 group-hover:opacity-100 transition-opacity z-20">
              <div className="target-lock-corner tl-top-left"></div>
              <div className="target-lock-corner tl-top-right"></div>
              <div className="target-lock-corner tl-bottom-left"></div>
              <div className="target-lock-corner tl-bottom-right"></div>
            </div>

            {/* Hover overlay micro-animation */}
            <div className="absolute inset-0 bg-gundamBlue/5 dark:bg-gundamBlue/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center z-30">
              <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 font-mono text-xs font-bold text-gundamBlue dark:text-gundamBlue tracking-widest bg-white dark:bg-slate-800 px-3 py-2 border border-gundamBlue dark:border-gundamBlue shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-mechaRed animate-pulse"></span>
                ACCESS REPOSITORY // GITHUB
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
