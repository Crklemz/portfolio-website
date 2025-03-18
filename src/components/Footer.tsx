"use client";

import styles from "@/styles/Footer.module.css";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className={styles.socialIcons}>
        <a href="https://github.com/Crklemz" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/chrisklemz" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>

      <p>&copy; {new Date().getFullYear()} Chris Klemz. All rights reserved.</p>
    </footer>
  );
}
