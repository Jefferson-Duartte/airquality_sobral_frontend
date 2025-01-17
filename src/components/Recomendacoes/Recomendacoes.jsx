import React from 'react';
import './Recomendacoes.css';

const Recomendacoes = () => {
  const recomendacoes = [
    'Evite exercícios ao ar livre',
    'Feche suas janelas para evitar o ar sujo do lado de fora',
    'Use uma máscara ao ar livre',
    'Ligue um purificador de ar',
  ];

  return (
    <div className="recomendacoes">
      <h3>Recomendações de saúde</h3>
      <ul>
        {recomendacoes.map((rec, index) => (
          <li key={index}>{rec}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recomendacoes;
