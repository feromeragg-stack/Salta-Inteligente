import { Categoria } from './Categoria';

/**
 * Interfaz para el modelo Punto unificado
 * Representa los puntos ecológicos que vienen desde la API
 */
export interface Punto {
  id: number;
  nombre: string;
  descripcion?: string; // Opcional, puede ser null desde la API
  latitud: number;
  longitud: number;
  categoria: Categoria;
  creadoEn: string; // Las fechas en JSON vienen como strings
}

/**
 * Para compatibilidad con código existente
 * Feria es ahora un Punto con categoría COMPOSTA (puntos de compostaje)
 */
export interface Feria extends Punto {
  categoria: Categoria.COMPOSTA;
}