import React from 'react';
import './ListaIngredientes.css'; // Importando o arquivo de estilo CSS

function ListaIngredientes({ ingredientes }) {
  return (
    <div className="lista"> {/* Adicionando a classe "lista" */}
      <h2>Ingredientes Cadastrados</h2>
      <ul>
        {ingredientes.map((ingrediente, index) => (
          <li key={index}>
            {ingrediente.nome}: {ingrediente.quantidade} kg - R${ingrediente.preco} (R${(ingrediente.preco / ingrediente.quantidade).toFixed(2)}/kg)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaIngredientes;