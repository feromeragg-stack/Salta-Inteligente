import React from 'react';
import Desafios from '../components/Desafios/Desafios';
import styles from './DesafiosPage.module.css';

const DesafiosPage: React.FC = () => {
  return (
    <div className={styles.desafiosLayout}>
      <h2>Desafíos Semanales</h2>
      <p>¡Participa en los eco-retos, suma puntos y gana insignias!</p>
      <div className={styles.desafiosContainer}>
        {/* Simplemente renderizamos el componente que ya teníamos */}
        <Desafios />
      </div>
    </div>
  );
};

export default DesafiosPage;