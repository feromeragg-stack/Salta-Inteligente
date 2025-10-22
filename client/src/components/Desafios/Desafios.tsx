import React from 'react';
import styles from './Desafios.module.css';
import { FaRecycle, FaLeaf, FaShoppingBag } from 'react-icons/fa';

const DesafiosSemanales: React.FC = () => {
  const desafios = [
    {
      icon: <FaLeaf className={styles.icon} style={{ color: '#6a994e' }} />,
      titulo: 'Inicia tu compostera',
      descripcion: 'Guarda tus residuos orgánicos de la semana y llévalos a un Punto Verde.',
    },
    {
      icon: <FaRecycle className={styles.icon} style={{ color: '#3a86ff' }} />,
      titulo: 'Separa plásticos y cartones',
      descripcion: 'Dedica un tacho exclusivo para los reciclables secos y limpios.',
    },
    {
      icon: <FaShoppingBag className={styles.icon} style={{ color: '#f77f00' }} />,
      titulo: 'Día de compras sin bolsas',
      descripcion: 'Lleva tus propias bolsas reutilizables al hacer las compras.',
    },
  ];

  return (
    <div className={styles.desafiosContainer}>
      <h2 className={styles.tituloPrincipal}>Desafíos de la Semana</h2>
      <p className={styles.subtitulo}>¡Completa retos, suma puntos y gana insignias!</p>
      <div className={styles.listaDesafios}>
        {desafios.map((desafio, index) => (
          <div key={index} className={styles.desafioCard}>
            <div className={styles.iconContainer}>{desafio.icon}</div>
            <div className={styles.textoContainer}>
              <h3 className={styles.desafioTitulo}>{desafio.titulo}</h3>
              <p className={styles.desafioDescripcion}>{desafio.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesafiosSemanales;
