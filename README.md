# 🌱 Salta-Verde (Salta-Inteligente)

<p align="center">
  <img src="https://img.shields.io/badge/Módulo%203-En%20Progreso-yellow?style=for-the-badge" alt="Estado del Proyecto: Módulo 3 en Progreso">
</p>

<p align="center">
  Una aplicación web full-stack de código abierto diseñada para fomentar la cultura ambiental y la participación ciudadana en Salta, Argentina.
</p>

<p align="center">
  Combina una herramienta cívica (mapa interactivo de puntos verdes) con un sistema de gamificación (Eco-Retos) para promover la sustentabilidad urbana.
</p>

<p align="center">
  <a href="#-instalación-y-uso-local"><strong>Instalación Local »</strong></a>
  ·
  <a href="https://github.com/feromeragg-stack/Salta-Inteligente/issues">Reportar un Bug</a>
  ·
  <a href="#-contribuir">Contribuir al Proyecto</a>
</p>

---

## 📸 Vista Previa del Proyecto

<p align="center">
  <img width="100%" alt="Salta-Verde - Mapa Ecológico Interactivo" src="https://media.discordapp.net/attachments/1432570665424130068/1432574752530370750/Captura_de_pantalla_2025-10-28_003941.png?ex=69018cb4&is=69003b34&hm=88eccccd77023da216529769b28f117445f71e5be7d085c0ae899f32c4453189&=&format=webp&quality=lossless" />
</p>

_La aplicación "Salta-Verde" mostrando el mapa interactivo, los filtros de categorías y el panel informativo con detalles sobre los puntos de compostaje y reciclaje._

---

## ✨ Funcionalidades Implementadas

La aplicación ha sido refactorizada como una **Single Page Application (SPA)** utilizando `react-router-dom` para una navegación fluida y profesional.

### 🗺️ **Sección "Inicio" (Mapa Interactivo)**

- ✅ **Mapa Dinámico**: Visualización (`react-leaflet`) de puntos ecológicos (Composta y Reciclaje).
- ✅ **Filtros por Categoría**: Filtra marcadores en tiempo real (Puntos de Composta / Puntos de Reciclaje).
- ✅ **Iconos Personalizados**: Iconos (`react-icons`) y colores distintivos para cada categoría.
- ✅ **Panel Informativo**: Columna lateral que educa al usuario sobre qué SÍ y NO llevar a cada tipo de punto.

### 🎯 **Sección "Desafíos" (Gamificación)**

- ✅ **Base de Eco-Retos**: Página dedicada que sirve como base para el sistema de desafíos semanales (próximo módulo a desarrollar).

### ⚙️ **Backend y API**

- ✅ **API RESTful**: Backend robusto en Node.js/Express para servir los datos de los puntos verdes.
- ✅ **Base de Datos Relacional**: Conectado a PostgreSQL y gestionado con Prisma ORM.
- ✅ **Datos de Prueba (seed)**: Script de seeding para poblar la base de datos con puntos de composta y reciclaje.

---

## 🛠️ Stack Tecnológico

<div align="center">

### Frontend

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

### Backend

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

### Base de Datos

![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/postgresql-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

</div>

### Bibliotecas Principales

- **Frontend**: `react-leaflet`, `react-router-dom`, `react-icons`, `axios`, `css-modules`
- **Backend**: `express`, `cors`, `tsx`
- **ORM**: `prisma` con migraciones y script de seeding.
- **Mapas**: `leaflet`

---

## 🏛️ Principios de Arquitectura

Este proyecto sigue estándares de la industria para garantizar código limpio, escalable y mantenible:

- **🏗️ Arquitectura Full-Stack Monorepo**: Organización clara con carpetas `client` y `server`.
- **🔄 Separación de Responsabilidades (SoC)**: Patrón de backend `Ruta → Controlador → Servicio → ORM`.
- **📝 TypeScript End-to-End**: Tipado estático en frontend y backend.
- **📦 Arquitectura Basada en Componentes**: Frontend con Layout y Pages gestionado por `react-router-dom`.

---

## 🚀 Instalación y Uso Local

Sigue estos pasos para ejecutar el proyecto manualmente en tu máquina.

### Prerrequisitos

- Node.js (v18+)
- npm

### Instalación Manual

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/feromeragg-stack/Salta-Inteligente.git
   cd Salta-Inteligente
   ```

2. **Instalar dependencias del Backend:**

   ```bash
   cd server
   npm install
   ```

3. **Instalar dependencias del Frontend:**

   ```bash
   cd ../client
   npm install
   ```

4. **Configurar la Base de Datos (Backend):**

   Regresa a la carpeta `/server`.
   Crea un archivo `.env` (puedes duplicar `.env.example` si existe).
   Añade tu variable de entorno de PostgreSQL:

   ```env
   DATABASE_URL="postgresql://user:password@host:port/database"
   ```

5. **Aplicar Migraciones y Seeding (Backend):**

   Este comando reiniciará la base de datos, aplicará el `schema.prisma` y ejecutará el `seed.ts` para poblarla.

   ```bash
   npx prisma migrate reset
   ```

6. **Ejecutar los servidores:**

   **Terminal 1 (Backend):**
   ```bash
   cd server
   npm run dev
   ```

   **Terminal 2 (Frontend):**
   ```bash
   cd client
   npm run dev
   ```

7. Abre `http://localhost:5173` (o el puerto que indique Vite) en tu navegador.

---

## 📍 Datos Incluidos

El script de seeding (`seed.ts`) puebla la base de datos con **8 puntos ecológicos reales** de la ciudad de Salta para pruebas:

<details>
<summary><strong>🌱 Puntos de Compostaje (6 puntos)</strong></summary>

- **Compostera Comunitaria "El Ceibo"**
- **Centro Vecinal "Tres Cerritos"**
- **Iniciativa "Tierra Viva" (Parque San Martín)**
- **Compostera "Norte Verde"**
- **Plaza "Alvarado" - Punto Orgánico**
- **Huerta y Compost "Grand Bourg"**

</details>

<details>
<summary><strong>♻️ Puntos de Reciclaje (2 puntos)</strong></summary>

- **Punto Verde "COPROMAS" (Centro)**
- **Cooperativa "Reciclando Futuro"**

</details>

---

## 🏗️ Arquitectura del Proyecto

```
salta-verde/
├── 📁 client/                # Frontend (React + TypeScript + Vite)
│   ├── 📁 src/
│   │   ├── 📁 components/     # Componentes React reutilizables
│   │   │   ├── 📁 FiltroCategorias/
│   │   │   ├── 📁 InfoPuntos/
│   │   │   ├── 📁 layout/
│   │   │   └── 📁 MapaCivico/
│   │   ├── 📁 pages/         # Páginas (Rutas de React Router)
│   │   │   ├── DesafiosPage.tsx
│   │   │   └── HomePage.tsx
│   │   ├── 📁 services/      # Llamadas a la API (axios)
│   │   ├── 📁 types/         # Definiciones TypeScript
│   │   ├── App.tsx          # Definición de Rutas
│   │   └── main.tsx         # Punto de entrada (React Router)
│   └── package.json
├── 📁 server/                # Backend (Node.js + Express)
│   ├── 📁 src/
│   │   ├── 📁 api/
│   │   │   ├── 📁 controllers/
│   │   │   ├── 📁 routes/
│   │   │   └── 📁 services/
│   │   ├── 📁 config/        # Configuración (Prisma Client)
│   │   ├── app.ts           # Configuración de Express
│   │   └── server.ts        # Punto de entrada
│   ├── 📁 prisma/
│   │   ├── schema.prisma    # Esquema de base de datos
│   │   ├── 📁 migrations/
│   │   └── seed.ts          # Script de datos de prueba
│   └── package.json
├── package.json             # Scripts del proyecto raíz
└── README.md                # Esta documentación
```

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas!

1. Fork el proyecto.
2. Crea una rama para tu feature (`git checkout -b feature/NuevaFuncionalidad`).
3. Commit tus cambios (`git commit -m 'feat: Agrega nueva funcionalidad'`).
4. Push a la rama (`git push origin feature/NuevaFuncionalidad`).
5. Abre un Pull Request.

Utilizamos [Conventional Commits](https://www.conventionalcommits.org/) para los mensajes de commit (ej: `feat:`, `fix:`, `docs:`, `refactor:`).

---

## 🗺️ Hoja de Ruta (Roadmap)

| Módulo | Funcionalidad | Estado |
|--------|---------------|---------|
| **Módulo 1** | Mapa Interactivo y Filtros | ✅ **Completado** |
| **Módulo 2** | Navegación (SPA) y Layout | ✅ **Completado** |
| **Módulo 3** | Desafíos Interactivos (Gamificación) | ⏳ **En Progreso** |
| **Módulo 4** | Autenticación y Perfiles de Usuario | 🔜 **Próximamente** |
| **Módulo 5** | Sistema de Insignias y Recompensas | 🔜 **Próximamente** |

---

## 📝 Licencia

Este proyecto está licenciado bajo la **Licencia MIT**.

---

## 👨‍💻 Autor

**Fernando J. Romera Costa**

- 🐙 **GitHub**: [@feromeragg-stack](https://github.com/feromeragg-stack)
- 💼 **LinkedIn**: [fernando-romera-033558384](https://www.linkedin.com/in/fernando-romera-033558384/)

---

<div align="center">

### ⭐ ¡Si este proyecto te resulta útil, dale una estrella! ⭐

</div>