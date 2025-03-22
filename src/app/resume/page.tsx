export default function ResumePage() {
    return (
        <div className="max-w-5xl mx-auto p-8">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-4xl font-bold">Chris Klemz</h1>
                <p className="text-lg text-gray-600 mt-2">
                    Full-Stack Software Engineer | AI & Cloud Enthusiast
                </p>
                <p className="mt-4 text-lg">
                Skilled in React, Django, Docker, WordPress, and CI/CD — I bridge front-end polish with back-end power. Clean code. Smooth launches. Happy users.
                </p>
                <div className="flex justify-center gap-4 mt-6">
                    <a href="mailto:crklemz@gmail.com" className="text-blue-600">📧 crklemz@gmail.com</a>
                    <a href="https://www.linkedin.com/in/chris-klemz" className="text-blue-600">🔗 LinkedIn</a>
                    <a href="/ChristopherKlemzResume.pdf" download className="text-blue-600">📄 Download Resume (PDF)</a>
                </div>
            </div>

            {/* Skills Section */}
            <div className="mt-12">
                <h2 className="text-3xl font-bold">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                    <div>
                        <h3 className="text-xl font-semibold">Programming</h3>
                        <p>JavaScript, TypeScript, Python, PHP, SQL, HTML, CSS</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Frameworks & Libraries</h3>
                        <p>React, Next.js, Redux, MaterialUI, TailwindCSS, Django, Django Rest Framework, WordPress, Node.js</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Databases</h3>
                        <p>PostgreSQL, MySQL, SQLite3, Redis</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">DevOps & Cloud</h3>
                        <p>Docker, CI/CD, GitHub Actions, AWS, GCP, Vercel, Linux, Apache</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">APIs & Tools</h3>
                        <p>RESTful APIs, Django Rest Framework, Axios, Postman, ESLint</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Testing & Debugging</h3>
                        <p>Jest, PHPUnit, Chrome DevTools</p>
                    </div>
                </div>
            </div>

            {/* Work Experience */}
            <div className="mt-12">
                <h2 className="text-3xl font-bold">Work Experience</h2>

                {/* Job 1 */}
                <div className="mt-6">
                    <h3 className="text-xl font-semibold">Full Stack Software Engineer - Capitol Information Group</h3>
                    <p className="text-gray-500">07/2023 - 12/2024 (Remote)</p>
                    <ul className="list-disc ml-5 mt-2">
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
                <div className="mt-6">
                    <h3 className="text-xl font-semibold">Junior Software Engineer - Capitol Information Group</h3>
                    <p className="text-gray-500">06/2022 - 07/2023 (Remote)</p>
                    <ul className="list-disc ml-5 mt-2">
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
                <div className="mt-6">
                    <h3 className="text-xl font-semibold">Associate Software Engineer - ExperienceIT</h3>
                    <p className="text-gray-500">10/2021 - 06/2022 (Minneapolis, MN)</p>
                    <ul className="list-disc ml-5 mt-2">
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
                <div className="mt-6">
                    <h3 className="text-xl font-semibold">Freelance Full-Stack Developer</h3>
                    <p className="text-gray-500">08/2021 - 01/2022 (Remote)</p>
                    <ul className="list-disc ml-5 mt-2">
                        <li> Developed and enhanced web applications by implementing feature updates, optimizing performance, and troubleshooting complex issues
                            using PostgreSQL, TypeScript, React, and Redux.</li>
                        <li>Collaborated directly with clients to gather requirements and translate business needs into technical solutions, ensuring alignment with project
                            goals.</li>
                        <li>Managed project workflows, pull requests, and milestones in a remote team environment, ensuring timely delivery of high-quality software
                            solutions.</li>
                    </ul>
                </div>
            </div>

            {/* Education & Certifications */}
            <div className="mt-12">
                <h2 className="text-3xl font-bold">Education & Certifications</h2>
                <ul className="mt-4 text-lg">
                    <li><strong>B.A. in Business Administration</strong> – Metro State University (2018)</li>
                    <li><strong>Full-Stack Web Development</strong> – Prime Digital Academy (2021)</li>
                    <li><strong>Agile SAFe Certification</strong> – Scaled Agile (2022)</li>
                </ul>
            </div>

            {/* CTA for Download */}
            <div className="mt-12 text-center">
                <a
                    href="/public/ChristopherKlemzResume.pdf"
                    download
                    className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md text-lg"
                >
                    📄 Download Full Resume
                </a>
            </div>
        </div>
    );
}
