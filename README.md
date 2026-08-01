<div align="center">
  <img src="frontend/public/logo-lines.png" alt="CuadraPro Logo" width="300" />
  <h1>🏢 CuadraPro (Plenaria) — Micro-SaaS Frontend & Monorepo</h1>
  <p>
    Plataforma inteligente Single Page Application (SPA) para la gestión corporativa, conciliación automatizada, cómputo de quórum ponderado en tiempo real y emisión inmutable de votos.
  </p>
</div>

---

## ✨ Novedades Visuales & Arquitectura de Diseño (Fase 2)

La capa de presentación de CuadraPro ha sido reconstruida bajo estándares rigurosos de **Diseño Micro-SaaS B2B Premium** (inspirado en líderes de la industria como Vercel, Linear y Stripe), eliminando la "fatiga de plantillas genéricas":

- **React Three Fiber (Hero 3D Dinámico):** Un modelo tridimensional de un prisma oscuro (glassmorphism) incrustado directamente en el árbol de componentes de React, reaccionando fluidamente a la posición del cursor e iluminación del tema.
- **Bento Box Grids:** Layouts asimétricos y orgánicos para la sección de "Proceso de Creación".
- **Línea de Tiempo Vertical (Timeline):** Guías paso a paso conectadas visualmente en lugar de tarjetas sueltas.
- **Dual Split-Screen (Glass vs Terminal):** Interfaz inmersiva para probar la aplicación, contrastando el entorno de producción "Crystal" con una estética de "Terminal" para el acceso al código.
- **Tipografía Editorial:** Componentes limpios y paneles de control tipográficos (KPI Dashboards) en lugar de encasillar el contenido en tarjetas cuadradas repetitivas.
- **Tematización Dinámica:** Paleta de colores minimalista y restringida con adaptación impecable entre Modo Claro y Modo Oscuro, controlada por variables CSS globales.

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
│   ├── 📂 public/           # Recursos estáticos (Logos, Modelos 3D, Videos)
│   ├── 📂 src/
│   │   ├── 📂 components/   # UI Premium (HeroScene, Bento Box, Split Screens)
│   │   ├── 📂 data/         # Configuración del sitio y copy interactivo
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── index.css            # Design Tokens (Typography, Spacing, Themes)
│   └── package.json
│
├── 📂 docs/                 # Documentación Técnica Formal
│   ├── DOCUMENTATION.md    # Especificación Completa del Backend & SRS
│   └── ARCHITECTURE.md     # Diagramas C4 y Flujos de Eventos
│
├── README.md                # Esta guía
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
cd frontend && npm run build
```

---

## 🔒 Estándares Técnicos (Backend & Frontend)
* **Frontend 3D**: `@react-three/fiber` y `@react-three/drei` para modelado paramétrico embebido sin impactar performance.
* **Seguridad API**: JWT Bearer Tokens, Role-Based Access Control (RBAC).
* **Firma Criptográfica**: Cada voto registrado genera una firma digital SHA-256 inmutable.
* **Cómputo en Tiempo Real**: WebSocket Hub para distribución instantánea del quórum legal.
