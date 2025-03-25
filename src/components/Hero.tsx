"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
            <h1 className="text-lg text-center mb-8">This site is a work in progress — more updates coming soon!</h1>
            
            {/* Animated Intro Text */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-center mb-4"
            >
                Hi, I&apos;m Chris!
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-xl md:text-2xl text-center mb-8 text-[#ebdad9]/80"
            >
                Full-Stack Developer | AI Enthusiast | Cloud Engineer
            </motion.p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link href="/projects" className="btn-primary">View My Work</Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link href="/about" className="btn-secondary">Learn More About Me</Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link href="/contact" className="btn-secondary">Contact Me</Link>
                </motion.div>
            </div>
        </section>
    );
}
