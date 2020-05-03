import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import "./styles.css";

import logoImg from "../../assets/logo.svg";

export default function Incident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const history = useHistory();

  const ongId = localStorage.getItem("ongId");

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ongId,
        },
      });

      history.push("/profile");
    } catch (error) {
      alert("Erro ao cadastrar caso, tente novamente.");
    }
  }

  return (
    <div className="newincident-container">
      <div className="content">
        <section>
          <img
            src={logoImg}
            alt="be the hero"
            style={{ marginBottom: "3rem" }}
          />
          <h1>Novo Caso</h1>
          <p>
            Descreva o caso detalhadamente, para que possamos encontrar um herói
            de pet's.
          </p>
          <Link className="link" to="/profile">
            <FiArrowLeft size={16} color="#8c69c1" /> Voltar para o início
          </Link>
        </section>
        <div className="form-container">
          <form onSubmit={handleNewIncident}>
            <input
              placeholder="Título do caso"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              placeholder="Valor em reais"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button className="button" type="submit">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
