// client/src/App.tsx

import React from 'react';
import Layout from './components/layout/Layout';
import MapaCivico from './components/MapaCivico/MapaCivico';
import DesafiosSemanales from './components/Desafios/Desafios'; // Importamos el nuevo componente
import './App.css'; // Importamos los nuevos estilos de layout

const App: React.FC = () => {
  return (
    <Layout>
      {/* Nota de Mentor: Cambiamos los textos para reflejar la nueva identidad "Salta-Verde" */}
      <div className="titulo-container">
        <h2>Salta-Verde: Tu Mapa Ecológico</h2>
        <p>Descubre puntos de compostaje, reciclaje y participa en desafíos ambientales.</p>
      </div>

      <div className="main-content-grid">
        <div className="mapa-container">
          <MapaCivico />
        </div>
        <div className="desafios-container">
          <DesafiosSemanales />
        </div>
      </div>
    </Layout>
  );
};

export default App;
