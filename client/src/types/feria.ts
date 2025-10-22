/**
 * Enum de categorías de puntos
 */
export enum Categoria {
  PUNTO_VERDE = "PUNTO_VERDE",
  MUSEO = "MUSEO",
  GOBIERNO = "GOBIERNO",
  ESTADIO = "ESTADIO",
  MONUMENTO = "MONUMENTO",
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
 * Feria es ahora un Punto con categoría PUNTO_VERDE
 */
export interface Feria extends Punto {
  categoria: Categoria.PUNTO_VERDE;
}
