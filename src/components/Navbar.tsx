"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full h-[70px] flex items-center justify-between px-8 fixed top-0 left-0 bg-[var(--background)] shadow-lg z-50 border-b border-white/30">
            {/* Logo */}
            <Link href="/" className="text-3xl font-bold text-[var(--foreground)]">
                Chris Klemz
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6">
                <Link href="/" className="text-lg text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                    Home
                </Link>
                <Link href="/about" className="text-lg text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                    About
                </Link>
                <Link href="/projects" className="text-lg text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                    Projects
                </Link>
                <Link href="/resume" className="text-lg text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                    Resume
                </Link>
                <Link href="/contact" className="text-lg text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                    Contact
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden text-4xl cursor-pointer text-[var(--foreground)]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                ☰
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-[60px] left-0 w-full bg-[var(--background)] p-4 shadow-lg md:hidden">
                    <Link href="/" className="block py-4 text-center text-xl text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                        Home
                    </Link>
                    <Link href="/about" className="block py-4 text-center text-xl text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                        About
                    </Link>
                    <Link href="/projects" className="block py-4 text-center text-xl text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                        Projects
                    </Link>
                    <Link href="/resume" className="block py-4 text-center text-xl text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                        Resume
                    </Link>
                    <Link href="/contact" className="block py-4 text-center text-xl text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}
