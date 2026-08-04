import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

export default function SmoothScroll({ children }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  // Detección de macOS o dispositivos iOS para desactivar Lenis (el scroll de Apple ya es suave nativamente)
  const isAppleDevice = typeof navigator !== 'undefined' && 
    (/Mac|iPad|iPhone|iPod/.test(navigator.userAgent || navigator.platform) || 
     (navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform)));

  // Configuración premium de Lenis (fricción ajustada para fluidez "Apple/GetLayers")
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: false, // Touch es naturalmente smooth, no forzar
    syncTouch: true
  };

  // En móviles y dispositivos Apple, el scroll nativo es mucho más fluido y eficiente
  if (isMobile || isAppleDevice) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
