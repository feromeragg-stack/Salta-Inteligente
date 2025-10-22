import axios from 'axios';
import { Punto, Categoria } from '../types/feria';

/**
 * Cliente de API configurado para el backend de Salta-Inteligente
 * Configurado para apuntar al servidor local en desarrollo
 */
const apiClient = axios.create({
  baseURL: 'http://localhost:3001/api',
});

/**
 * Servicio para obtener todos los puntos de interés desde la API unificada
 * Realiza una petición GET al endpoint /puntos del backend
 */
export const fetchPuntos = async (): Promise<Punto[]> => {
  try {
    // Realizar petición GET a /puntos
    const response = await apiClient.get('/puntos');
    
    // Devolver los datos de la respuesta
    return response.data;
    
  } catch (error) {
    // Imprimir error en consola para debugging
    console.error('Error al obtener puntos:', error);
    
    // Lanzar el error para que el componente que llame pueda manejarlo
    throw error;
  }
};

/**
 * Servicio para obtener puntos filtrados por categoría
 */
export const fetchPuntosPorCategoria = async (categoria: Categoria): Promise<Punto[]> => {
  try {
    const response = await apiClient.get(`/puntos?categoria=${categoria}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener puntos de categoría ${categoria}:`, error);
    throw error;
  }
};

/**
 * Servicios de compatibilidad con el código existente
 */

/**
 * Obtener solo los puntos verdes (puntos con categoría PUNTO_VERDE)
 */
export const fetchFerias = async () => {
  const puntos = await fetchPuntos();
  return puntos.filter(punto => punto.categoria === Categoria.PUNTO_VERDE);
};

/**
 * Obtener solo los puntos de interés (todas las categorías excepto PUNTO_VERDE)
 */
export const fetchPuntosInteres = async () => {
  const puntos = await fetchPuntos();
  return puntos.filter(punto => punto.categoria !== Categoria.PUNTO_VERDE);
};