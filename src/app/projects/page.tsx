"use client";

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
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
        <p className="text-xl mb-12">Here are some projects I&apos;ve built recently.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Coming Soon! {project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <ul className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <li key={idx} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Live Demo</a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
