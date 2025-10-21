import { Router } from 'express';
import { obtenerPuntosInteresController } from '../controllers/puntos-interes.controller';

// Crear una instancia del enrutador para las rutas de puntos de interés
const router = Router();

/**
 * Ruta GET para obtener el listado de puntos de interés
 * Endpoint: GET /api/puntos-interes/
 * Conectada al controlador para manejar la lógica de negocio
 */
router.get('/', obtenerPuntosInteresController);

// Exportar el enrutador
export default router;