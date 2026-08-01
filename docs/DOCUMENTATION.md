# 🏢 Plenaria SPA — Especificación de Arquitectura & Documentación Backend Senior

> **Plataforma Single Page Application para la Gestión Inteligente de Asambleas y Eventos Corporativos**
> 
> *Documento de Ingeniería y Diseño de Sistemas Backend (Senior Level)*

---

## 📋 Índice
1. [Resumen Ejecutivo & Visión del Sistema](#1-resumen-ejecutivo--visión-del-sistema)
2. [Arquitectura de Alto Nivel & Estilo de Diseño](#2-arquitectura-de-alto-nivel--estilo-de-diseño)
3. [Modelado de Datos & Esquema de Relaciones (PostgreSQL)](#3-modelado-de-datos--esquema-de-relaciones-postgresql)
4. [Estrategia de Caché & Tiempo Real (Redis Pub/Sub & WebSockets)](#4-estrategia-de-caché--tiempo-real-redis-pubsub--websockets)
5. [Especificación de la API (RESTful & Event-Driven)](#5-especificación-de-la-api-restful--event-driven)
6. [Seguridad, Control de Acceso (RBAC) & Auditoría Criptográfica](#6-seguridad-control-de-acceso-rbac--auditoría-criptográfica)
7. [Escalabilidad, Tolerancia a Fallos & Alta Disponibilidad](#7-escalabilidad-tolerancia-a-fallos--alta-disponibilidad)
8. [Matriz de Requerimientos SRS & Trazabilidad](#8-matriz-de-requerimientos-srs--trazabilidad)

---

## 1. Resumen Ejecutivo & Visión del Sistema

Plenaria es un sistema crítico corporativo diseñado para gestionar **Asambleas Generales de Accionistas**, **Juntas Directivas** y **Eventos de Toma de Decisiones**. 

### Desafíos Clave de Backend
* **Concurrencia Pico Extrema**: Cientos de accionistas y apoderados emitiendo votos simultáneos al cierre de un punto del día.
* **Cálculo Dinámico de Quórum Ponderado**: El quórum no depende de "1 usuario = 1 voto", sino del número de acciones representadas y poderes validados.
* **Inmutabilidad y No Repudio**: Cada voto emitido debe tener firma digital SHA-256 y sello temporal inmutable para validez legal.
* **Latencia Ultra Baja (<100ms)**: Visualización en tiempo real del progreso del quórum y resultados de votación en pantallas principales.

---

## 2. Arquitectura de Alto Nivel & Estilo de Diseño

El sistema utiliza una arquitectura **Monolito Modular con Event-Driven Micro-services Ready**:

```
 ┌────────────────────────────────────────────────────────────────────────┐
 │                           CAPA DE CLIENTES                             │
 │    React SPA (Vite)   │   Panel Web Sec.   │   Pantalla Transmisión    │
 └───────────────────────────────────┬────────────────────────────────────┘
                                     │ (HTTPS / TLS 1.3 / WSS)
                                     ▼
 ┌────────────────────────────────────────────────────────────────────────┐
 │                   API GATEWAY & REVERSE PROXY                          │
 │         Nginx / Cloudflare (Rate Limiting, WAF, SSL Offloading)        │
 └───────────────────────────────────┬────────────────────────────────────┘
                                     │
                                     ▼
 ┌────────────────────────────────────────────────────────────────────────┐
 │                      PLENARIA CORE BACKEND SERVICE                     │
 │  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────────┐  │
 │  │ Auth & RBAC      │  │ Quorum Engine    │  │ Voting Processor     │  │
 │  └──────────────────┘  └──────────────────┘  └──────────────────────┘  │
 │  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────────┐  │
 │  │ Assembly Manager │  │ Real-Time WS Hub │  │ Audit & Certifier    │  │
 │  └──────────────────┘  └──────────────────┘  └──────────────────────┘  │
 └─────────────┬─────────────────────┬──────────────────────┬─────────────┘
               │                     │                      │
               ▼                     ▼                      ▼
 ┌──────────────────┐  ┌──────────────────┐  ┌────────────────────────┐
 │  PostgreSQL 16   │  │   Redis Cluster  │  │  S3 / Object Storage   │
 │ (Persistencia   │  │ (Quórum Cache &  │  │ (Actas Firmadas &      │
 │  Transaccional)  │  │  Pub/Sub Broker) │  │  PDFs Certificados)    │
 └──────────────────┘  └──────────────────┘  └────────────────────────┘
```

### Componentes Principales
1. **Quorum Engine**: Servicio en memoria respaldado por Redis para calcular quórum presencial, remoto y por poder en tiempo real.
2. **Voting Processor**: Motor de votación con cola transaccional ACID en PostgreSQL y locking optimista/pestimista según el volumen.
3. **Real-Time WS Hub**: Servidor Socket.io/WebSockets federado mediante Redis Pub/Sub para propagación bidireccional instantánea.
4. **Audit & Certifier Service**: Generador de firmas de bloque SHA-256 para actas legales y exportación de certificados.

---

## 3. Modelado de Datos & Esquema de Relaciones (PostgreSQL)

### Diagrama Entidad-Relación (Simplificado)

```sql
-- 1. Tabla de Usuarios / Accionistas
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    identification_doc VARCHAR(50) UNIQUE NOT NULL,
    role VARCHAR(30) NOT NULL CHECK (role IN ('ADMIN', 'SECRETARY', 'SHAREHOLDER', 'OBSERVER')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Tabla de Asambleas
CREATE TABLE assemblies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(200) NOT NULL,
    scheduled_at TIMESTAMP WITH TIME ZONE NOT NULL,
    status VARCHAR(30) NOT NULL CHECK (status IN ('SCHEDULED', 'IN_PROGRESS', 'PAUSED', 'CLOSED')),
    min_quorum_percentage NUMERIC(5, 2) DEFAULT 50.01,
    total_shares_registered NUMERIC(15, 2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Tabla de Asistencia / Quórum
CREATE TABLE assembly_attendance (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    assembly_id UUID REFERENCES assemblies(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id),
    shares_represented NUMERIC(15, 2) NOT NULL,
    attendance_type VARCHAR(30) CHECK (attendance_type IN ('PRESENTIAL', 'REMOTE', 'PROXY')),
    checked_in_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(assembly_id, user_id)
);

-- 4. Puntos del Día / Votaciones
CREATE TABLE agenda_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    assembly_id UUID REFERENCES assemblies(id) ON DELETE CASCADE,
    item_order INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(30) DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'VOTING_OPEN', 'VOTING_CLOSED')),
    voting_type VARCHAR(30) DEFAULT 'WEIGHTED', -- WEIGHTED (por acciones) vs SIMPLE
    opened_at TIMESTAMP WITH TIME ZONE,
    closed_at TIMESTAMP WITH TIME ZONE
);

-- 5. Votos Emitidos (Inmutables)
CREATE TABLE votes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    agenda_item_id UUID REFERENCES agenda_items(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id),
    option_selected VARCHAR(100) NOT NULL, -- APPROVE, REJECT, ABSTAIN
    weight_applied NUMERIC(15, 2) NOT NULL,
    hash_signature VARCHAR(64) NOT NULL, -- SHA-256 hash del voto
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(agenda_item_id, user_id) -- Garantiza un solo voto por accionista por punto
);
```

---

## 4. Estrategia de Caché & Tiempo Real (Redis Pub/Sub & WebSockets)

Para prevenir cuellos de botella en la base de datos relacional durante asambleas de alta concurrencia:

1. **Estado del Quórum en Redis**:
   - Clave: `assembly:{id}:quorum` (Hash Redis)
   - Contiene: `total_shares_present`, `percentage`, `shareholder_count`.
   - Se actualiza atómicamente con scripts Lua al registrar asistencias.

2. **Conteo en Vivo de Votos**:
   - Clave: `agenda_item:{id}:votes` (Hash Redis)
   - Incremento atómico `HINCRBYFLOAT` según el peso de acciones del votante.

3. **Canal Pub/Sub**:
   - Canal: `assembly:events:{id}`
   - Eventos emitidos: `QUORUM_UPDATED`, `VOTING_STARTED`, `VOTE_CAST`, `VOTING_CLOSED`.

---

## 5. Especificación de la API (RESTful & Event-Driven)

### Core Endpoints

#### 1. Autenticación y Token JWT
* **`POST /api/v1/auth/login`**
  * **Payload:** `{ "email": "user@plenaria.com", "password": "..." }`
  * **Respuesta:** `{ "token": "ey...", "user": { "id": "...", "role": "SHAREHOLDER" } }`

#### 2. Consultar Quórum en Tiempo Real
* **`GET /api/v1/assemblies/{assemblyId}/quorum`**
  * **Headers:** `Authorization: Bearer <JWT>`
  * **Respuesta:** 
    ```json
    {
      "assemblyId": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
      "totalShares": 1000000.00,
      "sharesPresent": 754200.50,
      "quorumPercentage": 75.42,
      "hasMinQuorum": true,
      "status": "IN_PROGRESS"
    }
    ```

#### 3. Emitir Voto Ponderado
* **`POST /api/v1/votes/cast`**
  * **Payload:** 
    ```json
    {
      "agendaItemId": "c39e2e50-9d1e-4b48-9f1e-0a56391d8e12",
      "optionSelected": "APPROVE"
    }
    ```
  * **Respuesta:**
    ```json
    {
      "voteId": "e2a1b0c3-...",
      "status": "REGISTERED",
      "weightApplied": 12500.00,
      "hashSignature": "a4fbc8712390abcde...",
      "timestamp": "2026-07-31T20:00:00.000Z"
    }
    ```

#### 4. Eventos WebSocket (Socket.io / WSS)
* **`subscribe_assembly`**: Suscripción al canal de la asamblea.
* **`event: QUORUM_UPDATE`**: Payload con nuevo porcentaje de quórum.
* **`event: VOTING_STATE_CHANGE`**: Cambio de estado de un punto del día (`VOTING_OPEN` -> `VOTING_CLOSED`).

---

## 6. Seguridad, Control de Acceso (RBAC) & Auditoría Criptográfica

| Rol | Permisos |
| :--- | :--- |
| **ADMIN / PRESIDENTE** | Crear asambleas, abrir/cerrar orden del día, declarar quórum legal, cerrar acta. |
| **SECRETARIO** | Validar poderes de representación, registrar asistencia presencial, firmar acta. |
| **ACCIONISTA / APODERADO** | Emitir voto ponderado, consultar quórum en vivo, descargar certificados. |
| **OBSERVADOR** | Solo lectura de métricas y transmisión en vivo sin derecho a voto. |

### Inmutabilidad y Hashing SHA-256
Cada voto individual produce un hash de verificación:
$$\text{Hash} = \text{SHA256}(\text{agenda\_item\_id} + \text{user\_id} + \text{option} + \text{weight} + \text{timestamp} + \text{salt\_secret})$$

Al finalizar la asamblea, se genera un **Merkle Tree / Hash Encadenado** de todos los votos para sellar el acta digitalmente en formato PDF con firma criptográfica.

---

## 7. Escalabilidad, Tolerancia a Fallos & Alta Disponibilidad

* **Resiliencia ante Caídas de Red**: Mecanismo Offline Buffer en la SPA React con reintento idempotente `X-Idempotency-Key` en headers HTTP.
* **Contención de Transacciones**: Índices optimizados en PostgreSQL (`CREATE INDEX idx_votes_agenda ON votes(agenda_item_id);`).
* **Connection Pooling**: PgBouncer en modo transacción para manejar hasta 5,000 conexiones concurrentes sin agotar la memoria del motor de datos.

---

## 8. Matriz de Requerimientos SRS & Trazabilidad

| ID Requerimiento | Descripción | Módulo Backend | Criterio de Aceptación |
| :--- | :--- | :--- | :--- |
| **REQ-BE-01** | Registro de Quórum Ponderado | Quorum Engine / Redis | Tiempo de actualización < 50ms |
| **REQ-BE-02** | Control de Votación Ponderada | Voting Processor | Imposibilidad de doble voto por punto |
| **REQ-BE-03** | Auditoría y Firma Criptográfica | Audit & Certifier | Generación de hash SHA-256 válido por voto |
| **REQ-BE-04** | Transmisión de Eventos Real-Time | WS Hub / Pub/Sub | Latencia de socket < 100ms a 1000 clientes |
| **REQ-BE-05** | Generación de Actas Formales | Document Service | Creación de PDF/A con firma digital al cerrar |

---
*Documentación estructurada y validada bajo estándares Senior Backend Architecture.*
