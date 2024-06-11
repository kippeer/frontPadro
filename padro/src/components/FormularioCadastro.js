import React, { useState } from 'react';
import './FormularioCadastro.css';

function FormularioCadastro({ onCadastro }) {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('kg'); // Estado para armazenar o tipo de unidade (kg ou unidade)
  const [quantidade, setQuantidade] = useState('');
  const [preco, setPreco] = useState('');

  const handleCadastro = () => {
    const novoIngrediente = {
      nome: nome,
      tipo: tipo, // Adicionando o tipo de unidade ao objeto do ingrediente
      quantidade: quantidade,
      preco: preco
    };
    onCadastro(novoIngrediente);
    setNome('');
    setTipo('kg'); // Reiniciar o tipo para kg após o cadastro
    setQuantidade('');
    setPreco('');
  };

  return (
    

    <div className="formulario">
      <h2>Cadastro de Ingredientes</h2>
      <label>
        Nome do Ingrediente:
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      </label>
      <br />
      <label>
        Tipo de Unidade:
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="kg">Quilograma (kg)</option>
          <option value="unidade">Unidade</option>
        </select>
      </label>
      <br />
      <label>
        Quantidade Comprada ({tipo === 'kg' ? 'kg' : 'unidades'}):
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
