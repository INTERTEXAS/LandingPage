import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Detección de móvil para desactivarlo y ahorrar rendimiento
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [isMobile, isVisible, cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        x: cursorXSpring,
        y: cursorYSpring,
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        backgroundColor: '#ffffff', // forced white for difference
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 10000,
        transform: 'translate(-50%, -50%)',
        opacity: isVisible ? 1 : 0
      }}
    />
  );
}
