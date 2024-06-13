import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './ProdutosSalvos.css';

function ProdutosSalvos({ produtos }) {
  const [produtosList, setProdutosList] = useState(produtos);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [generatingPDF, setGeneratingPDF] = useState(false);

  const handleSelect = (index) => {
    if (selectedProducts.includes(index)) {
      setSelectedProducts(selectedProducts.filter(i => i !== index));
    } else {
      setSelectedProducts([...selectedProducts, index]);
    }
  };

  const handleDeleteSelected = () => {
    const newProdutos = produtosList.filter((_, i) => !selectedProducts.includes(i));
    setProdutosList(newProdutos);
    setSelectedProducts([]);
  };

  const downloadPDF = () => {
    setGeneratingPDF(true);
    setTimeout(() => {
      const input = document.getElementById('produtos-salvos-content');
      html2canvas(input)
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('p', 'mm', 'a4');
          const imgProps = pdf.getImageProperties(imgData);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
          pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
          pdf.save("produtos-salvos.pdf");
          setGeneratingPDF(false);
        });
    }, 2000); // Atraso de 1 segundo antes de iniciar a geração do PDF
  };

  return (
    <div className="produtos-salvos">
      

      <h2 className='title'>Produtos Salvos</h2>
      
      <div id="produtos-salvos-content" className="pdf-content">
        <ul className="product-list">

          <ul className='produtos-salvos'>Custo de Produção</ul>

          {produtosList.map((produto, index) => (
            <li
              key={index}
              className={`product-item ${selectedProducts.includes(index) ? 'selected' : ''} ${generatingPDF ? 'pdf-generating' : ''}`}
            >
              {!generatingPDF && (
                <input
                  type="checkbox"
                  checked={selectedProducts.includes(index)}
                  onChange={() => handleSelect(index)}
                />
              )}
              <strong>{produto.nome}</strong> - Custo Total: R${produto.custoTotal.toFixed(2)}
              <ul className="ingredient-list">
                {produto.calculos.map((calculo, subIndex) => (
                  <li key={subIndex} className="ingredient-item">
                    {calculo.ingrediente}: {calculo.quantidade} g - R${Number(calculo.custo).toFixed(2)}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleDeleteSelected} className="delete-btn">Excluir Selecionados</button>
      <button onClick={downloadPDF} className="download-btn">Download PDF</button>
    </div>
  );
}

export default ProdutosSalvos;
