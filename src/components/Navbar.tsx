"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full h-[70px] flex items-center justify-between px-8 fixed top-0 left-0 bg-[#2d2b30] shadow-lg z-50 border-b border-white/30">
            {/* Logo */}
            <Link href="/" className="text-3xl font-bold text-[#ebdad9]">
                CK
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6">
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

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden text-4xl cursor-pointer text-[#ebdad9]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                ☰
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-[60px] left-0 w-full bg-[#2d2b30] p-4 shadow-lg md:hidden">
                    <Link href="/" className="block py-4 text-center text-xl text-[#ebdad9] hover:text-[#3574a9] transition-colors">
                        Home
                    </Link>
                    <Link href="/about" className="block py-4 text-center text-xl text-[#ebdad9] hover:text-[#3574a9] transition-colors">
                        About
                    </Link>
                    <Link href="/projects" className="block py-4 text-center text-xl text-[#ebdad9] hover:text-[#3574a9] transition-colors">
                        Projects
                    </Link>
                    <Link href="/contact" className="block py-4 text-center text-xl text-[#ebdad9] hover:text-[#3574a9] transition-colors">
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}
