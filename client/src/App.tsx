// client/src/App.tsx

import React from "react";
import { Layout, MapaCivico } from "./components";
import "./App.css";

const App: React.FC = () => {
  return (
    <Layout>
      <section>
        <h2>Mapa Interactivo de Salta</h2>
        <p style={{ marginBottom: "1rem", color: "#666" }}>
          Explora las diferentes actividades y puntos de interés en la ciudad de
          Salta a través de nuestro mapa interactivo.
        </p>
        <MapaCivico />
      </section>
    </Layout>
  );
};

export default App;
