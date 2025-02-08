import React, { useState } from 'react';
import { Briefcase, ExternalLink, X, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80',
    longDescription: 'An advanced e-commerce solution featuring real-time inventory management, secure payment processing, and a responsive admin dashboard. Built with React for the frontend and Node.js/Express for the backend, utilizing MongoDB for data storage.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    longDescription: 'A real-time collaborative task management system with features like drag-and-drop task organization, team chat, and automated notifications. Implements WebSocket for real-time updates and includes comprehensive project analytics.',
    technologies: ['React', 'Socket.io', 'PostgreSQL', 'TypeScript', 'Chart.js'],
    demoUrl: '#',
    githubUrl: '#',
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

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