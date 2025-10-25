/**
 * Enum de categorías de puntos - Actualizado para coincidir con PostgreSQL
 * Enfoque en puntos verdes/ecológicos
 * Simplificado a 2 categorías principales
 */
export enum Categoria {
  COMPOSTA = "COMPOSTA",
  RECICLAJE = "RECICLAJE",
}

/**
 * Interfaz para el modelo Punto unificado
 * Representa los datos que vienen desde la API del backend
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
