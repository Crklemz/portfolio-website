"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <section className="w-full py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6">
            <p className="text-lg mb-4">"Chris is an exceptional developer who delivered beyond our expectations. His attention to detail and technical expertise made our project a success."</p>
            <p className="font-bold">- John Doe, CEO</p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6">
            <p className="text-lg mb-4">"Working with Chris was a pleasure. He's professional, responsive, and produces high-quality code."</p>
            <p className="font-bold">- Jane Smith, Project Manager</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
