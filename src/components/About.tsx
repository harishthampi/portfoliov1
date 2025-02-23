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
              src="src/Assest/picture.jpeg"
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
              I’m a highly enthusiastic and passionate coder with a strong grasp
              of full-stack development, specializing in the MERN stack and
              backend development with Java. I thrive in solving complex
              problems, building scalable applications, and continuously
              expanding my technical skill set. My goal is to contribute to
              impactful projects in a fast-paced, innovative environment where I
              can learn, grow, and collaborate with like-minded developers., I'm
              now looking for an opportunity to join a forward-thinking
              organization where I can learn, grow, and contribute to exciting
              projects that make a real impact
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
