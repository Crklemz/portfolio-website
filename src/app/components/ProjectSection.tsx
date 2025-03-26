"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Sample Project Data
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

export default function ProjectSection() {
    return (
        <section className="w-full py-16 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl p-6">
                            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="mb-4">{project.description}</p>
                            <Link href="/projects" className="btn-secondary inline-block">
                                View Project
                            </Link>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
