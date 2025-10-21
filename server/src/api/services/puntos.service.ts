import { PrismaClient, Categoria } from '@prisma/client';

// Instancia de Prisma Client para interactuar con la base de datos
const prisma = new PrismaClient();

/**
 * Servicio para obtener todos los puntos de interés
 * Incluye ferias, museos, gobierno, estadios y monumentos
 */
export const getAllPuntosService = async () => {
  try {
    // Obtener todos los puntos de la base de datos
    const puntos = await prisma.punto.findMany({
      orderBy: {
        nombre: 'asc'
      }
    });

    return puntos;
  } catch (error) {
    console.error('Error al obtener puntos desde la base de datos:', error);
    throw new Error('Error interno del servidor al obtener puntos');
  }
};

/**
 * Servicio para obtener puntos filtrados por categoría
 */
export const getPuntosPorCategoriaService = async (categoria: Categoria) => {
  try {
    const puntos = await prisma.punto.findMany({
      where: {
        categoria: categoria
      },
      orderBy: {
        nombre: 'asc'
      }
    });

    return puntos;
  } catch (error) {
    console.error(`Error al obtener puntos de categoría ${categoria}:`, error);
    throw new Error(`Error interno del servidor al obtener puntos de categoría ${categoria}`);
  }
};

/**
 * Servicios de compatibilidad para mantener las APIs existentes
 */

/**
 * Obtener solo las ferias (puntos con categoría FERIA)
 */
export const getAllFeriasService = async () => {
  return await getPuntosPorCategoriaService('FERIA' as Categoria);
};

/**
 * Obtener todos los puntos de interés excepto ferias
 */
export const getAllPuntosInteresService = async () => {
  try {
    const puntos = await prisma.punto.findMany({
      where: {
        categoria: {
          not: 'FERIA'
        }
      },
      orderBy: {
        nombre: 'asc'
      }
    });

    return puntos;
  } catch (error) {
    console.error('Error al obtener puntos de interés:', error);
    throw new Error('Error interno del servidor al obtener puntos de interés');
  }
};