import React from 'react';
import { GraduationCap, Award, FileCheck2, Layout, Cpu, CheckCircle2, UserCheck } from 'lucide-react';

export default function Mentors({ mentors }) {
  const mentorDetails = [
    {
      name: "Gerardo Navarrete Terán",
      role: "Ingeniería en Requisitos de Software",
      image: "/gerardo.png",
      objectPosition: "center 18%",
      pillColor: "rgba(99, 102, 241, 0.2)",
      borderColor: "rgba(99, 102, 241, 0.35)",
      badgeText: "Dirección de Requisitos",
      summary: "Guía en el análisis de necesidades corporativas, especificación formal del software y validación de reglas de negocio para auditoría fiscal.",
      deliverables: [
        { icon: <FileCheck2 size={15} color="var(--primary)" />, label: "Documentación SRS (IEEE 830)" },
        { icon: <CheckCircle2 size={15} color="var(--primary)" />, label: "Modelado de Casos de Uso" },
        { icon: <CheckCircle2 size={15} color="var(--primary)" />, label: "Criterios de Conciliación Fiscal" }
      ]
    },
    {
      name: "Aldo Echeverria Carrera",
      role: "Principios de Programación Lógica",
      image: "/aldo.png",
      objectPosition: "center 15%",
      pillColor: "rgba(6, 182, 212, 0.2)",
      borderColor: "rgba(6, 182, 212, 0.35)",
      badgeText: "Dirección de Arquitectura & UX",
      summary: "Supervisión en la optimización algorítmica, implementación de la arquitectura React SPA y estándares de experiencia de usuario.",
      deliverables: [
        { icon: <Cpu size={15} color="var(--accent)" />, label: "Algoritmo de Cruce de Datos" },
        { icon: <Layout size={15} color="var(--accent)" />, label: "Diseño UI/UX Interactivo" },
        { icon: <CheckCircle2 size={15} color="var(--accent)" />, label: "Arquitectura React & Vite SPA" }
      ]
    }
  ];

  return (
    <section id="mentores" className="section" style={{
      position: 'relative',
      background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(9, 13, 22, 0.85) 100%)',
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

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
        
        {/* Badge Iluminado Didáctico */}
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
            <GraduationCap size={16} color="var(--accent)" />
            <span>DIRECCIÓN ACADÉMICA • SECCIÓN 04</span>
          </div>
        </div>

        {/* Título de Alto Impacto */}
        <h2 className="section-title" style={{
          fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #ffffff 20%, #cbd5e1 60%, var(--primary) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Mentores & Asesores Académicos
        </h2>

        {/* Subtítulo Descriptivo */}
        <p className="section-subtitle" style={{
          fontSize: '1.15rem',
          color: 'var(--text-muted)',
          maxWidth: '760px',
          margin: '0 auto 3.5rem auto',
          lineHeight: '1.6'
        }}>
          El desarrollo de CuadraPro contó con la supervisión directa y validación técnica de docentes especialistas en ingeniería de software y programación.
        </p>

        {/* Tarjetas Didácticas por Pilares de Especialidad */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2.5rem',
          maxWidth: '960px',
          margin: '0 auto'
        }}>
          {mentorDetails.map((mentor, idx) => (
            <div key={idx} className="glass-card" style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'left',
              padding: '2.5rem 2rem',
              position: 'relative',
              background: 'rgba(18, 24, 38, 0.8)',
              border: `1px solid ${mentor.borderColor}`
            }}>

              {/* Insignia didáctica superior */}
              <div style={{
                position: 'absolute',
                top: '1.2rem',
                right: '1.2rem',
                padding: '0.25rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                background: mentor.pillColor,
                border: `1px solid ${mentor.borderColor}`,
                color: '#ffffff',
                fontSize: '0.75rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}>
                <Award size={13} color="var(--accent)" />
                <span>{mentor.badgeText}</span>
              </div>

              {/* Header de la tarjeta: Foto + Datos */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  padding: '3px',
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
                  flexShrink: 0
                }}>
                  <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    background: '#0f172a'
                  }}>
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        objectPosition: mentor.objectPosition || 'center top'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 800, marginBottom: '0.3rem' }}>
                    {mentor.name}
                  </h3>
                  <div style={{
                    fontSize: '0.85rem',
                    color: 'var(--accent)',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}>
                    <UserCheck size={14} />
                    <span>{mentor.role}</span>
                  </div>
                </div>
              </div>

              {/* Resumen didáctico */}
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                paddingBottom: '1.25rem'
              }}>
                {mentor.summary}
              </p>

              {/* Lista de Aportes / Entregables Supervisados */}
              <div>
                <div style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: 'var(--text-dim)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.8rem'
                }}>
                  Pilares de Asesoría Técnica:
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {mentor.deliverables.map((del, dIdx) => (
                    <div key={dIdx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.5rem 0.8rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      fontSize: '0.85rem',
                      color: '#ffffff'
                    }}>
                      {del.icon}
                      <span>{del.label}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
