import React from 'react';
import { PlayCircle, Zap, ShieldCheck, BarChart3, ArrowRight, CheckCircle2, DollarSign, TrendingUp, Clock } from 'lucide-react';

export default function SalesVideo({ embedUrl, config }) {
  const stats = [
    { value: "99.8%", label: "Precisión de Conciliación", icon: <TrendingUp size={18} color="var(--accent)" /> },
    { value: "< 3 min", label: "Cruce de 10k Transacciones", icon: <Clock size={18} color="var(--primary)" /> },
    { value: "100%", label: "Detección de Fugas", icon: <DollarSign size={18} color="#34d399" /> }
  ];

  const benefits = [
    "Cruce automático entre Stripe, PayPal, MercadoPago y bancos.",
    "Identificación de comisiones no justificadas y retenciones.",
    "Reportes consolidados listos para auditoría fiscal e impuestos.",
    "Alertas en tiempo real ante discrepancias en depósitos."
  ];

  return (
    <section id="venta" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Luz ambiental de fondo */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(6, 182, 212, 0.06) 50%, transparent 70%)',
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
              <PlayCircle size={15} color="var(--accent)" />
              <span>DEMO & PITCH DE PRODUCTO • SECCIÓN 01</span>
            </div>
          </div>

          <h2 className="section-title" style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #ffffff 20%, #cbd5e1 60%, var(--primary) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Video de Venta — CuadraPro
          </h2>

          <p className="section-subtitle" style={{
            fontSize: '1.15rem',
            color: 'var(--text-muted)',
            maxWidth: '750px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Mira la demostración en video y descubre cómo CuadraPro elimina los errores manuales y protege el flujo de efectivo de tu empresa.
          </p>
        </div>

        {/* Layout en 2 Columnas (Video a la Izquierda + Panel Informativo a la Derecha) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(300px, 400px) 1fr',
          gap: '3rem',
          alignItems: 'center',
          maxWidth: '1100px',
          margin: '0 auto'
        }} className="sales-split-grid">
          
          {/* Columna Izquierda: Video en marco de app */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {embedUrl && embedUrl.endsWith('.mp4') ? (
              <div style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 35px rgba(99, 102, 241, 0.3)',
                background: '#090d16',
                width: '100%'
              }}>
                {/* Window Bar */}
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
                    Demo Comercial (0:45 min)
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
                  title="Video de Venta"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>

          {/* Columna Derecha: Panel Ejecutivo con Métricas & Puntos Clave */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Tarjeta de Métricas Rápidas */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '1rem'
            }}>
              {stats.map((stat, idx) => (
                <div key={idx} className="glass-card" style={{
                  padding: '1.2rem 1rem',
                  textAlign: 'center',
                  background: 'rgba(18, 24, 38, 0.7)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.4rem' }}>
                    {stat.icon}
                  </div>
                  <div style={{
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: '#fff',
                    fontFamily: 'var(--font-display)',
                    marginBottom: '0.2rem'
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: '1.3' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Panel de Beneficios Operativos */}
            <div className="glass-card" style={{ padding: '2rem', background: 'rgba(18, 24, 38, 0.7)' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.2rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Zap size={20} color="var(--accent)" />
                ¿Qué soluciona este módulo de CuadraPro?
              </h3>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {benefits.map((b, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                    <CheckCircle2 size={18} color="#34d399" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <span style={{ lineHeight: '1.5' }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA de la Sección */}
            <div>
              <a
                href={config?.spaUrl || 'https://cuadra-pro.vercel.app/'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: '0.9rem 2rem', fontSize: '0.95rem' }}
              >
                Probar CuadraPro en Vivo <ArrowRight size={18} />
              </a>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 850px) {
          .sales-split-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
