import { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Particles from './components/Particles'
import ClickSpark from './components/ClickSpark'
import IntroSplash from './components/IntroSplash'
import ScrollButton from './components/ScrollButton'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <Router>
      {showSplash && <IntroSplash onFinish={() => setShowSplash(false)} />}
      {!showSplash && (
        <ClickSpark sparkColor="#64ffda" sparkSize={12} sparkRadius={22} sparkCount={12} duration={500}>
          <div className="min-h-screen bg-white dark:bg-primary transition-colors duration-300">
            <div className="fixed inset-0 z-0">
              <Particles
                particleCount={400}
                particleSpread={25}
                speed={0.1}
                particleColors={['#64ffda', '#ccd6f6', '#8892b0']}
                moveParticlesOnHover={true}
                particleHoverFactor={3}
                alphaParticles={true}
                particleBaseSize={120}
                sizeRandomness={0.8}
                cameraDistance={12}
              />
            </div>
            <div className="relative z-10">
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
              <main className="container mx-auto px-4 py-8">
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Hero />
                    <About />
                    <Projects />
                    <Skills />
                    <Experience />
                    <Contact />
                  </motion.div>
                </AnimatePresence>
              </main>
            </div>
            <ScrollButton />
          </div>
        </ClickSpark>
      )}
    </Router>
  )
}

export default App 