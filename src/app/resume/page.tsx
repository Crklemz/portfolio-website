export default function ResumePage() {
    return (
        <div className="min-h-screen py-24 px-4 bg-[var(--background)]">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 relative">
                    <div className="gradient-bg rounded-3xl"></div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[var(--foreground)]">Chris Klemz</h1>
                    <p className="text-2xl mb-6 text-[var(--foreground)]">
                        Full-Stack Software Engineer | AI & Cloud Enthusiast
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
                        <div className="card">
                            <h3 className="text-xl font-bold mb-3 text-[var(--foreground)]">Programming</h3>
                            <p className="text-[var(--foreground)]/90">JavaScript, TypeScript, Python, PHP, SQL, HTML, CSS</p>
                        </div>
                        <div className="card">
                            <h3 className="text-xl font-bold mb-3 text-[var(--foreground)]">Frameworks & Libraries</h3>
                            <p className="text-[var(--foreground)]/90">React, Next.js, Redux, MaterialUI, TailwindCSS, Django, Django Rest Framework, WordPress, Node.js</p>
                        </div>
                        <div className="card">
                            <h3 className="text-xl font-bold mb-3 text-[var(--foreground)]">Databases</h3>
                            <p className="text-[var(--foreground)]/90">PostgreSQL, MySQL, SQLite3, Redis</p>
                        </div>
                        <div className="card">
                            <h3 className="text-xl font-bold mb-3 text-[var(--foreground)]">DevOps & Cloud</h3>
                            <p className="text-[var(--foreground)]/90">Docker, CI/CD, GitHub Actions, AWS, GCP, Vercel, Linux, Apache</p>
                        </div>
                        <div className="card">
                            <h3 className="text-xl font-bold mb-3 text-[var(--foreground)]">APIs & Tools</h3>
                            <p className="text-[var(--foreground)]/90">RESTful APIs, Django Rest Framework, Axios, Postman, ESLint</p>
                        </div>
                        <div className="card">
                            <h3 className="text-xl font-bold mb-3 text-[var(--foreground)]">Testing & Debugging</h3>
                            <p className="text-[var(--foreground)]/90">Jest, PHPUnit, Chrome DevTools</p>
                        </div>
                    </div>
                </div>

                {/* Work Experience */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-[var(--foreground)] relative inline-block">
                        Work Experience
                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-[var(--primary)]/20 rounded-full"></div>
                    </h2>

                    {/* Job 1 */}
                    <div className="card mb-8">
                        <h3 className="text-2xl font-bold mb-2 text-[var(--foreground)]">Full Stack Software Engineer - Capitol Information Group</h3>
                        <p className="text-[var(--foreground)]/70 mb-6">07/2023 - 12/2024 (Remote)</p>
                        <ul className="list-disc list-inside space-y-3 text-[var(--foreground)]/90">
                            <li>Expanded functionality and optimized performance across 12 web applications by leading feature development, resolving complex bugs, and
                                implementing scalable solutions using WordPress, PHP, SQL, and JavaScript/TypeScript.</li>
                            <li>Streamlined deployments with Docker, GitHub Actions, and CI/CD automation.</li>
                            <li>Built and maintained internal tools and APIs using React, enhancing scalability and subscription management.</li>
                            <li>Integrated AWS S3, Lambda, and CloudFront for CDN-based image uploads, improving performance.</li>
                            <li>Designed and developed the front-end of HREmploymentLawAdvisor.com for a responsive user experience.</li>
                            <li>Played a key role in website, database, and server migrations, ensuring minimal downtime and data integrity.</li>
                        </ul>
                    </div>

                    {/* Job 2 */}
                    <div className="card mb-8">
                        <h3 className="text-2xl font-bold mb-2 text-[var(--foreground)]">Junior Software Engineer - Capitol Information Group</h3>
                        <p className="text-[var(--foreground)]/70 mb-6">06/2022 - 07/2023 (Remote)</p>
                        <ul className="list-disc list-inside space-y-3 text-[var(--foreground)]/90">
                            <li>Maintained and enhanced 12 web applications by implementing features, fixing bugs, and optimizing performance with WordPress, PHP, SQL,
                                and JavaScript/TypeScript.</li>
                            <li>Built and improved internal tools using React, enhancing functionality and user experience.</li>
                            <li>Updated legacy codebases for better performance and modern development standards.</li>
                            <li>Collaborated with remote teams to develop features, troubleshoot issues, and improve user experience.</li>
                            <li>Assisted in website design and development, ensuring brand consistency and usability.</li>
                            <li>Strengthened expertise in object-oriented programming, design patterns, version control, and agile development.</li>
                        </ul>
                    </div>

                    {/* Job 3 */}
                    <div className="card mb-8">
                        <h3 className="text-2xl font-bold mb-2 text-[var(--foreground)]">Associate Software Engineer - ExperienceIT</h3>
                        <p className="text-[var(--foreground)]/70 mb-6">10/2021 - 06/2022 (Minneapolis, MN)</p>
                        <ul className="list-disc list-inside space-y-3 text-[var(--foreground)]/90">
                            <li>Built cross-platform applications using React, Redux, React Native, Angular, TypeScript, Python, and Django.</li>
                            <li>Developed a reusable component library to standardize UI elements and streamline development across projects, enhancing efficiency and
                                consistency.</li>
                            <li>Optimized backend performance by rewriting SQL queries for improved efficiency and faster data retrieval.</li>
                            <li>Collaborated with cross-functional teams to deliver high-quality software solutions, ensuring alignment with client requirements and project
                                goals.</li>
                            <li>Established and hosted a daily developer video chat to foster collaboration, provide peer support, and facilitate knowledge sharing, helping
                                team members resolve issues and enhance their skills.</li>
                        </ul>
                    </div>

                    {/* Job 4 */}
                    <div className="card mb-8">
                        <h3 className="text-2xl font-bold mb-2 text-[var(--foreground)]">Freelance Full-Stack Developer</h3>
                        <p className="text-[var(--foreground)]/70 mb-6">08/2021 - 01/2022 (Remote)</p>
                        <ul className="list-disc list-inside space-y-3 text-[var(--foreground)]/90">
                            <li>Developed and enhanced web applications by implementing feature updates, optimizing performance, and troubleshooting complex issues
                                using PostgreSQL, TypeScript, React, and Redux.</li>
                            <li>Collaborated directly with clients to gather requirements and translate business needs into technical solutions, ensuring alignment with project
                                goals.</li>
                            <li>Managed project workflows, pull requests, and milestones in a remote team environment, ensuring timely delivery of high-quality software
                                solutions.</li>
                        </ul>
                    </div>
                </div>

                {/* Education & Certifications */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-[var(--foreground)] relative inline-block">
                        Education & Certifications
                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-[var(--primary)]/20 rounded-full"></div>
                    </h2>
                    <div className="card">
                        <ul className="space-y-4 text-[var(--foreground)]/90">
                            <li><strong>B.A. in Business Administration</strong> – Metro State University (2018)</li>
                            <li><strong>Full-Stack Web Development</strong> – Prime Digital Academy (2021)</li>
                            <li><strong>Agile SAFe Certification</strong> – Scaled Agile (2022)</li>
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
