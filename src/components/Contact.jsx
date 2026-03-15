/* ============================================
   Contact.jsx - Contact section
   Features: contact info cards, working form,
   social links, animations
   ============================================ */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiSend } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

/* Contact info data */
const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'rajkrishabh89@gmail.com',
    href: 'mailto:rajkrishabh89@gmail.com',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91-8434429615',
    href: 'tel:+918434429615',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/krishabh-raj',
    href: 'https://www.linkedin.com/in/krishabh-raj',
    color: 'from-blue-600 to-blue-800',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/Krishabh09',
    href: 'https://github.com/Krishabh09',
    color: 'from-gray-600 to-gray-800',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* Opens mailto with form data */
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    const subj = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:rajkrishabh89@gmail.com?subject=${subj}&body=${body}`, '_self');
    setStatus('sent');
    setTimeout(() => { setFormData({ name: '', email: '', message: '' }); setStatus(''); }, 3000);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="section-title-underline" />
          <p className="text-text-muted mt-4 max-w-lg mx-auto">
            Feel free to reach out for collaborations or opportunities!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label === 'LinkedIn' || item.label === 'GitHub' ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ x: 6 }}
                className="glass-card p-4 flex items-center gap-4 group block"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0`}>
                  <item.icon className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-xs text-text-muted">{item.label}</p>
                  <p className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm text-text-secondary mb-2">Your Name</label>
                <input id="contact-name" type="text" name="name" value={formData.name} onChange={handleChange} required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600 rounded-xl text-text-primary placeholder-text-muted focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue/50 transition-all" />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm text-text-secondary mb-2">Your Email</label>
                <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange} required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600 rounded-xl text-text-primary placeholder-text-muted focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue/50 transition-all" />
              </div>
              <div>
                <label htmlFor="contact-msg" className="block text-sm text-text-secondary mb-2">Message</label>
                <textarea id="contact-msg" name="message" value={formData.message} onChange={handleChange} required rows={4}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600 rounded-xl text-text-primary placeholder-text-muted focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue/50 transition-all resize-none" />
              </div>
              <motion.button type="submit" disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-medium rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300 disabled:opacity-50">
                {status === 'sent' ? '✓ Sent!' : status === 'sending' ? 'Sending...' : <><FiSend size={16} /> Send Message</>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
