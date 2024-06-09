import React, { useState } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro';
import ListaIngredientes from './components/ListaIngredientes';
import CalculoReceita from './components/CalculoReceita';
import ProdutoMontagem from './components/ProdutoMontagem';

function App() {
  const [ingredientes, setIngredientes] = useState([]);
  const [calculos, setCalculos] = useState([]);

  const handleCadastro = (novoIngrediente) => {
    setIngredientes([...ingredientes, novoIngrediente]);
  };

  const handleCalculo = (novoCalculo) => {
    setCalculos([...calculos, novoCalculo]);
  };

  const handleProdutoMontagem = (novoCalculo) => {
    setCalculos([...calculos, novoCalculo]);
  };

  const custoTotal = calculos.reduce((total, calculo) => total + parseFloat(calculo.custo), 0);

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
            <CalculoReceita ingredientes={ingredientes} onCalculo={handleCalculo} />
          </div>
          <div className="banner">
            <ProdutoMontagem ingredientes={ingredientes} onProdutoMontagem={handleProdutoMontagem} calculos={calculos} custoTotal={custoTotal} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
