import React from 'react';
import './Conscientizacao.css';

const Conscientizacao = () => {
  const dicas = [
    {
      title: 'Reduzir as Emissões de Veículos',
      items: [
        'Optar por transporte público ou caminhar, sempre que possível.',
        'Utilizar bicicletas para deslocamentos curtos.',
        'Carona compartilhada: Compartilhar viagens com outras pessoas.',
        'Escolher veículos com baixa emissão de poluentes (elétricos ou híbridos).'
      ]
    },
    {
      title: 'Plantar Árvores e Vegetação',
      items: [
        'Plantar árvores e jardins para absorver poluentes do ar.',
        'Criar espaços verdes nas cidades, como jardins urbanos e hortas comunitárias.'
      ]
    },
    {
      title: 'Evitar o Uso de Produtos Poluentes',
      items: [
        'Evitar queimadas de lixo ou materiais.',
        'Optar por produtos de limpeza ecológicos.',
        'Usar tintas e vernizes sem compostos tóxicos.'
      ]
    },
    {
      title: 'Reduzir a Queima de Combustíveis Sólidos',
      items: [
        'Evitar o uso de fogões a lenha ou carvão.',
        'Optar por alternativas mais limpas como aquecedores a gás ou elétricos.'
      ]
    },
    
    {
      title: 'Evitar Atividades que Gerem Poluição do Ar',
      items: [
        'Evitar fumar em ambientes fechados.',
        'Evitar atividades ao ar livre durante períodos de alta poluição.'
      ]
    },
    {
      title: 'Promover Práticas Sustentáveis',
      items: [
        'Reciclar e reduzir o desperdício de plástico.',
        'Promover o consumo consciente de energia.'
      ]
    },
    {
      title: 'Monitoramento da Qualidade do Ar',
      items: [
        'Acompanhar os índices de qualidade do ar na sua cidade.',
        'Instalar sensores de qualidade do ar em casa.'
      ]
    },
    {
      title: 'Educação e Conscientização',
      items: [
        'Educar a comunidade sobre os impactos da poluição do ar.',
        'Promover campanhas de conscientização para ações limpas.'
      ]
    }
  ];

  return (
    <div className="dicas-conscientizacao">
      <h2>Dicas para Melhorar a Qualidade do Ar</h2>
      <div className="dicas-lista">
        {dicas.map((dica, index) => (
          <div key={index} className="dica-card">
            <h3>{dica.title}</h3>
            <ul>
              {dica.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conscientizacao;
