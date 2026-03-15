/* ============================================
   Achievements.jsx - Achievements timeline
   Features: vertical timeline layout with
   animated connectors and card reveals
   ============================================ */

import React from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiExternalLink } from 'react-icons/fi';

/* Achievement data */
const achievements = [
  {
    title: 'Code Of Duty Coding Event',
    description: 'Participated in Code Of Duty coding event, competing in algorithmic challenges and problem-solving tasks.',
    icon: '💻',
    link: '#',
  },
  {
    title: 'NSS Volunteer',
    description: 'Active volunteer in NSS activities, contributing to community service and social welfare initiatives.',
    icon: '🤝',
    link: '#',
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="relative py-20 lg:py-28">
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
            My <span className="gradient-text">Achievements</span>
          </h2>
          <div className="section-title-underline" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-purple to-accent-cyan" />

          <div className="space-y-10">
            {achievements.map((ach, i) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative flex items-start gap-6 pl-4"
              >
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="relative z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-dark-800 border-2 border-accent-blue flex items-center justify-center text-lg shrink-0"
                >
                  {ach.icon}
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="glass-card p-5 sm:p-6 flex-1"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <FiStar className="text-accent-blue" size={16} />
                      <h3 className="text-lg font-semibold text-text-primary">
                        {ach.title}
                      </h3>
                    </div>
                    {ach.link && (
                      <a
                        href={ach.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-accent-purple transition-colors p-1"
                        aria-label="View more details"
                      >
                        <FiExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {ach.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
