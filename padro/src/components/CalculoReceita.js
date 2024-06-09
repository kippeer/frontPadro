// src/components/CalculoReceita.js
import React, { useState } from 'react';
import './CalculoReceita.css';

function CalculoReceita({ ingredientes }) {
  const [ingredienteSelecionado, setIngredienteSelecionado] = useState('');
  const [quantidadeUsada, setQuantidadeUsada] = useState('');
  const [custo, setCusto] = useState(null);

  const handleCalculo = () => {
    const ingrediente = ingredientes.find(ing => ing.nome === ingredienteSelecionado);
    if (ingrediente) {
      const quantidadeUsadaKg = quantidadeUsada / 1000; // Converter de gramas para quilogramas
      const custoCalculado = (ingrediente.preco / ingrediente.quantidade) * quantidadeUsadaKg;
      setCusto(custoCalculado.toFixed(2)); // Armazenar o custo calculado com duas casas decimais
    }
  };

  return (
    <div className="calculo">
      <h2>Cálculo de Receita</h2>
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
      <button onClick={handleCalculo}>Calcular Custo</button>
      {custo !== null && (
        <div>
          <h3>Custo da Receita: R${custo}</h3>
        </div>
      )}
    </div>
  );
}

export default CalculoReceita;
