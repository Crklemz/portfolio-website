"use client";

import Link from "next/link";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import ProjectsSection from "@/components/ProjectSection";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-[var(--background)] text-[var(--foreground)] px-6 relative">

      {/* Background Accent Effect */}
      <div className={styles.bgAccentEffect}></div>

      {/* Hero Section */}
      < Hero />

      {/* Call-to-Action Buttons */}
      <div className="mt-6 space-x-4 flex">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
          <Link href="/projects" className="btn-primary">View My Work</Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
          <Link href="/contact" className="btn-secondary">Contact Me</Link>
        </motion.div>
      </div>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Projects Section */}
      <ProjectsSection />

    </div>
  );
}
