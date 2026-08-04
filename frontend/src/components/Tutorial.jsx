import React, { useState } from 'react';
import { ArrowRight, UploadCloud, Cpu, Search, FileSpreadsheet, Film } from 'lucide-react';
import VideoFallback from './VideoFallback';

export default function Tutorial({ embedUrl, config }) {
  const [videoError, setVideoError] = useState(false);

  const steps = [
    {
      num: "01",
      icon: <UploadCloud size={16} />,
      title: "Carga de Datos",
      desc: "Sube extractos bancarios (CSV/Excel) y reportes de pasarelas como Stripe o PayPal."
    },
    {
      num: "02",
      icon: <Cpu size={16} />,
      title: "Cruce Algorítmico",
      desc: "El motor empareja automáticamente transacciones por fecha, monto y referencia."
    },
    {
      num: "03",
      icon: <Search size={16} />,
      title: "Detección de Fugas",
      desc: "Visualiza al instante comisiones no registradas o depósitos faltantes."
    },
    {
      num: "04",
      icon: <FileSpreadsheet size={16} />,
      title: "Exportación Fiscal",
      desc: "Genera reportes consolidados listos para contabilidad e impuestos."
    }
  ];

  const isLocalVideo = embedUrl && embedUrl.endsWith('.mp4');

  return (
    <section id="tutorial" className="section" style={{
      background: 'var(--bg-secondary)'
    }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div className="section-label">Guía paso a paso</div>
          <h2 className="section-title">Cómo funciona CuadraPro</h2>
          <p className="section-subtitle">
            Automatiza el flujo de conciliación bancaria en 4 sencillos pasos.
          </p>
        </div>

        {/* 2-column inverted (steps left + video right) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr minmax(320px, 500px)',
          gap: '4rem',
          alignItems: 'center',
          maxWidth: '1100px',
          margin: '0 auto'
        }} className="tutorial-split-grid">

          {/* Left: Steps Timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
            
            {/* The vertical line */}
            <div style={{
              position: 'absolute',
              left: '20px',
              top: '20px',
              bottom: '40px',
              width: '1px',
              background: 'var(--border-strong)',
              opacity: 0.3,
              zIndex: 0
            }}></div>

            {steps.map((step, idx) => (
              <div key={idx} className="timeline-step" style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.5rem',
                position: 'relative',
                zIndex: 1,
                paddingBottom: idx === steps.length - 1 ? '0' : '2.5rem'
              }}>
                {/* Step number circle */}
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  flexShrink: 0,
                  boxShadow: '0 0 0 4px var(--bg-secondary)', // Para enmascarar la línea debajo
                  transition: 'background-color 0.3s ease, border-color 0.3s ease'
                }} className="timeline-circle">
                  {step.num}
                </div>

                <div style={{ paddingTop: '0.25rem' }}>
                  <h4 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    color: 'var(--text-primary)',
                    fontWeight: 600,
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    letterSpacing: '-0.02em'
                  }}>
                    <span style={{ color: 'var(--text-dim)' }}>{step.icon}</span>
                    {step.title}
                  </h4>
                  <p style={{
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6
                  }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div style={{ paddingLeft: '3.5rem', marginTop: '3rem' }}>
              <a
                href={config?.spaUrl || 'https://cuadra-pro.vercel.app/'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.8rem 1.6rem' }}
              >
                Probar plataforma <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Right: Video */}
          <div>
            {isLocalVideo ? (
              <div style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                background: 'var(--bg-card)',
                boxShadow: '0 4px 40px rgba(0,0,0,0.05)'
              }}>
                <div style={{
                  padding: '1rem 1.5rem',
                  borderBottom: '1px solid var(--border)',
                  background: 'var(--bg-elevated)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem'
                }}>
                  <Film size={16} /> Demo interactiva
                </div>
                <video
                  src={embedUrl}
                  controls
                  controlsList="nodownload"
                  preload="metadata"
                  playsInline
                  muted
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  onError={() => setVideoError(true)}
                />
              </div>
            ) : videoError ? (
              <VideoFallback title="Tutorial guiado" />
            ) : (
              <div className="video-responsive" style={{ boxShadow: '0 4px 40px rgba(0,0,0,0.05)' }}>
                <iframe
                  src={embedUrl}
                  title="Tutorial del SPA"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onError={() => setVideoError(true)}
                />
              </div>
            )}
          </div>

        </div>

      </div>

      <style>{`
        .timeline-step:hover .timeline-circle {
          background-color: var(--text-primary);
          color: var(--bg-primary);
          border-color: var(--text-primary);
        }

        @media (max-width: 900px) {
          .tutorial-split-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
