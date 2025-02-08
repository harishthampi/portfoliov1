import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
        <div className="hero-glow"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover opacity-10"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative inline-block"
        >
          <h1 className="text-6xl sm:text-7xl font-bold mb-6 tracking-tight">
            Hi, I'm <span className="gradient-text">Harish</span>
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl sm:text-2xl text-gray-300 mb-8 font-light"
        >
          Full Stack Developer | UI/UX Enthusiast | Problem Solver
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex justify-center space-x-6 mb-12"
        >
          {[
            { icon: Github, href: "#" },
            { icon: Linkedin, href: "#" },
            { icon: Mail, href: "#" }
          ].map((item, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={item.href}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <item.icon size={28} />
            </motion.a>
          ))}
        </motion.div>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          href="#about"
          className="inline-block text-gray-400 hover:text-white transition-colors duration-300"
        >
          <ChevronDown size={36} />
        </motion.a>
      </div>
    </section>
  );
}