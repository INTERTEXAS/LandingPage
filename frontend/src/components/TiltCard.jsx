import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function TiltCard({ children, className = "", style = {} }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Rotate based on mouse position within the card
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalize mouse position between -0.5 and 0.5
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
        ...style
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          width: '100%',
          height: '100%',
          transformStyle: "preserve-3d"
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* Shadow inner layer for depth */}
        <div style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          transform: 'translateZ(-20px)',
          pointerEvents: 'none'
        }} />
        
        {/* Main Content */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          background: 'var(--bg-elevated)',
          border: '1px solid var(--border)',
          borderRadius: 'inherit',
          overflow: 'hidden',
          zIndex: 1
        }}>
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}
