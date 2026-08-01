import React from 'react';
import { FileText, Briefcase, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Documentation({ config }) {
  return (
    <section id="documentacion" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Luz ambiental centrada simétrica */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '450px',
        background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.12) 0%, rgba(6, 182, 212, 0.12) 50%, transparent 75%)',
        pointerEvents: 'none',
        filter: 'blur(70px)',
        zIndex: 1
      }} />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
        
        {/* Badge Iluminado Profesional */}
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
            <FileText size={15} color="var(--accent)" />
            <span>ARQUITECTURA & DOCUMENTACIÓN • SECCIÓN 05</span>
          </div>
        </div>

        {/* Título Corporativo */}
        <h2 className="section-title" style={{
          fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #ffffff 20%, #cbd5e1 60%, var(--primary) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Especificación Técnica & Portafolio
        </h2>

        {/* Subtítulo Riguroso */}
        <p className="section-subtitle" style={{
          fontSize: '1.15rem',
          color: 'var(--text-muted)',
          maxWidth: '780px',
          margin: '0 auto 3rem auto',
          lineHeight: '1.6'
        }}>
          Acceda al expediente formal de la Especificación de Requerimientos de Software (IEEE 830) de CuadraPro y consulte la trayectoria en ingeniería de software de Miguel Lagunes.
        </p>

        {/* Consola Técnica Unificada */}
        <div style={{
          maxWidth: '960px',
          margin: '0 auto',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 35px rgba(99, 102, 241, 0.2)',
          background: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(16px)'
        }}>
          
          {/* Header de Consola */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.8rem 1.5rem',
            background: 'rgba(10, 15, 28, 0.9)',
            borderBottom: '1px solid var(--glass-border)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#ef4444' }} />
                <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#f59e0b' }} />
                <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#10b981' }} />
              </div>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600, marginLeft: '0.5rem' }}>
                CuadraPro Software Architecture & Documentation Hub
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: '#34d399', fontWeight: 600 }}>
              <CheckCircle2 size={14} />
              <span>Expediente Verificado</span>
            </div>
          </div>

          {/* Cuerpo Simétrico en 2 Columnas */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1px 1fr',
            alignItems: 'stretch',
            padding: '2.75rem 1.5rem'
          }} className="doc-console-grid">

            {/* Lado Izquierdo: SRS Completo */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1.5rem',
              textAlign: 'center'
            }}>
              <div>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(99, 102, 241, 0.15)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.4rem auto',
                  color: 'var(--primary)',
                  boxShadow: '0 8px 20px rgba(99, 102, 241, 0.2)'
                }}>
                  <FileText size={32} />
                </div>

                <h3 style={{ fontSize: '1.35rem', color: '#ffffff', fontWeight: 700, marginBottom: '0.6rem' }}>
                  Especificación SRS (IEEE 830)
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.75rem', lineHeight: '1.6', maxWidth: '330px' }}>
                  Expediente técnico formal que detalla la arquitectura del sistema, diagramas de caso de uso, reglas de negocio y criterios de auditoría fiscal.
                </p>
              </div>

              <a
                href={config?.sharepointUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', maxWidth: '280px', padding: '0.9rem 1.4rem' }}
              >
                Consultar Documento SRS <ExternalLink size={18} />
              </a>
            </div>

            {/* Separador Vertical Gradiente */}
            <div style={{
              background: 'linear-gradient(180deg, transparent 0%, var(--glass-border) 20%, var(--glass-border) 80%, transparent 100%)',
              width: '100%'
            }} className="console-divider" />

            {/* Lado Derecho: Portafolio de Ingeniería */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1.5rem',
              textAlign: 'center'
            }}>
              <div>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(6, 182, 212, 0.15)',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.4rem auto',
                  color: 'var(--accent)',
                  boxShadow: '0 8px 20px rgba(6, 182, 212, 0.2)'
                }}>
                  <Briefcase size={32} />
                </div>

                <h3 style={{ fontSize: '1.35rem', color: '#ffffff', fontWeight: 700, marginBottom: '0.6rem' }}>
                  Portafolio de Ingeniería
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.75rem', lineHeight: '1.6', maxWidth: '330px' }}>
                  Colección de soluciones de software, arquitecturas distribuidas, desarrollo web full-stack y proyectos de impacto de Miguel Lagunes.
                </p>
              </div>

              <a
                href={config?.portfolioUrl || 'https://portafolio-theta-one-50.vercel.app/'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  width: '100%',
                  maxWidth: '280px',
                  padding: '0.9rem 1.4rem',
                  background: 'linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%)'
                }}
              >
                Explorar Portafolio <ExternalLink size={18} />
              </a>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .doc-console-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem;
          }
          .console-divider {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
