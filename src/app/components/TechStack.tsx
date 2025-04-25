"use client";

import React from "react";
import { motion } from "framer-motion";
import { techStackData } from "./data/techStack";

export default function TechStack() {
    return (
        <section className="w-full py-8 px-4 mb-8 mt-16">
            <h2 className="text-3xl font-bold text-center mb-4">{techStackData.title}</h2>
            <p className="text-center mb-8">{techStackData.description}</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {techStackData.techStack.map(({ icon: Icon, label, color }, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-lg"
                        initial={{ y: 0 }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: index * 0.1,
                        }}
                    >
                        <span className={`text-3xl ${color} mb-2`}>
                            {React.createElement(Icon)}
                        </span>
                        <span className="text-sm text-center">{label}</span>
                    </motion.div>
                ))}
            </div>

            <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-lg text-left">
                <h3 className="text-xl font-bold mb-4 text-center">{techStackData.highlightsTitle}</h3>
                <ul className="space-y-3">
                    {techStackData.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {highlight}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
