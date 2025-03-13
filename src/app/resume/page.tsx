// Skills
const skills = [
  { category: "Frontend", technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"] },
  { category: "Backend", technologies: ["Django", "Node.js", "Express", "FastAPI"] },
  { category: "Databases", technologies: ["PostgreSQL", "MySQL", "SQLite3", "Redis"] },
  { category: "DevOps & Cloud", technologies: ["Docker", "AWS", "GCP", "CI/CD Pipelines"] },
  { category: "AI/ML", technologies: ["TensorFlow", "OpenAI API", "LangChain"] }
];

// Work Experience
const workExperience = [
  {
    title: "Full Stack Software Engineer",
    company: "Capitol Information Group (Remote)",
    duration: "07/2023 - 12/2024",
    description: [
      "Developed and optimized 12 web applications using JavaScript, TypeScript, and PHP.",
      "Built and maintained APIs and internal tools using React and Django.",
      "Implemented AWS S3 and CloudFront for CDN-based image uploads.",
    ],
  },
  {
    title: "Junior Software Engineer",
    company: "Capitol Information Group (Remote)",
    duration: "06/2022 - 07/2023",
    description: [
      "Maintained and enhanced multiple subscription-based web apps.",
      "Developed new features and fixed bugs in WordPress and PHP.",
    ],
  },
];

// Projects
const projects = [
  {
    title: "AI Chatbot",
    description: "An AI chatbot powered by OpenAI's GPT for customer interactions.",
    technologies: ["React", "LangChain", "OpenAI API"],
    liveLink: "#",
    github: "#"
  },
  {
    title: "E-Commerce Store",
    description: "A full-stack online store with secure Stripe payments.",
    technologies: ["Next.js", "Django", "PostgreSQL"],
    liveLink: "#",
    github: "#"
  },
];

// Education & Certifications
const education = [
  { degree: "B.A. in Business Administration", school: "Metro State University", year: "2018" },
  { degree: "Full-Stack Web Development", school: "Prime Digital Academy", year: "2021" },
  { degree: "Agile SAFe Certification", school: "Scaled Agile", year: "2022" }
];

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">Chris Klemz</h1>
        <p className="text-lg mt-2 text-gray-500">
          Full-Stack Software Engineer | AI & Cloud Enthusiast
        </p>
        <p className="mt-4">
          Experienced in JavaScript, TypeScript, Python, React, Django, and DevOps. Passionate about building scalable applications and leveraging AI to enhance software efficiency.
        </p>
        <a
          href="/resume.pdf"
          download
          className="mt-6 inline-block bg-primary text-white py-2 px-4 rounded-md"
        >
          Download Resume (PDF)
        </a>
      </div>

      {/* Skills Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-secondary text-white p-4 rounded-md shadow">
              <h3 className="text-xl font-semibold">{skill.category}</h3>
              <p className="mt-2">{skill.technologies.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Work Experience */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold">Work Experience</h2>
        {workExperience.map((job, index) => (
          <div key={index} className="mt-6">
            <h3 className="text-xl font-semibold">{job.title} - {job.company}</h3>
            <p className="text-gray-500">{job.duration}</p>
            <ul className="list-disc ml-5 mt-2">
              {job.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Projects Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-secondary text-white p-4 rounded-md shadow">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <p className="text-gray-300 mt-2">Tech: {project.technologies.join(", ")}</p>
              <div className="mt-4">
                <a href={project.liveLink} className="text-primary mr-4">Live Demo</a>
                <a href={project.github} className="text-primary">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Certifications */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold">Education & Certifications</h2>
        <ul className="mt-4">
          {education.map((edu, index) => (
            <li key={index} className="mt-2">
              <strong>{edu.degree}</strong> - {edu.school} ({edu.year})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
