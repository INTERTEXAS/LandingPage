import React from 'react';
import { Mail, MessageSquare, Github, ArrowUpRight } from 'lucide-react';

export default function Contact({ config }) {
  const cards = [
    {
      label: "Correo Electrónico",
      value: config.email || "malz_98@hotmail.com",
      href: `mailto:${config.email || 'malz_98@hotmail.com'}`,
      icon: <Mail size={22} />,
      external: false
    },
    {
      label: "Comunidad",
      value: "Servidor de Discord",
      href: config.discordUrl || "https://discord.com/users/311327464615968769",
      icon: <MessageSquare size={22} />,
      external: true
    },
    {
      label: "Código Abierto",
      value: "@INTERTEXAS",
      href: config.githubUrl || "https://github.com/INTERTEXAS",
      icon: <Github size={22} />,
      external: true
    }
  ];

  return (
    <section id="contacto" className="section" style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border)'
    }}>
      <div className="container" style={{ textAlign: 'center' }}>

        <div className="section-label">Canales directos</div>

        <h2 className="section-title">
          Contacto
        </h2>

        <p className="section-subtitle">
          ¿Preguntas sobre CuadraPro o interés en colaborar? Conéctate directamente por el canal que prefieras.
        </p>

        {/* Minimalist Interactive List */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '720px',
          margin: '0 auto',
          borderTop: '1px solid var(--border)',
          textAlign: 'left'
        }}>
          {cards.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target={item.external ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="contact-row"
            >
              <div className="contact-icon">
                {item.icon}
              </div>
              
              <div className="contact-content">
                <span className="contact-label">{item.label}</span>
                <span className="contact-value">{item.value}</span>
              </div>
              
              <div className="contact-arrow">
                <ArrowUpRight size={24} />
              </div>
            </a>
          ))}
        </div>

        {/* Estilos embebidos para efectos Hover complejos sin estado en React */}
        <style>{`
          .contact-row {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            padding: 2rem 1rem;
            border-bottom: 1px solid var(--border);
            text-decoration: none;
            color: var(--text-primary);
            transition: background-color 0.3s ease, padding-left 0.3s ease;
          }

          .contact-row:hover {
            background-color: var(--bg-elevated);
            padding-left: 1.5rem;
          }

          .contact-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            color: var(--text-dim);
            background: transparent;
            border-radius: var(--radius-sm);
            transition: color 0.3s ease, background-color 0.3s ease;
          }

          .contact-row:hover .contact-icon {
            color: var(--bg-primary);
            background-color: var(--text-primary);
          }

          .contact-content {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
            flex: 1;
          }

          .contact-label {
            font-family: var(--font-body);
            font-size: 0.85rem;
            color: var(--text-secondary);
            font-weight: 500;
          }

          .contact-value {
            font-family: var(--font-display);
            font-size: clamp(1.2rem, 3vw, 1.75rem);
            font-weight: 600;
            color: var(--text-primary);
            letter-spacing: -0.02em;
          }

          .contact-arrow {
            color: var(--text-dim);
            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s ease;
          }

          .contact-row:hover .contact-arrow {
            color: var(--text-primary);
            transform: translate(4px, -4px);
          }

          @media (max-width: 600px) {
            .contact-row {
              flex-direction: column;
              align-items: flex-start;
              gap: 1rem;
              padding: 2rem 0.5rem;
            }
            .contact-row:hover {
              padding-left: 1rem;
            }
            .contact-arrow {
              display: none; /* Hide arrow on very small mobile screens for space */
            }
          }
        `}</style>
      </div>
    </section>
  );
}
