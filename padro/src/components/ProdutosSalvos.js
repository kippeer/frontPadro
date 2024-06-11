import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './ProdutosSalvos.css';

function ProdutosSalvos({ produtos }) {

  const downloadPDF = () => {
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
      });
  };

  return (
    <div className="produtos-salvos">
      <h2>Produtos Salvos</h2>
      <div id="produtos-salvos-content" className="pdf-content">
        <ul className="product-list">
          {produtos.map((produto, index) => (
            <li key={index} className="product-item">
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
      <button onClick={downloadPDF} className="download-btn">Download PDF</button>
    </div>
  );
}

export default ProdutosSalvos;
