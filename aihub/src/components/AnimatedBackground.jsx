/**
 * AnimatedBackground Component
 * Renders floating gradient orbs for hero and section backgrounds.
 */
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Purple orb - top left */}
      <motion.div
        className="orb orb-purple w-[500px] h-[500px] -top-48 -left-48"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Cyan orb - top right */}
      <motion.div
        className="orb orb-cyan w-[400px] h-[400px] -top-20 -right-32"
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Green orb - bottom center */}
      <motion.div
        className="orb orb-green w-[350px] h-[350px] bottom-0 left-1/3"
        animate={{
          x: [0, 30, -50, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.05, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      />

      {/* Small accent orb */}
      <motion.div
        className="orb orb-purple w-[200px] h-[200px] top-1/2 right-1/4"
        animate={{
          x: [0, -20, 40, 0],
          y: [0, 40, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
