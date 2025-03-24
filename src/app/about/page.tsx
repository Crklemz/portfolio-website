import React from "react";
import styles from "@/styles/About.module.css";
import {
  SiJavascript, SiTypescript, SiNextdotjs, SiRedux, SiDjango, SiSass, SiTailwindcss,
  SiPostgresql, SiMysql, SiGooglecloud
} from "react-icons/si";
import {
  FaPython, FaPhp, FaDatabase, FaReact, FaWordpress, FaNodeJs, FaHtml5, FaCss3,
  FaAws, FaDocker, FaGithub
} from "react-icons/fa";

const interests = [
  {
    title: 'Music',
    description: 'Played in metal and jam bands for 12 years—showcasing creativity, teamwork, and commitment.',
    image: 'https://img.youtube.com/vi/YZWZ3yCskt8/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=YZWZ3yCskt8',
    videoTitle: 'Watch Live Performance'
  },
  {
    title: 'Fatherhood',
    description: 'Proud father of 2 girls who inspire me every day.',
    image: 'https://via.placeholder.com/300?text=Fatherhood',
  },
  {
    title: 'Formula 1',
    description: 'Passionate about the world of Formula 1 racing.',
    image: 'https://via.placeholder.com/300?text=F1',
  },
  {
    title: 'Outdoor Adventures',
    description: 'Enjoy camping, water sports, and swimming—always seeking new adventures.',
    image: 'https://via.placeholder.com/300?text=Outdoor+Adventures',
  },
];

const aboutMe = {
  title: 'About Me',
  description: `Hey, I'm Chris — a Full-Stack Software Engineer who's all in on building powerful, user-focused web experiences.
Back in the early days of the pandemic, I hit a crossroads. I was managing projects in IT security but felt disconnected from what I was doing. So I made a bold decision: I took a pay cut to pursue what truly lights me up — solving complex problems through code and building things that make life and business better.
Since then, I've poured myself into full-stack development, gaining deep experience across React, Django, PHP/WordPress, and DevOps tools like Docker and GitHub Actions. At Capitol Information Group, I've tackled 12+ applications, rapidly mastering new stacks and surprising even the CIO with my ability to absorb and apply technical knowledge at speed. They called me a sponge — in the best way possible.
But I'm not just about code. I'm about people. My teammates say I bring strong communication, teamwork, and positive energy to every collaboration. I believe in transparency, continuous learning, and putting in the work. I've also used AI tools like ChatGPT and GitHub Copilot to streamline development and solve real business challenges.`
}

const outsideTheCode = {
  title: 'Outside The Code',
  description: `When I'm not coding, I'm probably playing guitar (been jamming since I was 14), making homemade sourdough or mead, or crafting handmade archery bows from wood — yeah, I'm that guy. I've got two amazing daughters (2 and 6) and we love camping, swimming, and going to motorsport events like the sport bike and drag races at Brainerd International Raceway. Family, creativity, and being self-sufficient keep me grounded and inspired.`
}

const techStack = {
  title: 'Tech Stack',
  languagesAndTools: [
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
  devHighlights: {
    title: 'Dev Highlights',
    highlights: [
      'Built responsive front-ends and internal tools with React and Django',
      'Modernized legacy apps and led full-stack feature development across multiple platforms',
      'Integrated AWS services (Lambda, S3, CloudFront) for performance boosts',
      'Automated deployments and reduced dev friction with Docker and GitHub Actions',
    ]
  }
}

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.bgAccentEffect}></div>
      <div className={styles.contentCard}>
        <h1 className={styles.title}>{aboutMe.title}</h1>
        <p className={styles.description}>
          {aboutMe.description}
        </p>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{techStack.title}</h2>
          <div className={styles.techGrid}>
            {techStack.languagesAndTools.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div key={index} className={styles.techIcon}>
                  <IconComponent className={`text-4xl ${tech.color}`} />
                  <span className={styles.techLabel}>{tech.label}</span>
                </div>
              );
            })}
          </div>
          <div className={styles.devHighlights}>
            <h3 className={styles.sectionTitle}>{techStack.devHighlights.title}</h3>
            <ul className={styles.highlightsList}>
              {techStack.devHighlights.highlights.map((highlight, index) => (
                <li key={index} className={styles.highlightItem}>{highlight}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{outsideTheCode.title}</h2>
          <p>
            {outsideTheCode.description}
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Interests</h2>
          <div className={styles.interestsGrid}>
            {interests.map((interest, index) => (
              <div key={index} className={styles.interestCard}>
                <img
                  src={interest.image}
                  alt={interest.title}
                  className={styles.interestImage}
                />
                <h3 className={styles.interestTitle}>{interest.title}</h3>
                <p className={styles.interestDescription}>{interest.description}</p>
                {interest.videoUrl && (
                  <a
                    href={interest.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.videoButton}
                  >
                    {interest.videoTitle}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Inspiration</h2>
          <blockquote className={styles.quote}>
            "Your inspiring quote here..."
          </blockquote>
        </section>
        <a
          href="/ChristopherKlemzResume.pdf"
          download
          className="btn-primary"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
