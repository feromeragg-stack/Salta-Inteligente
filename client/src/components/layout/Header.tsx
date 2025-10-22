import React from "react";
import styles from "./Header.module.css";

/**
 * Componente Header para Salta-Inteligente
 * Basado en las especificaciones del PROJECT_BRIEFING.md
 */
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Green-Flag🟩</h1>
    </header>
  );
};

export default Header;
