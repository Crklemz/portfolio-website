"use client";

import styles from "@/styles/Contact.module.css";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className={styles.contactSection} id="contact">
      <motion.h2
        className={styles.contactTitle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Let&apos;s Connect
      </motion.h2>

      <motion.p
        className={styles.contactSubtitle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        Have a question or want to work together? Drop me a message!
      </motion.p>

      {/* Contact Form */}
      <motion.form
        className={styles.contactForm}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" rows={4} placeholder="Your Message" required></textarea>
        </div>

        <motion.button
          type="submit"
          className={styles.submitButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Social Links */}
      <div className={styles.socialLinks}>
        <a href="https://www.linkedin.com/in/chris-klemz/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Crklemz" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:crklemz@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}
