"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactSection() {
    return (
        <section className="w-full py-24 px-4 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 via-[var(--secondary)]/20 to-[var(--primary)]/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--primary),transparent_80%)] opacity-40" />
            
            {/* Animated Gradient Orbs */}
            <motion.div
                className="absolute top-0 -left-4 w-[600px] h-[600px] bg-[var(--primary)] rounded-full mix-blend-multiply filter blur-[120px]"
                animate={{
                    scale: [1, 1.4, 1],
                    x: [0, 200, 0],
                    y: [0, 150, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-0 -right-4 w-[600px] h-[600px] bg-[var(--secondary)] rounded-full mix-blend-multiply filter blur-[120px]"
                animate={{
                    scale: [1, 1.4, 1],
                    x: [0, -200, 0],
                    y: [0, -150, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto text-center relative"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
                    Get in Touch
                </h2>
                <p className="text-xl mb-12 text-[var(--foreground)]/80 max-w-2xl mx-auto">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
                <Link 
                    href="/contact" 
                    className="btn-primary inline-block px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                    Contact Me
                </Link>
            </motion.div>
        </section>
    );
}
