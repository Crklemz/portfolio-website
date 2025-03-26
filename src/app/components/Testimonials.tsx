"use client";

import { motion } from "framer-motion";

// Testimonials Data
const testimonials = [
  {
    name: `Francesco Catanzaro`,
    role: `CIO at Capitol Information Group, Inc.`,
    quote: `From the moment I hired Chris he was ready to learn and make solid decisions. What impressed me most from the get-go was his stellar work ethic, closely followed by his constant ability to keep learning and broadening his skillset. Wherever Chris goes next, I am certain he will quickly become indispensable.`
  },
  {
    name: `Hunter Rancourt`,
    role: `Senior Full-Stack Engineer`,
    quote: `Chris is incredibly reliable and consistently goes above and beyond in every task he's assigned. His hunger for knowledge and drive to continuously learn and grow set him apart from most engineers. His positive attitude and cheerful demeanor uplift the entire team, making him a joy to work with.`,
  },
  {
    name: `Mary Mettille`,
    role: `React | Ruby on Rails Developer`,
    quote: `I was particularly impressed by Chris's ability to handle even the toughest of problems by breaking everything down into manageable steps. That skill often takes years to develop among software engineers.`,
  },
  {
    name: `James Kelley`,
    role: `DevOps Engineer`,
    quote: `I've had the pleasure of working with Chris on several projects recently. His commitment to the team, work ethic, and communication is what really makes him shine and sets him apart from many people I've worked with.`,
  }
];

export default function Testimonials() {
  return (
    <section className="w-full py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-md rounded-xl p-6">
              <p className="text-lg mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
