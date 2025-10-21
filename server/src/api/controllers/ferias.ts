import { Request, Response, NextFunction } from 'express';
import { getAllFeriasService } from '../services/ferias';

/**
 * Controlador para obtener todas las ferias
 * Maneja la lógica de negocio para el endpoint GET /api/ferias
 */
export const obtenerFeriasController = async (
  req: Request, 
  res: Response, 
  next: NextFunction
): Promise<void> => {
  try {
    // Obtener todas las ferias desde el servicio
    const ferias = await getAllFeriasService();
    
    // Enviar las ferias como respuesta JSON
    res.status(200).json(ferias);
    
  } catch (error) {
    // Pasar cualquier error al manejador de errores centralizado
    next(error);
  }
};