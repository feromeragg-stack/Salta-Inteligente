// client/src/App.tsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import DesafiosPage from './pages/DesafiosPage';
import NoticiasPage from './pages/NoticiasPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Ruta principal - HomePage con mapa e información */}
        <Route index element={<HomePage />} />
        
        {/* Ruta de desafíos - DesafiosPage */}
        <Route path="desafios" element={<DesafiosPage />} />
        
        {/* Ruta de noticias - NoticiasPage */}
        <Route path="noticias" element={<NoticiasPage />} />
      </Route>
    </Routes>
  );
};

export default App;
