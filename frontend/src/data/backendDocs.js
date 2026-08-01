export const backendDocsData = {
  architecture: {
    title: "Arquitectura & Estilo de Diseño",
    subtitle: "Monolito Modular con Motor Event-Driven para Concurrencia Masiva",
    techStack: [
      { category: "Lenguaje & Runtime", value: "Node.js (TypeScript) / Express & NestJS" },
      { category: "Base de Datos Primaria", value: "PostgreSQL 16 (ACID, PgBouncer Pool)" },
      { category: "Caché & Pub/Sub", value: "Redis Cluster (Quórum Cache & Real-Time Events)" },
      { category: "Protocolo Tiempo Real", value: "WebSockets / Socket.io sobre TLS 1.3" },
      { category: "Seguridad & Criptografía", value: "JWT + 2FA, Hashes SHA-256 & PKI Digital Signatures" },
      { category: "Almacenamiento Actas", value: "AWS S3 / Azure Blob Storage (Archivos PDF/A)" }
    ],
    highlights: [
      "Quorum Engine en memoria con Redis Hashes y scripts Lua para operaciones atómicas.",
      "Procesamiento de votación ponderada con locks optimistas en base de datos relacional.",
      "Arquitectura tolerante a desconexiones accidentales mediante Idempotency Keys."
    ]
  },
  apiEndpoints: [
    {
      method: "POST",
      path: "/api/v1/auth/login",
      desc: "Autenticación segura de accionistas y apoderados con emisión de JWT.",
      payload: '{ "email": "accionista@empresa.com", "password": "***" }',
      response: '{ "token": "eyJhbGci...", "user": { "role": "SHAREHOLDER", "shares": 15000 } }'
    },
    {
      method: "GET",
      path: "/api/v1/assemblies/{id}/quorum",
      desc: "Consulta en milisegundos del estado del quórum presencial y remoto.",
      payload: 'Headers: Authorization Bearer <JWT>',
      response: '{ "sharesPresent": 754200.50, "quorumPercentage": 75.42, "hasLegalQuorum": true }'
    },
    {
      method: "POST",
      path: "/api/v1/votes/cast",
      desc: "Registro inmutable de voto ponderado con sello de tiempo y hash de no repudio.",
      payload: '{ "agendaItemId": "item-102", "optionSelected": "APPROVE" }',
      response: '{ "voteId": "v-994", "status": "REGISTERED", "hashSignature": "a4fbc871239..." }'
    },
    {
      method: "WSS",
      path: "/ws/v1/assemblies/{id}/live",
      desc: "Suscripción bi-direccional en tiempo real para votación y métricas de la asamblea.",
      payload: 'Event: subscribe_assembly',
      response: 'Emits: QUORUM_UPDATE, VOTING_STATE_CHANGE, VOTE_COUNT_TALLY'
    }
  ],
  databaseTables: [
    {
      name: "users",
      purpose: "Usuarios, accionistas y apoderados registrados",
      columns: ["id (UUID)", "full_name", "email", "role (RBAC)", "voting_weight"]
    },
    {
      name: "assemblies",
      purpose: "Asambleas corporativas y parámetros de quórum legal",
      columns: ["id (UUID)", "title", "status (SCHEDULED/IN_PROGRESS/CLOSED)", "min_quorum_pct"]
    },
    {
      name: "agenda_items",
      purpose: "Puntos del día y votaciones programadas",
      columns: ["id (UUID)", "assembly_id", "item_order", "title", "voting_type", "status"]
    },
    {
      name: "votes",
      purpose: "Registro inmutable de votos ponderados por accionista",
      columns: ["id (UUID)", "agenda_item_id", "user_id", "option_selected", "weight_applied", "hash_signature"]
    }
  ],
  securitySpecs: [
    {
      topic: "Control de Acceso (RBAC)",
      detail: "Roles estrictos: Admin/Presidente, Secretario, Accionista/Apoderado u Observador con validación por middleware en API Gateway."
    },
    {
      topic: "Inmutabilidad & Hash Criptográfico",
      detail: "Cada voto genera un hash único SHA-256 (Punto + Usuario + Selección + Peso + Salt) impidiendo alteración posterior."
    },
    {
      topic: "Cierre Criptográfico de Actas",
      detail: "Sello digital con encadenamiento Merkle Tree al finalizar la asamblea para validez legal ante entes reguladores."
    }
  ]
};
