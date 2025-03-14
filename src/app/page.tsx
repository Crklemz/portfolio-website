import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGithub, FaPhp, FaDatabase, FaHtml5, FaCss3, FaWordpress } from "react-icons/fa";
import { SiNextdotjs, SiDjango, SiGooglecloud, SiPostgresql, SiMysql, SiRedux, SiJavascript, SiTypescript, SiSass } from "react-icons/si";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-[var(--background)] text-[var(--foreground)] px-6">
      {/* Headline */}
      <h1 className="text-5xl font-bold">Hi, I&apos;m Chris!</h1>

      {/* About Me */}
      <p className="text-lg mt-4 max-w-2xl">
        I&apos;m a Full-Stack Developer with expertise in React, React Native, Django, and WordPress.
        I build scalable, high-performance web applications and have hands-on experience with cloud platforms like AWS and GCP.
        I also work with Docker and GitHub Actions to streamline CI/CD workflows.
        Lately, I&apos;ve been diving deeper into AI development, exploring ways to create smarter, more efficient solutions.
      </p>

      {/* CTA Buttons */}
      <div className="mt-6 space-x-4">
        <a href="/projects" className="btn-primary">View My Work</a>
        <a href="/contact" className="btn-secondary">Contact Me</a>
      </div>

      {/* Skills Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-6">My Tech Stack</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-6 text-4xl">
          {/* Programming Languages */}
          <div className="flex flex-col items-center">
            <SiJavascript className="text-yellow-500" /> <span className="text-sm mt-2">JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTypescript className="text-blue-500" /> <span className="text-sm mt-2">TypeScript</span>
          </div>
          <div className="flex flex-col items-center">
            <FaPython className="text-blue-600" /> <span className="text-sm mt-2">Python</span>
          </div>
          <div className="flex flex-col items-center">
            <FaPhp className="text-purple-600" /> <span className="text-sm mt-2">PHP</span>
          </div>
          <div className="flex flex-col items-center">
            <FaDatabase className="text-gray-600" /> <span className="text-sm mt-2">SQL</span>
          </div>

          {/* Frontend */}
          <div className="flex flex-col items-center">
            <FaReact className="text-blue-500" /> <span className="text-sm mt-2">React</span>
          </div>
          <div className="flex flex-col items-center">
            <SiNextdotjs className="text-black dark:text-white" /> <span className="text-sm mt-2">Next.js</span>
          </div>
          <div className="flex flex-col items-center">
            <SiRedux className="text-purple-500" /> <span className="text-sm mt-2">Redux</span>
          </div>
          <div className="flex flex-col items-center">
            <FaWordpress className="text-blue-600" /> <span className="text-sm mt-2">WordPress</span>
          </div>

          {/* Backend */}
          <div className="flex flex-col items-center">
            <SiDjango className="text-green-600" /> <span className="text-sm mt-2">Django</span>
          </div>
          <div className="flex flex-col items-center">
            <FaNodeJs className="text-green-500" /> <span className="text-sm mt-2">Node.js</span>
          </div>

          {/* Styling */}
          <div className="flex flex-col items-center">
            <FaHtml5 className="text-orange-500" /> <span className="text-sm mt-2">HTML</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCss3 className="text-blue-500" /> <span className="text-sm mt-2">CSS</span>
          </div>
          <div className="flex flex-col items-center">
            <SiSass className="text-pink-500" /> <span className="text-sm mt-2">SCSS</span>
          </div>

          {/* Databases & CMS */}
          <div className="flex flex-col items-center">
            <SiPostgresql className="text-blue-500" /> <span className="text-sm mt-2">PostgreSQL</span>
          </div>
          <div className="flex flex-col items-center">
            <SiMysql className="text-blue-600" /> <span className="text-sm mt-2">MySQL</span>
          </div>

          {/* Cloud & DevOps */}
          <div className="flex flex-col items-center">
            <FaAws className="text-orange-500" /> <span className="text-sm mt-2">AWS</span>
          </div>
          <div className="flex flex-col items-center">
            <SiGooglecloud className="text-blue-400" /> <span className="text-sm mt-2">GCP</span>
          </div>
          <div className="flex flex-col items-center">
            <FaDocker className="text-blue-600" /> <span className="text-sm mt-2">Docker</span>
          </div>
          <div className="flex flex-col items-center">
            <FaGithub className="text-gray-900 dark:text-white" /> <span className="text-sm mt-2">GitHub Actions</span>
          </div>
        </div>
      </section>
    </div>
  );
}
