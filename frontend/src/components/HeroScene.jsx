import React, { useRef, useContext } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';
import { ThemeContext } from '../ThemeContext';

// -----------------------------------------------------
// Componente de Objeto Minimalista (Micro-SaaS Style)
// -----------------------------------------------------
function GlassMonolith({ isDark, isMobile }) {
  const meshRef = useRef();

  // Animación muy sutil adicional a la flotación
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(t / 10) * 0.1;
    meshRef.current.rotation.y += 0.002;
  });

  return (
    <Float 
      speed={1.5} // Velocidad de flotación muy relajada
      rotationIntensity={0.2} 
      floatIntensity={0.8}
    >
      <mesh ref={meshRef} position={[0, 0, 0]}>
        {/* Un Toroide facetado o suave es un clásico del diseño abstracto premium */}
        <torusGeometry args={[1.4, 0.45, 64, 64]} />
        
        {/* Material Físico Premium (Glassmorphism) */}
        <meshPhysicalMaterial
          color={isDark ? '#0f172a' : '#cbd5e1'}
          emissive={isDark ? '#312e81' : '#6366f1'}
          emissiveIntensity={isDark ? 0.2 : 0.3}
          roughness={0.15}
          metalness={0.1}
          transmission={isMobile ? 0 : (isDark ? 0.9 : 0.55)} // Menos transmisión en modo claro, 0 en móvil
          thickness={isMobile ? 0 : 1.5}
          ior={1.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
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
      height: '100%', 
      // ESTRICTAMENTE DE FONDO, SIN INTERACCIÓN
      pointerEvents: 'none', 
      zIndex: 0,
      opacity: isDark ? 0.8 : 0.6
    }}>
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={isMobile ? [1, 1] : [1, 2]} // Soporte Retina moderado en PC, 1 en móvil
        gl={{ antialias: !isMobile, alpha: true, powerPreference: "high-performance" }} // Sin antialias en móvil
      >
        {/* Iluminación dramática estilo producto */}
        <ambientLight intensity={isDark ? 0.2 : 0.15} />
        
        {/* Luz principal (Índigo) */}
        <directionalLight 
          position={[5, 5, 5]} 
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
            position={[0, -2.5, 0]} 
            opacity={isDark ? 0.4 : 0.25} 
            scale={10} 
            blur={2.5} 
            far={4} 
            color={isDark ? '#6366f1' : '#1e293b'}
          />
        )}

        {/* Reflexiones del entorno para que el vidrio se vea realista */}
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
