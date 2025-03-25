"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full text-center py-8 px-4 bg-[#2d2b30] text-[#ebdad9] border-t border-white/20">
      <div className="flex justify-center gap-6 mb-4">
        <Link href="/" className="text-lg text-[#ebdad9] hover:text-[#3574a9] transition-colors">
          Home
        </Link>
        <Link href="/about" className="text-lg text-[#ebdad9] hover:text-[#3574a9] transition-colors">
          About
        </Link>
        <Link href="/projects" className="text-lg text-[#ebdad9] hover:text-[#3574a9] transition-colors">
          Projects
        </Link>
        <Link href="/contact" className="text-lg text-[#ebdad9] hover:text-[#3574a9] transition-colors">
          Contact
        </Link>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mb-4">
        <a 
          href="https://github.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-2xl text-[#ebdad9] hover:text-[#3574a9] transition-colors"
        >
          <FaGithub />
        </a>
        <a 
          href="https://linkedin.com/in/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-2xl text-[#ebdad9] hover:text-[#3574a9] transition-colors"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://twitter.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-2xl text-[#ebdad9] hover:text-[#3574a9] transition-colors"
        >
          <FaTwitter />
        </a>
      </div>

      <p className="text-sm text-[#ebdad9]/60">
        © {new Date().getFullYear()} Chris Klemz. All rights reserved.
      </p>
    </footer>
  );
}
