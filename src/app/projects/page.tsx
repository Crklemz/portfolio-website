"use client";

import styles from "@/styles/Projects.module.css";
import Image from "next/image";

const projects = [
  {
    title: "Next.js Portfolio Website",
    description: "A sleek and modern developer portfolio built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    image: "/images/projects/portfolio.png",
  },
  {
    title: "AI-Powered Blog Generator",
    description: "An AI-driven content generator that writes high-quality blog posts in seconds.",
    tech: ["React", "OpenAI API", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    image: "/images/projects/blog-generator.png",
  },
  {
    title: "E-Commerce Dashboard",
    description: "A dashboard for tracking sales, managing orders, and analyzing data in real time.",
    tech: ["Django", "React", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    image: "/images/projects/ecommerce-dashboard.png",
  },
];

export default function ProjectsPage() {
  return (
    <div className={styles.projectsPage}>
      <h1 className={styles.pageTitle}>Projects</h1>
      <p className={styles.pageSubtitle}>Here are some projects I&apos;ve built recently.</p>

      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className={styles.projectImage}
            />
            <div className={styles.projectContent}>
              <h3>Coming Soon! {project.title}</h3>
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
    </div>
  );
}
