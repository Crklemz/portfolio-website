"use client";

import Link from "next/link";
// import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGithub, FaPhp, FaDatabase,
  FaHtml5, FaCss3, FaWordpress
} from "react-icons/fa";
import {
  SiNextdotjs, SiDjango, SiGooglecloud, SiPostgresql, SiMysql, SiRedux,
  SiJavascript, SiTypescript, SiSass
} from "react-icons/si";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-[var(--background)] text-[var(--foreground)] px-6 relative">

      {/* Background Accent Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-900 to-black opacity-60 -z-10"></div>

      {/* Hero Section */}
      <motion.h1
        className="text-5xl font-extrabold tracking-wide text-accent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I&apos;m Chris!
      </motion.h1>

      <motion.p
        className="text-lg mt-4 max-w-2xl text-secondary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I&apos;m a Full-Stack Developer with expertise in React, React Native, Django, and WordPress.
        I build scalable, high-performance web applications and have hands-on experience with cloud platforms like AWS and GCP.
        I also work with Docker and GitHub Actions to streamline CI/CD workflows.
        Lately, I&apos;ve been diving deeper into AI development, exploring ways to create smarter, more efficient solutions.
      </motion.p>

      {/* Call-to-Action Buttons */}
      <div className="mt-6 space-x-4 flex">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
          <Link href="/projects" className="btn-primary">View My Work</Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
          <Link href="/contact" className="btn-secondary">Contact Me</Link>
        </motion.div>
      </div>

      {/* Skills Section */}
      <section className="py-16 border-b border-gray-700 text-center w-full">
        <h2 className="text-4xl font-semibold mb-4">My Tech Stack</h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Technologies I use to build scalable and high-performance applications.
        </p>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-6 text-4xl bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-lg mt-8">
          {/* Tech Stack Icons with Hover Effects */}
          {[
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
            { icon: SiPostgresql, label: "PostgreSQL", color: "text-blue-500" },
            { icon: SiMysql, label: "MySQL", color: "text-blue-600" },
            { icon: FaAws, label: "AWS", color: "text-orange-500" },
            { icon: SiGooglecloud, label: "GCP", color: "text-blue-400" },
            { icon: FaDocker, label: "Docker", color: "text-blue-600" },
            { icon: FaGithub, label: "GitHub Actions", color: "text-gray-900 dark:text-white" },
          ].map(({ icon: Icon, label, color }, index) => (
            <motion.div key={index} className="flex flex-col items-center transition-transform transform hover:scale-110">
              <Icon className={`${color} drop-shadow-md`} />
              <span className="text-sm mt-2 text-gray-300">{label}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
