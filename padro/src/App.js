// src/App.js
import React, { useState } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro';
import ListaIngredientes from './components/ListaIngredientes';
import CalculoReceita from './components/CalculoReceita';


function App() {
  const [ingredientes, setIngredientes] = useState([]);

  const handleCadastro = (novoIngrediente) => {
    setIngredientes([...ingredientes, novoIngrediente]);
  };

  return (
    <div className="App">
      <FormularioCadastro onCadastro={handleCadastro} />
      <ListaIngredientes ingredientes={ingredientes} />
      <CalculoReceita ingredientes={ingredientes} />
    </div>
  );
}

export default App;
