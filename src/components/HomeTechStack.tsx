"use client";

import Link from "next/link";
import styles from "@/styles/TechStack.module.css";

export default function HomeTechStack() {
    return (
        <section className={styles.techStack}>
            <h2>Tech Stack</h2>
            <p>I specialize in developing dynamic web applications using modern technologies. My primary tools include <strong>React</strong> for crafting interactive user interfaces, <strong>Django</strong> for robust backend development, <strong>Docker</strong> for streamlined deployment processes, and <strong>WordPress</strong> for creating customizable and scalable content management systems.</p>
            <div className="flex justify-center">
                <Link href="/about#tech-stack" className="btn-primary mt-6 inline-block">
                    View Full Tech Stack
                </Link>
            </div>
        </section>
    );
} 