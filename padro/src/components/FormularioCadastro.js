// src/components/FormularioCadastro.js
import React, { useState } from 'react';
import './FormularioCadastro.css';

function FormularioCadastro({ onCadastro }) {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [preco, setPreco] = useState('');

  const handleCadastro = () => {
    const novoIngrediente = {
      nome: nome,
      quantidade: quantidade,
      preco: preco
    };
    onCadastro(novoIngrediente);
    setNome('');
    setQuantidade('');
    setPreco('');
  };

  return (
    <div className="formulario"> {/* Adicionando a classe "formulario" */}
      <h2>Cadastro de Ingredientes</h2>
      <label>
        Nome do Ingrediente:
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      </label>
      <br />
      <label>
        Quantidade Comprada (kg):
        <input type="number" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
      </label>
      <br />
      <label>
        Preço Total (R$):
        <input type="number" value={preco} onChange={(e) => setPreco(e.target.value)} />
      </label>
      <br />
      <button onClick={handleCadastro}>Cadastrar Ingrediente</button>
    </div>
  );
}

export default FormularioCadastro;
