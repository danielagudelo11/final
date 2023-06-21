import React from "react";
import { Header } from "./Componentes/Header";
import Productos from "./Componentes/Productos/index";
import bootstrap from "bootstrap";

function App() {
  return (
    <div className="App">
      <Header />
      <Productos />
    </div>
  );
}

export default App;
