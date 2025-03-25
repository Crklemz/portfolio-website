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

            {/* Wave Background */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                <svg className="relative w-full h-24 md:h-32" viewBox="0 0 1200 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path fill="rgba(0,123,255,0.2)" d="M0,128L80,138.7C160,149,320,171,480,170.7C640,171,800,149,960,144C1120,139,1280,149,1360,154.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                    <path fill="rgba(0,123,255,0.3)" d="M0,160L80,176C160,192,320,224,480,234.7C640,245,800,235,960,218.7C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                    <path fill="rgba(0,123,255,0.4)" d="M0,224L80,218.7C160,213,320,203,480,197.3C640,192,800,192,960,192C1120,192,1280,192,1360,192L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    );
}
