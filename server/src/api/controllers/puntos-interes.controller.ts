import { Request, Response, NextFunction } from 'express';
import { getAllPuntosInteresService } from '../services/puntos-interes.service';

/**
 * Controlador para obtener todos los puntos de interés
 * Maneja la lógica de negocio para el endpoint GET /api/puntos-interes
 */
export const obtenerPuntosInteresController = async (
  req: Request, 
  res: Response, 
  next: NextFunction
): Promise<void> => {
  try {
    // Obtener todos los puntos de interés desde el servicio
    const puntosInteres = await getAllPuntosInteresService();
    
    // Enviar los puntos de interés como respuesta JSON
    res.status(200).json(puntosInteres);
    
  } catch (error) {
    // Pasar cualquier error al manejador de errores centralizado
    next(error);
  }
};