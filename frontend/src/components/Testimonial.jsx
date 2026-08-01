import React, { useState } from 'react';
import { Target, Lightbulb, Sparkles, Trophy, Film } from 'lucide-react';

function VideoFallback({ title }) {
  return (
    <div className="video-fallback" style={{ height: '100%', border: 'none', background: 'transparent' }}>
      <Film size={44} className="video-fallback-icon" />
      <div className="video-fallback-text">{title || 'Video testimonio'}</div>
      <div className="video-fallback-sub">La reflexión del creador estará disponible pronto.</div>
    </div>
  );
}

export default function Testimonial({ embedUrl, config }) {
  const [videoError, setVideoError] = useState(false);
  const h = config?.testimonialHighlights || {};

  const cards = [
    {
      icon: <Target size={20} />,
      title: h.challengeTitle || "El Desafío Principal",
      desc: h.challengeDesc || "Detener la pérdida silenciosa de dinero causada por discrepancias entre reportes bancarios y pasarelas de pago."
    },
    {
      icon: <Lightbulb size={20} />,
      title: h.innovationTitle || "Innovación Técnica",
      desc: h.innovationDesc || "Desarrollo de un algoritmo de cruce por hash que automatiza en segundos la conciliación de miles de datos."
    },
    {
      icon: <Sparkles size={20} />,
      title: h.learningTitle || "Aprendizaje Clave",
      desc: h.learningDesc || "Dominio de estándares de ingeniería de software (IEEE 830) y patrones modernos de desarrollo frontend SPA."
    },
    {
      icon: <Trophy size={20} />,
      title: h.resultTitle || "Resultado Final",
      desc: h.resultDesc || "Una aplicación funcional lista para producción que resuelve una problemática real de mercado."
    }
  ];

  const isLocalVideo = embedUrl && embedUrl.endsWith('.mp4');

  return (
    <section id="testimonio" className="section" style={{
      background: 'var(--bg-primary)'
    }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div className="section-label">Reflexión del creador</div>
          <h2 className="section-title">El proceso de creación</h2>
          <p className="section-subtitle">
            Retos superados, innovaciones implementadas y aprendizajes clave en el desarrollo de CuadraPro.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '1rem',
          maxWidth: '1080px',
          margin: '0 auto',
          gridAutoRows: 'minmax(200px, auto)'
        }} className="bento-grid">

          {/* Card 1: Top Left */}
          <div className="bento-item" style={{ gridColumn: 'span 4' }}>
            <div className="bento-icon">{cards[0].icon}</div>
            <div>
              <h3 className="bento-title">{cards[0].title}</h3>
              <p className="bento-desc">{cards[0].desc}</p>
            </div>
          </div>

          {/* Center Video (Spans 2 rows, 4 cols) */}
          <div className="bento-item bento-video" style={{
            gridColumn: 'span 4',
            gridRow: 'span 2',
            padding: 0,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {isLocalVideo ? (
              <>
                <div style={{
                  padding: '1rem',
                  borderBottom: '1px solid var(--border)',
                  background: 'var(--bg-elevated)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.8rem',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Film size={14} /> Testimonio — {config?.authorName || 'Miguel Lagunes'}
                </div>
                <video
                  src={embedUrl}
                  controls
                  controlsList="nodownload"
                  preload="metadata"
                  playsInline
                  muted
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </>
            ) : videoError ? (
              <VideoFallback title="Video testimonio" />
            ) : (
              <div className="video-responsive" style={{ height: '100%', paddingTop: 0, border: 'none' }}>
                <iframe
                  src={embedUrl}
                  title="Mi testimonio"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>

          {/* Card 2: Top Right */}
          <div className="bento-item" style={{ gridColumn: 'span 4' }}>
            <div className="bento-icon">{cards[1].icon}</div>
            <div>
              <h3 className="bento-title">{cards[1].title}</h3>
              <p className="bento-desc">{cards[1].desc}</p>
            </div>
          </div>

          {/* Card 3: Bottom Left */}
          <div className="bento-item" style={{ gridColumn: 'span 4' }}>
            <div className="bento-icon">{cards[2].icon}</div>
            <div>
              <h3 className="bento-title">{cards[2].title}</h3>
              <p className="bento-desc">{cards[2].desc}</p>
            </div>
          </div>

          {/* Card 4: Bottom Right */}
          <div className="bento-item" style={{ gridColumn: 'span 4' }}>
            <div className="bento-icon">{cards[3].icon}</div>
            <div>
              <h3 className="bento-title">{cards[3].title}</h3>
              <p className="bento-desc">{cards[3].desc}</p>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .bento-item {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 1.5rem;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: border-color 0.3s ease, background-color 0.3s ease;
        }

        .bento-item:not(.bento-video):hover {
          background: var(--bg-elevated);
          border-color: var(--border-hover);
        }

        .bento-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--text-primary);
          color: var(--bg-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .bento-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          color: var(--text-primary);
          font-weight: 600;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
        }

        .bento-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .bento-grid {
            display: flex !important;
            flex-direction: column;
          }
          .bento-video {
            order: -1; /* Video first on mobile */
            min-height: 300px;
          }
        }
      `}</style>
    </section>
  );
}
