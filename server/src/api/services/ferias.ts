import { getAllFeriasService as getFeriasFromPuntos } from './puntos.service';

/**
 * Servicio de compatibilidad para obtener todas las ferias
 * Ahora usa el servicio unificado de puntos filtrando por categoría FERIA
 */
export const getAllFeriasService = getFeriasFromPuntos;