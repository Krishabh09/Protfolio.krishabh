/* ============================================
   Projects.jsx - Projects showcase section
   Features: animated project cards, tech tags,
   hover effects, staggered reveal
   ============================================ */

import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

/* Project data */
const projects = [
  {
    title: 'Customer Churn Prediction',
    techs: ['Python', 'Machine Learning', 'Streamlit'],
    description:
      'Machine learning model predicting customer churn using preprocessing, feature selection, SMOTE balancing, and a Streamlit interface.',
    gradient: 'from-blue-500/20 to-purple-500/20',
    iconBg: 'from-blue-500 to-purple-500',
  },
  {
    title: 'PII Detection System',
    techs: ['Python', 'Machine Learning', 'Streamlit'],
    description:
      'Machine learning system that detects personally identifiable information in documents using TF-IDF features and an interactive Streamlit interface.',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    iconBg: 'from-cyan-500 to-blue-500',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-title-underline" />
        </motion.div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass-card overflow-hidden group"
            >
              {/* Top gradient bar */}
              <div
                className={`h-1.5 bg-gradient-to-r ${proj.iconBg}`}
              />

              <div className="p-6 sm:p-8">
                {/* Project number + title */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${proj.iconBg} flex items-center justify-center text-white font-bold text-lg shrink-0`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent-blue transition-colors">
                      {proj.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-muted text-sm leading-relaxed mb-5">
                  {proj.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {proj.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-accent-blue bg-accent-blue/10 rounded-full border border-accent-blue/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action links */}
                <div className="flex items-center gap-4 pt-4 border-t border-dark-600">
                  <a
                    href="https://github.com/Krishabh09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-text-muted hover:text-accent-blue transition-colors"
                  >
                    <FiGithub size={16} /> Code
                  </a>
                  <a
                    href="https://github.com/Krishabh09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-text-muted hover:text-accent-purple transition-colors"
                  >
                    <FiExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
