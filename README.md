# API Documentos

Proyecto académico: Desarrollo de una API REST con integración CI/CD, control de calidad y observabilidad.

---

## 📌 Objetivo

Construir un incremento de software funcional e integrarlo en un pipeline CI/CD mínimo, incorporando prácticas de calidad, seguridad y observabilidad.

---

## 🛠️ Tecnologías

* Node.js 20
* Express
* SQLite
* Docker
* GitHub Actions (CI/CD)
* Jest (Testing)
* ESLint (Lint)

---

## 📂 Estructura del Proyecto

```
api-documentos/
│
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── app.js
│
├── tests/
├── deploy/
├── docs/
├── .github/workflows/
├── Dockerfile
├── docker-compose.yml
├── package.json
├── .gitignore
└── README.md
```

---

## 🚀 Instalación y Ejecución Local

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/blessty/api-documentos.git
cd api-documentos
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

### 3️⃣ Ejecutar la aplicación

```bash
npm start
```

La API estará disponible en:

```
http://localhost:3000
```

---

## 🔍 Endpoints Principales

| Método | Endpoint              | Descripción         |
| ------ | --------------------- | ------------------- |
| POST   | /documents            | Crear documento     |
| GET    | /documents            | Listar documentos   |
| GET    | /documents/:id        | Obtener por ID      |
| PUT    | /documents/:id/estado | Cambiar estado      |
| DELETE | /documents/:id        | Eliminar documento  |
| GET    | /health               | Estado del servicio |

---

## ✅ Health Check

```bash
curl http://localhost:3000/health
```

Respuesta esperada:

```json
{ "status": "ok" }
```

---

## 🧪 Pruebas

Ejecutar tests con cobertura:

```bash
npm test -- --coverage
```

Cobertura mínima requerida: **80%**

---

## 📏 Lint

Ejecutar análisis de código:

```bash
npm run lint
```

---

## 🐳 Docker

### Construir imagen

```bash
docker build -t api-documentos .
```

### Ejecutar contenedor

```bash
docker run -p 3000:3000 api-documentos
```

---

## 🔄 CI/CD

El pipeline se ejecuta automáticamente en:

* push
* pull request

Incluye:

* Build
* Lint
* Tests con cobertura
* Análisis SAST
* Build de imagen Docker
* Deploy local
* Smoke test (/health)

Configuración: `.github/workflows/ci.yml`

---

## 📈 Observabilidad

### SLI

* Porcentaje de respuestas HTTP 2xx

### SLO

* 99.5% mensual

### Presupuesto de error

* 0.5%

Documento: `docs/SLO.md`

---

## 📝 Postmortem

Se incluye un postmortem simulado en el reporte del proyecto, documentando:

* Línea de tiempo
* Causa raíz
* 5 Porqués
* Acciones correctivas

---

## 📦 Entregables

* Código fuente
* Pipeline CI/CD
* Reporte en PDF/PPTX
* Video demostrativo
* Documentación

---

## 👤 Autor

**Nombre:** Juan Milam Nkogo Mabale
**Curso:** DevOps / Integración Continua
**Fecha:** 2026

---

## 📄 Licencia

Proyecto académico sin fines comerciales.
