
// src/components/CalculoReceita.js
import React, { useState } from 'react';
import './CalculoReceita.css';

function CalculoReceita({ ingredientes }) {
  const [ingredienteSelecionado, setIngredienteSelecionado] = useState('');
  const [quantidadeUsada, setQuantidadeUsada] = useState('');

  const handleCalculo = () => {
    // Lógica para calcular o custo da receita com base no ingrediente selecionado e na quantidade usada
  };

  return (
    <div className="calculo"> {/* Adicionando a classe "calculo" */}
      <h2>Cálculo de Receita</h2>
      <label>
        Ingrediente:
        <select className="select" value={ingredienteSelecionado} onChange={(e) => setIngredienteSelecionado(e.target.value)}>
          {ingredientes.map((ingrediente, index) => (
            <option key={index} value={ingrediente.nome}>{ingrediente.nome}</option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Quantidade Usada (g):
        <input className="input" type="number" value={quantidadeUsada} onChange={(e) => setQuantidadeUsada(e.target.value)} />
      </label>
      <br />
      <button className="button" onClick={handleCalculo}>Calcular Custo</button>
    </div>
  );
}

export default CalculoReceita;
