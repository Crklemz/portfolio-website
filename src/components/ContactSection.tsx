"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactSection() {
    return (
        <section className="w-full py-16 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
                <p className="text-lg mb-8">I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                <Link href="/contact" className="btn-primary inline-block">
                    Contact Me
                </Link>
            </motion.div>
        </section>
    );
}
