import React from "react";
import { User } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
              alt="Profile"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <User className="text-indigo-600" />
              About Me
            </h2>
            <p className="text-gray-600 mb-6">
              As a recent entrant in the software field, I'm eager to kick-start
              my career and apply my skills and knowledge in a dynamic and
              innovative environment. With a strong foundation in computer
              science and a passion for technology, I'm now looking for an
              opportunity to join a forward-thinking organization where I can
              learn, grow, and contribute to exciting projects that make a real
              impact
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
