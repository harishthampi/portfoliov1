import React, { useState } from 'react';
import { Briefcase, ExternalLink, X, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'Food Delivery Platform',
    description: 'A full-featured food delivery platform built with React,Node.js and MongoDB',
    image: 'src/Assets/Food-Delivery.jpg',
    longDescription: 'Eats.com - Modern Food Delivery App. A feature-rich food delivery platform built with the MERN stack, designed for seamless ordering, secure transactions, and an intuitive user experience. The app includes real-time order management, secure authentication with Auth0, and optimized payment processing via Stripe. High-quality media is handled through Cloudinary, while the UI is crafted with TailwindCSS and Shadcn UI for a modern, responsive design. The platform ensures a smooth, efficient, and scalable food ordering experience for both customers and restaurant owners.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux','Shadcn UI','TailwindCSS','TypeScript'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Hirrd-Job Portal',
    description: 'A modern job portal built with React, Tailwind CSS, Node.js, Clerk, Supabase, and ShadCN UI, offering seamless job searching and hiring.',
    image: 'src/Assets/jobPortal.jpeg',
    longDescription: 'A next-gen job portal built with React, Tailwind CSS, and Node.js, designed to streamline job searching and hiring. The platform features secure authentication with Clerk, efficient data management using Supabase, and a modern UI crafted with ShadCN UI. With seamless job listings, applications, and employer interactions, Hirrd ensures a smooth, responsive, and user-friendly experience for both job seekers and recruiters.',
    technologies: ['React', 'Node.js', 'Clerk', 'Supabase', 'Shadcn UI','TailwindCSS'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Disnep+ Clone',
    description: '',
    image: 'src/Assets/jobPortal.jpeg',
    longDescription: 'A next-gen job portal built with React, Tailwind CSS, and Node.js, designed to streamline job searching and hiring. The platform features secure authentication with Clerk, efficient data management using Supabase, and a modern UI crafted with ShadCN UI. With seamless job listings, applications, and employer interactions, Hirrd ensures a smooth, responsive, and user-friendly experience for both job seekers and recruiters.',
    technologies: ['React', 'Node.js', 'Clerk', 'Supabase', 'Shadcn UI','TailwindCSS'],
    demoUrl: '#',
    githubUrl: '#',
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 mb-12 flex items-center gap-2 justify-center"
        >
          <Briefcase className="text-indigo-600" />
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              layoutId={`project-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProject(project)}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <motion.img 
                layoutId={`project-image-${index}`}
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <motion.h3 
                  layoutId={`project-title-${index}`}
                  className="text-xl font-semibold text-gray-900 mb-2"
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  layoutId={`project-description-${index}`}
                  className="text-gray-600 mb-4"
                >
                  {project.description}
                </motion.p>
                <motion.div
                  layoutId={`project-link-${index}`}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                >
                  View Details <ExternalLink size={16} className="ml-1" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black z-40"
            />
            <motion.div
              layoutId={`project-${projects.indexOf(selectedProject)}`}
              className="fixed inset-4 md:inset-20 bg-white rounded-xl z-50 overflow-y-auto"
            >
              <div className="relative">
                <motion.img
                  layoutId={`project-image-${projects.indexOf(selectedProject)}`}
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
                >
                  <X size={24} />
                </motion.button>
              </div>
              <div className="p-6 md:p-8">
                <motion.h3
                  layoutId={`project-title-${projects.indexOf(selectedProject)}`}
                  className="text-3xl font-bold text-gray-900 mb-4"
                >
                  {selectedProject.title}
                </motion.h3>
                <motion.p
                  layoutId={`project-description-${projects.indexOf(selectedProject)}`}
                  className="text-gray-600 mb-6"
                >
                  {selectedProject.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <p className="text-gray-600">{selectedProject.longDescription}</p>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.demoUrl}
                      className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.githubUrl}
                      className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
                    >
                      <Github size={16} className="mr-2" />
                      View Code
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}