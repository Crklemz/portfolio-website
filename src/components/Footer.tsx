"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full text-center py-8 px-4 bg-[var(--background)] text-[var(--foreground)] border-t border-white/20">
      <div className="flex justify-center space-x-6 mb-4">
        <Link href="/" className="text-lg text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
          Home
        </Link>
        <Link href="/about" className="text-lg text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
          About
        </Link>
        <Link href="/projects" className="text-lg text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
          Projects
        </Link>
        <Link href="/contact" className="text-lg text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
          Contact
        </Link>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-4">
        <a 
          href="https://github.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-2xl text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
        >
          <FaGithub />
        </a>
        <a 
          href="https://linkedin.com/in/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-2xl text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://twitter.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-2xl text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
        >
          <FaTwitter />
        </a>
        <a 
          href="mailto:your.email@example.com"
          className="text-2xl text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
        >
          <FaEnvelope />
        </a>
      </div>

      <p className="text-sm text-[var(--foreground)]/60">
        © {new Date().getFullYear()} Chris Klemz. All rights reserved.
      </p>
    </footer>
  );
}
