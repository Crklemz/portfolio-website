import React from "react";
import Image from "next/image";
import TechStack from "@/app/components/TechStack";

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

<span class="font-handwriting text-2xl italic text-primary">"Go confidently in the direction of your dreams. Live the life you have imagined."</span>
<span class="text-sm text-gray-500">— Henry David Thoreau</span>

Since then, I've poured myself into full-stack development, gaining deep experience across React, Django, PHP/WordPress, and DevOps tools like Docker and GitHub Actions. At Capitol Information Group, I've tackled 12+ applications, rapidly mastering new stacks and surprising even the CIO with my ability to absorb and apply technical knowledge at speed. They called me a sponge — in the best way possible.
But I'm not just about code. I'm about people. My teammates say I bring strong communication, teamwork, and positive energy to every collaboration. I believe in transparency, continuous learning, and putting in the work. I've also used AI tools like ChatGPT and GitHub Copilot to streamline development and solve real business challenges.`
}

const outsideTheCode = {
  title: 'Outside The Code',
  description: `When I'm not coding, I'm probably playing guitar (been jamming since I was 14), making homemade sourdough or mead, or crafting handmade archery bows from wood — yeah, I'm that guy. I've got two amazing daughters (2 and 6) and we love camping, swimming, and going to motorsport events like the sport bike and drag races at Brainerd International Raceway. Family, creativity, and being self-sufficient keep me grounded and inspired.`
}

export default function About() {
  return (
    <div className="relative min-h-screen py-16 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 pointer-events-none"></div>
      
      <section className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">{aboutMe.title}</h1>
        <div 
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: aboutMe.description }}
        />
      </section>

      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{outsideTheCode.title}</h2>
        <p className="prose prose-lg dark:prose-invert mb-12">
          {outsideTheCode.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {interests.map((interest, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <div className="relative aspect-video mb-4">
                <Image
                  src={interest.image}
                  alt={interest.title}
                  fill
                  className="object-cover rounded-lg"
                  priority={index === 0}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{interest.title}</h3>
              <p className="mb-4">{interest.description}</p>
              {interest.videoUrl && (
                <a
                  href={interest.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-block"
                >
                  {interest.videoTitle}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
      <div className="max-w-4xl mx-auto text-center">
        <a
          href="/ChristopherKlemzResume.pdf"
          download
          className="btn-primary inline-block"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
