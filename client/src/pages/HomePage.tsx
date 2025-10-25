import React from 'react';
import MapaCivico from '../components/MapaCivico/MapaCivico';
import InfoPuntos from '../components/InfoPuntos'; // El nuevo panel
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  return (
    <div>
      <h2>Explora los Puntos Verdes</h2>
      <p>Filtra y descubre los puntos de compostaje y reciclaje en la ciudad.</p>
      
      {/* 1. Contenedor del layout de la página de inicio (dos columnas) */}
      <div className={styles.homeLayout}>
        
        {/* 2. Columna Izquierda (Mapa) */}
        <div className={styles.mapColumn}>
          <MapaCivico />
        </div>
        
        {/* 3. Columna Derecha (Info) */}
        <div className={styles.infoColumn}>
          <InfoPuntos />
        </div>
      </div>
    </div>
  );
};

export default HomePage;