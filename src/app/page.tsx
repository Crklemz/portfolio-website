"use client";

import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import ProjectsSection from "@/components/ProjectSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-[var(--background)] text-[var(--foreground)] px-6 relative">
      <div className={styles.bgAccentEffect}></div>
      < Hero />
      <TechStack />
      <ProjectsSection />
      <Testimonials />
      <ContactSection />
    </div>
  );
}
