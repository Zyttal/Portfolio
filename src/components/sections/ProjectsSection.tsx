import { motion } from 'framer-motion';
import { projects } from '@/data/projects';

export default function ProjectsSection() {
  return (
    <section id='projects' className="bg-primaryWhite relative min-h-screen w-full flex items-center justify-center">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1600px] py-12">
        <div className="mb-12 px-4">
          <h2 className="text-4xl lg:text-4xl font-bold">Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="w-full h-full bg-gray-200 bg-cover bg-center transition-transform duration-300 transform hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primaryBlack mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm lg:text-base">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-600 transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State for Single Project */}
        {projects.length === 1 && (
          <div className="mt-16 text-center px-4">
            <p className="text-gray-500 italic">
              More exciting projects coming soon!
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center px-4">
          <a
            href="https://github.com/Zyttal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-primaryBlack text-base font-semibold rounded-lg text-primaryWhite bg-primaryBlack hover:bg-primaryWhite hover:text-primaryBlack transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}