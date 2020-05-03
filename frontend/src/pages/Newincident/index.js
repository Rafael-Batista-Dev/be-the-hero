import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";

import { FiPower } from "react-icons/fi";

function incident() {
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
          <form>
            <input placeholder="Título do caso" />
            <textarea placeholder="Descrição" />
            <input placeholder="Valor em reais" />
            <button className="button" type="submit">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default incident;
