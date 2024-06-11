import React from 'react';
import './Navbar.css'; // Importe seu arquivo de estilos CSS para a Navbar

function Navbar({ currentPage, onPageChange }) {
  return (
    <nav className="navbar">
      <ul>
        <li className={currentPage === 'Cadastro' ? 'active' : ''} onClick={() => onPageChange('Cadastro')}>Cadastro</li>
        <li className={currentPage === 'Ingredientes' ? 'active' : ''} onClick={() => onPageChange('Ingredientes')}>Ingredientes Cadastrados</li>
        <li className={currentPage === 'Montagem' ? 'active' : ''} onClick={() => onPageChange('Montagem')}>Montagem do Produto</li>
        <li className={currentPage === 'Produtos Salvos' ? 'active' : ''} onClick={() => onPageChange('Produtos Salvos')}>Produtos Salvos</li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
