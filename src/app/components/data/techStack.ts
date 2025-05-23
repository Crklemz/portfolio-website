import {
    FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGithub, FaPhp, FaDatabase,
    FaHtml5, FaCss3, FaWordpress
} from "react-icons/fa";
import {
    SiNextdotjs, SiDjango, SiGooglecloud, SiPostgresql, SiMysql, SiRedux,
    SiJavascript, SiTypescript, SiSass, SiTailwindcss
} from "react-icons/si";

export type TechStackItem = {
    icon: React.ComponentType;
    label: string;
    color: string;
};

export type TechStackData = {
    title: string;
    description: string;
    techStack: TechStackItem[];
    highlightsTitle: string;
    highlights: string[];
};

export const techStackData: TechStackData = {
    title: "My Tech Stack",
    description: "Technologies I use to build scalable and high-performance applications.",
    techStack: [
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
    ],
    highlightsTitle: "Development Highlights",
    highlights: [
        "Built responsive front-ends with React and custom WordPress themes, enhancing UX and performance across multiple sites.",
        "Developed scalable back-end systems and APIs using Django, Node.js, and PHP to support dynamic content and business operations.",
        "Implemented CI/CD pipelines using GitHub Actions and Docker, ensuring smooth deployments and efficient workflows.",
        "Modernized legacy applications and led full-stack feature development across diverse platforms.",
        "Worked with AWS-based infrastructure to support deployment, hosting, and performance improvements for web applications.",
        "Engineered dynamic web applications utilizing the LAMP stack (Linux, Apache, MySQL, PHP) to deliver scalable solutions.",
    ],
};