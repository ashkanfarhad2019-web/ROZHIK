import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';

interface HeartType {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<HeartType[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart: HeartType = {
        id: Date.now(),
        x: Math.random() * 100,
        size: Math.random() * (40 - 10) + 10,
        duration: Math.random() * (10 - 5) + 5,
        delay: Math.random() * 2,
      };
      setHearts((prev) => [...prev.slice(-20), newHeart]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ y: '110vh', opacity: 0, x: `${heart.x}vw` }}
            animate={{ 
              y: '-10vh', 
              opacity: [0, 0.6, 0],
              x: `${heart.x + (Math.random() * 10 - 5)}vw` 
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: heart.duration, 
              delay: heart.delay,
              ease: "linear" 
            }}
            className="absolute text-rose-400/30"
          >
            <Heart size={heart.size} fill="currentColor" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
