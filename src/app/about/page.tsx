"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
    image: '/images/interests/boating.png',
  },
];

const aboutMe = {
  title: 'About Me',
  description: `Hey, I'm Chris — a Full-Stack Software Engineer who's all in on building powerful, user-focused web experiences.
Back in the early days of the pandemic, I hit a crossroads. I was managing projects in IT security but felt disconnected from what I was doing. So I made a bold decision: I took a pay cut to pursue what truly lights me up — solving complex problems through code and building things that make life and business better.

<span class="font-handwriting text-2xl italic text-primary my-8 block">"Go confidently in the direction of your dreams. Live the life you have imagined."</span>
<span class="text-sm text-gray-500 block mb-8">— Henry David Thoreau</span>

Since then, I've poured myself into full-stack development, gaining deep experience across React, Django, PHP/WordPress, and DevOps tools like Docker and GitHub Actions. At Capitol Information Group, I've tackled 12+ applications, rapidly mastering new stacks and surprising even the CIO with my ability to absorb and apply technical knowledge at speed. They called me a sponge — in the best way possible.
But I'm not just about code. I'm about people. My teammates say I bring strong communication, teamwork, and positive energy to every collaboration. I believe in transparency, continuous learning, and putting in the work. I've also used AI tools like ChatGPT and GitHub Copilot to streamline development and solve real business challenges.`
}

const outsideTheCode = {
  title: 'Outside The Code',
  description: `When I'm not coding, I'm probably playing guitar (been jamming since I was 14), making homemade sourdough or mead, or crafting handmade archery bows from wood — yeah, I'm that guy. I've got two amazing daughters (2 and 6) and we love camping, swimming, and going to motorsport events like the sport bike and drag races at Brainerd International Raceway. Family, creativity, and being self-sufficient keep me grounded and inspired.`
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function About() {
  return (
    <div className="relative min-h-screen py-16 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 pointer-events-none -z-10"></div>
      
      <div className="max-w-4xl mx-auto">
        <motion.section 
          className="mb-16 text-center"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
            {aboutMe.title}
          </h1>
          <div 
            className="prose prose-lg dark:prose-invert max-w-none leading-relaxed mx-auto"
            dangerouslySetInnerHTML={{ __html: aboutMe.description }}
          />
        </motion.section>

        <motion.section 
          className="mb-16 text-center"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
            {outsideTheCode.title}
          </h2>
          <p className="prose prose-lg dark:prose-invert mb-12 leading-relaxed mx-auto">
            {outsideTheCode.description}
          </p>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
            variants={staggerContainer}
          >
            {interests.map((interest, index) => (
              <motion.div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl"
                variants={fadeInUp}
              >
                <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={interest.image}
                    alt={interest.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    priority={index === 0}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[var(--primary)]">{interest.title}</h3>
                <p className="mb-4 text-gray-300">{interest.description}</p>
                {interest.videoUrl && (
                  <a
                    href={interest.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-[var(--secondary)] text-white rounded-lg hover:bg-[var(--secondary)]/90 transition-colors duration-300"
                  >
                    {interest.videoTitle}
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="/ChristopherKlemzResume.pdf"
            download
            className="btn-primary inline-flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
}
