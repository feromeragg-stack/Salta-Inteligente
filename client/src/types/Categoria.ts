/**
 * Enum de categorías de puntos ecológicos
 * Sincronizado con el schema de PostgreSQL
 */
export enum Categoria {
  COMPOSTA = "COMPOSTA",
  RECICLAJE = "RECICLAJE", 
  HUERTA = "HUERTA",
}

/**
 * Mapeo de categorías a etiquetas legibles en español
 */
export const CATEGORIA_LABELS: Record<Categoria, string> = {
  [Categoria.COMPOSTA]: 'Puntos de Compostaje',
  [Categoria.RECICLAJE]: 'Puntos de Reciclaje',
  [Categoria.HUERTA]: 'Huertas Urbanas',
};

/**
 * Colores asociados a cada categoría para el mapa
 */
export const CATEGORIA_COLORES: Record<Categoria, string> = {
  [Categoria.COMPOSTA]: '#2a9d8f', // Verde turquesa para compostaje
  [Categoria.RECICLAJE]: '#f77f00', // Naranja para reciclaje
  [Categoria.HUERTA]: '#6a994e', // Verde natural para huertas
};