import express from 'express';
import { obtenerPuntosController } from '../controllers/puntos.controller';

// Crear router de Express
const router = express.Router();

/**
 * Rutas para el endpoint /api/puntos
 * Maneja todos los puntos de interés (ferias, museos, gobierno, estadios, monumentos)
 */

/**
 * GET /api/puntos
 * Obtener todos los puntos de interés
 * Query params opcionales:
 * - categoria: Filtrar por categoría (FERIA, MUSEO, GOBIERNO, ESTADIO, MONUMENTO)
 */
router.get('/', obtenerPuntosController);

export default router;