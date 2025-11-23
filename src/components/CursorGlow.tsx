import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const newTrailPoint = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
      };
      
      setTrail((prevTrail) => [...prevTrail.slice(-8), newTrailPoint]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Main cursor glow */}
      <motion.div
        className="pointer-events-none fixed z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      >
        <div className="h-10 w-10 rounded-full bg-primary/30 blur-xl" />
      </motion.div>

      {/* Trail effect */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="pointer-events-none fixed z-40 hidden md:block"
          initial={{ x: point.x - 5, y: point.y - 5, opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div 
            className="h-2 w-2 rounded-full"
            style={{
              background: index % 2 === 0 ? '#00C3FF' : '#2aa149',
              boxShadow: `0 0 10px ${index % 2 === 0 ? '#00C3FF' : '#2aa149'}`,
            }}
          />
        </motion.div>
      ))}

      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 15,
          y: mousePosition.y - 15,
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 150,
        }}
      >
        <div className="h-8 w-8 rounded-full border-2 border-primary/50" />
      </motion.div>
    </>
  );
}
