import { Request, Response } from 'express';
import { getAllPuntosService, getPuntosPorCategoriaService } from '../services/puntos.service';

/**
 * Controlador para obtener todos los puntos de interés
 * Maneja el endpoint GET /api/puntos
 */
export const obtenerPuntosController = async (req: Request, res: Response) => {
  try {
    // Verificar si hay filtro por categoría
    const { categoria } = req.query;

    let puntos;
    
    if (categoria && typeof categoria === 'string') {
      // Filtrar por categoría si se proporciona
      puntos = await getPuntosPorCategoriaService(categoria as any);
    } else {
      // Obtener todos los puntos si no hay filtro
      puntos = await getAllPuntosService();
    }

    // Enviar respuesta exitosa con los datos
    res.status(200).json(puntos);
    
  } catch (error) {
    // Log del error para debugging
    console.error('Error en obtenerPuntosController:', error);
    
    // Enviar respuesta de error
    res.status(500).json({
      error: 'Error interno del servidor',
      message: 'No se pudieron obtener los puntos de interés'
    });
  }
};