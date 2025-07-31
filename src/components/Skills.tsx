import { motion } from 'framer-motion'

interface Skill {
  name: string
  level: number
  icon: string
}

const skills: Skill[] = [
  { name: 'React.js', level: 85, icon: '⚛️' },
  { name: 'JavaScript', level: 80, icon: '📜' },
  { name: 'Node.js', level: 80, icon: '🟢' },
  { name: 'Python', level: 75, icon: '🐍' },
  { name: 'MongoDB', level: 75, icon: '🍃' },
  { name: 'MySQL', level: 70, icon: '🐘' },
  { name: 'AWS', level: 70, icon: '☁️' },
  { name: 'Express.js', level: 75, icon: '🚀' },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-center"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-tertiary p-6 rounded-lg shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:border-secondary dark:hover:border-secondary border border-transparent cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-lg font-semibold text-gray-900 dark:text-textPrimary">
                    {skill.name}
                  </span>
                </div>
                <span className="text-sm text-gray-600 dark:text-textSecondary">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-primary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-secondary"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-textPrimary mb-4">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'HTML',
              'CSS',
              'Next.js',
              'Git',
              'GitHub',
              'VS Code',
              'Data Structures',
              'OOP',
              'REST APIs',
              'OpenCV',
            ].map((skill) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gray-100 dark:bg-primary text-gray-700 dark:text-textSecondary rounded-full transition-all duration-200 hover:scale-110 hover:bg-secondary/20 cursor-pointer"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 