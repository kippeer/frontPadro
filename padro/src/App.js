import React, { useState } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro';
import ListaIngredientes from './components/ListaIngredientes';
import CalculoReceita from './components/CalculoReceita';
import ProdutoMontagem from './components/ProdutoMontagem';
import ProdutosSalvos from './components/ProdutosSalvos';

function App() {
  const [ingredientes, setIngredientes] = useState([]);
  const [calculos, setCalculos] = useState([]);
  const [produtos, setProdutos] = useState([]);

  const handleCadastro = (novoIngrediente) => {
    setIngredientes([...ingredientes, novoIngrediente]);
  };

  const handleProdutoMontagem = (novoCalculo) => {
    setCalculos([...calculos, novoCalculo]);
  };

  const handleSalvarProduto = (produtoNome) => {
    const custoTotal = calculos.reduce((total, calculo) => total + parseFloat(calculo.custo), 0);
    const novoProduto = {
      nome: produtoNome,
      calculos: [...calculos],
      custoTotal
    };
    setProdutos([...produtos, novoProduto]);
    setCalculos([]);
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
            <CalculoReceita ingredientes={ingredientes} />
          </div>
          <div className="banner">
            <ProdutoMontagem 
              ingredientes={ingredientes} 
              onProdutoMontagem={handleProdutoMontagem} 
              calculos={calculos} 
              custoTotal={custoTotal} 
              onSalvarProduto={handleSalvarProduto} 
            />
          </div>
        </div>
        <div className="banner">
          <ProdutosSalvos produtos={produtos} />
        </div>
      </div>
    </div>
  );
}

export default App;
