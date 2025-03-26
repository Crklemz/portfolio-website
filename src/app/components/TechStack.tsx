"use client";

import { motion } from "framer-motion";
import {
    FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGithub, FaPhp, FaDatabase,
    FaHtml5, FaCss3, FaWordpress
} from "react-icons/fa";
import {
    SiNextdotjs, SiDjango, SiGooglecloud, SiPostgresql, SiMysql, SiRedux,
    SiJavascript, SiTypescript, SiSass, SiTailwindcss
} from "react-icons/si";

const techStack = [
    { icon: SiJavascript, label: "JavaScript", color: "text-yellow-500" },
    { icon: SiTypescript, label: "TypeScript", color: "text-blue-500" },
    { icon: FaPython, label: "Python", color: "text-blue-600" },
    { icon: FaPhp, label: "PHP", color: "text-purple-600" },
    { icon: FaDatabase, label: "SQL", color: "text-gray-600" },
    { icon: FaReact, label: "React", color: "text-blue-500" },
    { icon: SiNextdotjs, label: "Next.js", color: "text-black dark:text-white" },
    { icon: SiRedux, label: "Redux", color: "text-purple-500" },
    { icon: FaWordpress, label: "WordPress", color: "text-blue-600" },
    { icon: SiDjango, label: "Django", color: "text-green-600" },
    { icon: FaNodeJs, label: "Node.js", color: "text-green-500" },
    { icon: FaHtml5, label: "HTML", color: "text-orange-500" },
    { icon: FaCss3, label: "CSS", color: "text-blue-500" },
    { icon: SiSass, label: "SCSS", color: "text-pink-500" },
    { icon: SiTailwindcss, label: "Tailwind CSS", color: "text-teal-400" },
    { icon: SiPostgresql, label: "PostgreSQL", color: "text-blue-500" },
    { icon: SiMysql, label: "MySQL", color: "text-blue-600" },
    { icon: FaAws, label: "AWS", color: "text-orange-500" },
    { icon: SiGooglecloud, label: "GCP", color: "text-blue-400" },
    { icon: FaDocker, label: "Docker", color: "text-blue-600" },
    { icon: FaGithub, label: "GitHub Actions", color: "text-gray-900 dark:text-white" },
];

const devHighlights = [
    'Developed responsive front-ends using React and customized WordPress themes, while building robust back-end systems with Django.',
    'Modernized legacy applications and led full-stack feature development across diverse platforms.',
    'Integrated AWS services (Lambda, S3, CloudFront) to enhance application performance.',
    'Automated deployments and streamlined development processes using Docker and GitHub Actions.',
    'Engineered dynamic web applications utilizing the LAMP stack (Linux, Apache, MySQL, PHP) to deliver scalable solutions.',
];

export default function TechStack() {
    return (
        <section className="w-full py-8 px-4 mb-8 mt-16">
            <h2 className="text-3xl font-bold text-center mb-4">My Tech Stack</h2>
            <p className="text-center mb-8">Technologies I use to build scalable and high-performance applications.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {techStack.map(({ icon: Icon, label, color }, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-lg"
                        initial={{ y: 0 }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: index * 0.1,
                        }}
                    >
                        <Icon className={`text-3xl ${color} mb-2`} />
                        <span className="text-sm text-center">{label}</span>
                    </motion.div>
                ))}
            </div>

            <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-lg text-left">
                <h3 className="text-xl font-bold mb-4 text-center">Development Highlights</h3>
                <ul className="space-y-3">
                    {devHighlights.map((highlight, index) => (
                        <li 
                            key={index} 
                            className="flex items-start"
                        >
                            <span className="text-primary mr-2">•</span>
                            {highlight}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
