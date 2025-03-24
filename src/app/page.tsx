"use client";

import Hero from "@/components/Hero";
import HomeTechStack from "@/components/HomeTechStack";
import ProjectsSection from "@/components/ProjectSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import SectionDivider from "@/components/SectionDivider";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.bgAccentEffect}></div>
      <Hero />
      <SectionDivider />
      <HomeTechStack />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <ContactSection />
    </div>
  );
}
