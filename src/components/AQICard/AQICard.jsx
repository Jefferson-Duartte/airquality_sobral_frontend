import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AQICard.css";

import Ar from "./ar.svg";
import Humidade from "./humidade.svg";
import Temperatura from "./temperatura.svg";

const AQICard = () => {
  const [airQualityData, setAirQualityData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://airqualitysobralbackend-production.up.railway.app/api/air-quality/sobral")
      .then((response) => {
        setAirQualityData(response.data.data);
        setError(null);
      })
      .catch((err) => {
        setError("Não foi possível carregar os dados.");
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="loading">Carregando dados de qualidade do ar...</div>;
  }

  if (error) {
    return (
      <div className="error">
        <div className="card error-card">
          <h2>Erro</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!airQualityData || !airQualityData.current) {
    return (
      <div className="error">
        <div className="card error-card">
          <h2>Erro</h2>
          <p>Dados de qualidade do ar não estão disponíveis.</p>
        </div>
      </div>
    );
  }

  const { current } = airQualityData;
  const { poluente, tempo } = current;

  const getAqiDetails = (aqi) => {
    if (aqi <= 50) {
      return {
        color: "#00E400", // Verde
        text: "Boa qualidade do ar",
      };
    } else if (aqi <= 100) {
      return {
        color: "#FDD64B", // Amarelo
        text: "Qualidade moderada",
      };
    } else if (aqi <= 150) {
      return {
        color: "#FF7E00", // Laranja
        text: "Não saudável para grupos sensíveis",
      };
    } else if (aqi <= 200) {
      return {
        color: "#FF0000", // Vermelho
        text: "Não saudável",
      };
    } else if (aqi <= 300) {
      return {
        color: "#8F3F97", // Roxo
        text: "Não muito saudável",
      };
    } else {
      return {
        color: "#7E0023", // Marrom
        text: "Perigoso",
      };
    }
  };

  const { color, text } = getAqiDetails(poluente.aqi);

  return (
    <div className="card" style={{ backgroundColor: color }}>
      <div className="card-header">
        <div className="aqi">{poluente.aqi}</div>
        <div className="status">{text}</div>
      </div>
      <div className="poluente-info">
        <span>Principal Poluente: PM2.5</span>
      </div>
      <div className="footer" style={{ backgroundColor: 'white', padding: '10px', borderRadius: '10px' }}>
        <div className="info">
          <span style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            <img src={Temperatura} width="16px" alt="Temperatura" />{tempo.temperatura}°
          </span>
        </div>
        <div className="info">
          <span style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            <img src={Ar} width="16px" alt="Velocidade do ar" />{(tempo.velocidadeVento * 3.6).toFixed(1)} km/h
          </span>
        </div>
        <div className="info">
          <span style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            <img src={Humidade} width="16px" alt="Humidade" /> {tempo.umidade}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default AQICard;
