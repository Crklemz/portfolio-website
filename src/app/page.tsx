import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-[var(--background)] text-[var(--foreground)] px-6">
      {/* Headline */}
      <h1 className="text-5xl font-bold">Hi, I&apos;m Chris!</h1>

      {/* Updated About Me Section */}
      <p className="text-lg mt-4 max-w-2xl">
        I&apos;m a Full-Stack Developer with expertise in React, React Native, Django, and WordPress. 
        I build scalable, high-performance web applications and have hands-on experience with cloud platforms like AWS and GCP. 
        I also work with Docker and GitHub Actions to streamline CI/CD workflows. 
        Lately, I&apos;ve been diving deeper into AI development, exploring ways to create smarter, more efficient solutions.
      </p>

      {/* CTA Buttons */}
      <div className="mt-6 space-x-4">
        <Link href="/projects" className="btn-primary">View My Work</Link>
        <Link href="/contact" className="btn-secondary">Contact Me</Link>
      </div>
    </div>
  );
}
