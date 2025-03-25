"use client";

import Hero from "@/components/Hero";
import HomeTechStack from "@/components/HomeTechStack";
import ProjectsSection from "@/components/ProjectSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center text-[#ebdad9] relative">
      <div className="absolute inset-0 bg-gradient-radial from-[rgba(50,80,200,0.7)] to-[rgba(10,10,10,1)] opacity-90 -z-10 blur-[70px] animate-[moveBg_8s_infinite_alternate_ease-in-out]"></div>
      <Hero />
      <HomeTechStack />
      <ProjectsSection />
      <Testimonials />
      <ContactSection />
    </div>
  );
}
