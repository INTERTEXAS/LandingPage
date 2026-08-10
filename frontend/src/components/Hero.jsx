import React, { Suspense } from 'react';
import { ArrowRight, PlayCircle, Activity, Database, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroScene = React.lazy(() => import('./HeroScene'));

export default function Hero({ config, isLoaded, isBot }) {
  const techStack = [
    "React SPA", "Three.js", "Vite", "JWT Auth", "SHA-256"
  ];

  return (
    <section id="hero" className="section" style={{
      paddingTop: '8rem',
      paddingBottom: '8rem',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      {/* 3D Background Scene (Disabled for bots to prevent WebGL headless crashes) */}
      {!isBot && (
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      )}

      <motion.div 
        className="container" 
        style={{ position: 'relative', zIndex: 2 }}
        initial={isLoaded ? "visible" : "hidden"}
        animate={isLoaded ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.2
            }
          }
        }}
      >
        <div className="hero-content-wrapper" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '2rem',
          alignItems: 'center'
        }}>
          
          <div style={{
            gridColumn: '1 / span 12',
            maxWidth: '100%',
          }} className="hero-text-column">
            
            {/* Eyebrow */}
            <motion.div 
              className="section-label-glow"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
              }}
              style={{ marginBottom: '2rem', display: 'inline-flex' }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#6366f1' }} />
              Conciliación Bancaria Inteligente
            </motion.div>

            {/* H1 */}
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
                fontWeight: 700,
                lineHeight: 1.02,
                marginBottom: '1.5rem',
                letterSpacing: '-0.04em',
                color: 'var(--text-primary)',
                textWrap: 'balance'
              }}
            >
              {config.spaName}
            </motion.h1>

            {/* Tagline */}
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
              }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                color: 'var(--text-secondary)',
                maxWidth: '600px',
                marginBottom: '3rem',
                lineHeight: 1.6
              }}
            >
              {config.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                flexWrap: 'wrap',
                marginBottom: '5rem'
              }}
            >
          <a
            href={config.spaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: '1rem 2.2rem', fontSize: '1rem' }}
          >
            Iniciar Demo <ArrowRight size={18} />
          </a>

          <a
            href={config.tutorialAnchor}
            className="btn btn-secondary"
            style={{ padding: '1rem 2.2rem', fontSize: '1rem' }}
          >
            Reproducir tutorial <PlayCircle size={18} />
          </a>
        </motion.div>

        {/* Pro Max High-Impact Metrics Bar */}
        <motion.div 
          className="metrics-bar"
          variants={{
            hidden: { opacity: 0, y: 30, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
          }}
        >
          <div className="metric-item">
            <div className="metric-value">100%</div>
            <div className="metric-label">Precisión en Conciliación</div>
          </div>
          <div className="metric-item">
            <div className="metric-value">&lt; 1.2s</div>
            <div className="metric-label">Tiempo de Procesamiento</div>
          </div>
          <div className="metric-item">
            <div className="metric-value">100%</div>
            <div className="metric-label">Trazabilidad SHA-256</div>
          </div>
          <div className="metric-item">
            <div className="metric-value">24/7</div>
            <div className="metric-label">Conexión API Bancaria</div>
          </div>
          </motion.div>
          </div>
        </div>

        {/* Bottom Section: Dashboard Preview (Full Width) */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
          }}
          style={{
            width: '100%',
            maxWidth: '1000px',
            margin: '0 auto',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '1px solid var(--border)',
            background: 'var(--bg-card)',
            boxShadow: '0 4px 40px rgba(0, 0, 0, 0.08)',
            textAlign: 'left',
            position: 'relative',
            zIndex: 10
          }}
        >
          {/* Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 1.5rem',
            borderBottom: '1px solid var(--border)',
            background: 'var(--bg-elevated)'
          }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#EF4444' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#F59E0B' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#10B981' }} />
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.8rem',
              color: 'var(--accent)',
              fontFamily: 'var(--font-display)',
              fontWeight: 600
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)',
                boxShadow: '0 0 8px var(--accent)'
              }} />
              Sistema Activo
            </div>
          </div>

          {/* KPI Cards */}
          <div style={{ padding: '2rem' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // Horizontal en full width
              gap: '1.25rem',
              marginBottom: '2rem'
            }}>
              {[
                { label: 'Transacciones', value: '12,847', sub: 'Último periodo fiscal', icon: <Activity size={18} color="var(--accent)" /> },
                { label: 'Fugas Detectadas', value: '$34,291 MXN', sub: 'Comisiones no justificadas', icon: <Database size={18} color="var(--cta)" /> },
                { label: 'Pasarelas', value: '4 activas', sub: 'Stripe · PayPal · MercadoPago', icon: <Layers size={18} color="var(--text-secondary)" /> }
              ].map((kpi, idx) => (
                <div key={idx} style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '0.75rem',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600
                  }}>
                    {kpi.icon}
                    {kpi.label}
                  </div>
                  <div style={{
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-display)',
                    marginBottom: '0.25rem',
                    letterSpacing: '-0.02em'
                  }}>
                    {kpi.value}
                  </div>
                  <div style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-dim)',
                    fontFamily: 'var(--font-body)'
                  }}>
                    {kpi.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Stack chips */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              flexWrap: 'wrap'
            }}>
              <span style={{
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-display)',
                fontWeight: 600
              }}>
                Infraestructura:
              </span>
              {techStack.map((t, idx) => (
                <span key={idx} style={{
                  fontSize: '0.8rem',
                  padding: '0.3rem 0.8rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 500
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </motion.div>

      <style>{`
        .hero-text-column {
          grid-column: 1 / span 7 !important;
        }
        @media (max-width: 900px) {
          .hero-text-column {
            grid-column: 1 / span 12 !important;
            text-align: left;
          }
          .metrics-bar {
            margin-bottom: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
