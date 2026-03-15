/* ============================================
   Education.jsx - Education section
   Features: education card with degree info,
   university, CGPA, and animations
   ============================================ */

import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiMapPin } from 'react-icons/fi';

const educationData = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science and Engineering',
    institution: 'Lovely Professional University',
    duration: '2023 – Present',
    scoreType: 'CGPA',
    score: '6.04',
    maxScore: '10.0',
    percentage: 60.4
  },
  {
    degree: 'Intermediate (12th)',
    field: 'Science',
    institution: 'Gyan Bharti Senior Secondary School',
    duration: '2021 – 2023',
    scoreType: 'Percentage',
    score: '66%',
    maxScore: '100%',
    percentage: 66
  },
  {
    degree: 'Matriculation (10th)',
    field: 'General Subjects',
    institution: 'Magadh international School',
    duration: '2020 – 2021',
    scoreType: 'Percentage',
    score: '75%',
    maxScore: '100%',
    percentage: 75
  }
];

const Education = () => {
  return (
    <section id="education" className="relative py-20 lg:py-28">
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
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="section-title-underline" />
        </motion.div>

        {/* Education Cards Map */}
        <div className="max-w-3xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ y: -6 }}
                className="glass-card overflow-hidden"
              >
                {/* Top gradient bar */}
                <div className="h-1.5 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan" />

                <div className="p-6 sm:p-8">
                  {/* Degree icon & title */}
                  <div className="flex items-start gap-4 sm:gap-5 mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center shrink-0">
                      <FiBookOpen className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-2xl font-bold text-text-primary leading-tight">
                        {edu.degree}
                      </h3>
                      <p className="text-accent-blue font-medium mt-1 text-sm sm:text-base">
                        {edu.field}
                      </p>
                    </div>
                  </div>

                  {/* Details grid */}
                  <div className="grid sm:grid-cols-3 gap-5 mb-6">
                    {/* Institution */}
                    <div className="flex flex-col gap-1 text-text-secondary">
                      <div className="flex items-center gap-2">
                        <FiMapPin className="text-accent-purple shrink-0" size={16} />
                        <p className="text-xs text-text-muted uppercase tracking-wider">Institution</p>
                      </div>
                      <p className="text-sm font-medium pl-6 text-text-primary">{edu.institution}</p>
                    </div>

                    {/* Duration */}
                    <div className="flex flex-col gap-1 text-text-secondary">
                      <div className="flex items-center gap-2">
                        <FiCalendar className="text-accent-cyan shrink-0" size={16} />
                        <p className="text-xs text-text-muted uppercase tracking-wider">Duration</p>
                      </div>
                      <p className="text-sm font-medium pl-6 text-text-primary">{edu.duration}</p>
                    </div>

                    {/* Score */}
                    <div className="flex flex-col gap-1 text-text-secondary">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center shrink-0">
                          <span className="text-[10px] text-white font-bold tracking-tighter" style={{ lineHeight: 1 }}>{edu.scoreType === 'CGPA' ? 'C' : '%'}</span>
                        </div>
                        <p className="text-xs text-text-muted uppercase tracking-wider">{edu.scoreType}</p>
                      </div>
                      <p className="text-sm font-medium pl-6 text-text-primary">{edu.score}</p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-2">
                    <div className="flex justify-between text-xs text-text-muted mb-2 font-medium">
                      <span>Academic Progress</span>
                      <span>{edu.score} / {edu.maxScore}</span>
                    </div>
                    <div className="w-full h-2 bg-dark-700/50 rounded-full overflow-hidden border border-dark-600">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${edu.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 + (index * 0.1), ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-accent-blue to-accent-purple rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
