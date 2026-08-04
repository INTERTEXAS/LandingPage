import React, { useState, useEffect } from 'react';
import { FileText, Briefcase, ExternalLink, Plus, Minus, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Documentation({ config }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  // Prevenir scroll de la pagina cuando el modal esta abierto
  useEffect(() => {
    if (isPdfOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isPdfOpen]);

  const faqs = [
    {
      q: "¿Cómo se conecta con mis cuentas de banco?",
      a: "CuadraPro utiliza la API de banca abierta (Open Banking) con cifrado de grado militar de 256 bits para acceder a tus movimientos de solo lectura. Nunca tenemos acceso a tus fondos."
    },
    {
      q: "¿Cuánto tiempo toma implementar el software?",
      a: "La integración estándar de Stripe, PayPal y tu banco principal toma menos de 48 horas con la ayuda de nuestro equipo de onboarding técnico."
    },
    {
      q: "¿Los reportes tienen validez fiscal ante el SAT?",
      a: "Sí. Cada cruce algorítmico genera una huella criptográfica (hash) que prueba la inmutabilidad de los datos, cumpliendo con los estándares de auditoría del SAT."
    }
  ];

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };
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
              <button
                onClick={() => setIsPdfOpen(true)}
                className="btn btn-primary"
              >
                Consultar <ExternalLink size={16} />
              </button>
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

        {/* Sleek FAQ Section */}
        <div id="faq" style={{ marginTop: '8rem', maxWidth: '800px', margin: '8rem auto 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title">Preguntas Frecuentes</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} style={{
                  borderBottom: '1px solid var(--border)',
                  overflow: 'hidden'
                }}>
                  <button
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '1.5rem 0',
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 500,
                      cursor: 'none', // For custom cursor
                      outline: 'none',
                      textAlign: 'left'
                    }}
                  >
                    {faq.q}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ color: isOpen ? 'var(--text-primary)' : 'var(--text-dim)' }}
                    >
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <p style={{
                          paddingBottom: '2rem',
                          margin: 0,
                          color: 'var(--text-secondary)',
                          lineHeight: 1.6,
                          fontSize: '1.05rem',
                          paddingRight: '2rem'
                        }}>
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Glassmorphism PDF Modal with Spring Physics */}
      <AnimatePresence>
        {isPdfOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              zIndex: 99999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0, 0, 0, 0.4)',
              padding: 'clamp(1rem, 5vw, 3rem)'
            }}
          >
            {/* Background overlay to click and close */}
            <div 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', cursor: 'pointer' }}
              onClick={() => setIsPdfOpen(false)}
            />

            <motion.div
              initial={{ y: -150, scale: 0.9, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 150, scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '1000px',
                height: '85vh',
                background: 'var(--bg-elevated)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Modal Header */}
              <div style={{
                padding: '1rem 1.5rem',
                borderBottom: '1px solid var(--border)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'var(--bg-card)',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <FileText size={20} color="#6366f1" />
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-primary)', fontSize: '1.05rem' }}>
                    Especificación de Requisitos de Software (SRS)
                  </span>
                </div>
                <button 
                  onClick={() => setIsPdfOpen(false)}
                  style={{
                    background: 'var(--accent-soft)',
                    border: '1px solid transparent',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.4rem',
                    borderRadius: '50%',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.background = 'var(--border-hover)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.background = 'var(--accent-soft)'; }}
                >
                  <X size={18} />
                </button>
              </div>

              {/* PDF Viewer */}
              <div style={{ flex: 1, position: 'relative', background: '#333' }}>
                {/* Fallback a iframe básico, muy confiable para PDF. Asegúrate de tener /srs.pdf en la carpeta public */}
                <iframe 
                  src="/srs.pdf#toolbar=0&navpanes=0" 
                  title="Documento SRS"
                  width="100%" 
                  height="100%" 
                  style={{ border: 'none', display: 'block' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
