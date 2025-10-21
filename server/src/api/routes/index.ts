import { Router } from 'express';
import feriasRouter from './ferias.routes';
import puntosInteresRouter from './puntos-interes.routes';
import puntosRouter from './puntos.routes';

// Crear una instancia del enrutador principal
const router = Router();

/**
 * Configuración de rutas principales de la API
 * Monta todos los módulos bajo sus respectivos prefijos
 */

// Nuevo enrutador unificado para todos los puntos
router.use('/puntos', puntosRouter);

// Enrutadores de compatibilidad (mantienen las APIs existentes)
router.use('/ferias', feriasRouter);
router.use('/puntos-interes', puntosInteresRouter);

// TODO: Aquí se montarán otros módulos futuros:
// router.use('/eventos', eventosRouter);    // Módulo 2: Agenda Cultural
// router.use('/reportes', reportesRouter);  // Módulo 3: Reportes Ciudadanos
// router.use('/saeta', saetaRouter);        // Módulo 4: Cuándo Pasa SAETA

// Exportar el enrutador principal
export default router;