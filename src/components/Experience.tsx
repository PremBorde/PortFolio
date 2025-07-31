import { motion } from 'framer-motion'

interface Experience {
  title: string
  company: string
  period: string
  description: string[]
  type: 'work' | 'education'
}

const experiences: Experience[] = [
  {
    title: 'Bachelor of Engineering',
    company: 'PCET NMIET',
    period: 'Current',
    description: [
      'CGPA To Date: 8.3/10',
      'Pursuing degree in Engineering',
      'Strong academic performance with focus on software development',
    ],
    type: 'education',
  },
  {
    title: 'HSC',
    company: 'Dr. D.Y Patil jr college',
    period: 'Completed',
    description: [
      'Percentage: 83/100',
      'Completed Higher Secondary Education',
      'Strong foundation in science and mathematics',
    ],
    type: 'education',
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-center"
        >
          Education & Certifications
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-primary" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.type}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8'
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${
                  exp.type === 'work' ? 'bg-secondary' : 'bg-blue-500'
                }`}
              />

              <div
                className={`bg-white dark:bg-tertiary p-6 rounded-lg shadow-lg ${
                  index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                } transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:border-secondary dark:hover:border-secondary border border-transparent cursor-pointer`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-textPrimary">
                    {exp.title}
                  </h3>
                  <span
                    className={`px-3 py-1 text-sm rounded-full ${
                      exp.type === 'work'
                        ? 'bg-secondary/20 text-secondary'
                        : 'bg-blue-500/20 text-blue-500'
                    }`}
                  >
                    {exp.type === 'work' ? 'Work' : 'Education'}
                  </span>
                </div>
                <h4 className="text-lg text-gray-600 dark:text-textSecondary mb-2">
                  {exp.company}
                </h4>
                <p className="text-sm text-gray-500 dark:text-textSecondary mb-4">
                  {exp.period}
                </p>
                <ul className="list-disc list-inside space-y-2">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-600 dark:text-textSecondary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center text-gray-900 dark:text-textPrimary mb-8">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Introduction to Information Technology and AWS Cloud',
              'Google Cloud - Introduction to Generative AI',
              'Infosys Springboard - Web Development Essentials',
              'Coursera - AI for Everyone',
            ].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-tertiary p-4 rounded-lg shadow-lg border border-transparent hover:border-secondary dark:hover:border-secondary transition-all duration-200 cursor-pointer"
              >
                <p className="text-gray-700 dark:text-textSecondary">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 