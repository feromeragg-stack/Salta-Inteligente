import axios from 'axios';
import { Feria } from '../types/feria';
import { PuntoInteres } from '../types/puntoInteres';

/**
 * Cliente de API configurado para el backend de Salta-Inteligente
 * Configurado para apuntar al servidor local en desarrollo
 */
const apiClient = axios.create({
  baseURL: 'http://localhost:3001/api',
});

/**
 * Servicio para obtener todas las ferias desde la API
 * Realiza una petición GET al endpoint /ferias del backend
 */
export const fetchFerias = async (): Promise<Feria[]> => {
  try {
    // Realizar petición GET a /ferias
    const response = await apiClient.get('/ferias');
    
    // Devolver los datos de la respuesta
    return response.data;
    
  } catch (error) {
    // Imprimir error en consola para debugging
    console.error('Error al obtener ferias:', error);
    
    // Lanzar el error para que el componente que llama pueda manejarlo
    throw error;
  }
};

/**
 * Servicio para obtener todos los puntos de interés desde la API
 * Realiza una petición GET al endpoint /puntos-interes del backend
 */
export const fetchPuntosInteres = async (): Promise<PuntoInteres[]> => {
  try {
    // Realizar petición GET a /puntos-interes
    const response = await apiClient.get('/puntos-interes');
    
    // Devolver los datos de la respuesta
    return response.data;
    
  } catch (error) {
    // Imprimir error en consola para debugging
    console.error('Error al obtener puntos de interés:', error);
    
    // Lanzar el error para que el componente que llama pueda manejarlo
    throw error;
  }
};