import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { siteConfig } from './data/content';
import { ThemeProvider } from './ThemeContext';

// Importación de componentes principales
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mentors from './components/Mentors';
import SalesVideo from './components/SalesVideo';
import Tutorial from './components/Tutorial';
import Testimonial from './components/Testimonial';
import Documentation from './components/Documentation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import SmoothScroll from './components/SmoothScroll';
import Cursor from './components/Cursor';

export default function App() {
  const isBot = typeof navigator !== 'undefined' && /bot|googlebot|crawler|spider|robot|crawling|vercel-screenshot/i.test(navigator.userAgent);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const [isLoaded, setIsLoaded] = useState(isBot || isMobile);

  return (
    <ThemeProvider>
      <SmoothScroll>
        <Cursor />
        <div className="app-main">
          <div className="noise-overlay" />
          <AnimatePresence>
            {!isLoaded && <Loader key="loader" onComplete={() => setIsLoaded(true)} />}
          </AnimatePresence>

          {/* NAV (sticky, arriba) */}
          <Navbar spaName={siteConfig.spaName} />

          <main>
            {/* 1. HERO */}
            <Hero config={siteConfig} isLoaded={isLoaded} isBot={isBot} />

            {/* 2. MENTORES (id: mentores) */}
            <Mentors mentors={siteConfig.mentors} />

            {/* 3. VIDEO DE VENTA (id: venta) — sección 01 */}
            <SalesVideo embedUrl={siteConfig.salesVideoEmbed} />

            {/* 4. TUTORIAL (id: tutorial) — sección 02 */}
            <Tutorial embedUrl={siteConfig.tutorialVideoEmbed} />

            {/* 5. TESTIMONIO (id: testimonio) — sección 04 */}
            <Testimonial embedUrl={siteConfig.testimonialVideoEmbed} />

            {/* 6. DOCUMENTACIÓN TÉCNICA (id: documentacion) — sección 05 */}
            <Documentation config={siteConfig} />

            {/* 7. CONTACTO (id: contacto) — sección 06 */}
            <Contact config={siteConfig} />
          </main>

          {/* FOOTER */}
          <Footer authorName={siteConfig.authorName} />
        </div>
      </SmoothScroll>
    </ThemeProvider>
  );
}
