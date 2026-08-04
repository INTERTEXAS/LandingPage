import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

export default function SmoothScroll({ children }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Configuración premium de Lenis (fricción ajustada para fluidez "Apple/GetLayers")
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: false, // Touch es naturalmente smooth, no forzar
    syncTouch: true
  };

  // En móviles, el scroll nativo es mucho más fluido y eficiente
  if (isMobile) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
