import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
import logoImg from "../../assets/logo.svg";

import { FiPower } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";

import api from "../../services/api";

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();
  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");

  useEffect(() => {
    api
      .get("profile", {
        headers: {
          Authorization: ongId,
        },
      })
      .then((response) => setIncidents(response.data));
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (error) {
      alert(`Erro ao deletar, tente novamente.`);
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push("/");
  }
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="be the hero" />
        <span>Bem-vinda, {ongName}</span>
        <Link className="button" to="/new-incident">
          Cadastrar novo caso
        </Link>
        <button onClick={handleLogout} type="button">
          <FiPower />
        </button>
      </header>
      <div className="item-content">
        <div style={{ marginTop: "7rem" }} className="card">
          <h1>Casos cadastrados</h1>
          <ul>
            {incidents.map((incident) => (
              <li key={incident.id}>
                <strong>CASO:</strong>
                <p>{incident.title}</p>

                <strong>DESCRIÇÃO:</strong>
                <p>{incident.description}</p>

                <strong>VALOR:</strong>
                <p>
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(incident.value)}
                </p>

                <button
                  onClick={() => handleDeleteIncident(incident.id)}
                  type="button"
                >
                  <FiTrash2 />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
