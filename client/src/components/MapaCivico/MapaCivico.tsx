import React, { useState, useEffect, useMemo } from 'react';
import { Punto } from '../../types/Punto';
import { Categoria, CATEGORIA_COLORES } from '../../types/Categoria';
import { fetchPuntos } from '../../services/puntosService';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import FiltroCategorias from '../FiltroCategorias';
import 'leaflet/dist/leaflet.css';

/**
 * Función helper para obtener color según la categoría
 * Utiliza los colores definidos en tipos centralizados
 */
const getCategoriaColor = (categoria: Categoria): string => {
  return CATEGORIA_COLORES[categoria] || '#f0f0f0'; // Gris por defecto
};

/**
 * Componente MapaCivico - Dashboard cívico del proyecto Salta-Inteligente
 * Renderiza un mapa interactivo con ferias y puntos de interés de la ciudad de Salta
 * Basado en las especificaciones del PROJECT_BRIEFING.md
 */
const MapaCivico: React.FC = () => {
  // Estados del componente
  const [puntos, setPuntos] = useState<Punto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // Estado para los filtros de categorías
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState<Categoria[]>([
    Categoria.COMPOSTA, 
    Categoria.RECICLAJE, 
    Categoria.HUERTA
  ]); // Por defecto, mostrar todas las categorías

  // Función para manejar cambios en los filtros
  const handleCategoriaChange = (categoria: Categoria, seleccionada: boolean) => {
    setCategoriasSeleccionadas(prev => {
      if (seleccionada) {
        // Agregar categoría si no está presente
        return prev.includes(categoria) ? prev : [...prev, categoria];
      } else {
        // Remover categoría
        return prev.filter(c => c !== categoria);
      }
    });
  };

  // Filtrar puntos según las categorías seleccionadas
  const puntosFiltrados = useMemo(() => {
    return puntos.filter(punto => categoriasSeleccionadas.includes(punto.categoria));
  }, [puntos, categoriasSeleccionadas]);

  // Efecto para cargar todos los puntos cuando el componente se monte
  useEffect(() => {
    // Función async/await autoejecutable
    (async () => {
      try {
        // Obtener todos los puntos desde la API unificada
        const puntosData = await fetchPuntos();
        
        setPuntos(puntosData);
      } catch (err) {
        // Manejar errores de las APIs
        setError('Error al cargar los datos del mapa. Por favor, intenta de nuevo.');
        console.error('Error cargando datos del mapa:', err);
      } finally {
        // Siempre establecer loading a false
        setLoading(false);
      }
    })();
  }, []);

  // Renderizado condicional según el estado
  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p>Cargando mapa...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>
        <p>{error}</p>
      </div>
    );
  }

  // Renderizar el mapa con las ferias y filtros
  return (
    <div style={{ width: '100%' }}>
      {/* Componente de filtros */}
      <FiltroCategorias 
        categoriasSeleccionadas={categoriasSeleccionadas}
        onCategoriaChange={handleCategoriaChange}
      />
      
      {/* Información de puntos encontrados */}
      <div style={{ 
        padding: '0.5rem', 
        marginBottom: '1rem', 
        fontSize: '0.9rem', 
        color: '#666' 
      }}>
        Mostrando {puntosFiltrados.length} de {puntos.length} puntos ecológicos
      </div>

      <div style={{ height: '500px', width: '100%' }}>
        <MapContainer
          center={[-24.7891, -65.4103]} // Coordenadas de Salta, Argentina
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%' }}
        >
        {/* Capa de tiles de OpenStreetMap */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Marcadores de puntos filtrados */}
        {puntosFiltrados.map((punto) => (
          <Marker 
            key={punto.id} 
            position={[punto.latitud, punto.longitud]}
          >
            <Popup>
              <div>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>{punto.nombre}</h3>
                {punto.descripcion && (
                  <p style={{ margin: '0 0 0.5rem 0' }}>{punto.descripcion}</p>
                )}
                <small style={{ 
                  color: '#666', 
                  backgroundColor: getCategoriaColor(punto.categoria), 
                  padding: '2px 6px', 
                  borderRadius: '3px',
                  fontWeight: 'bold'
                }}>
                  {punto.categoria}
                </small>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      </div>
    </div>
  );
};

export default MapaCivico;