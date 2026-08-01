import React from 'react';
import { ExternalLink, PlayCircle, Sparkles, Zap, ShieldCheck, CheckCircle2, ArrowUpRight, Activity, Database, Layers } from 'lucide-react';

export default function Hero({ config }) {
  const integrationPlatforms = [
    "PostgreSQL 16", "Redis Pub/Sub", "WebSockets / WSS", "JWT Auth", "Firma SHA-256"
  ];

  const highlights = [
    "100% Desplegado en Vercel Cloud",
    "Quórum Ponderado en Tiempo Real",
    "Firma Criptográfica SHA-256"
  ];

  return (
    <section id="hero" className="section" style={{
      paddingTop: '6.5rem',
      paddingBottom: '6rem',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Luz ambiental en la cabecera */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '450px',
        background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.15) 0%, rgba(6, 182, 212, 0.08) 50%, transparent 75%)',
        pointerEvents: 'none',
        filter: 'blur(80px)',
        zIndex: 1
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Eyebrow Destacado & Profesional */}
        <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.55rem',
            padding: '0.5rem 1.3rem',
            borderRadius: 'var(--radius-full)',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)',
            border: '1px solid rgba(99, 102, 241, 0.4)',
            boxShadow: '0 4px 20px rgba(99, 102, 241, 0.25)',
            color: '#a5b4fc',
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase'
          }}>
            <Zap size={15} color="var(--accent)" />
            <span>PLATAFORMA CORPORATIVA • GESTIÓN DE ASAMBLEAS SPA</span>
          </div>
        </div>

        {/* H1: Nombre del SPA con Gradiente */}
        <h1 style={{
          fontSize: 'clamp(3rem, 6vw, 4.8rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: '1rem',
          letterSpacing: '-0.02em',
          background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, var(--primary) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          {config.spaName}
        </h1>

        {/* Nombre del Autor con Insignia */}
        <div style={{
          fontSize: '1.15rem',
          color: 'var(--accent)',
          fontWeight: 600,
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.45rem'
        }}>
          <Sparkles size={16} color="var(--accent)" />
          <span>Por {config.authorName}</span>
        </div>

        {/* Subtítulo / Tagline */}
        <p style={{
          fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
          color: 'var(--text-muted)',
          maxWidth: '780px',
          margin: '0 auto 2.5rem auto',
          lineHeight: '1.6'
        }}>
          {config.tagline}
        </p>

        {/* Botones de Acción */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.25rem',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          {/* Botón Primario */}
          <a
            href={config.spaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: '1rem 2.4rem', fontSize: '1.02rem', boxShadow: '0 8px 25px rgba(99, 102, 241, 0.4)' }}
          >
            Probar el SPA <ExternalLink size={18} />
          </a>

          {/* Botón Secundario */}
          <a
            href={config.tutorialAnchor}
            className="btn btn-secondary"
            style={{ padding: '1rem 2.2rem', fontSize: '1.02rem' }}
          >
            Ver tutorial <PlayCircle size={18} />
          </a>
        </div>

        {/* Destacados Rápidos (Quick Highlights) */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          color: 'var(--text-muted)',
          fontSize: '0.9rem',
          marginBottom: '4rem'
        }}>
          {highlights.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={16} color="#34d399" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Mockup Interactivo del Dashboard de Plenaria */}
        <div style={{
          maxWidth: '960px',
          margin: '0 auto',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 30px 70px -15px rgba(0, 0, 0, 0.85), 0 0 40px rgba(99, 102, 241, 0.25)',
          background: 'rgba(15, 23, 42, 0.9)',
          backdropFilter: 'blur(20px)',
          textAlign: 'left'
        }}>
          {/* Header de Ventana de App */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.8rem 1.25rem',
            background: 'rgba(10, 15, 28, 0.95)',
            borderBottom: '1px solid var(--glass-border)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#ef4444' }} />
                <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#f59e0b' }} />
                <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#10b981' }} />
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, marginLeft: '0.5rem' }}>
                app.plenaria.com — Dashboard de Gestión de Asambleas
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: '#34d399', fontWeight: 600 }}>
              <span className="live-pulse-dot" />
              <span>Conexiones WebSockets Activas</span>
            </div>
          </div>

          {/* Interior del Dashboard Preview */}
          <div style={{ padding: '2rem' }}>
            
            {/* 3 Tarjetas KPI en Vivo */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem',
              marginBottom: '1.75rem'
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem'
              }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                  Quórum Legal Activo
                </div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-display)' }}>
                  75.42%
                </div>
                <div style={{ fontSize: '0.75rem', color: '#34d399', marginTop: '0.4rem', fontWeight: 600 }}>
                  50.01% Mínimo Requerido ✓
                </div>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem'
              }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                  Votación en Curso
                </div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#38bdf8', fontFamily: 'var(--font-display)' }}>
                  Punto #3 del Día
                </div>
                <div style={{ fontSize: '0.75rem', color: '#34d399', marginTop: '0.4rem', fontWeight: 600 }}>
                  Aprobación Ponderada Activa
                </div>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem'
              }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                  Accionistas Conectados
                </div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent)', marginTop: '0.2rem' }}>
                  42 Presentes
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                  Verificados con JWT + Firma
                </div>
              </div>
            </div>

            {/* Banner de Plataformas Compatibles */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: 'var(--radius-md)',
              padding: '0.9rem 1.25rem'
            }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                Stack & Protocolos Core:
              </span>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {integrationPlatforms.map((p, idx) => (
                  <span key={idx} style={{
                    fontSize: '0.8rem',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(99, 102, 241, 0.12)',
                    border: '1px solid rgba(99, 102, 241, 0.25)',
                    color: '#a5b4fc',
                    fontWeight: 600
                  }}>
                    {p}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
