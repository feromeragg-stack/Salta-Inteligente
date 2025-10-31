import React, { useState, useEffect } from 'react';
import { FaNewspaper, FaSpinner, FaExternalLinkAlt, FaClock, FaLeaf } from 'react-icons/fa';
import styles from './NoticiasPage.module.css';

interface Noticia {
  titulo: string;
  resumen: string;
  fuente: string;
  url: string;
  fechaPublicacion?: string;
}

interface NoticiasResponse {
  noticias: Noticia[];
  resumenGeneral: string;
  fechaConsulta: string;
}

const NoticiasPage: React.FC = () => {
  const [noticias, setNoticias] = useState<NoticiasResponse | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const obtenerNoticias = async () => {
    try {
      setCargando(true);
      setError(null);
      
      const response = await fetch('/api/noticias/ambientales');
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      
      const data: NoticiasResponse = await response.json();
      setNoticias(data);
    } catch (err) {
      console.error('Error al obtener noticias:', err);
      setError(err instanceof Error ? err.message : 'Error desconocido al cargar noticias');
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerNoticias();
  }, []);

  const formatearFecha = (fecha?: string) => {
    if (!fecha) return 'Fecha no disponible';
    
    try {
      return new Date(fecha).toLocaleDateString('es-AR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return fecha;
    }
  };

  if (cargando) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <FaNewspaper className={styles.headerIcon} />
          <h1>Noticias Ambientales</h1>
        </div>
        
        <div className={styles.loadingContainer}>
          <FaSpinner className={styles.spinner} />
          <h2>Buscando las últimas noticias ambientales...</h2>
          <p>Consultando fuentes de noticias sobre ecología y sostenibilidad en Salta</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <FaNewspaper className={styles.headerIcon} />
          <h1>Noticias Ambientales</h1>
        </div>
        
        <div className={styles.errorContainer}>
          <h2>❌ Error al cargar noticias</h2>
          <p>{error}</p>
          <button 
            onClick={obtenerNoticias}
            className={styles.retryButton}
          >
            🔄 Intentar nuevamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <FaNewspaper className={styles.headerIcon} />
        <h1>Noticias Ambientales</h1>
        <p className={styles.subtitle}>
          Últimas noticias sobre ecología y sostenibilidad en Salta, Argentina
        </p>
      </div>

      {noticias && (
        <>
          {/* Resumen General */}
          {noticias.resumenGeneral && (
            <div className={styles.resumenGeneral}>
              <div className={styles.resumenHeader}>
                <FaLeaf className={styles.resumenIcon} />
                <h2>Resumen de Noticias Ambientales</h2>
              </div>
              <p>{noticias.resumenGeneral}</p>
              <div className={styles.fechaConsulta}>
                <FaClock />
                <span>Actualizado: {formatearFecha(noticias.fechaConsulta)}</span>
              </div>
            </div>
          )}

          {/* Lista de Noticias */}
          <div className={styles.noticiasGrid}>
            {noticias.noticias.map((noticia, index) => (
              <article key={index} className={styles.noticiaCard}>
                <div className={styles.noticiaHeader}>
                  <h3 className={styles.noticiaTitle}>{noticia.titulo}</h3>
                  {noticia.fechaPublicacion && (
                    <span className={styles.fecha}>
                      {formatearFecha(noticia.fechaPublicacion)}
                    </span>
                  )}
                </div>
                
                <p className={styles.noticiaResumen}>{noticia.resumen}</p>
                
                <div className={styles.noticiaFooter}>
                  <span className={styles.fuente}>📰 {noticia.fuente}</span>
                  <a 
                    href={noticia.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.leerMas}
                  >
                    Leer más <FaExternalLinkAlt />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Botón de actualizar */}
          <div className={styles.actualizarContainer}>
            <button 
              onClick={obtenerNoticias}
              className={styles.actualizarButton}
              disabled={cargando}
            >
              🔄 Actualizar noticias
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default NoticiasPage;