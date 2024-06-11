import React, { useState } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro';
import ListaIngredientes from './components/ListaIngredientes';

import ProdutoMontagem from './components/ProdutoMontagem';
import ProdutosSalvos from './components/ProdutosSalvos';
import Navbar from './components/Navbar'; // Importe o componente Navbar

function App() {
  const [ingredientes, setIngredientes] = useState([]);
  const [calculos, setCalculos] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [currentPage, setCurrentPage] = useState('Cadastro');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCadastro = (novoIngrediente) => {
    setIngredientes([...ingredientes, novoIngrediente]);
    // Remova a linha abaixo para manter a página na seção "Cadastro" após cadastrar um ingrediente
    // setCurrentPage('Ingredientes');
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
    setCurrentPage('Produtos Salvos');
  };

  return (
    <div className="App">
      <Navbar currentPage={currentPage} onPageChange={handlePageChange} />
      <div className="container">
        {currentPage === 'Cadastro' && <FormularioCadastro onCadastro={handleCadastro} />}
        {currentPage === 'Ingredientes' && <ListaIngredientes ingredientes={ingredientes} />}
        
        {currentPage === 'Montagem' && <ProdutoMontagem 
                                          ingredientes={ingredientes} 
                                          onProdutoMontagem={handleProdutoMontagem} 
                                          calculos={calculos} 
                                          custoTotal={calculos.reduce((total, calculo) => total + parseFloat(calculo.custo), 0)} 
                                          onSalvarProduto={handleSalvarProduto} 
                                        />}
        {currentPage === 'Produtos Salvos' && <ProdutosSalvos produtos={produtos} />}
      </div>
    </div>
  );
}

export default App;
