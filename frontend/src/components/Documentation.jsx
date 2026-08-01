import React from 'react';
import { FileText, Briefcase, ExternalLink } from 'lucide-react';

export default function Documentation({ config }) {
  return (
    <section id="documentacion" className="section" style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border)'
    }}>
      <div className="container">

        {/* Minimal Typographic Header (Left Aligned for editorial feel) */}
        <div style={{ maxWidth: '800px', marginBottom: '5rem' }}>
          <div className="section-label">Arquitectura & Documentación</div>
          <h2 className="section-title">
            Especificación Técnica
          </h2>
          <p className="section-subtitle" style={{ margin: '0' }}>
            Accede al expediente formal de Requerimientos de Software (IEEE 830) y consulta la trayectoria profesional del desarrollador.
          </p>
        </div>

        {/* Typographic List Layout (No cards) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          
          {/* Item 1: SRS */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(200px, 1fr) 2fr auto',
            gap: '2rem',
            alignItems: 'center',
            padding: '3rem 0',
            borderTop: '1px solid var(--border)'
          }} className="doc-list-row">
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ color: 'var(--text-dim)' }}><FileText size={24} /></div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                color: 'var(--text-primary)',
                fontWeight: 600,
                letterSpacing: '-0.02em'
              }}>
                Documento SRS
              </h3>
            </div>

            <p style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              margin: 0,
              maxWidth: '500px'
            }}>
              Expediente técnico con arquitectura del sistema, diagramas de caso de uso y validación de reglas de negocio.
            </p>

            <div>
              <a
                href={config?.sharepointUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Consultar <ExternalLink size={16} />
              </a>
            </div>

          </div>

          {/* Item 2: Portfolio */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(200px, 1fr) 2fr auto',
            gap: '2rem',
            alignItems: 'center',
            padding: '3rem 0',
            borderTop: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)'
          }} className="doc-list-row">
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ color: 'var(--text-dim)' }}><Briefcase size={24} /></div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                color: 'var(--text-primary)',
                fontWeight: 600,
                letterSpacing: '-0.02em'
              }}>
                Portafolio
              </h3>
            </div>

            <p style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              margin: 0,
              maxWidth: '500px'
            }}>
              Proyectos de software, arquitecturas distribuidas y desarrollo full-stack de Miguel Lagunes.
            </p>

            <div>
              <a
                href={config?.portfolioUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Ver Perfil <ExternalLink size={16} />
              </a>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .doc-list-row {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
            padding: 2.5rem 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
