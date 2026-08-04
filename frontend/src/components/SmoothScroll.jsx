import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

export default function SmoothScroll({ children }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  // Detección de macOS o dispositivos iOS
  const isAppleDevice = typeof navigator !== 'undefined' && 
    (/Mac|iPad|iPhone|iPod/.test(navigator.userAgent || navigator.platform) || 
     (navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform)));

  // Detección de Windows
  const isWindows = typeof navigator !== 'undefined' && 
    /Win/.test(navigator.userAgent || navigator.platform);

  // Configuración premium de Lenis
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: false,
    syncTouch: true
  };

  // En móviles, Apple y Windows desactivamos Lenis para usar el scroll nativo 
  // y evitar el lag provocado por la sobrecarga gráfica en Windows.
  if (isMobile || isAppleDevice || isWindows) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
