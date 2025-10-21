import { Router } from 'express';
import { obtenerFeriasController } from '../controllers/ferias';

// Crear una instancia del enrutador para las rutas de ferias
const router = Router();

/**
 * Ruta GET para obtener el listado de ferias
 * Endpoint: GET /api/ferias/
 * Conectada al controlador para manejar la lógica de negocio
 */
router.get('/', obtenerFeriasController);

// Exportar el enrutador
export default router;