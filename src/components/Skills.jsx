import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Code, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Operations',
      icon: <Server size={20} className="text-gundamBlue" />,
      skills: ['Java 21+', 'Spring Boot 3/4', 'Spring Security', 'JWT', 'Spring Data JPA', 'Hibernate', 'Maven', 'RESTful APIs', 'Swagger/OpenAPI']
    },
    {
      title: 'Database & Infra',
      icon: <Database size={20} className="text-mechaRed" />,
      skills: ['PostgreSQL', 'MySQL', 'Docker', 'Git & GitHub', 'Microservices (Basics)']
    },
    {
      title: 'Data & Others',
      icon: <Cpu size={20} className="text-visorYellow" />,
      skills: ['Python', 'SQL', 'Golang', 'NumPy', 'Pandas', 'Scikit-Learn', 'System Design']
    },
    {
      title: 'Frontend',
      icon: <Code size={20} className="text-primary" />,
      skills: ['React', 'Tailwind CSS', 'Axios', 'CORS Config', 'Framer Motion']
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-mono font-bold text-primary dark:text-gray-100 tracking-tighter uppercase">
          Technical<span className="text-gundamBlue">_Specs</span>
        </h2>
        <div className="h-px bg-gray-200 dark:bg-slate-800 flex-grow relative">
           <span className="absolute right-0 -top-1 w-2 h-2 bg-gundamBlue"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white dark:bg-darkSurface border border-gray-200 dark:border-slate-800 p-6 shadow-sm relative group target-lock-hover transition-colors"
          >
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 bg-gray-200 dark:bg-slate-700 group-hover:bg-gundamBlue transition-colors" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-gray-200 dark:bg-slate-700 group-hover:bg-mechaRed transition-colors" />

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-slate-800">
              {category.icon}
              <h3 className="font-mono font-bold text-lg tracking-wide text-primary dark:text-gray-200">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map(skill => (
                <span 
                  key={skill} 
                  className="text-xs font-mono font-medium bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-gray-300 px-3 py-1.5 border border-gray-200 dark:border-slate-700 hover:border-gundamBlue dark:hover:border-gundamBlue hover:text-gundamBlue dark:hover:text-gundamBlue cursor-default transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
