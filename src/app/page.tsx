"use client";

import Link from "next/link";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import ProjectsSection from "@/components/ProjectSection";
import Testimonials from "@/components/Testimonials";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-[var(--background)] text-[var(--foreground)] px-6 relative">
      <div className={styles.bgAccentEffect}></div>
      < Hero />
      <TechStack />
      <ProjectsSection />
      <Testimonials />
    </div>
  );
}
