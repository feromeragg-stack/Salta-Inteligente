// server/src/app.ts (Versión Refactorizada)

import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import config from "./config";
import apiRoutes from './api/routes'; // Importar las rutas principales de la API

const app: Application = express();

// 1. Middlewares
app.use(cors()); // Una configuración simple es suficiente por ahora
app.use(express.json());

// Logger simple para desarrollo
if (config.nodeEnv === "development") {
  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
  });
}

// 2. Rutas
// Ruta de salud
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "OK", environment: config.nodeEnv });
});

// Carga de las rutas principales de la API
app.use('/api', apiRoutes); // Montar todas las rutas bajo el prefijo /api

// 3. Manejo de Errores
// Manejador de rutas no encontradas (404)
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Endpoint no encontrado" });
});

// Manejador de errores centralizado (debe ir al final)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Error interno del servidor",
    ...(config.nodeEnv === "development" && { error: err.message }),
  });
});

export default app;
