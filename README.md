# 🌱 Salta-Verde (Salta-Inteligente)

<p align="center">
  <img src="https://img.shields.io/badge/Estado-Completamente%20Funcional-green?style=for-the-badge" alt="Estado del Proyecto: Completamente Funcional">
</p>

<p align="center">
  Una aplicación web full-stack ecológica diseñada para conectar a los ciudadanos de Salta con puntos verdes de compostaje y reciclaje. Combina un mapa interactivo, filtros inteligentes, información educativa y desafíos ambientales para promover la sustentabilidad urbana.
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
  <img width="1338" height="785" alt="Salta-Verde - Mapa Ecológico Interactivo" src="https://github.com/user-attachments/assets/9a9071da-f9ff-470a-bdc4-eb0ec36dfc14" />
</p>

_Mapa interactivo de **Salta-Verde** mostrando los 8 puntos ecológicos de la ciudad: 6 centros de compostaje (🌱) y 2 puntos de reciclaje (♻️) con filtros, popups informativos y navegación fluida_

---

## ✨ Funcionalidades Implementadas

### 🗺️ **Módulo 1: Mapa Interactivo de Puntos Ecológicos**

- ✅ **Mapa dinámico** con tecnología Leaflet y React Router
- ✅ **8 puntos verdes georreferenciados** reales de Salta
- ✅ **Categorización visual** con colores distintivos:
  - � **COMPOSTA** (verde turquesa) - Puntos de compostaje comunitario
  - 🟠 **RECICLAJE** (naranja) - Centros de acopio de materiales secos
- ✅ **Filtros interactivos** con checkboxes en tiempo real
- ✅ **Popups informativos** con detalles educativos de cada punto
- ✅ **API REST** completa con endpoints especializados

### � **Módulo 2: Panel Educativo Interactivo**

- ✅ **Cards informativas** sobre compostaje y reciclaje
- ✅ **Guías prácticas** de qué SÍ y NO llevar a cada punto
- ✅ **Layout responsive** adaptable a móviles y desktop
- ✅ **Diseño modular** con componentes reutilizables

### 🎯 **Módulo 3: Sistema de Desafíos Ambientales**

- ✅ **Desafíos semanales** eco-ambientales gamificados
- ✅ **Sistema de puntos** e insignias motivacionales
- ✅ **Navegación fluida** entre páginas con React Router
- ✅ **Interfaz moderna** con iconos y estilos consistentes

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

- **Frontend**: `react-leaflet`, `react-router-dom`, `react-icons`, `css-modules`
- **Backend**: `express`, `cors`, `tsx`, `concurrently`
- **ORM**: `prisma` con migraciones versionadas y seeding automático
- **Mapas**: `leaflet` para visualización interactiva de puntos ecológicos

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
GET /api/puntos                      # Obtener todos los puntos ecológicos
GET /api/puntos?tipo=COMPOSTA       # Filtrar por tipo de punto
GET /api/puntos?tipo=RECICLAJE      # Solo puntos de reciclaje
GET /health                         # Health check del servidor
```

### **Tipos de Puntos Ecológicos**

- `COMPOSTA` - Puntos de compostaje comunitario
- `RECICLAJE` - Centros de reciclaje y contenedores especializados
- `MONUMENTO` - Monumentos históricos y religiosos

---

## 📍 Datos Incluidos

El proyecto incluye **8 puntos ecológicos reales** de la ciudad de Salta:

<details>
<summary><strong>🌱 Puntos de Compostaje (6 puntos)</strong></summary>

- **Parque San Martín** - Centro de compostaje comunitario con talleres educativos
- **Plaza 9 de Julio** - Composteras urbanas para residuos orgánicos
- **Parque Belgrano** - Sistema de compostaje para el barrio
- **Plaza Güemes** - Punto de compostaje histórico con educación ambiental
- **Costanera Norte** - Compostaje junto al río con vista panorámica
- **Barrio Grand Bourg** - Centro comunitario de compostaje residencial

</details>

<details>
<summary><strong>♻️ Puntos de Reciclaje (2 puntos)</strong></summary>

- **Centro de Reciclaje Municipal** - Separación y procesamiento de materiales reciclables
- **EcoPunto Microcentro** - Contenedores inteligentes para reciclaje urbano

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

- [x] Sistema de filtros interactivo por tipo de punto ecológico
- [x] Iconos diferenciados para compostaje y reciclaje
- [x] Navegación entre páginas con React Router
- [x] Paneles informativos sobre sostenibilidad
- [ ] Búsqueda de puntos ecológicos por ubicación
- [ ] Modo oscuro/claro

### **🚀 Funcionalidades Avanzadas**

- [ ] Sistema de desafíos ambientales semanales
- [ ] Calculadora de huella de carbono personal
- [ ] Geolocalización para encontrar el punto más cercano
- [ ] PWA (Progressive Web App) para acceso offline
- [ ] Gamificación con puntos por acciones ecológicas
- [ ] Sistema de notificaciones para recordatorios ambientales
- [ ] Compartir logros ecológicos en redes sociales

### **🏗️ Mejoras Técnicas**

- [ ] Tests unitarios y de integración
- [ ] Deployment automatizado con CI/CD
- [ ] Optimización de rendimiento con cache
- [ ] Accesibilidad web (WCAG 2.1)
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
- 🌐 **Proyecto**: [Salta-Verde](https://github.com/feromeragg-stack/salta-inteligente)

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
