/* ============================================
   About.jsx - About Me section
   Features: fade-in animation, personal intro,
   highlight cards
   ============================================ */

import React from 'react';
import { motion } from 'framer-motion';

/* Reusable scroll-triggered animation wrapper */
const FadeInView = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

/* Highlight stat cards */
const highlights = [
  { label: 'Specialization', value: 'AI & ML' },
  { label: 'Degree', value: 'B.Tech CSE' },
  { label: 'University', value: 'LPU' },
  { label: 'Status', value: 'Student' },
];

const About = () => {
  return (
    <section id="about" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <FadeInView>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="section-title-underline" />
          </div>
        </FadeInView>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text content */}
          <FadeInView delay={0.2}>
            <div className="space-y-6">
              <p className="text-text-secondary leading-relaxed text-lg">
                I am a <span className="text-accent-blue font-medium">BTech Computer Science and Engineering</span> student
                specializing in{' '}
                <span className="text-accent-purple font-medium">
                  Artificial Intelligence and Machine Learning
                </span>{' '}
                at <span className="text-accent-cyan font-medium">Lovely Professional University</span>.
              </p>
              <p className="text-text-muted leading-relaxed">
                My passion lies in building intelligent systems, exploring
                machine learning algorithms, and developing software
                solutions that solve real-world problems. I love working
                with Python and Java, and I'm constantly learning new
                technologies to expand my skill set.
              </p>
              <p className="text-text-muted leading-relaxed">
                When I'm not coding, you can find me participating in
                coding events, contributing to NSS activities, or exploring
                the latest advancements in AI research.
              </p>
            </div>
          </FadeInView>

          {/* Right: highlight cards */}
          <FadeInView delay={0.4}>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 text-center"
                >
                  <p className="text-2xl font-bold gradient-text mb-1">
                    {item.value}
                  </p>
                  <p className="text-text-muted text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
};

export default About;
