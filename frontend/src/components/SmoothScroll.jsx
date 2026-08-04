import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

export default function SmoothScroll({ children }) {
  // Configuración premium de Lenis (fricción ajustada para fluidez "Apple/GetLayers")
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: false, // Touch es naturalmente smooth, no forzar
    syncTouch: true
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
