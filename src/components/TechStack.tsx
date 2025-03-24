"use client";

import { motion } from "framer-motion";
import styles from "@/styles/TechStack.module.css";
import {
    FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGithub, FaPhp, FaDatabase,
    FaHtml5, FaCss3, FaWordpress
} from "react-icons/fa";
import {
    SiNextdotjs, SiDjango, SiGooglecloud, SiPostgresql, SiMysql, SiRedux,
    SiJavascript, SiTypescript, SiSass, SiTailwindcss
} from "react-icons/si";

const techStack = [
    { icon: SiJavascript, label: "JavaScript", color: "text-yellow-500" },
    { icon: SiTypescript, label: "TypeScript", color: "text-blue-500" },
    { icon: FaPython, label: "Python", color: "text-blue-600" },
    { icon: FaPhp, label: "PHP", color: "text-purple-600" },
    { icon: FaDatabase, label: "SQL", color: "text-gray-600" },
    { icon: FaReact, label: "React", color: "text-blue-500" },
    { icon: SiNextdotjs, label: "Next.js", color: "text-black dark:text-white" },
    { icon: SiRedux, label: "Redux", color: "text-purple-500" },
    { icon: FaWordpress, label: "WordPress", color: "text-blue-600" },
    { icon: SiDjango, label: "Django", color: "text-green-600" },
    { icon: FaNodeJs, label: "Node.js", color: "text-green-500" },
    { icon: FaHtml5, label: "HTML", color: "text-orange-500" },
    { icon: FaCss3, label: "CSS", color: "text-blue-500" },
    { icon: SiSass, label: "SCSS", color: "text-pink-500" },
    { icon: SiTailwindcss, label: "Tailwind CSS", color: "text-teal-400" },
    { icon: SiPostgresql, label: "PostgreSQL", color: "text-blue-500" },
    { icon: SiMysql, label: "MySQL", color: "text-blue-600" },
    { icon: FaAws, label: "AWS", color: "text-orange-500" },
    { icon: SiGooglecloud, label: "GCP", color: "text-blue-400" },
    { icon: FaDocker, label: "Docker", color: "text-blue-600" },
    { icon: FaGithub, label: "GitHub Actions", color: "text-gray-900 dark:text-white" },
];

export default function TechStack() {
    return (
        <section className={styles.techStack}>
            <h2>My Tech Stack</h2>
            <p>Technologies I use to build scalable and high-performance applications.</p>

            <div className={styles.techGrid}>
                {techStack.map(({ icon: Icon, label, color }, index) => (
                    <motion.div
                        key={index}
                        className={styles.techIcon}
                        initial={{ y: 0 }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: index * 0.1, // Slight stagger for better effect
                        }}
                    >
                        <Icon className={`${color}`} />
                        <span className={styles.techLabel}>{label}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
