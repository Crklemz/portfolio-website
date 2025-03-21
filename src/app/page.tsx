"use client";

import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import ProjectsSection from "@/components/ProjectSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import SectionDivider from "@/components/SectionDivider";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className="w-full section-divider"> {/* Ensure full width and proper alignment */}
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center bg-[var(--background)] text-[var(--foreground)] px-4 md:px-6 lg:px-8 relative">
        <div className={styles.bgAccentEffect}></div>
        <Hero />
        <SectionDivider />
        <TechStack />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <ContactSection />
      </div>
    </div>
  );
}
