import React, { useState } from 'react';
import './ProdutoMontagem.css';

function ProdutoMontagem({ ingredientes, onProdutoMontagem, calculos, custoTotal, onSalvarProduto }) {
  const [ingredienteSelecionado, setIngredienteSelecionado] = useState('');
  const [quantidadeUsada, setQuantidadeUsada] = useState('');
  const [unidadeSelecionada, setUnidadeSelecionada] = useState('kg'); // Adicionando estado para a unidade selecionada
  const [produtoNome, setProdutoNome] = useState('');

  const handleAdicao = () => {
    const ingrediente = ingredientes.find(ing => ing.nome === ingredienteSelecionado);
    if (ingrediente) {
      let quantidadeUsadaCalculada = quantidadeUsada; // Quantidade usada mantida igual se a unidade for 'kg'
      if (unidadeSelecionada === 'unidade') {
        quantidadeUsadaCalculada *= ingrediente.quantidade; // Convertendo quantidade para gramas se a unidade for 'unidade'
      }
      const custoCalculado = (ingrediente.preco / ingrediente.quantidade) * quantidadeUsadaCalculada;
      const custoFinal = custoCalculado.toFixed(2);
      onProdutoMontagem({ ingrediente: ingredienteSelecionado, quantidade: quantidadeUsada, custo: custoFinal });
      setIngredienteSelecionado('');
      setQuantidadeUsada('');
    }
  };

  const handleSalvar = () => {
    if (produtoNome) {
      onSalvarProduto(produtoNome);
      setProdutoNome('');
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
        Quantidade Usada:
        <input type="number" value={quantidadeUsada} onChange={(e) => setQuantidadeUsada(e.target.value)} />
      </label>
      <label>
        Unidade:
        <select value={unidadeSelecionada} onChange={(e) => setUnidadeSelecionada(e.target.value)}>
          <option value="kg">kg</option>
          <option value="unidade">unidade</option>
        </select>
      </label>
      <br />
      <button onClick={handleAdicao}>Adicionar Ingrediente</button>
      <ul>
        {calculos.map((calculo, index) => (
          <li key={index}>
            {calculo.ingrediente}: {calculo.quantidade} {unidadeSelecionada} - R${calculo.custo}
          </li>
        ))}
      </ul>
      <div className="total-cost">
        <h3>Custo Total: R${custoTotal.toFixed(2)}</h3>
      </div>
      <label>
        Nome do Produto:
        <input type="text" value={produtoNome} onChange={(e) => setProdutoNome(e.target.value)} />
      </label>
      <button onClick={handleSalvar}>Salvar Produto</button>
    </div>
  );
}

export default ProdutoMontagem;
