import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-[var(--background)] text-[var(--foreground)] px-6">
      <h1 className="text-5xl font-bold">Hi, I&apos;m Chris!</h1>
      <p className="text-lg mt-4">
        Full-Stack Developer | AI Enthusiast | Cloud Engineer
      </p>
      <div className="mt-6 space-x-4">
        <Link href="/projects" className="btn-primary">View My Work</Link>
        <Link href="/contact" className="btn-secondary">Contact Me</Link>
      </div>
    </div>
  );
}
