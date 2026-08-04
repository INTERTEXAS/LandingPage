import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function SpotlightCard({ children, className = "", style = {} }) {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`spotlight-card ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '1.5rem',
        border: '1px solid var(--border)',
        background: 'var(--bg-elevated)',
        padding: '2rem',
        boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
        ...style
      }}
    >
      <motion.div
        animate={{ opacity }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          pointerEvents: 'none',
          inset: '-1px',
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.08), transparent 40%)`,
          zIndex: 0
        }}
      />
      
      {/* Contenido protegido por z-index */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}
