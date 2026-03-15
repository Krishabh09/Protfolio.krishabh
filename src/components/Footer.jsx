/* ============================================
   Footer.jsx - Site footer
   Features: social icons, copyright, back-to-top
   ============================================ */

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail, FiArrowUp } from 'react-icons/fi';

/* Social links data */
const socials = [
  { icon: FaGithub, href: 'https://github.com/Krishabh09', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/krishabh-raj', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:rajkrishabh89@gmail.com', label: 'Email' },
];

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-dark-600 bg-dark-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <span className="text-xl font-bold font-heading gradient-text">
              Krishabh Raj
            </span>
            <p className="text-text-muted text-sm mt-1">
              AI/ML Enthusiast | Developer
            </p>
          </motion.div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl bg-dark-700 border border-dark-600 flex items-center justify-center text-text-muted hover:text-accent-blue hover:border-accent-blue/50 transition-all"
                aria-label={s.label}
              >
                <s.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-80}
            duration={800}
            className="cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-white"
            >
              <FiArrowUp size={18} />
            </motion.div>
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-dark-700 text-center">
          <p className="text-text-muted text-sm">
            © 2026 Krishabh Raj. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
