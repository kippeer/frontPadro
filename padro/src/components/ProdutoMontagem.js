import React, { useState } from 'react';
import './ProdutoMontagem.css';

function ProdutoMontagem({ ingredientes, onProdutoMontagem, calculos, custoTotal }) {
  const [ingredienteSelecionado, setIngredienteSelecionado] = useState('');
  const [quantidadeUsada, setQuantidadeUsada] = useState('');

  const handleAdicao = () => {
    const ingrediente = ingredientes.find(ing => ing.nome === ingredienteSelecionado);
    if (ingrediente) {
      const quantidadeUsadaKg = quantidadeUsada / 1000; // Converter de gramas para quilogramas
      const custoCalculado = (ingrediente.preco / ingrediente.quantidade) * quantidadeUsadaKg;
      const custoFinal = custoCalculado.toFixed(2);
      onProdutoMontagem({ ingrediente: ingredienteSelecionado, quantidade: quantidadeUsada, custo: custoFinal });
      setIngredienteSelecionado('');
      setQuantidadeUsada('');
    }
  };

  return (
    <div className="produto-montagem">
      <h2>Montagem do Produto</h2>
      <label>
        Ingrediente:
        <select value={ingredienteSelecionado} onChange={(e) => setIngredienteSelecionado(e.target.value)}>
          <option value="" disabled>Selecione um ingrediente</option>
          {ingredientes.map((ingrediente, index) => (
            <option key={index} value={ingrediente.nome}>{ingrediente.nome}</option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Quantidade Usada (g):
        <input type="number" value={quantidadeUsada} onChange={(e) => setQuantidadeUsada(e.target.value)} />
      </label>
      <br />
      <button onClick={handleAdicao}>Adicionar Ingrediente</button>
      <ul>
        {calculos.map((calculo, index) => (
          <li key={index}>
            {calculo.ingrediente}: {calculo.quantidade}g - R${calculo.custo}
          </li>
        ))}
      </ul>
      <div className="total-cost">
        <h3>Custo Total do Produto: R${custoTotal.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default ProdutoMontagem;
