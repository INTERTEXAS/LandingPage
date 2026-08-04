import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [counter, setCounter] = useState(0);
  const [startExit, setStartExit] = useState(false);

  useEffect(() => {
    if (typeof navigator !== 'undefined' && /bot|googlebot|crawler|spider|robot|crawling|vercel-screenshot/i.test(navigator.userAgent)) {
      setCounter(100);
      setStartExit(true);
      onComplete();
      return;
    }

    let count = 0;
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 4) + 1; // Sube más lento (1 a 4 por tick)
      if (count >= 100) {
        count = 100;
        clearInterval(interval);
        setTimeout(() => {
          setStartExit(true);
        }, 1200); // Se queda en 100% por 1.2 segundos para apreciarlo
      }
      setCounter(count);
    }, 70); // Ticks más lentos (70ms en vez de 40ms)
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: startExit ? "-100vh" : 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={(def) => {
        // When the Y animation completes, unmount via parent
        if (def && typeof def === 'object' && def.y === "-100vh" || def === "animate") {
           // framer-motion might just call it when done
        }
        if (startExit) onComplete();
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'var(--bg-primary)', // Respeta el tema oscuro/claro
        color: 'var(--text-primary)', // Respeta el tema oscuro/claro
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 'clamp(2rem, 5vw, 4rem)',
        pointerEvents: 'none'
      }}
    >
      <div className="loader-bottom-bar" style={{
        display: 'flex',
        width: '100%',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{ overflow: 'hidden' }}>
          <motion.div 
            initial={{ y: "100%" }} 
            animate={{ y: 0 }} 
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            style={{ 
              fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', 
              fontFamily: 'var(--font-display)', 
              fontWeight: 600, 
              letterSpacing: '-0.02em',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <div style={{ width: '12px', height: '12px', background: 'var(--cta)', borderRadius: '50%' }}></div>
            CUADRAPRO
          </motion.div>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: startExit ? "-100%" : 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            style={{ 
              fontSize: 'clamp(5rem, 18vw, 15rem)', 
              fontFamily: 'var(--font-display)', 
              fontWeight: 700, 
              lineHeight: 0.85, 
              letterSpacing: '-0.05em' 
            }}
          >
            {counter}
          </motion.div>
        </div>
      </div>

      {/* Curva SVG inferior para el efecto telón fluido */}
      <svg 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none" 
        style={{ 
          position: 'absolute', 
          top: '99%', 
          left: 0, 
          width: '100%', 
          height: '15vh',
          zIndex: 1
        }}
      >
        <motion.path 
          initial={{ d: "M 0 0 L 100 0 Q 50 0 0 0 Z" }}
          animate={{ d: startExit ? "M 0 0 L 100 0 Q 50 150 0 0 Z" : "M 0 0 L 100 0 Q 50 0 0 0 Z" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          fill="var(--bg-primary)"
        />
      </svg>
      <style>{`
        .loader-bottom-bar {
          justify-content: space-between;
          align-items: flex-end;
          flex-direction: row;
        }
        @media (max-width: 600px) {
          .loader-bottom-bar {
            flex-direction: column-reverse;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
      `}</style>
    </motion.div>
  );
}
