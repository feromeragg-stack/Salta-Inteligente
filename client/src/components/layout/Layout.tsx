import React from 'react';
import Header from './Header';
import styles from './Layout.module.css';

/**
 * Interfaz para las props del componente Layout
 */
interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Componente Layout reutilizable para Salta-Inteligente
 * Basado en las especificaciones del PROJECT_BRIEFING.md
 * Proporciona una estructura consistente para todas las páginas
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
};

export default Layout;