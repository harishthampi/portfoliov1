import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
const roles = [
  "Full Stack Developer",
  "Backend Developer",
  "Problem Solver",
];
export function Hero_() {
  const [roleIndex, setRoleIndex] = useState(0);
  //roles animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8 overflow-hidden">


      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative inline-block"
        >
          <h1 className="text-6xl sm:text-7xl font-bold mb-6 tracking-tight">
            Hello, I'm <span className="gradient-text">Harish</span>
          </h1>
        </motion.div>
        <div className="h-[2.5rem] sm:h-[3rem] mb-8 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-2xl text-gray-300 font-semibold"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex justify-center space-x-6 mb-12"
        >
          {[
            { icon: Github, href: "https://github.com/harishthampi" },
            { icon: Linkedin, href: "www.linkedin.com/in/harishbhupeshthampi" },
            { icon: Mail, href: "#" },
          ].map((item, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={item.href}
               target="_blank"
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

function setRoleIndex(arg0: (current: any) => number) {
  throw new Error("Function not implemented.");
}
