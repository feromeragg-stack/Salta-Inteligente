import { getAllPuntosInteresService as getPuntosInteresFromPuntos } from './puntos.service';

/**
 * Servicio de compatibilidad para obtener todos los puntos de interés
 * Ahora usa el servicio unificado de puntos excluyendo la categoría FERIA
 */
export const getAllPuntosInteresService = getPuntosInteresFromPuntos;