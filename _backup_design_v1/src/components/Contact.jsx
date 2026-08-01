import React from 'react';
import { Mail, MessageSquare, Github, ExternalLink, Send, Sparkles } from 'lucide-react';

export default function Contact({ config }) {
  const cards = [
    {
      title: "Correo Electrónico",
      subtitle: config.email || "malz_98@hotmail.com",
      badge: "Contacto Directo",
      href: `mailto:${config.email || 'malz_98@hotmail.com'}`,
      icon: <Mail size={26} />,
      color: "var(--primary)",
      bg: "rgba(99, 102, 241, 0.18)",
      border: "rgba(99, 102, 241, 0.3)"
    },
    {
      title: "Discord",
      subtitle: "Perfil & Comunidad",
      badge: "Chat Directo",
      href: config.discordUrl || "https://discord.com/users/311327464615968769",
      icon: <MessageSquare size={26} />,
      color: "#5865F2",
      bg: "rgba(88, 101, 242, 0.18)",
      border: "rgba(88, 101, 242, 0.35)",
      external: true
    },
    {
      title: "GitHub",
      subtitle: "@INTERTEXAS",
      badge: "Código & Proyectos",
      href: config.githubUrl || "https://github.com/INTERTEXAS",
      icon: <Github size={26} />,
      color: "#c084fc",
      bg: "rgba(192, 132, 252, 0.18)",
      border: "rgba(192, 132, 252, 0.35)",
      external: true
    }
  ];

  return (
    <section id="contacto" className="section" style={{
      position: 'relative',
      background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(6, 9, 17, 0.9) 100%)',
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
        
        {/* Badge Iluminado */}
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
            <Mail size={15} color="var(--accent)" />
            <span>CANALES DIRECTOS • SECCIÓN 06</span>
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
          Contacto & Redes Profesionales
        </h2>

        <p className="section-subtitle" style={{
          fontSize: '1.15rem',
          color: 'var(--text-muted)',
          maxWidth: '750px',
          margin: '0 auto 3.5rem auto',
          lineHeight: '1.6'
        }}>
          ¿Tienes dudas sobre la arquitectura de CuadraPro o deseas establecer contacto profesional con Miguel Lagunes? Conéctate directamente a través de cualquiera de estos canales.
        </p>

        {/* Tarjetas de Contacto Rediseñadas */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem',
          maxWidth: '960px',
          margin: '0 auto'
        }}>
          {cards.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target={item.external ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                textDecoration: 'none',
                color: 'var(--text-main)',
                padding: '2.5rem 1.5rem',
                position: 'relative',
                background: 'rgba(18, 24, 38, 0.75)',
                border: `1px solid ${item.border}`
              }}
            >
              {/* Badge superior de tarjeta */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                padding: '0.2rem 0.6rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: 'var(--text-dim)',
                fontSize: '0.72rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}>
                <Sparkles size={12} color={item.color} />
                <span>{item.badge}</span>
              </div>

              {/* Icono con Halo Luminoso */}
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: item.bg,
                border: `1px solid ${item.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
                color: item.color,
                boxShadow: `0 8px 20px ${item.bg}`
              }}>
                {item.icon}
              </div>

              {/* Título */}
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem', color: '#ffffff', fontWeight: 700 }}>
                {item.title}
              </h3>

              {/* Subtítulo / Valor */}
              <span style={{
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                wordBreak: 'break-all',
                marginBottom: '1.25rem'
              }}>
                {item.subtitle}
              </span>

              {/* Enlace de Acción Directo */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: item.color,
                marginTop: 'auto'
              }}>
                <span>Conectar</span>
                <ExternalLink size={14} />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
