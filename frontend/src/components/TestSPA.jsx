import React from 'react';
import { ExternalLink, Github, Terminal, ArrowRight } from 'lucide-react';

export default function TestSPA({ config }) {
  return (
    <section id="spa" className="section" style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg-primary)' }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60vw',
        height: '450px',
        background: 'radial-gradient(ellipse at center, var(--bg-elevated) 0%, transparent 70%)',
        pointerEvents: 'none',
        filter: 'blur(100px)',
        zIndex: 1
      }} />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
        
        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <div className="section-label">
            <Terminal size={14} /> Acceso Directo
          </div>
          <h2 className="section-title">
            Prueba la Plataforma
          </h2>
          <p className="section-subtitle">
            Interactúa con la SPA en vivo o examina el código fuente del proyecto.
          </p>
        </div>

        {/* Dual Window UI */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          maxWidth: '1100px',
          margin: '0 auto'
        }} className="spa-dual-grid">

          {/* Left Side: Live App (Glassmorphism) */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '1.25rem',
            padding: '3rem 2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            textAlign: 'left',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 4px 40px rgba(0,0,0,0.04)'
          }} className="dual-card hover-lift">
            
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 0.8rem',
                background: 'var(--text-primary)',
                color: 'var(--bg-primary)',
                borderRadius: '99px',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem'
              }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
                Despliegue Vercel
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                fontWeight: 600,
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                marginBottom: '1rem',
                lineHeight: 1.1
              }}>
                Aplicación en Producción
              </h3>
              
              <p style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '3rem'
              }}>
                Experimenta la interfaz de usuario real, flujos de autenticación y velocidad de la SPA desplegada en la nube.
              </p>
            </div>

            <a
              href={config?.spaUrl || 'https://cuadra-pro.vercel.app/'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'space-between', padding: '1rem 1.5rem' }}
            >
              Abrir CuadraPro SPA <ArrowRight size={18} />
            </a>

            {/* Decorative background element */}
            <div style={{
              position: 'absolute',
              right: '-10%',
              bottom: '-20%',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, var(--border) 0%, transparent 60%)',
              opacity: 0.5,
              zIndex: 1,
              pointerEvents: 'none'
            }} />
          </div>

          {/* Right Side: Source Code (Terminal) */}
          <div style={{
            background: '#050505', // Very dark for code feel
            border: '1px solid #27272A',
            borderRadius: '1.25rem',
            padding: '3rem 2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            textAlign: 'left',
            position: 'relative'
          }} className="dual-card hover-lift">
            
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 0.8rem',
                background: '#18181B',
                color: '#A1A1AA',
                borderRadius: '99px',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                fontFamily: 'monospace',
                marginBottom: '1.5rem',
                border: '1px solid #27272A'
              }}>
                <Github size={12} />
                Repository
              </div>

              <h3 style={{
                fontFamily: 'monospace',
                fontSize: '1.75rem',
                fontWeight: 500,
                letterSpacing: '-0.03em',
                color: '#FAFAFA',
                marginBottom: '1rem',
                lineHeight: 1.2
              }}>
                ~/cuadra-pro/src
              </h3>
              
              <p style={{
                fontSize: '0.95rem',
                color: '#A1A1AA',
                lineHeight: 1.6,
                marginBottom: '3rem',
                fontFamily: 'monospace'
              }}>
                <span style={{ color: '#F59E0B' }}>$</span> git clone https://github.com/INTERTEXAS/...<br/><br/>
                Inspecciona la arquitectura de software, componentes React y configuración de Vite directamente en GitHub.
              </p>
            </div>

            <a
              href={config?.githubUrl || 'https://github.com/INTERTEXAS'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                width: '100%',
                justifyContent: 'space-between',
                padding: '1rem 1.5rem',
                background: '#FAFAFA',
                color: '#050505',
                border: 'none'
              }}
            >
              Inspeccionar Código <ExternalLink size={18} />
            </a>
          </div>

        </div>

      </div>

      <style>{`
        .hover-lift {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-4px);
        }
        @media (max-width: 900px) {
          .spa-dual-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
