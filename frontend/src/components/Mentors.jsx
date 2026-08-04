import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Mentors({ mentors }) {
  const mentorDetails = [
    {
      name: "Gerardo Navarrete Terán",
      role: "Ingeniería en Requisitos de Software",
      image: "/gerardo.png",
      objectPosition: "center 18%",
      summary: "Guía en el análisis de necesidades corporativas, especificación formal del software y validación de reglas de negocio para auditoría fiscal.",
      deliverables: [
        "Documentación SRS (IEEE 830)",
        "Modelado de Casos de Uso",
        "Criterios de Conciliación Fiscal"
      ]
    },
    {
      name: "Aldo Echeverria Carrera",
      role: "Principios de Programación Lógica",
      image: "/aldo.png",
      objectPosition: "center 15%",
      summary: "Supervisión en la optimización algorítmica, implementación de la arquitectura React SPA y estándares de experiencia de usuario.",
      deliverables: [
        "Algoritmo de Cruce de Datos",
        "Diseño UI/UX Interactivo",
        "Arquitectura React & Vite SPA"
      ]
    }
  ];

  return (
    <section id="mentores" className="section" style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border)'
    }}>
      <div className="container">

        {/* Minimalist Header */}
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <div className="section-label">Dirección Académica</div>
          <h2 className="section-title">
            Mentores & Asesores
          </h2>
          <p className="section-subtitle">
            Docentes especialistas que supervisaron el desarrollo de CuadraPro y validaron la documentación técnica formal.
          </p>
        </div>

        {/* Typographic Layout instead of cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '5rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {mentorDetails.map((mentor, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                alignItems: 'center'
              }}
            >
              
              {/* Photo */}
              <div style={{ marginBottom: '2.5rem' }}>
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '1.5rem', // Squircle shape instead of perfect circle
                    overflow: 'hidden',
                    background: 'var(--bg-elevated)',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
                    cursor: 'none'
                  }}
                >
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: mentor.objectPosition || 'center top',
                      filter: 'grayscale(20%) contrast(1.1)' // Slight editorial styling to images
                    }}
                  />
                </motion.div>
              </div>

              {/* Title & Role */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.8rem',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  marginBottom: '0.25rem',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1
                }}>
                  {mentor.name}
                </h3>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {mentor.role}
                </div>
              </div>

              {/* Summary */}
              <p style={{
                fontSize: '1.05rem',
                color: 'var(--text-primary)',
                lineHeight: 1.6,
                marginBottom: '2.5rem'
              }}>
                {mentor.summary}
              </p>

              {/* Deliverables (Subdued minimalist list) */}
              <div>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--text-dim)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '1rem'
                }}>
                  Aportes supervisados
                </div>

                <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '0.75rem', textAlign: 'left' }}>
                  {mentor.deliverables.map((del, dIdx) => (
                    <div key={dIdx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      fontSize: '0.95rem',
                      color: 'var(--text-secondary)'
                    }}>
                      <div style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: 'var(--text-primary)',
                        flexShrink: 0
                      }} />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
