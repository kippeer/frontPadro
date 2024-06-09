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
      <div className="container">
        <div className="banners">
          <div className="banner">
            <FormularioCadastro onCadastro={handleCadastro} />
          </div>
          <div className="banner">
            <ListaIngredientes ingredientes={ingredientes} />
          </div>
          <div className="banner">
            <CalculoReceita ingredientes={ingredientes} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
