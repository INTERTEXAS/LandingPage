import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, CreditCard, ShieldAlert, BarChart3 } from 'lucide-react';
import TiltCard from './TiltCard';

const TABS = [
  { id: 'conciliation', label: 'Conciliación', icon: <Activity size={16} /> },
  { id: 'payments', label: 'Pasarelas', icon: <CreditCard size={16} /> },
  { id: 'alerts', label: 'Fugas y Alertas', icon: <ShieldAlert size={16} /> },
  { id: 'reports', label: 'Reportes SAT', icon: <BarChart3 size={16} /> }
];

const TAB_CONTENT = {
  conciliation: {
    title: "Motor de Conciliación Automática",
    subtitle: "Cruce 1 a 1 de transacciones bancarias vs pasarelas de pago.",
    code: `[
  { "tx_id": "ch_3Mv2", "status": "MATCH", "amount": 499.00 },
  { "tx_id": "ch_8Xa1", "status": "PENDING_BANK", "amount": 120.50 }
]`
  },
  payments: {
    title: "Múltiples Pasarelas en un solo lugar",
    subtitle: "Conecta Stripe, PayPal, MercadoPago y bancos tradicionales con una sola API.",
    code: `import { cuadraPro } from '@cuadra/sdk';\n\nawait cuadraPro.connect({\n  stripeKey: process.env.STRIPE_SK,\n  paypalMode: 'live'\n});`
  },
  alerts: {
    title: "Detección de Anomalías",
    subtitle: "Alertas en tiempo real por retenciones injustificadas o dobles cobros.",
    code: `{\n  "alert": "FEE_MISMATCH",\n  "expected": 14.50,\n  "charged": 18.20,\n  "severity": "HIGH"\n}`
  },
  reports: {
    title: "Reportes Fiscales",
    subtitle: "Generación de comprobantes listos para el SAT con hashes criptográficos.",
    code: `SELECT sum(amount), tax_status \nFROM transactions \nWHERE date >= '2023-01-01' \nGROUP BY tax_status;`
  }
};

export default function CommandCenter() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  return (
    <section id="spa" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label">Command Center</div>
          <h2 className="section-title">
            Panel de Control Financiero
          </h2>
          <p className="section-subtitle">
            Explora las funcionalidades clave desde nuestra interfaz interactiva (SPA). Todo en tiempo real y sin recargas de página.
          </p>
        </div>

        <TiltCard style={{ borderRadius: '1.5rem' }}>
          <div style={{ padding: '2rem' }}>
            
            {/* Tabs List */}
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              overflowX: 'auto',
              paddingBottom: '1rem',
              borderBottom: '1px solid var(--border)',
              marginBottom: '2rem'
            }}>
              {TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1.25rem',
                      background: 'transparent',
                      border: 'none',
                      color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      cursor: 'none', // For custom cursor
                      transition: 'color 0.3s ease',
                      outline: 'none',
                      borderRadius: '0.5rem'
                    }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'var(--bg-secondary)',
                          border: '1px solid var(--border)',
                          borderRadius: '0.5rem',
                          zIndex: 0
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {tab.icon} {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div style={{ minHeight: '280px', position: 'relative' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '3rem', alignItems: 'center' }}
                  className="tab-content-grid"
                >
                  
                  {/* Text */}
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.8rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '1rem',
                      letterSpacing: '-0.03em',
                      lineHeight: 1.2
                    }}>
                      {TAB_CONTENT[activeTab].title}
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6
                    }}>
                      {TAB_CONTENT[activeTab].subtitle}
                    </p>
                  </div>

                  {/* Code Mockup */}
                  <div style={{
                    background: '#09090b',
                    borderRadius: '1rem',
                    padding: '1.5rem',
                    border: '1px solid #27272a',
                    boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)',
                    position: 'relative'
                  }}>
                    {/* Mac window dots */}
                    <div style={{ display: 'flex', gap: '6px', marginBottom: '1rem' }}>
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
                    </div>
                    <pre style={{
                      margin: 0,
                      fontFamily: 'monospace',
                      fontSize: '0.85rem',
                      color: '#a1a1aa',
                      lineHeight: 1.5,
                      overflowX: 'auto'
                    }}>
                      <code>{TAB_CONTENT[activeTab].code}</code>
                    </pre>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </TiltCard>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tab-content-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
