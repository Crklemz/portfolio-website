import { BiCategory } from "react-icons/bi";

export default function ResumePage() {

    const skills = [
        { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "PHP", "SQL", "HTML", "CSS", "SCSS"] },
        { category: "Frontend", items: ["React", "React Native", "Next.js", "Redux", "Tailwind CSS", "Material UI", "Bootstrap", "Framer Motion"] },
        { category: "Backend", items: ["Node.js", "Django", "Django REST Framework", "Laravel", "RESTful APIs", "Authentication & Authorization"] },
        { category: "Databases", items: ["MySQL", "PostgreSQL", "Redis", "SQLite3", "Query Optimization", "Data Migration"] },
        { category: "DevOps", items: ["Docker", "GitHub Actions", "CI/CD", "Cloud Monitoring", "Secrets Management", "Webhooks"] },
        { category: "Infrastructure", items: ["AWS", "GCP", "Vercel", "Cloudflare", "Linux", "SSH", "DNS", "NFS"] },
        { category: "CMS & Plugins", items: ["WordPress", "Headless CMS", "ACF", "MemberPress", "WP Rocket", "WPForms", "Custom Themes"] },
        { category: "SEO", items: ["Yoast SEO", "Google Tag Manager", "Google Search Console", "Google Analytics", "PageSpeed Insights"] },
        { category: "Tools", items: ["VS Code", "PhpStorm", "Postman", "Swagger", "ESLint", "Prettier", "Webpack", "Turbopack", "Git", "GitHub"] },
        { category: "Workflow", items: ["Feature Branching", "Atomic Commits", "Squash/Rebase", "Pull Requests", "PR Reviews"] },
        { category: "Testing & Debugging", items: ["Jest", "Mocha", "PHPUnit", "TDD", "Xdebug", "Chrome DevTools", "Logging & Monitoring"] },
        { category: "Collaboration", items: ["Jira", "ClickUp", "Trello", "Slack"] }
    ]

    const workExperience = [
        {
            title: "Full Stack Software Engineer",
            company: "Capitol Information Group",
            dates: "07/2023 - 12/2024",
            location: "Remote",
            description: "A subscription-based media company focused on financial, investing, and business newsletters",
            bullets: [
                "Expanded functionality and optimized performance across 12 web applications by leading feature development, resolving complex bugs, and implementing scalable solutions using WordPress, PHP, SQL, and JavaScript/TypeScript.",
                "Streamlined deployments with Docker, GitHub Actions, and CI/CD automation.",
                "Built and maintained internal tools and APIs using React, enhancing scalability and subscription management.",
                "Integrated AWS S3, Lambda, and CloudFront for CDN-based image uploads, improving performance.",
                "Designed and developed the front-end of HREmploymentLawAdvisor.com for a responsive user experience.",
                "Played a key role in website, database, and server migrations, ensuring minimal downtime and data integrity."
            ]
        },
        {
            title: "Junior Software Engineer",
            company: "Capitol Information Group",
            dates: "06/2022 - 07/2023",
            location: "Remote",
            description: "A subscription-based media company focused on financial, investing, and business newsletters",
            bullets: [
                "Maintained and enhanced 12 web applications by implementing features, fixing bugs, and optimizing performance with WordPress, PHP, SQL, and JavaScript/TypeScript.",
                "Built and improved internal tools using React, enhancing functionality and user experience.",
                "Updated legacy codebases for better performance and modern development standards.",
                "Collaborated with remote teams to develop features, troubleshoot issues, and improve user experience.",
                "Assisted in website design and development, ensuring brand consistency and usability.",
                "Strengthened expertise in object-oriented programming, design patterns, version control, and agile development."
            ]
        },
        {
            title: "Associate Software Engineer",
            company: "ExperienceIT",
            dates: "10/2021 - 06/2022",
            location: "Minneapolis, MN",
            description: "A technology consulting firm specializing in software development and IT solutions",
            bullets: [
                "Built cross-platform applications using React, Redux, React Native, Angular, TypeScript, Python, Django, and C#/.NET.",
                "Developed a reusable component library to standardize UI elements and streamline development across projects, enhancing efficiency and consistency.",
                "Optimized backend performance by rewriting SQL queries for improved efficiency and faster data retrieval.",
                "Collaborated with cross-functional teams to deliver high-quality software solutions, ensuring alignment with client requirements and project goals.",
                "Established and hosted a daily developer video chat to foster collaboration, provide peer support, and facilitate knowledge sharing, helping team members resolve issues and enhance their skills."
            ]
        },
        {
            title: "Full-Stack Software Engineer",
            company: "Freelance",
            dates: "08/2021 - 01/2022",
            location: "Remote",
            description: "Provided contract-based software engineering services to clients",
            bullets: [
                "Developed and enhanced web applications by implementing feature updates, optimizing performance, and troubleshooting complex issues using PostgreSQL, TypeScript, React, and Redux.",
                "Collaborated directly with clients to gather requirements and translate business needs into technical solutions, ensuring alignment with project goals.",
                "Managed project workflows, pull requests, and milestones in a remote team environment, ensuring timely delivery of high-quality software solutions."
            ]
        },
        {
            title: "Project Manager",
            company: "FRSecure",
            dates: "11/2019 - 03/2021",
            location: "Minneapolis, MN",
            description: "A cybersecurity consulting firm focused on information security assessments and risk management",
            bullets: [
                "Managed a portfolio of 90-120 projects simultaneously, ensuring on-time delivery, budget adherence, and alignment with client objectives.",
                "Acted as the primary liaison between clients and analysts, facilitating effective communication and timely issue resolution.",
                "Reviewed and validated technical data provided by clients to ensure completeness and accuracy, minimizing wasted time for analysts and improving workflow efficiency.",
                "Coordinated assignments for cybersecurity analysts based on skillsets and certifications, optimizing resource allocation and project success."
            ]
        },
        {
            title: "Account Coordinator",
            company: "C.H. Robinson",
            dates: "09/2018 - 11/2019",
            location: "Minneapolis, MN",
            description: "A global logistics and supply chain management company",
            bullets: [
                "Coordinated temperature-controlled LTL shipments across the Midwest, ensuring timely pickups and deliveries to meet client requirements.",
                "Served as the primary point of contact for stakeholders, brokers, and carriers, resolving logistical challenges and maintaining smooth operations.",
                "Led weekly and monthly client performance reviews, identifying areas for efficiency improvements and fostering stronger client relationships.",
                "Troubleshot and resolved purchase order discrepancies, ensuring accuracy and preventing delays in the supply chain."
            ]
        }
    ];

    const educationAndCertifications = [
        {
            name: "B.S. in Business Administration",
            institution: "Metro State University",
            year: "2018"
        },
        {
            name: "Full-Stack Software Engineering",
            institution: "Prime Digital Academy",
            year: "2021"
        },
        {
            name: "Agile SAFe Certification",
            institution: "Scaled Agile",
            year: "2022"
        }
    ];


    return (
        <div className="min-h-screen py-24 px-4 bg-[var(--background)]">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 relative">
                    <div className="gradient-bg rounded-3xl"></div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[var(--foreground)]">Chris Klemz</h1>
                    <p className="text-2xl mb-6 text-[var(--foreground)]">
                        Full-Stack Software Engineer
                    </p>
                    <p className="text-xl mb-8 text-[var(--foreground)]/90 max-w-2xl mx-auto">
                        Skilled in React, Django, Docker, WordPress, and CI/CD — I bridge front-end polish with back-end power. Clean code. Smooth launches. Happy users.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <a href="mailto:crklemz@gmail.com" className="text-[var(--primary)] hover:text-[var(--primary)]/80 transition-colors flex items-center gap-2">
                            <span>crklemz@gmail.com</span>
                        </a>
                        <a href="https://www.linkedin.com/in/chris-klemz" className="text-[var(--primary)] hover:text-[var(--primary)]/80 transition-colors flex items-center gap-2">
                            <span>LinkedIn</span>
                        </a>
                        <a href="/ChristopherKlemzResume.pdf" download className="text-[var(--primary)] hover:text-[var(--primary)]/80 transition-colors flex items-center gap-2">
                            <span>Download Resume (PDF)</span>
                        </a>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-[var(--foreground)] relative inline-block">
                        Skills
                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-[var(--primary)]/20 rounded-full"></div>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skill, index) => (
                            <div key={index} className="card">
                                <h3 className="text-xl font-bold mb-3 text-[var(--foreground)]">{skill.category}</h3>
                                <p className="text-[var(--foreground)]/90">
                                    {skill.items.join(', ')}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Work Experience */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-[var(--foreground)] relative inline-block">
                        Work Experience
                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-[var(--primary)]/20 rounded-full"></div>
                    </h2>

                    {workExperience.map((job, index) => (
                        <div key={index} className="card mb-8">
                            <h3 className="text-2xl font-bold mb-2 text-[var(--foreground)]">
                                {job.title} - {job.company}
                            </h3>
                            <p className="text-[var(--foreground)]/70 mb-6">{job.dates} ({job.location})</p>
                            <ul className="list-disc list-inside space-y-3 text-[var(--foreground)]/90">
                                {job.bullets.map((bullet, idx) => (
                                    <li key={idx}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Education & Certifications */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-[var(--foreground)] relative inline-block">
                        Education & Certifications
                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-[var(--primary)]/20 rounded-full"></div>
                    </h2>

                    <div className="card">
                        <ul className="space-y-4 text-[var(--foreground)]/90">
                            {educationAndCertifications.map((edu, idx) => (
                                <li key={idx}>
                                    <strong>{edu.name}</strong> – {edu.institution} ({edu.year})
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* CTA for Download */}
                <div className="text-center">
                    <a
                        href="/ChristopherKlemzResume.pdf"
                        download
                        className="btn-primary"
                    >
                        Download Full Resume
                    </a>
                </div>
            </div>
        </div>
    );
}
