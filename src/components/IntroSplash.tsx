import { motion } from 'framer-motion';
import { useState } from 'react';
import Particles from './Particles';

interface IntroSplashProps {
  onFinish: () => void;
}

const IntroSplash = ({ onFinish }: IntroSplashProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(onFinish, 1000); // Wait for fade out animation
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isClicked ? 0 : 1 }}
      transition={{ duration: 1 }}
      onClick={handleClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black cursor-pointer"
    >
      {/* Particles background */}
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
          className=""
        />
      </div>

      <motion.div
        initial={{ filter: "blur(20px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="text-center relative z-10"
      >
        {/* Decorative line above */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-32 h-px bg-gradient-to-r from-secondary to-primary mx-auto mb-8"
        />

        {/* Main greeting with elegant serif styling */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 tracking-wider"
          style={{
            fontFamily: 'Georgia, serif',
            fontWeight: '300',
            letterSpacing: '0.1em',
            textShadow: '0 0 30px rgba(100, 255, 218, 0.3)'
          }}
        >
          <span className="inline-block transform hover:scale-105 transition-transform duration-300">
            NAMASTE
          </span>
        </motion.h1>

        {/* Welcome message with GitHub-style typography */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 mb-8 tracking-widest uppercase"
          style={{
            fontFamily: '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Consolas", "Courier New", monospace',
            fontWeight: '400',
            letterSpacing: '0.1em'
          }}
        >
          Welcome to my Portfolio
        </motion.p>

        {/* Elegant description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="text-sm md:text-base text-gray-400 max-w-md mx-auto leading-relaxed"
          style={{
            fontFamily: '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Consolas", "Courier New", monospace',
            fontWeight: '300',
            lineHeight: '1.6'
          }}
        >
          
        </motion.p>

        {/* Decorative line below */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="w-32 h-px bg-gradient-to-r from-secondary to-primary mx-auto mt-8"
        />

        {/* Click instruction with GitHub-style styling */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-xs text-gray-500 mt-12 tracking-widest uppercase"
          style={{
            fontFamily: '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Consolas", "Courier New", monospace',
            fontWeight: '300',
            letterSpacing: '0.2em'
          }}
        >
          Click anywhere to continue
        </motion.p>

        {/* Floating decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-secondary rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-primary rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-secondary rounded-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default IntroSplash; 