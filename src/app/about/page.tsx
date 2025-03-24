import React from "react";
import Image from "next/image";
import styles from "@/styles/About.module.css";
import TechStack from "@/components/TechStack";

const interests = [
  {
    title: 'Music',
    description: 'Played in metal and jam bands for 12 years—showcasing creativity, teamwork, and commitment.',
    image: '/images/interests/music.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=YZWZ3yCskt8',
    videoTitle: 'Watch Live Performance'
  },
  {
    title: 'Fatherhood',
    description: 'Proud father of 2 girls who inspire me every day.',
    image: '/images/interests/fatherhood.png',
  },
  {
    title: 'Formula 1',
    description: 'Passionate about the world of Formula 1 racing.',
    image: '/images/interests/formula1.jpg',
  },
  {
    title: 'Outdoor Adventures',
    description: 'Enjoy camping, water sports, and swimming—always seeking new adventures.',
    image: '/images/interests/outdoor-adventures.png',
  },
];

const aboutMe = {
  title: 'About Me',
  description: `Hey, I'm Chris — a Full-Stack Software Engineer who's all in on building powerful, user-focused web experiences.
Back in the early days of the pandemic, I hit a crossroads. I was managing projects in IT security but felt disconnected from what I was doing. So I made a bold decision: I took a pay cut to pursue what truly lights me up — solving complex problems through code and building things that make life and business better.

<span class="${styles.handwrittenQuote}">"Go confidently in the direction of your dreams. Live the life you have imagined."</span>
<span class="${styles.quoteAttribution}">— Henry David Thoreau</span>

Since then, I've poured myself into full-stack development, gaining deep experience across React, Django, PHP/WordPress, and DevOps tools like Docker and GitHub Actions. At Capitol Information Group, I've tackled 12+ applications, rapidly mastering new stacks and surprising even the CIO with my ability to absorb and apply technical knowledge at speed. They called me a sponge — in the best way possible.
But I'm not just about code. I'm about people. My teammates say I bring strong communication, teamwork, and positive energy to every collaboration. I believe in transparency, continuous learning, and putting in the work. I've also used AI tools like ChatGPT and GitHub Copilot to streamline development and solve real business challenges.`
}

const outsideTheCode = {
  title: 'Outside The Code',
  description: `When I'm not coding, I'm probably playing guitar (been jamming since I was 14), making homemade sourdough or mead, or crafting handmade archery bows from wood — yeah, I'm that guy. I've got two amazing daughters (2 and 6) and we love camping, swimming, and going to motorsport events like the sport bike and drag races at Brainerd International Raceway. Family, creativity, and being self-sufficient keep me grounded and inspired.`
}

const devHighlights = {
  title: 'Dev Highlights',
  highlights: [
    'Built responsive front-ends and internal tools with React and Django',
    'Modernized legacy apps and led full-stack feature development across multiple platforms',
    'Integrated AWS services (Lambda, S3, CloudFront) for performance boosts',
    'Automated deployments and reduced dev friction with Docker and GitHub Actions',
  ]
}

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.bgAccentEffect}></div>
      
      <section className={styles.section}>
        <h1 className={styles.title}>{aboutMe.title}</h1>
        <div 
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: aboutMe.description }}
        />
      </section>

      <section className={styles.section}>
        <TechStack />
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{outsideTheCode.title}</h2>
        <p className={styles.description}>
          {outsideTheCode.description}
        </p>
        <div className={styles.interestsGrid}>
          {interests.map((interest, index) => (
            <div key={index} className={styles.interestCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={interest.image}
                  alt={interest.title}
                  width={400}
                  height={300}
                  quality={100}
                  className={styles.interestImage}
                  priority={index === 0}
                />
              </div>
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
          Your inspiring quote here...
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
  );
}
