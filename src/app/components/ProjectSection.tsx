"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../data/projects";

export default function ProjectSection() {
    const featuredProjects = projects.filter(project => project.featured);

    return (
        <section className="w-full py-8 px-4 mb-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="relative w-full h-48 mt-4 mb-4">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-contain transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.placeholder ? "Placeholder! " + project.title + " - coming soon" : project.title}</h3>
                                <p className="mb-4 text-[var(--foreground)]/80">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, idx) => (
                                        <div key={idx} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                                <Link 
                                    href={`/projects?project=${project.id}`}
                                    className="btn-secondary inline-flex items-center gap-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                    View Project
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
