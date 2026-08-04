import React, { useRef, useContext } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';
import { ThemeContext } from '../ThemeContext';

// -----------------------------------------------------
// Componente de Objeto Minimalista (Micro-SaaS Style)
// -----------------------------------------------------
function GlassMonolith({ isDark, isMobile }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.15;
    meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.15;
  });

  return (
    <group ref={meshRef} position={isMobile ? [0, 0, 0] : [3, 0, -1]} scale={isMobile ? 1 : 1.8}>
      {/* Outer Glass TorusKnot */}
      <mesh>
        <torusKnotGeometry args={isMobile ? [1, 0.3, 64, 16] : [1, 0.3, 100, 16]} />
        <meshPhysicalMaterial
          color={isDark ? '#0f172a' : '#64748b'}
          metalness={isDark ? 0.1 : 0.4}
          roughness={isDark ? 0.05 : 0.1}
          transmission={isMobile ? 0 : (isDark ? 1 : 0.8)}
          thickness={isMobile ? 0 : 1.5}
          ior={isMobile ? 1.0 : 1.5}
          envMapIntensity={isMobile ? 0.5 : 2}
          clearcoat={isMobile ? 0 : 1}
          clearcoatRoughness={0.1}
          transparent={true}
          opacity={1}
        />
      </mesh>

      {/* Inner Glowing Core */}
      <mesh scale={0.7}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color={isDark ? '#312e81' : '#6366f1'} transparent opacity={0.8} />
      </mesh>
    </group>
  );
}

// -----------------------------------------------------
// Contenedor Principal (Escena)
// -----------------------------------------------------
export default function HeroScene() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  
  // Detección simple de móvil para apagar efectos pesados
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100vh', 
      // ESTRICTAMENTE DE FONDO, SIN INTERACCIÓN
      pointerEvents: 'none', 
      zIndex: 0,
      opacity: isMobile ? (isDark ? 0.25 : 0.2) : (isDark ? 0.8 : 0.6),
      transition: 'opacity 0.3s ease'
    }}>
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={isMobile ? [1, 1] : [1, 1.5]} // Soporte Retina moderado en PC, 1 en móvil
        gl={{ antialias: !isMobile, alpha: true, powerPreference: "high-performance" }} // Sin antialias en móvil
      >
        {/* Iluminación dramática estilo producto */}
        <ambientLight intensity={isDark ? 0.3 : 0.2} />
        
        {/* Luz principal (Índigo) */}
        <directionalLight 
          position={[10, 10, 5]}  
          intensity={isDark ? 3 : 2.5} 
          color="#6366f1" 
        />
        
        {/* Luz de relleno (Cian) para destacar el borde del vidrio */}
        <pointLight 
          position={[-5, -5, -2]} 
          intensity={isDark ? 4 : 2} 
          color="#06b6d4" 
        />

        {/* Objeto central */}
        <GlassMonolith isDark={isDark} isMobile={isMobile} />

        {/* Sombra proyectada falsa en el "suelo" (Desactivada en móvil por rendimiento) */}
        {!isMobile && (
          <ContactShadows 
            position={[3, -4, -1]} 
            opacity={isDark ? 0.5 : 0.3} 
            scale={15} 
            blur={3} 
            far={5} 
            color={isDark ? '#6366f1' : '#1e293b'}
          />
        )}

        {/* Reflexiones del entorno para que el vidrio se vea realista */}
        <Environment preset="city" />

      </Canvas>
    </div>
  );
}
