// client/src/App.tsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import DesafiosPage from './pages/DesafiosPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Ruta principal - HomePage con mapa e información */}
        <Route index element={<HomePage />} />
        
        {/* Ruta de desafíos - DesafiosPage */}
        <Route path="desafios" element={<DesafiosPage />} />
      </Route>
    </Routes>
  );
};

export default App;
