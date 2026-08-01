# 🏗️ Plenaria Architecture & System Design Specs

## System Context Diagram (C4 Level 1)

```mermaid
graph TD
    User["👥 Accionista / Apoderado / Admin"]
    SPA["💻 Plenaria Frontend (React/Vite SPA)"]
    Gateway["🛡️ Nginx / API Gateway (TLS 1.3, Rate Limiter)"]
    Backend["⚡ Plenaria Backend Core (Node.js/Express)"]
    Redis["🔴 Redis Cluster (Quórum Cache & Pub/Sub)"]
    DB[("🐘 PostgreSQL 16 (Relational DB)")]
    Storage["☁️ Object Storage S3 (Actas Firmadas)"]

    User -->|HTTPS / WSS| SPA
    SPA -->|REST API & WebSockets| Gateway
    Gateway -->|Forward Traffic| Backend
    Backend <-->|Quórum & Events| Redis
    Backend <-->|Transactional Data| DB
    Backend -->|Store PDF/A Actas| Storage
```

## Component Architecture (Backend Core - Senior Level)

```
backend/
├── src/
│   ├── config/          # Variables de entorno y configuración de DB/Redis
│   ├── controllers/     # Manejadores de solicitudes HTTP (REST Handlers)
│   ├── middleware/      # JWT, RBAC, Rate Limiting, Error Handling
│   ├── models/          # Abstracción de modelos y consultas SQL
│   ├── routes/          # Enrutamiento modular Express (/auth, /assemblies, /votes)
│   ├── services/        # Lógica de negocio (Quorum Engine, Voting Processor, SHA-256)
│   ├── websocket/       # Servidor Socket.io para métricas en vivo
│   ├── app.js           # Aplicación Express configurada
│   └── server.js        # Entry point del servidor HTTP & WebSocket
```
