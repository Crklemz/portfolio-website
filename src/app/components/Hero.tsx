"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const content = {
    title: "Hi, I'm Chris!",
    subtitle: "Full-Stack Developer | AI Enthusiast | Cloud Engineer",
    cta: [
        {
            label: "View My Work",
            href: "/projects",
            variant: "primary"
        },
        {
            label: "Learn More About Me",
            href: "/about",
            variant: "secondary"
        },
        {
            label: "Contact Me",
            href: "/contact",
            variant: "secondary"
        }
    ]
}

export default function Hero() {
    return (
        <section className="relative min-h-[calc(100vh-4rem)] w-full flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20 overflow-hidden bg-[var(--background)]">
            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[var(--primary)]/60 via-[var(--secondary)]/60 to-[var(--primary)]/60" />
            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,var(--primary),transparent_80%)] opacity-80" />
            <div className="absolute inset-0 w-full h-full bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-80 [filter:invert(1)_sepia(1)_saturate(1000%)_hue-rotate(180deg)_brightness(1)_contrast(1)]" />
            
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
            
            {/* Content */}
            <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl sm:text-5xl lg:text-7xl font-bold text-center mb-6 leading-tight"
                >
                    {content.title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-lg sm:text-xl lg:text-2xl text-center mb-12 text-[var(--foreground)]/80 max-w-2xl mx-auto"
                >
                    {content.subtitle}
                </motion.p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    {content.cta.map((cta, index) => (
                        <motion.div
                            key={cta.href}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto"
                        >
                            <Link 
                                href={cta.href} 
                                className={`btn-${cta.variant} w-full sm:w-auto text-center block`}
                            >
                                {cta.label}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
