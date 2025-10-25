import React from 'react';
import styles from './InfoPuntos.module.css';
import { FaLeaf, FaRecycle } from 'react-icons/fa';

const InfoPuntos: React.FC = () => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoCard}>
        <div className={styles.cardHeader}>
          <FaLeaf className={styles.cardIcon} style={{ color: '#2a9d8f' }} />
          <h3 className={styles.cardTitle}>¿Qué es un Punto de Composta?</h3>
        </div>
        <p className={styles.cardText}>
          Es un lugar comunitario donde puedes llevar tus residuos orgánicos (restos de frutas, verduras, yerba, café, cáscaras de huevo) para que se conviertan en abono natural.
        </p>
        <strong className={styles.cardSubTitle}>¿Qué SÍ llevar?</strong>
        <ul className={styles.cardList}>
          <li>Restos de frutas y verduras</li>
          <li>Yerba, café y saquitos de té</li>
          <li>Cáscaras de huevo</li>
          <li>Hojas secas y pasto</li>
        </ul>
        <strong className={styles.cardSubTitle}>¿Qué NO llevar?</strong>
        <ul className={styles.cardList}>
          <li>Carnes, lácteos o huesos</li>
          <li>Comida cocinada o con aceite</li>
          <li>Plásticos o vidrios</li>
        </ul>
      </div>

      <div className={styles.infoCard}>
        <div className={styles.cardHeader}>
          <FaRecycle className={styles.cardIcon} style={{ color: '#264653' }} />
          <h3 className={styles.cardTitle}>¿Qué es un Punto de Reciclaje?</h3>
        </div>
        <p className={styles.cardText}>
          Es un centro de acopio donde puedes depositar materiales reciclables (plástico, vidrio, cartón, papel, latas) que deben estar limpios y secos.
        </p>
        <p className={styles.cardText}>
          Separar estos materiales evita que terminen en el vertedero y permite que se reutilicen como materia prima para nuevos productos.
        </p>
        <strong className={styles.cardSubTitle}>Recuerda:</strong>
        <ul className={styles.cardList}>
          <li>Lleva todo limpio y seco</li>
          <li>Separa plásticos, vidrios y cartón</li>
          <li>Compacta las botellas y cajas</li>
        </ul>
      </div>
    </div>
  );
};

export default InfoPuntos;