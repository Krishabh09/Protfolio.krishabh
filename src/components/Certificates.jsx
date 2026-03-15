/* ============================================
   Certificates.jsx - Certificates showcase
   Features: animated certificate cards with
   institution info and slide-in animations
   ============================================ */

import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';

/* Certificate data */
const certificates = [
  {
    title: 'Machine Learning Made Easy: From Basics to AI Applications',
    issuer: 'LPU',
    color: 'from-blue-500 to-indigo-600',
    link: 'https://drive.google.com/file/d/1oazl3Y8z2hX9bBsd8nnJhazGwWecmO7_/view?usp=drive_link',
  },
  {
    title: 'Data Structures and Algorithms',
    issuer: 'Neo Colab',
    color: 'from-purple-500 to-pink-500',
    link: 'https://drive.google.com/file/d/1JpA2dKE5Xv6AwoVsQ2qBB16qvNomKm3N/view?usp=drive_link',
  },
  {
    title: 'Java Programming',
    issuer: 'Neo Colab',
    color: 'from-cyan-500 to-blue-500',
    link: 'https://drive.google.com/file/d/1AVbsNoHcNVXkh8p358CTwhav1FN9DlHL/view?usp=drive_link',
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="relative py-20 lg:py-28">
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
            My <span className="gradient-text">Certificates</span>
          </h2>
          <div className="section-title-underline" />
        </motion.div>

        {/* Certificate cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.04, rotate: 1 }}
              className="glass-card overflow-hidden group cursor-default"
            >
              {/* Top gradient strip */}
              <div className={`h-1.5 bg-gradient-to-r ${cert.color}`} />

              <div className="p-6">
                {/* Award icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4`}
                >
                  <FiAward className="text-white" size={22} />
                </div>

                {/* Certificate title with link */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2 group/link"
                >
                  <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover/link:text-accent-blue transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <FiExternalLink className="text-text-muted group-hover/link:text-accent-blue mt-1 shrink-0 transition-colors" />
                </a>

                {/* Issuer */}
                <p className="text-sm text-text-muted flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                  Issued by {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
