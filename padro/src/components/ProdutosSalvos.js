import React from 'react';
import './ProdutosSalvos.css';

function ProdutosSalvos({ produtos }) {
  return (
    <div className="produtos-salvos">
      <h2>Produtos Salvos</h2>
      <ul>
        {produtos.map((produto, index) => (
          <li key={index}>
            <strong>{produto.nome}</strong> - Custo Total: R${produto.custoTotal.toFixed(2)}
            <ul>
              {produto.calculos.map((calculo, subIndex) => (
                <li key={subIndex}>
                  {calculo.ingrediente}: {calculo.quantidade} g - R${calculo.custo}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProdutosSalvos;
