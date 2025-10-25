import React from 'react';
import styles from './FiltroCategorias.module.css';

// Importamos desde el nuevo archivo de tipos
import { Categoria, CATEGORIA_LABELS, CATEGORIA_COLORES } from '../../types/Categoria';

// Props del componente
interface FiltroCategoriasProps {
  categoriasSeleccionadas: Categoria[];
  onCategoriaChange: (categoria: Categoria, seleccionada: boolean) => void;
}

// Componente de filtro reutilizable
const FiltroCategorias: React.FC<FiltroCategoriasProps> = ({
  categoriasSeleccionadas,
  onCategoriaChange,
}) => {
  // Obtener todas las categorías disponibles
  const todasLasCategorias = Object.values(Categoria);

  const handleCheckboxChange = (categoria: Categoria) => {
    const estaSeleccionada = categoriasSeleccionadas.includes(categoria);
    onCategoriaChange(categoria, !estaSeleccionada);
  };

  return (
    <div className={styles.filtroContainer}>
      <h3 className={styles.filtroTitulo}>Filtrar por Categoría</h3>
      <div className={styles.opcionesContainer}>
        {todasLasCategorias.map((categoria) => {
          const estaSeleccionada = categoriasSeleccionadas.includes(categoria);
          
          return (
            <label
              key={categoria}
              className={styles.opcionLabel}
              htmlFor={`filtro-${categoria}`}
            >
              <input
                id={`filtro-${categoria}`}
                type="checkbox"
                className={styles.checkbox}
                checked={estaSeleccionada}
                onChange={() => handleCheckboxChange(categoria)}
              />
              <span 
                className={styles.categoriaIndicador}
                style={{ backgroundColor: CATEGORIA_COLORES[categoria] }}
              />
              {CATEGORIA_LABELS[categoria]}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default FiltroCategorias;