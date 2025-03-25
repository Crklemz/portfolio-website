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
    quote: `Chris is incredibly reliable and consistently goes above and beyond in every task he's assigned. His hunger for knowledge and drive to continuously learn and grow set him apart from most engineers. His positive attitude and cheerful demeanor uplift the entire team, making him a joy to work with.`,
  },
  {
    name: `James Kelley`,
    role: `DevOps Engineer`,
    quote: `I've had the pleasure of working with Chris on several projects recently. His commitment to the team, work ethic, and communication is what really makes him shine and sets him apart from many people I've worked with.`,
  },
  {
    name: `Mary Mettille`,
    role: `React | Ruby on Rails Developer`,
    quote: `I was particularly impressed by Chris's ability to handle even the toughest of problems by breaking everything down into manageable steps. That skill often takes years to develop among software engineers.`,
  },
  {
    name: `Francesco Catanzaro`,
    role: `CIO at Capitol Information Group, Inc.`,
    quote: `From the moment I hired Chris he was ready to learn and make solid decisions. What impressed me most from the get-go was his stellar work ethic, closely followed by his constant ability to keep learning and broadening his skillset. Wherever Chris goes next, I am certain he will quickly become indispensable.`
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile view by window width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // initial check

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // Define animation props conditionally
  const animationProps = isMobile
    ? null
    : {
        initial: { opacity: 0, x: 0, scale: 0.9 },
        animate: { opacity: 1, x: 0, scale: 1 },
        exit: { opacity: 0, x: 0, scale: 0.9 },
      };

  return (
    <section className={`${styles.testimonialsSection} section`}>
      <h2 className={styles.sectionTitle}>What Others Say About Me</h2>
      <p className={styles.sectionSubtitle}>
        Feedback from colleagues & collaborators
      </p>
      <div className={styles.carouselContainer}>
        <FaChevronLeft className={styles.arrow} onClick={prevTestimonial} />

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className={styles.testimonialCard}
            {...animationProps}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            <div className={styles.testimonialContent}>
              <p className={styles.quote}>&quot;{testimonials[index].quote}&quot;</p>
              <h3 className={styles.name}>{testimonials[index].name}</h3>
              <span className={styles.role}>{testimonials[index].role}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        <FaChevronRight className={styles.arrow} onClick={nextTestimonial} />
      </div>
    </section>
  );
}
