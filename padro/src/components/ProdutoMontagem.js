import React, { useState } from 'react';
import './ProdutoMontagem.css';

function ProdutoMontagem({ ingredientes, onProdutoMontagem, calculos, custoTotal, onSalvarProduto }) {
  const [ingredienteSelecionado, setIngredienteSelecionado] = useState('');
  const [quantidadeUsada, setQuantidadeUsada] = useState('');
  const [unidadeSelecionada, setUnidadeSelecionada] = useState('grama');
  const [produtoNome, setProdutoNome] = useState('');

  const handleAdicao = () => {
    const ingrediente = ingredientes.find(ing => ing.nome === ingredienteSelecionado);
    if (ingrediente) {
      let quantidadeUsadaCalculada = quantidadeUsada;
      let unidade = unidadeSelecionada;
      if (unidadeSelecionada === 'unidade' && ingrediente.unidade === 'kg') {
        quantidadeUsadaCalculada *= 1000; // Converter de kg para gramas
        unidade = 'grama';
      }
      let custoCalculado = 0;
      if (unidade === 'grama') {
        custoCalculado = (ingrediente.preco / ingrediente.quantidade) * (quantidadeUsadaCalculada / 1000); // Calcula o custo em base de grama
      } else {
        custoCalculado = ingrediente.preco / ingrediente.quantidade; // Calcula o custo por unidade
        custoCalculado *= quantidadeUsadaCalculada; // Multiplica pelo número de unidades
      }
      const custoFinal = custoCalculado.toFixed(2);
      onProdutoMontagem({ ingrediente: ingredienteSelecionado, quantidade: quantidadeUsada + ' ' + unidade, custo: custoFinal });
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
      <br />
      <div className="unidade-selecao">
        <button
          type="button"
          className={unidadeSelecionada === 'grama' ? 'selected' : ''}
          onClick={() => setUnidadeSelecionada('grama')}
        >
          grama
        </button>
        <button
          type="button"
          className={unidadeSelecionada === 'unidade' ? 'selected' : ''}
          onClick={() => setUnidadeSelecionada('unidade')}
        >
          unidade
        </button>
      </div>
      <br />
      <button onClick={handleAdicao}>Adicionar Ingrediente</button>
      <ul>
        {calculos.map((calculo, index) => (
          <li key={index}>
            {calculo.ingrediente}: {calculo.quantidade} - R${calculo.custo}
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
