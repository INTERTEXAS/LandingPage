# 🏢 Plenaria — Fullstack Monorepo Architecture

Plataforma inteligente Single Page Application (SPA) para la gestión de asambleas corporativas, cómputo de quórum ponderado en tiempo real y emisión inmutable de votos.

---

## 📁 Estructura del Proyecto

```
Landingpage_plenaria/
├── 📂 backend/              # Core API REST, WebSockets & Servicios Backend (Senior Level)
│   ├── 📂 src/
│   │   ├── 📂 config/       # Variables de entorno y configuraciones de servicios
│   │   ├── 📂 controllers/  # Auth, Assemblies y Votes Controllers
│   │   ├── 📂 middleware/   # JWT, RBAC y Error Handlers
│   │   ├── 📂 routes/       # Rutas modulares API v1 (/api/v1)
│   │   ├── 📂 services/     # Quorum Engine, Voting Processor, SHA-256 Crypto
│   │   └── 📂 websocket/    # Eventos Socket.io en tiempo real
│   ├── .env.example
│   └── package.json
│
├── 📂 frontend/             # Single Page Application & Landing Page (React + Vite)
│   ├── 📂 public/           # Recursos estáticos
│   ├── 📂 src/
│   │   ├── 📂 components/   # Componentes UI (Hero, Navbar, Documentation, etc.)
│   │   ├── 📂 data/         # Configuración del sitio y documentación interactiva
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── 📂 docs/                 # Documentación Técnica Formal
│   ├── DOCUMENTATION.md    # Especificación Completa del Backend & SRS
│   └── ARCHITECTURE.md     # Diagramas C4 y Flujos de Eventos
│
├── README.md                # Guía Principal de Arquitectura Monorepo
└── package.json            # Orquestador del Monorepo
```

---

## 🚀 Comandos Rápidos

### Frontend (Landing Page React/Vite)
```bash
npm run dev:frontend
```

### Backend (Express & Socket.io Core Server)
```bash
npm run dev:backend
```

### Compilar Frontend para Producción
```bash
npm run build
```

---

## 🔒 Estándares Backend
* **Seguridad**: JWT Bearer Tokens, Role-Based Access Control (RBAC).
* **Firma Criptográfica**: Cada voto registrado genera una firma digital SHA-256 inmutable.
* **Cómputo en Tiempo Real**: WebSocket Hub para distribución instantánea del quórum legal.
