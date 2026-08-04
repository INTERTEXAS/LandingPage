import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function SpotlightCard({ children, className = "", style = {} }) {
  const divRef = useRef(null);
  const rectRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const handleMouseEnter = () => {
    if (divRef.current) {
      rectRef.current = divRef.current.getBoundingClientRect();
    }
    setOpacity(1);
  };

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    
    if (!rectRef.current) {
      rectRef.current = divRef.current.getBoundingClientRect();
    }

    const rect = rectRef.current;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty('--mouse-x', `${x}px`);
    divRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleFocus = () => {
    setIsFocused(true);
    if (divRef.current) {
      rectRef.current = divRef.current.getBoundingClientRect();
    }
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
    rectRef.current = null;
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    rectRef.current = null;
  };

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
          background: `radial-gradient(400px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(255,255,255,0.08), transparent 40%)`,
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
