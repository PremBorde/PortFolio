import { motion } from 'framer-motion'
import ProfileCard from './ProfileCard'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-secondary font-mono mb-4"
            >
              Hi, my name is
            </motion.p>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-textPrimary mb-4"
            >
              Prem Borde
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-5xl font-bold text-gray-600 dark:text-textSecondary mb-6"
            >
              Software Developer Intern
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 dark:text-textSecondary text-lg mb-8 max-w-2xl"
            >
              Full-stack web developer with MERN stack and AIML experience, passionate about developing impactful web solutions and exploring cloud technologies and AI/ML. Proficient in both frontend and backend development with AWS cloud experience.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.a
                href="#contact"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
              <motion.a
                href="/resume.pdf"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <ProfileCard
              name="Prem Borde"
              title="Software Developer Intern"
              handle="premborde"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/New_Profile.jpg.png"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => window.location.href = '#contact'}
              behindGradient="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)"
              innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
              miniAvatarUrl="/New_Profile.jpg.png"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 