/* ============================================
   Skills.jsx - Skills section
   Features: categorized skill cards with icons,
   staggered reveal animations, hover effects
   ============================================ */

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub,
} from 'react-icons/fa';
import {
  SiC, SiDjango, SiStreamlit, SiMysql,
  SiGooglecolab, SiAnaconda,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

/* Skill data organized by category */
const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', icon: FaPython, color: '#3776AB' },
      { name: 'Java', icon: FaJava, color: '#ED8B00' },
      { name: 'C', icon: SiC, color: '#A8B9CC' },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'Django', icon: SiDjango, color: '#092E20' },
      { name: 'Streamlit', icon: SiStreamlit, color: '#FF4B4B' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
      { name: 'Google Colab', icon: SiGooglecolab, color: '#F9AB00' },
      { name: 'Anaconda', icon: SiAnaconda, color: '#44A833' },
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'GitHub', icon: FaGithub, color: '#ffffff' },
    ],
  },
];

/* Stagger animation container */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

/* Individual card animation */
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 lg:py-28">
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="section-title-underline" />
        </motion.div>

        {/* Skill categories */}
        <div className="space-y-14">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
            >
              {/* Category heading */}
              <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-gradient-to-r from-accent-blue to-accent-purple rounded" />
                {cat.title}
              </h3>

              {/* Skill cards grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
              >
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={cardVariants}
                    whileHover={{
                      scale: 1.08,
                      boxShadow: `0 0 20px ${skill.color}33`,
                    }}
                    className="glass-card p-4 flex flex-col items-center gap-3 cursor-default group"
                  >
                    <skill.icon
                      size={36}
                      style={{ color: skill.color }}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
