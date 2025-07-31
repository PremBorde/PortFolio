import { motion } from 'framer-motion'
import { AcademicCapIcon, LightBulbIcon, DevicePhoneMobileIcon, TrophyIcon, CodeBracketIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'

const highlights = [
  {
    icon: <LightBulbIcon className="h-8 w-8 text-secondary" />, 
    title: 'Full-Stack Developer',
    desc: 'Proficient in MERN stack development with experience in both frontend and backend technologies.'
  },
  {
    icon: <DevicePhoneMobileIcon className="h-8 w-8 text-secondary" />, 
    title: 'Cloud & AI/ML',
    desc: 'Experienced with AWS cloud services and passionate about exploring AI/ML technologies.'
  },
  {
    icon: <AcademicCapIcon className="h-8 w-8 text-secondary" />, 
    title: 'Project Leader',
    desc: 'Led development of PathfinderEdu, Python Voice Assistant, and Nagrik Aur Samvidhan projects.'
  },
  {
    icon: <TrophyIcon className="h-8 w-8 text-secondary" />, 
    title: 'Education',
    desc: 'Bachelor of Engineering from PCET NMIET with CGPA 8.3/10, demonstrating strong academic performance.'
  },
]

const skills = [
  { name: 'React.js', icon: <CodeBracketIcon className="h-6 w-6" /> },
  { name: 'Node.js', icon: <CodeBracketIcon className="h-6 w-6" /> },
  { name: 'Python', icon: <CodeBracketIcon className="h-6 w-6" /> },
  { name: 'MongoDB', icon: <CodeBracketIcon className="h-6 w-6" /> },
  { name: 'AWS', icon: <DevicePhoneMobileIcon className="h-6 w-6" /> },
  { name: 'MySQL', icon: <CodeBracketIcon className="h-6 w-6" /> },
]

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-white to-primary/10 dark:from-primary/40 dark:via-gray-900 dark:to-secondary/20" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Accent bar */}
          <div className="flex justify-center mb-4">
            <span className="inline-block w-16 h-1 rounded-full bg-gradient-to-r from-secondary to-primary"></span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-textPrimary tracking-tight drop-shadow-lg">
            About Me
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left column - Main content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="rounded-3xl shadow-2xl p-8 bg-white/60 dark:bg-gray-800/70 backdrop-blur-md border border-secondary/30 dark:border-primary/30">
                <div className="space-y-6 text-lg text-gray-700 dark:text-textSecondary leading-relaxed">
                  <p>
                    I'm a passionate <span className="text-secondary font-bold">Software Developer Intern</span> with expertise in <span className="text-primary font-bold">MERN stack</span> development and <span className="text-primary font-bold">AIML</span> technologies. My journey in tech has been driven by a deep curiosity about how things work and a desire to create solutions that make a real impact.
                  </p>
                  <p>
                    What sets me apart is my ability to <span className="text-secondary font-bold">bridge the gap</span> between frontend and backend development. I love working with <span className="text-primary font-bold">cloud technologies</span> and exploring <span className="text-primary font-bold">AI/ML</span> to build innovative solutions.
                  </p>
                </div>
              </div>

              {/* Skills section */}
              <div className="rounded-3xl shadow-2xl p-8 bg-white/60 dark:bg-gray-800/70 backdrop-blur-md border border-secondary/30 dark:border-primary/30">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-textPrimary flex items-center gap-2">
                  <RocketLaunchIcon className="h-6 w-6 text-secondary" />
                  Skills & Expertise
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 p-3 rounded-xl bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-secondary/20 dark:border-primary/20 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:bg-secondary/10 dark:hover:bg-secondary/20 cursor-pointer"
                    >
                      {skill.icon}
                      <span className="font-medium text-gray-700 dark:text-textSecondary">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right column - Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-3xl shadow-2xl p-8 bg-white/60 dark:bg-gray-800/70 backdrop-blur-md border border-secondary/30 dark:border-primary/30 transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:border-secondary dark:hover:border-secondary cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-secondary/10 dark:bg-secondary/20">
                      {highlight.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-textPrimary">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-700 dark:text-textSecondary">
                        {highlight.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 