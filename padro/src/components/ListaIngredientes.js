import React from 'react';
import './ListaIngredientes.css';

function ListaIngredientes({ ingredientes }) {
  return (
    <div className="lista">
      <h2>Ingredientes Cadastrados</h2>
      <ul>
        {ingredientes.map((ingrediente, index) => (
          <li key={index}>
            {ingrediente.nome}: {ingrediente.quantidade} {ingrediente.tipo === 'kg' ? 'kg' : 'unidades'} - R${ingrediente.preco} ({ingrediente.tipo === 'kg' ? `R$${(ingrediente.preco / ingrediente.quantidade).toFixed(2)}/kg` : `R$${(ingrediente.preco / ingrediente.quantidade).toFixed(2)}/unidade`})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaIngredientes;
