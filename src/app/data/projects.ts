import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaPhp, FaDatabase, FaWordpress } from "react-icons/fa";
import { SiNextdotjs, SiDjango, SiGooglecloud, SiPostgresql, SiMysql, SiRedux, SiJavascript, SiTypescript, SiTailwindcss } from "react-icons/si";
import { IconType } from "react-icons";

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  techIcons: IconType[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Next.js Portfolio Website",
    description: "A sleek and modern developer portfolio built with Next.js and Tailwind CSS.",
    fullDescription: "A modern, responsive portfolio website showcasing my projects, skills, and experience. Built with Next.js 14, featuring server-side rendering, dynamic routing, and a beautiful UI with Tailwind CSS. Includes animations with Framer Motion and a dark mode theme.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    techIcons: [SiNextdotjs, SiTailwindcss, SiTypescript],
    liveUrl: "https://chrisklemz.com",
    githubUrl: "https://github.com/crklemz/portfolio",
    image: "/images/projects/portfolio.png",
    featured: true,
  },
  {
    id: "blog-generator",
    title: "AI-Powered Blog Generator",
    description: "An AI-driven content generator that writes high-quality blog posts in seconds.",
    fullDescription: "A full-stack application that leverages OpenAI's GPT-4 API to generate high-quality blog content. Features include content customization, SEO optimization, and a user-friendly interface. Built with React, Node.js, and MongoDB for data persistence.",
    tech: ["React", "OpenAI API", "Node.js", "MongoDB"],
    techIcons: [FaReact, FaNodeJs],
    liveUrl: "https://blog-generator-demo.com",
    githubUrl: "https://github.com/crklemz/blog-generator",
    image: "/images/projects/blog-generator.png",
    featured: true,
  },
  {
    id: "ecommerce-dashboard",
    title: "E-Commerce Dashboard",
    description: "A dashboard for tracking sales, managing orders, and analyzing data in real time.",
    fullDescription: "A comprehensive e-commerce management system with real-time analytics, inventory management, and order processing. Features include sales tracking, customer analytics, and automated reporting. Built with Django, React, and PostgreSQL.",
    tech: ["Django", "React", "PostgreSQL", "Redux"],
    techIcons: [SiDjango, FaReact, SiPostgresql, SiRedux],
    liveUrl: "https://ecommerce-dashboard-demo.com",
    githubUrl: "https://github.com/crklemz/ecommerce-dashboard",
    image: "/images/projects/ecommerce-dashboard.png",
    featured: true,
  },
  {
    id: "wordpress-plugins",
    title: "WordPress Plugin Suite",
    description: "A collection of custom WordPress plugins for enhanced functionality.",
    fullDescription: "A suite of custom WordPress plugins designed to enhance website functionality and user experience. Includes features like custom post types, advanced forms, and integration with external APIs. Built with PHP and JavaScript.",
    tech: ["PHP", "WordPress", "JavaScript", "MySQL"],
    techIcons: [FaPhp, FaWordpress, SiJavascript, SiMysql],
    liveUrl: "https://wordpress-plugin-suite-demo.com",
    githubUrl: "https://github.com/crklemz/wordpress-plugin-suite",
    image: "/images/projects/wordpress-plugins.png",
    featured: true,
  },
  {
    id: "cloud-manager",
    title: "Cloud Infrastructure Manager",
    description: "A tool for managing and monitoring cloud resources across multiple providers.",
    fullDescription: "A cloud infrastructure management tool that provides a unified interface for managing resources across AWS and Google Cloud. Features include resource monitoring, cost optimization, and automated scaling. Built with Python and using various cloud SDKs.",
    tech: ["Python", "AWS", "Google Cloud", "Docker"],
    techIcons: [FaPython, FaAws, SiGooglecloud, FaDocker],
    liveUrl: "https://cloud-manager-demo.com",
    githubUrl: "https://github.com/crklemz/cloud-manager",
    image: "/images/projects/cloud-manager.png",
    featured: false,
  },
  {
    id: "chat-app",
    title: "Real-time Chat Application",
    description: "A modern chat application with real-time messaging and file sharing.",
    fullDescription: "A real-time chat application featuring instant messaging, file sharing, and group chat capabilities. Built with WebSocket for real-time communication, featuring end-to-end encryption and a responsive design. Uses React, Node.js, and MongoDB.",
    tech: ["React", "Node.js", "WebSocket", "MongoDB"],
    techIcons: [FaReact, FaNodeJs, FaDatabase],
    liveUrl: "https://chat-app-demo.com",
    githubUrl: "https://github.com/crklemz/chat-app",
    image: "/images/projects/chat-app.png",
    featured: false,
  },
]; 