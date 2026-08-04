import React from 'react';
import { Database, ShieldCheck, Zap, Server } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function Features() {
  const features = [
    {
      title: "Cruce Algorítmico",
      description: "Motor de emparejamiento 1:1 capaz de procesar 10,000 transacciones en menos de 3 minutos, eliminando el trabajo manual.",
      icon: <Database size={24} color="var(--accent)" />
    },
    {
      title: "Auditoría en Tiempo Real",
      description: "Detecta discrepancias, comisiones ocultas y retenciones no reportadas al instante mediante hashes criptográficos.",
      icon: <Zap size={24} color="#f59e0b" />
    },
    {
      title: "Certificación SHA-256",
      description: "Cada registro es inmutable. Genera reportes con validez técnica para auditorías fiscales y financieras.",
      icon: <ShieldCheck size={24} color="#10b981" />
    },
    {
      title: "Infraestructura Escalable",
      description: "Arquitectura Serverless lista para conectarse con Stripe, PayPal, MercadoPago y APIs bancarias simultáneamente.",
      icon: <Server size={24} color="var(--cta)" />
    }
  ];

  return (
    <section id="caracteristicas" className="section" style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container">

        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div className="section-label">Tecnología Base</div>
          <h2 className="section-title">
            Precisión Criptográfica
          </h2>
          <p className="section-subtitle">
            Diseñado bajo estrictos estándares de ingeniería de software para garantizar la inmutabilidad y exactitud de cada centavo.
          </p>
        </div>

        {/* Bento Grid con Spotlight */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {features.map((feat, idx) => (
            <SpotlightCard key={idx} style={{ padding: '2.5rem' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
              }}>
                {feat.icon}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '1rem',
                letterSpacing: '-0.02em'
              }}>
                {feat.title}
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6
              }}>
                {feat.description}
              </p>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
}
