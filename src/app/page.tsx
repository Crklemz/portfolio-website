"use client";

import Hero from "@/app/components/Hero";
import TechStack from "@/app/components/TechStack";
import ProjectsSection from "@/app/components/ProjectSection";
import Testimonials from "@/app/components/Testimonials";
import ContactSection from "@/app/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center text-[#ebdad9] relative">
      <div className="absolute inset-0 bg-gradient-radial from-[rgba(50,80,200,0.7)] to-[rgba(10,10,10,1)] opacity-90 -z-10 blur-[70px] animate-[moveBg_8s_infinite_alternate_ease-in-out]"></div>
      <Hero />
      <TechStack />
      <ProjectsSection />
      <Testimonials />
      <ContactSection />
    </div>
  );
}
