import { Router } from 'express';
import NoticiasController from '../controllers/NoticiasController';

const router = Router();
const noticiasController = new NoticiasController();

/**
 * @route GET /api/noticias/ambientales
 * @description Obtiene las últimas noticias ambientales de Salta usando Gemini AI
 * @access Public
 */
router.get('/ambientales', noticiasController.obtenerNoticiasAmbientales);

/**
 * @route GET /api/noticias/estado
 * @description Verifica el estado de la API de noticias
 * @access Public
 */
router.get('/estado', noticiasController.obtenerEstadoApi);

export default router;