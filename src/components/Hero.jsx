/* ============================================
   Hero.jsx - Landing hero section
   Features: animated gradient blobs, profile photo,
   name/title/intro, CTA buttons
   ============================================ */

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiDownload, FiMail, FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  const profileImg = '/pes photo.jpeg';
  const resumeLink = 'https://drive.google.com/file/d/1qXecTO7yoL8kxUUqisEyWpiWhcovoj4g/view?usp=drive_link';

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 z-0">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-accent-blue font-medium text-lg mb-4"
            >
              👋 Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold font-heading mb-4"
            >
              <span className="gradient-text">Krishabh Raj</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg sm:text-xl text-text-secondary mb-6"
            >
              AI/ML Enthusiast | Java Developer | Python Developer
            </motion.p>

            {/* Intro paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-text-muted max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Computer Science and Engineering student specializing in
              Artificial Intelligence and Machine Learning. Passionate about
              building intelligent systems and solving real-world problems
              using technology.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              {/* View Projects button */}
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
                duration={600}
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-medium rounded-xl cursor-pointer hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300 hover:scale-105"
              >
                <FiArrowDown className="group-hover:translate-y-0.5 transition-transform" />
                View Projects
              </Link>

              {/* Download/View Resume button */}
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href={resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-3 border border-accent-blue/30 text-accent-blue font-medium rounded-xl hover:bg-accent-blue/10 hover:border-accent-blue/60 transition-all duration-300 hover:scale-105"
                >
                  <FiDownload className="group-hover:-translate-y-0.5 transition-transform" />
                  View Resume
                </a>
              </div>

              {/* Contact Me button */}
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={600}
                className="group inline-flex items-center gap-2 px-6 py-3 border border-accent-purple/30 text-accent-purple font-medium rounded-xl cursor-pointer hover:bg-accent-purple/10 hover:border-accent-purple/60 transition-all duration-300 hover:scale-105"
              >
                <FiMail className="group-hover:rotate-12 transition-transform" />
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
            className="relative"
          >
            {/* Glowing ring around photo */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Rotating gradient ring */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan animate-spin"
                style={{ animationDuration: '8s', padding: '3px' }}
              >
                <div className="w-full h-full rounded-full bg-dark-900" />
              </div>

              {/* Profile image container */}
              <div className="absolute inset-2 border-[6px] border-dark-900 rounded-full overflow-hidden bg-dark-700">
                <img
                  src={profileImg}
                  alt="Krishabh Raj - AI/ML Enthusiast and Developer"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    /* Fallback: show initials if image not found */
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback initials */}
                <div
                  className="w-full h-full items-center justify-center bg-gradient-to-br from-accent-blue to-accent-purple text-5xl font-bold font-heading text-white hidden"
                >
                  KR
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-80}
          duration={600}
          className="cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center"
          >
            <motion.div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
