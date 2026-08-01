import React from 'react';
import { BookOpen, CheckCircle2, ArrowRight, UploadCloud, Cpu, Search, FileSpreadsheet } from 'lucide-react';

export default function Tutorial({ embedUrl, config }) {
  const steps = [
    {
      num: "01",
      icon: <UploadCloud size={18} color="var(--accent)" />,
      title: "Carga de Datos",
      desc: "Sube extractos bancarios (CSV/Excel) y reportes de pasarelas como Stripe o PayPal."
    },
    {
      num: "02",
      icon: <Cpu size={18} color="var(--primary)" />,
      title: "Cruce Algorítmico",
      desc: "El motor de CuadraPro empareja automáticamente transacciones por fecha, monto y referencia."
    },
    {
      num: "03",
      icon: <Search size={18} color="#f59e0b" />,
      title: "Detección de Fugas",
      desc: "Visualiza al instante comisiones no registradas o depósitos faltantes."
    },
    {
      num: "04",
      icon: <FileSpreadsheet size={18} color="#34d399" />,
      title: "Exportación Fiscal",
      desc: "Genera e imprime reportes consolidados listos para contabilidad e impuestos."
    }
  ];

  return (
    <section id="tutorial" className="section" style={{
      position: 'relative',
      background: 'rgba(15, 23, 42, 0.35)',
      overflow: 'hidden'
    }}>
      {/* Luz ambiental de fondo */}
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '10%',
        transform: 'translateY(-50%)',
        width: '600px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 70%)',
        pointerEvents: 'none',
        filter: 'blur(70px)',
        zIndex: 1
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Header de Sección */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ marginBottom: '1.2rem', display: 'flex', justifyContent: 'center' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.45rem 1.2rem',
              borderRadius: 'var(--radius-full)',
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.18) 0%, rgba(99, 102, 241, 0.18) 100%)',
              border: '1px solid rgba(6, 182, 212, 0.35)',
              boxShadow: '0 4px 15px rgba(6, 182, 212, 0.15)',
              color: '#a5b4fc',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              <BookOpen size={15} color="var(--accent)" />
              <span>GUÍA PASO A PASO • SECCIÓN 02</span>
            </div>
          </div>

          <h2 className="section-title" style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #ffffff 20%, #cbd5e1 60%, var(--accent) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Tutorial de Uso — CuadraPro
          </h2>

          <p className="section-subtitle" style={{
            fontSize: '1.15rem',
            color: 'var(--text-muted)',
            maxWidth: '750px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Aprende a dominar la plataforma y automatizar el flujo de conciliación bancaria en 4 sencillos pasos.
          </p>
        </div>

        {/* Layout en 2 Columnas Inversas (Panel de Pasos a la Izquierda + Video a la Derecha) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr minmax(300px, 420px)',
          gap: '3rem',
          alignItems: 'center',
          maxWidth: '1100px',
          margin: '0 auto'
        }} className="tutorial-split-grid">
          
          {/* Columna Izquierda: Panel Didáctico de Pasos */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div className="glass-card" style={{ padding: '2rem', background: 'rgba(18, 24, 38, 0.75)' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <BookOpen size={20} color="var(--accent)" />
                Flujo Didáctico de la Aplicación
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {steps.map((step, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '0.9rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    transition: 'all 0.2s'
                  }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'rgba(99, 102, 241, 0.15)',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#a5b4fc',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      flexShrink: 0
                    }}>
                      {step.num}
                    </div>

                    <div>
                      <h4 style={{ fontSize: '1.02rem', color: '#fff', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        {step.icon}
                        <span>{step.title}</span>
                      </h4>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA a la App */}
            <div>
              <a
                href={config?.spaUrl || 'https://cuadra-pro.vercel.app/'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.85rem 1.8rem', fontSize: '0.92rem' }}
              >
                Abrir la App y Probar Pasos <ArrowRight size={16} />
              </a>
            </div>

          </div>

          {/* Columna Derecha: Video del Tutorial */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {embedUrl && embedUrl.endsWith('.mp4') ? (
              <div style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 35px rgba(6, 182, 212, 0.25)',
                background: '#090d16',
                width: '100%'
              }}>
                {/* Header de ventana de app */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.65rem 1rem',
                  background: 'rgba(15, 23, 42, 0.9)',
                  borderBottom: '1px solid var(--glass-border)'
                }}>
                  <div style={{ display: 'flex', gap: '0.4rem' }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444' }} />
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b' }} />
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#10b981' }} />
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                    Tutorial Guiado CuadraPro
                  </span>
                </div>

                <video
                  src={embedUrl}
                  controls
                  controlsList="nodownload"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              </div>
            ) : (
              <div className="video-responsive" style={{ width: '100%', maxWidth: '850px' }}>
                <iframe
                  src={embedUrl}
                  title="Tutorial del SPA"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 850px) {
          .tutorial-split-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
