import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[var(--background)] text-[var(--foreground)] p-4 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Chris' Portfolio</h1>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-accent">Home</Link></li>
          <li><Link href="/resume" className="hover:text-accent">Resume</Link></li>
          <li><Link href="/projects" className="hover:text-accent">Projects</Link></li>
          <li><Link href="/about" className="hover:text-accent">About</Link></li>
          <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
