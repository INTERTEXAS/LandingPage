import React from 'react';
import { Quote, Sparkles, Lightbulb, Target, Trophy, ArrowRight } from 'lucide-react';

export default function Testimonial({ embedUrl, config }) {
  const h = config?.testimonialHighlights || {};

  return (
    <section id="testimonio" className="section" style={{
      position: 'relative',
      background: 'rgba(15, 23, 42, 0.35)',
      overflow: 'hidden'
    }}>
      {/* Luz ambiental centrada */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '750px',
        height: '400px',
        background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.12) 0%, rgba(6, 182, 212, 0.08) 50%, transparent 75%)',
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
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.18) 0%, rgba(6, 182, 212, 0.18) 100%)',
              border: '1px solid rgba(99, 102, 241, 0.35)',
              boxShadow: '0 4px 15px rgba(99, 102, 241, 0.15)',
              color: '#a5b4fc',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              <Quote size={15} color="var(--accent)" />
              <span>REFLEXIÓN DEL CREADOR • SECCIÓN 04</span>
            </div>
          </div>

          <h2 className="section-title" style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #ffffff 20%, #cbd5e1 60%, var(--primary) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Mi Testimonio — El Proceso de Creación
          </h2>

          <p className="section-subtitle" style={{
            fontSize: '1.15rem',
            color: 'var(--text-muted)',
            maxWidth: '750px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Una reflexión sobre los retos superados, las innovaciones implementadas y los aprendizajes clave en la creación de CuadraPro.
          </p>
        </div>

        {/* Layout Panorámico de 3 Columnas (Retos Izquierda + Video Centro + Impacto Derecha) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr minmax(300px, 450px) 1fr',
          gap: '2rem',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }} className="testimonial-studio-grid">

          {/* Columna 1 (Izquierda): Retos & Solución Técnica */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '1.75rem', background: 'rgba(18, 24, 38, 0.75)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
                <div style={{ padding: '0.45rem', borderRadius: 'var(--radius-md)', background: 'rgba(239, 68, 68, 0.15)', display: 'flex' }}>
                  <Target size={20} color="#f87171" />
                </div>
                <h3 style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 700 }}>
                  {h.challengeTitle || "El Desafío Principal"}
                </h3>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {h.challengeDesc || "Detener la pérdida silenciosa de dinero causada por discrepancias entre reportes bancarios y pasarelas de pago."}
              </p>
            </div>

            <div className="glass-card" style={{ padding: '1.75rem', background: 'rgba(18, 24, 38, 0.75)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
                <div style={{ padding: '0.45rem', borderRadius: 'var(--radius-md)', background: 'rgba(99, 102, 241, 0.15)', display: 'flex' }}>
                  <Lightbulb size={20} color="var(--primary)" />
                </div>
                <h3 style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 700 }}>
                  {h.innovationTitle || "Innovación Técnica"}
                </h3>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {h.innovationDesc || "Desarrollo de un algoritmo de cruce por hash que automatiza en segundos la conciliación de miles de datos."}
              </p>
            </div>
          </div>

          {/* Columna 2 (Centro): Video del Testimonio */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {embedUrl && embedUrl.endsWith('.mp4') ? (
              <div style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.85), 0 0 35px rgba(99, 102, 241, 0.3)',
                background: '#090d16',
                width: '100%'
              }}>
                {/* Header de ventana */}
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
                    Testimonio — Miguel Lagunes
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
              <div className="video-responsive" style={{ width: '100%' }}>
                <iframe
                  src={embedUrl}
                  title="Mi testimonio"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>

          {/* Columna 3 (Derecha): Aprendizajes & Conclusión */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '1.75rem', background: 'rgba(18, 24, 38, 0.75)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
                <div style={{ padding: '0.45rem', borderRadius: 'var(--radius-md)', background: 'rgba(6, 182, 212, 0.15)', display: 'flex' }}>
                  <Sparkles size={20} color="var(--accent)" />
                </div>
                <h3 style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 700 }}>
                  {h.learningTitle || "Aprendizaje Clave"}
                </h3>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {h.learningDesc || "Dominio de estándares de ingeniería de software (IEEE 830) y patrones modernos de desarrollo frontend SPA."}
              </p>
            </div>

            <div className="glass-card" style={{ padding: '1.75rem', background: 'rgba(18, 24, 38, 0.75)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
                <div style={{ padding: '0.45rem', borderRadius: 'var(--radius-md)', background: 'rgba(16, 185, 129, 0.15)', display: 'flex' }}>
                  <Trophy size={20} color="#34d399" />
                </div>
                <h3 style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 700 }}>
                  {h.resultTitle || "Resultado Final"}
                </h3>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {h.resultDesc || "Una aplicación funcional lista para producción que resuelve una problemática real de mercado."}
              </p>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .testimonial-studio-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
