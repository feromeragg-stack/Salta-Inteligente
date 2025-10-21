/**
 * Enum para las categorías de puntos de interés
 * Debe coincidir con el enum del backend en schema.prisma
 */
export enum CategoriaPuntoInteres {
  MUSEO = 'MUSEO',
  GOBIERNO = 'GOBIERNO', 
  ESTADIO = 'ESTADIO',
  MONUMENTO = 'MONUMENTO'
}

/**
 * Interfaz para el modelo PuntoInteres
 * Representa los datos que vienen desde la API del backend
 */
export interface PuntoInteres {
  id: number;
  nombre: string;
  descripcion?: string; // Opcional, puede ser null desde la API
  latitud: number;
  longitud: number;
  categoria: CategoriaPuntoInteres;
  creadoEn: string; // Las fechas en JSON vienen como strings
}