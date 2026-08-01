import React from 'react';
import { siteConfig } from './data/content';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mentors from './components/Mentors';
import SalesVideo from './components/SalesVideo';
import Tutorial from './components/Tutorial';
import TestSPA from './components/TestSPA';
import Testimonial from './components/Testimonial';
import Documentation from './components/Documentation';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-main">
      {/* NAV (sticky, arriba) */}
      <Navbar spaName={siteConfig.spaName} />

      <main>
        {/* 1. HERO */}
        <Hero config={siteConfig} />

        {/* 2. MENTORES (id: mentores) */}
        <Mentors mentors={siteConfig.mentors} />

        {/* 3. VIDEO DE VENTA (id: venta) — sección 01 */}
        <SalesVideo embedUrl={siteConfig.salesVideoEmbed} />

        {/* 4. TUTORIAL (id: tutorial) — sección 02 */}
        <Tutorial embedUrl={siteConfig.tutorialVideoEmbed} />

        {/* 5. PROBAR EL SPA (id: spa) — sección 03 */}
        <TestSPA config={siteConfig} />

        {/* 6. TESTIMONIO (id: testimonio) — sección 04 */}
        <Testimonial embedUrl={siteConfig.testimonialVideoEmbed} />

        {/* 7. DOCUMENTACIÓN TÉCNICA (id: documentacion) — sección 05 */}
        <Documentation config={siteConfig} />

        {/* 8. CONTACTO (id: contacto) — sección 06 */}
        <Contact config={siteConfig} />
      </main>

      {/* FOOTER */}
      <Footer authorName={siteConfig.authorName} />
    </div>
  );
}
