import { motion } from 'framer-motion'

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  live: string
}

const projects: Project[] = [
  {
    title: 'PathfinderEdu - Career Navigator Web App',
    description:
      'Full-Stack MERN Application - Career guidance platform for students after 10th & 12th. Features include career exploration tools, entrance exams database, scholarship listings, and role-based dashboards.',
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80',
    technologies: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/PremBorde/PathFinderEdu',
    live: 'https://premborde.github.io/PathFinderEdu/',
  },
  {
    title: 'Python Voice Assistant with Face Recognition & GUI',
    description:
      'Multi-functional desktop assistant with smart features including voice commands, face recognition, and desktop GUI. Integrates Android control via ADB and uses SQLite for local storage.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=80',
    technologies: ['Python', 'OpenCV', 'SQLite', 'HTML/CSS/JS', 'ADB'],
    github: 'https://github.com/PremBorde/voice-assistant',
    live: '#',
  },
  {
    title: 'Nagrik Aur Samvidhan - Gamified Constitution Learning',
    description:
      'Interactive civic literacy platform that simplifies Indian Constitution articles into Hinglish. Features quizzes, cards, and board games for students and citizens.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67932ba0?auto=format&fit=crop&w=800&q=80',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Gamification'],
    github: 'https://github.com/PremBorde/nagrik-samvidhan',
    live: '#',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-tertiary rounded-lg overflow-hidden shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:border-secondary dark:hover:border-secondary border border-transparent cursor-pointer"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-secondary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-secondary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-textPrimary mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-textSecondary mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-primary text-gray-700 dark:text-textSecondary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 