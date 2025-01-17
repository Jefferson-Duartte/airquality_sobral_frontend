import React from 'react';
import Header from './components/Header/Header';
import AQICard from './components/AQICard/AQICard';
import Recomendacoes from './components/Recomendacoes/Recomendacoes';
import './App.css';
import Conscientizacao from './components/Conscientizacao/Conscientizacao';

const App = () => {

  return (
    <div className="App">
    <Header />
    <div className="content-container">
      <AQICard />
      <Recomendacoes />
    </div>
    
    <Conscientizacao />

    <p style={{paddingTop:'15px'}}>Criado por <a href='https://github.com/Jefferson-Duartte' target='_blank'>Jefferson Duarte</a></p>
  </div>
  );
};

export default App;
