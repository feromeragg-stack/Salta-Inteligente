# 🚀 Salta-Inteligente

<p align="center">
  <img src="https://img.shields.io/badge/Estado-En%20Desarrollo-blue?style=for-the-badge" alt="Estado del Proyecto: En Desarrollo">
</p>

<p align="center">
  Una aplicación web full-stack de código abierto diseñada para ser un panel cívico centralizado para los ciudadanos de Salta, Argentina. El objetivo es crear una herramienta de alto impacto local que sirva como una pieza central de portafolio, demostrando habilidades técnicas avanzadas en el desarrollo de software moderno.
</p>

<p align="center">
  <a href="#-instalación-y-uso-local"><strong>Instalación Local »</strong></a>
  ·
  <a href="https://github.com/feromeragg-stack/salta-inteligente/issues">Reportar un Bug</a>
  ·
  <a href="#-contribuir">Contribuir al Proyecto</a>
</p>

---

## 📸 Vista Previa del Proyecto

<p align="center">
  <img width="1338" height="785" alt="Captura_de_pantalla_2025-10-21_160925" src="https://github.com/user-attachments/assets/9a9071da-f9ff-470a-bdc4-eb0ec36dfc14" />


">
</p>

*Mapa interactivo mostrando los puntos de interés de Salta con categorización visual y popups informativos*

---

## ✨ Funcionalidades Implementadas

### 🗺️ **Módulo 1: Mapa Interactivo de Puntos de Interés**
- ✅ **Mapa dinámico** con tecnología Leaflet
- ✅ **13 puntos georreferenciados** reales de Salta
- ✅ **Categorización visual** con colores distintivos:
  - 🛍️ **FERIAS** (rojo) - Mercados y ferias artesanales
  - 🏛️ **MUSEOS** (turquesa) - Instituciones culturales
  - 🏛️ **GOBIERNO** (azul) - Edificios gubernamentales
  - ⚽ **ESTADIOS** (verde) - Centros deportivos
  - 🏛️ **MONUMENTOS** (dorado) - Patrimonio histórico
- ✅ **Popups informativos** con detalles de cada ubicación
- ✅ **API REST** completa con filtros por categoría

### 🚧 **Roadmap de Módulos Futuros**
- 📅 **Módulo 2: Agenda Cultural Unificada** (Planificado)
- 📝 **Módulo 3: Reportes Ciudadanos** (Planificado)
- 🚌 **Módulo 4: Tracker de Transporte Público** (Planificado)

---

## 🛠️ Stack Tecnológico

<div align="center">

### Frontend
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

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
- **Frontend**: `react-leaflet`, `axios`, `css-modules`
- **Backend**: `express`, `cors`, `tsx`
- **ORM**: `prisma` con migraciones versionadas
- **Mapas**: `leaflet` para visualización interactiva

---

## 🏛️ Principios de Arquitectura

Este proyecto sigue estrictamente los estándares de la industria para garantizar código limpio, escalable y mantenible:

- **🏗️ Arquitectura Full-Stack Monorepo**: Organización clara con carpetas `client` y `server`
- **🔄 Separación de Responsabilidades**: Patrón `Ruta → Controlador → Servicio → ORM`
- **📝 TypeScript End-to-End**: Tipado estático en frontend y backend
- **🌐 API RESTful**: Endpoints bien definidos y documentados
- **🗄️ Base de Datos Relacional**: Modelo unificado con seeding automatizado
- **📦 Gestión de Estado**: React hooks para manejo eficiente del estado

---

## 🚀 Instalación y Uso Local

### **Prerrequisitos**
```bash
node >= 18.0.0
npm >= 9.0.0
```

### **Instalación Rápida**

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/feromeragg-stack/salta-inteligente.git
   cd salta-inteligente
   ```

2. **Instalar todas las dependencias**
   ```bash
   npm run install:all
   ```

3. **Configurar la base de datos**
   ```bash
   npm run db:setup
   ```

4. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

5. **¡Listo!** Abre tu navegador en:
   - 🌐 **Frontend**: http://localhost:5173
   - 🔗 **API Backend**: http://localhost:3001

### **Configuración Manual (Alternativa)**

<details>
<summary>Click para ver pasos detallados</summary>

#### Backend
```bash
cd server
npm install
cp .env.example .env
npx prisma migrate dev
npx prisma generate
npm run dev
```

#### Frontend
```bash
cd client
npm install
npm run dev
```

</details>

---

## 📊 API Endpoints

### **Endpoints Principales**
```http
GET /api/puntos                    # Obtener todos los puntos
GET /api/puntos?categoria=FERIA    # Filtrar por categoría
GET /health                        # Health check del servidor
```

### **Endpoints de Compatibilidad**
```http
GET /api/ferias                    # Solo ferias
GET /api/puntos-interes           # Todo excepto ferias
```

### **Categorías Disponibles**
- `FERIA` - Mercados y ferias artesanales
- `MUSEO` - Museos e instituciones culturales  
- `GOBIERNO` - Edificios gubernamentales
- `ESTADIO` - Centros deportivos
- `MONUMENTO` - Monumentos históricos y religiosos

---

## 📍 Datos Incluidos

El proyecto incluye **13 puntos de interés reales** de la ciudad de Salta:

<details>
<summary><strong>🛍️ Ferias (3 puntos)</strong></summary>

- **Feria Artesanal del Cerro San Bernardo** - Productos tradicionales salteños
- **Mercado San Miguel** - Mercado histórico con productos regionales
- **Feria de la Plaza 9 de Julio** - Emprendedores locales fines de semana

</details>

<details>
<summary><strong>🏛️ Museos (3 puntos)</strong></summary>

- **Museo de Arqueología de Alta Montaña (MAAM)** - Niños del Llullaillaco
- **Museo de la Ciudad Casa de Hernández** - Historia de Salta
- **Museo Provincial de Bellas Artes** - Arte argentino y salteño

</details>

<details>
<summary><strong>🏛️ Gobierno (2 puntos)</strong></summary>

- **Casa de Gobierno** - Poder Ejecutivo Provincial
- **Municipalidad de Salta** - Gobierno municipal

</details>

<details>
<summary><strong>⚽ Estadios (2 puntos)</strong></summary>

- **Estadio Padre Ernesto Martearena** - Estadio principal de la ciudad
- **Complejo Deportivo Delmi** - Centro deportivo municipal

</details>

<details>
<summary><strong>🏛️ Monumentos (3 puntos)</strong></summary>

- **Catedral Basílica de Salta** - Sede del Arzobispado
- **Iglesia San Francisco** - Torre campanario histórica
- **Cabildo de Salta** - Edificio colonial del siglo XVIII

</details>

---

## 🏗️ Arquitectura del Proyecto

```
salta-inteligente/
├── 📁 client/                    # Frontend React + TypeScript
│   ├── 📁 src/
│   │   ├── 📁 components/       # Componentes React reutilizables
│   │   │   ├── 📁 layout/       # Layout y navegación
│   │   │   ├── 📁 ui/           # Componentes UI básicos
│   │   │   └── MapaCivico.tsx   # Componente principal del mapa
│   │   ├── 📁 services/         # Servicios HTTP y API calls
│   │   ├── 📁 types/           # Definiciones TypeScript
│   │   └── main.tsx            # Punto de entrada
│   ├── package.json
│   └── vite.config.ts
├── 📁 server/                   # Backend Node.js + Express
│   ├── 📁 src/
│   │   ├── 📁 api/
│   │   │   ├── 📁 controllers/ # Lógica de controladores
│   │   │   ├── 📁 routes/      # Definición de rutas
│   │   │   └── 📁 services/    # Lógica de negocio
│   │   ├── 📁 config/          # Configuración del servidor
│   │   └── server.ts           # Servidor principal
│   ├── 📁 prisma/
│   │   ├── schema.prisma       # Esquema de base de datos
│   │   ├── 📁 migrations/      # Migraciones versionadas
│   │   └── seed.ts             # Datos de prueba
│   └── package.json
├── package.json                # Scripts del proyecto raíz
├── README.md                   # Esta documentación
└── LICENSE                     # Licencia MIT
```

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Este proyecto sigue el flujo de trabajo estándar de GitHub.

### **Proceso de Contribución**

1. **Fork** el proyecto
2. **Crea** una rama para tu feature
   ```bash
   git checkout -b feature/NuevaFuncionalidad
   ```
3. **Commit** tus cambios
   ```bash
   git commit -m 'feat: Agregar nueva funcionalidad increíble'
   ```
4. **Push** a la rama
   ```bash
   git push origin feature/NuevaFuncionalidad
   ```
5. **Abre** un Pull Request

### **Estilo de Commits**
Utilizamos [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` nueva funcionalidad
- `fix:` corrección de bugs
- `docs:` documentación
- `style:` formateo, punto y coma, etc.
- `refactor:` refactoring de código
- `test:` agregar tests

### **Issues y Bugs**
- 🐛 [Reportar un bug](https://github.com/feromeragg-stack/salta-inteligente/issues/new?labels=bug)
- 💡 [Solicitar una funcionalidad](https://github.com/feromeragg-stack/salta-inteligente/issues/new?labels=enhancement)

---

## 📈 Roadmap y Próximas Mejoras

### **🎯 Mejoras Inmediatas**
- [ ] Iconos personalizados por categoría en el mapa
- [ ] Panel de filtros interactivo para categorías
- [ ] Búsqueda de puntos por nombre
- [ ] Vista de lista complementaria al mapa
- [ ] Modo oscuro/claro

### **🚀 Funcionalidades Avanzadas**
- [ ] Información extendida con fotos e horarios
- [ ] Geolocalización del usuario
- [ ] Cálculo de rutas entre puntos de interés
- [ ] PWA (Progressive Web App)
- [ ] Notificaciones push para eventos
- [ ] Sistema de favoritos
- [ ] Compartir ubicaciones en redes sociales

### **🏗️ Mejoras Técnicas**
- [ ] Tests unitarios y de integración
- [ ] Deployment automatizado
- [ ] Cache de API con Redis
- [ ] Optimización de imágenes
- [ ] Lighthouse score 90+

---

## 📝 Licencia

Este proyecto está licenciado bajo la **Licencia MIT** - ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 👨‍💻 Autor

**Fernando J. Romera Costa**

- 💼 **LinkedIn**: [fernando-romera-033558384](https://www.linkedin.com/in/fernando-romera-033558384/)
- 🐙 **GitHub**: [@feromeragg-stack](https://github.com/feromeragg-stack)
- 📧 **Email**: [feromeragg@gmail.com]
- 🌐 **Proyecto**: [Salta-Inteligente](https://github.com/feromeragg-stack/salta-inteligente)

---

## 🙏 Agradecimientos

- 🏛️ **Ciudad de Salta** por inspirar este proyecto
- 📚 **Comunidad open source** por las increíbles herramientas

---

<div align="center">

### ⭐ ¡Si este proyecto te resulta útil, dale una estrella!

**¿Encontraste algún problema?** [Repórtalo aquí](https://github.com/feromeragg-stack/salta-inteligente/issues)

**¿Quieres contribuir?** [Lee la guía de contribución](#-contribuir)

</div>
