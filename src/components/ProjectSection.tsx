"use client";

import styles from "@/styles/Projects.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

// Sample Project Data
const projects = [
  {
    title: "Next.js Portfolio Website",
    description: "A sleek and modern developer portfolio built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://placehold.co/300x200", // Replace with actual project image
  },
  {
    title: "AI-Powered Blog Generator",
    description: "An AI-driven content generator that writes high-quality blog posts in seconds.",
    tech: ["React", "OpenAI API", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://placehold.co/300x200",
  },
  {
    title: "E-Commerce Dashboard",
    description: "A dashboard for tracking sales, managing orders, and analyzing data in real time.",
    tech: ["Django", "React", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://placehold.co/300x200",
  },
];

export default function ProjectsSection() {
  return (
    <section className={styles.projectsSection}>
      <h2>Featured Projects</h2>
      <p>Check out some of my latest work.</p>

      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            <div className={styles.projectContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className={styles.techList}>
                {project.tech.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
              <div className={styles.projectLinks}>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Live Demo</a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link href="/projects" className="btn-primary mt-6">View More Projects</Link>
    </section>
  );
}
