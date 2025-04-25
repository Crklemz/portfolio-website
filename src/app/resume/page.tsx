import { resumeMeta, skills, workExperience, educationAndCertifications } from '../data/resume';

export default function ResumePage() {
    return (
        <div className="min-h-screen py-24 px-4 bg-[var(--background)]">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 relative">
                    <div className="gradient-bg rounded-3xl"></div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[var(--foreground)]">{resumeMeta.fullName}</h1>
                    <p className="text-2xl mb-6 text-[var(--foreground)]">
                        {resumeMeta.title}
                    </p>
                    <p className="text-xl mb-8 text-[var(--foreground)]/90 max-w-2xl mx-auto">
                        {resumeMeta.shortBio}
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <a href={`mailto:${resumeMeta.email}`} className="text-[var(--primary)] hover:text-[var(--primary)]/80 transition-colors flex items-center gap-2">
                            <span>{resumeMeta.email}</span>
                        </a>
                        <a href={resumeMeta.linkedinUrl} className="text-[var(--primary)] hover:text-[var(--primary)]/80 transition-colors flex items-center gap-2">
                            <span>LinkedIn</span>
                        </a>
                        <a href={resumeMeta.resumePdfPath} download className="text-[var(--primary)] hover:text-[var(--primary)]/80 transition-colors flex items-center gap-2">
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
                        href={resumeMeta.resumePdfPath}
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
