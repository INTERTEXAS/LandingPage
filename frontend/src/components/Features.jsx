import React from 'react';
import { Database, ShieldCheck, Zap, Server } from 'lucide-react';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

export default function Features() {
  const features = [
    {
      title: "Cruce Algorítmico",
      description: "Motor de emparejamiento 1:1 capaz de procesar 10,000 transacciones en menos de 3 minutos, eliminando el trabajo manual.",
      icon: <Database size={32} color="var(--accent)" />,
      span: "span 2",
      delay: 0.1
    },
    {
      title: "Auditoría en Tiempo Real",
      description: "Detecta discrepancias y comisiones ocultas al instante.",
      icon: <Zap size={32} color="#f59e0b" />,
      span: "span 2",
      delay: 0.2
    },
    {
      title: "Certificación SHA-256",
      description: "Cada registro es inmutable. Genera reportes con validez técnica para auditorías fiscales y financieras sin complicaciones.",
      icon: <ShieldCheck size={32} color="#10b981" />,
      span: "span 3",
      delay: 0.3
    },
    {
      title: "Escalable",
      description: "Serverless.",
      icon: <Server size={32} color="var(--cta)" />,
      span: "span 1",
      delay: 0.4
    }
  ];

  return (
    <section id="caracteristicas" className="section" style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container">

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <div className="section-label">Tecnología Base</div>
          <h2 className="section-title">
            Precisión Criptográfica
          </h2>
          <p className="section-subtitle">
            Diseñado bajo estrictos estándares de ingeniería de software para garantizar la inmutabilidad y exactitud de cada centavo.
          </p>
        </motion.div>

        {/* Bento Grid con Spotlight y Framer Motion */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1100px',
          margin: '0 auto',
          // En pantallas grandes aplicaremos las columnas asimétricas
          gridAutoRows: 'minmax(250px, auto)'
        }}>
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: feat.delay, type: "spring", stiffness: 100 }}
              className={`feature-card-${idx}`}
              style={{
                display: 'flex'
              }}
            >
              <SpotlightCard style={{ padding: '3rem', width: '100%', display: 'flex', flexDirection: 'column', height: '100%' }} className="glass-panel">
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '2rem',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.06)'
                }}>
                  {feat.icon}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.6rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                  letterSpacing: '-0.02em'
                }}>
                  {feat.title}
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginTop: 'auto'
                }}>
                  {feat.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
      <style>{`
        @media (min-width: 768px) {
          ${features.map((feat, idx) => `.feature-card-${idx} { grid-column: ${feat.span}; }`).join('\n          ')}
        }
        @media (max-width: 767px) {
          ${features.map((feat, idx) => `.feature-card-${idx} { grid-column: span 1; }`).join('\n          ')}
        }
      `}</style>
    </section>
  );
}
