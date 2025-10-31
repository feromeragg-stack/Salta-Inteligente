import React from 'react';
// 1. Importamos Outlet y NavLink
import { Outlet, NavLink } from 'react-router-dom';
import styles from './Layout.module.css';
import { FaLeaf } from 'react-icons/fa'; // Usamos un ícono para el logo

const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      {/* 2. Esta es la nueva barra de navegación */}
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <FaLeaf className={styles.logoIcon} />
          <span className={styles.logoTitle}>Salta-Verde</span>
        </div>
        <nav className={styles.nav}>
          {/* 3. Usamos NavLink para los enlaces de navegación */}
          {/* Sabe qué enlace es el "activo" y le aplica la clase 'active' */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            🏠 Inicio
          </NavLink>
          <NavLink
            to="/desafios"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            🎯 Desafíos
          </NavLink>
          <NavLink
            to="/noticias"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            📰 Noticias
          </NavLink>
        </nav>
      </header>
      
      {/* 4. Outlet es el "hueco" donde React Router renderizará la página activa */}
      {/* (HomePage o DesafiosPage) */}
      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;