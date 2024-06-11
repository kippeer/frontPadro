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
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save("produtos-salvos.pdf");
      });
  };

  return (
    <div className="produtos-salvos">
      <h2>Produtos Salvos</h2>
      <div id="produtos-salvos-content">
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
      <button onClick={downloadPDF}>Download PDF</button>
    </div>
  );
}

export default ProdutosSalvos;
