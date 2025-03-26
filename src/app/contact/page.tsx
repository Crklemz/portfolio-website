"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="relative min-h-screen py-16 px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10 pointer-events-none -z-10" />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
            Get in Touch
          </h1>
          <p className="text-xl text-[var(--foreground)]/80 max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-lg"
        >
          <form className="space-y-6">
            <div>
              <label className="block text-[var(--foreground)] text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                className="w-full border border-[var(--secondary)] p-3 rounded-lg bg-white/10 text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/50 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-[var(--foreground)] text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                className="w-full border border-[var(--secondary)] p-3 rounded-lg bg-white/10 text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/50 transition-all"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-[var(--foreground)] text-sm font-bold mb-2">Message</label>
              <textarea
                className="w-full border border-[var(--secondary)] p-3 rounded-lg bg-white/10 text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/50 transition-all"
                rows={6}
                placeholder="Your message..."
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="btn-primary w-full py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-[var(--foreground)]/80 mb-4">Or reach out directly:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:crklemz@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
              📧 crklemz@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/chris-klemz" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
              🔗 LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
