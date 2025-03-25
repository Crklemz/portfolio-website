"use client";

import { motion } from "framer-motion";
import TechStack from "./TechStack";

export default function HomeTechStack() {
    return (
        <section className="w-full py-16 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Tech Stack</h2>
                <TechStack />
            </motion.div>
        </section>
    );
} 