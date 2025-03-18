"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/Testimonials.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Testimonials Data
const testimonials = [
    {
        name: `Hunter Rancourt`,
        role: `Senior Full-Stack Engineer`,
        quote: `I had the pleasure of working with Chris, and I can't recommend him highly enough as a software engineer. Chris stands out as one of the nicest and kindest individuals I've ever met, effortlessly fitting in and forming connections with everyone he encounters. His exceptional communication skills enable him to convey complex technical concepts clearly and effectively, regardless of the audience.`,
    },
    {
        name: `James Kelley`,
        role: `DevOps Engineer`,
        quote: `I’ve had the pleasure of working with Chris on several projects recently. His commitment to the team, work ethic, and communication is what really makes him shine and sets him apart from many people I’ve worked with.`,
    },
    {
        name: `Mary Mettille`,
        role: `React | Ruby on Rails Developer`,
        quote: `I recently collaborated with Chris on a project and was particularly impressed by Chris's ability to handle even the toughest of problems by breaking everything down into manageable steps. That skill often takes years to develop among software engineers, but it seemed to come perfectly naturally to him. I'm looking forward to working with him again!`,
    },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 5000);
        return () => clearInterval(interval);
    }, [index]);

    const nextTestimonial = () => {
        setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className={styles.testimonialsSection}>
            <h2 className={styles.sectionTitle}>What Others Say About Me</h2>
            <p className={styles.sectionSubtitle}>Feedback from colleagues & collaborators</p>
            <div className={styles.carouselContainer}>
                <FaChevronLeft className={styles.arrow} onClick={prevTestimonial} />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        className={styles.testimonialCard}
                        initial={{ opacity: 0, x: 0, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className={styles.quote}>"{testimonials[index].quote}"</p>
                        <h3 className={styles.name}>{testimonials[index].name}</h3>
                        <span className={styles.role}>{testimonials[index].role}</span>
                    </motion.div>
                </AnimatePresence>
                <FaChevronRight className={styles.arrow} onClick={nextTestimonial} />
            </div>
        </section>
    );
}
