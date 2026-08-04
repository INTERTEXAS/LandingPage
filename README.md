<div align="center">
  <img src="frontend/public/logo-lines.png" alt="CuadraPro Logo" width="500" style="filter: brightness(0) invert(1);" />
  <h1>CuadraPro -- Micro-SaaS Frontend & Monorepo</h1>
  <p>
    Plataforma inteligente Single Page Application (SPA) para la gestion corporativa, conciliacion automatizada, computo en tiempo real y emision inmutable de datos financieros.
  </p>
</div>

---

## Novedades Visuales & Arquitectura de Diseno (Enterprise UX)

La capa de presentacion de CuadraPro ha sido reconstruida bajo estandares rigurosos de **Diseno Micro-SaaS B2B Premium** (inspirado en lideres de la industria como Vercel y Stripe), eliminando la fatiga de plantillas genericas e implementando interfaces de alto rendimiento:

- **React Three Fiber (Motor de Datos 3D):** Un modelo tridimensional de un Nudo Toroidal (Torus Knot) de cristal de dispersion fisica con un nucleo brillante incrustado directamente en el arbol de componentes de React. Reacciona fluidamente a la iluminacion del tema (Claro/Oscuro) y al tiempo (rotacion continua).
- **Efectos Spotlight y Bento Grids:** Layouts asimetricos para la seccion de "Caracteristicas", donde los paneles reaccionan al movimiento del cursor iluminando los bordes mediante el uso de mallas de gradiente dinamicamente calculadas.
- **Glassmorphism:** Paneles de control (KPI Dashboards) que utilizan filtros de desenfoque de fondo y transparencias complejas para sobreponerse organicamente al entorno 3D.
- **Micro-interacciones Fluidas (TiltCards y Framer Motion):** Implementacion de matematicas de resortes (spring physics) para componentes que se inclinan en 3D en respuesta al mouse, cursores invertidos personalizados y transiciones sin fisuras.
- **Tematizacion Dinamica:** Paleta de colores minimalista y restringida con adaptacion impecable entre Modo Claro (tonos Slate 500) y Modo Oscuro (fondos puros y negros), controlada por variables CSS globales.

---

## Estructura del Proyecto

```
Landingpage_plenaria/
├── backend/              # Core API REST, WebSockets & Servicios Backend (Senior Level)
│   ├── src/
│   │   ├── config/       # Variables de entorno y configuraciones de servicios
│   │   ├── controllers/  # Controladores de acceso y transacciones
│   │   ├── middleware/   # JWT, RBAC y Error Handlers
│   │   ├── routes/       # Rutas modulares API v1 (/api/v1)
│   │   ├── services/     # Motor de Conciliacion, Procesador, SHA-256 Crypto
│   │   └── websocket/    # Eventos Socket.io en tiempo real
│   ├── .env.example
│   └── package.json
│
├── frontend/             # Single Page Application & Landing Page (React + Vite)
│   ├── public/           # Recursos estaticos (Logos, Modelos 3D, Videos)
│   ├── src/
│   │   ├── components/   # UI Premium (HeroScene, SpotlightCard, CommandCenter)
│   │   ├── data/         # Configuracion del sitio y copy interactivo
│   │   ├── App.jsx       # Enrutador base y configuracion de Providers
│   │   └── main.jsx
│   ├── index.html
│   ├── index.css         # Design Tokens (Typography, Spacing, Themes)
│   └── package.json
│
├── README.md             # Documentacion actual
└── package.json          # Orquestador del Monorepo
```

---

## Comandos Rapidos

### Frontend (Landing Page React/Vite)
```bash
npm run dev:frontend
```

### Backend (Express & Socket.io Core Server)
```bash
npm run dev:backend
```

### Compilar Frontend para Produccion
```bash
cd frontend && npm run build
```

---

## Estandares Tecnicos (Backend & Frontend)
* **Frontend 3D**: `@react-three/fiber` y `@react-three/drei` para modelado parametrico embebido sin impactar rendimiento.
* **Animacion UI**: `framer-motion` para Layout Animations y Spring Physics de renderizado en GPU.
* **Seguridad API**: JWT Bearer Tokens, Role-Based Access Control (RBAC).
* **Firma Criptografica**: Cada proceso registrado genera una firma digital SHA-256 inmutable.
* **Computo en Tiempo Real**: WebSocket Hub para distribucion instantanea de estados y validaciones.
