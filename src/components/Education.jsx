/* ============================================
   Education.jsx - Education section
   Features: education card with degree info,
   university, CGPA, and animations
   ============================================ */

import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiMapPin } from 'react-icons/fi';

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

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <motion.div
            whileHover={{ y: -6 }}
            className="glass-card overflow-hidden"
          >
            {/* Top gradient bar */}
            <div className="h-1.5 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan" />

            <div className="p-8">
              {/* Degree icon & title */}
              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center shrink-0">
                  <FiBookOpen className="text-white" size={26} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                    Bachelor of Technology
                  </h3>
                  <p className="text-accent-blue font-medium mt-1">
                    Computer Science and Engineering
                  </p>
                </div>
              </div>

              {/* Details grid */}
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {/* University */}
                <div className="flex items-center gap-3 text-text-secondary">
                  <FiMapPin className="text-accent-purple shrink-0" size={18} />
                  <div>
                    <p className="text-xs text-text-muted">University</p>
                    <p className="text-sm font-medium">Lovely Professional University</p>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-3 text-text-secondary">
                  <FiCalendar className="text-accent-cyan shrink-0" size={18} />
                  <div>
                    <p className="text-xs text-text-muted">Duration</p>
                    <p className="text-sm font-medium">2023 – Present</p>
                  </div>
                </div>

                {/* CGPA */}
                <div className="flex items-center gap-3 text-text-secondary">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center shrink-0">
                    <span className="text-[10px] text-white font-bold">A</span>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">CGPA</p>
                    <p className="text-sm font-medium">6.04</p>
                  </div>
                </div>
              </div>

              {/* CGPA progress bar */}
              <div className="mt-4">
                <div className="flex justify-between text-xs text-text-muted mb-2">
                  <span>Academic Progress</span>
                  <span>6.04 / 10.0</span>
                </div>
                <div className="w-full h-2 bg-dark-600 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '60.4%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-accent-blue to-accent-purple rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
