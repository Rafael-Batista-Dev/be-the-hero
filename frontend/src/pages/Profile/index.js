import React from "react";
import "./styles.css";
import logoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";

import { FiPower } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";

function profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="be the hero" />
        <span>Bem vindo, ao centro de zoonoses cariri</span>
        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button">
          <FiPower />
        </button>
      </header>
      <div className="item-content">
        <div style={{ marginTop: "7rem" }} className="card">
          <h1>Casos cadastrados</h1>
          <ul>
            <li>
              <strong>CASOS:</strong>
              <p>Caso teste</p>

              <strong>DESCRIÇÃO:</strong>
              <p>Descrição do Caso teste</p>

              <strong>VALOR:</strong>
              <p>R$ 220,00</p>
              <button type="button">
                <FiTrash2 />
              </button>
            </li>

            <li>
              <strong>CASOS:</strong>
              <p>Caso teste</p>

              <strong>DESCRIÇÃO:</strong>
              <p>Descrição do Caso teste</p>

              <strong>VALOR:</strong>
              <p>R$ 220,00</p>
              <button type="button">
                <FiTrash2 />
              </button>
            </li>

            <li>
              <strong>CASOS:</strong>
              <p>Caso teste</p>

              <strong>DESCRIÇÃO:</strong>
              <p>Descrição do Caso teste</p>

              <strong>VALOR:</strong>
              <p>R$ 220,00</p>
              <button type="button">
                <FiTrash2 />
              </button>
            </li>

            <li>
              <strong>CASOS:</strong>
              <p>Caso teste</p>

              <strong>DESCRIÇÃO:</strong>
              <p>Descrição do Caso teste</p>

              <strong>VALOR:</strong>
              <p>R$ 220,00</p>
              <button type="button">
                <FiTrash2 />
              </button>
            </li>
            <li>
              <strong>CASOS:</strong>
              <p>Caso teste</p>

              <strong>DESCRIÇÃO:</strong>
              <p>Descrição do Caso teste</p>

              <strong>VALOR:</strong>
              <p>R$ 220,00</p>
              <button type="button">
                <FiTrash2 />
              </button>
            </li>

            <li>
              <strong>CASOS:</strong>
              <p>Caso teste</p>

              <strong>DESCRIÇÃO:</strong>
              <p>Descrição do Caso teste</p>

              <strong>VALOR:</strong>
              <p>R$ 220,00</p>
              <button type="button">
                <FiTrash2 />
              </button>
            </li>

            <li>
              <strong>CASOS:</strong>
              <p>Caso teste</p>

              <strong>DESCRIÇÃO:</strong>
              <p>Descrição do Caso teste</p>

              <strong>VALOR:</strong>
              <p>R$ 220,00</p>
              <button type="button">
                <FiTrash2 />
              </button>
            </li>

            <li>
              <strong>CASOS:</strong>
              <p>Caso teste</p>

              <strong>DESCRIÇÃO:</strong>
              <p>Descrição do Caso teste</p>

              <strong>VALOR:</strong>
              <p>R$ 220,00</p>
              <button type="button">
                <FiTrash2 />
              </button>
            </li>

            <li>
              <strong>CASOS:</strong>
              <p>Caso teste</p>

              <strong>DESCRIÇÃO:</strong>
              <p>Descrição do Caso teste</p>

              <strong>VALOR:</strong>
              <p>R$ 220,00</p>
              <button type="button">
                <FiTrash2 />
              </button>
            </li>
            <li>
              <strong>CASOS:</strong>
              <p>Caso teste</p>

              <strong>DESCRIÇÃO:</strong>
              <p>Descrição do Caso teste</p>

              <strong>VALOR:</strong>
              <p>R$ 220,00</p>
              <button type="button">
                <FiTrash2 />
              </button>
            </li>

            <li>
              <strong>CASOS:</strong>
              <p>Caso teste</p>

              <strong>DESCRIÇÃO:</strong>
              <p>Descrição do Caso teste</p>

              <strong>VALOR:</strong>
              <p>R$ 220,00</p>
              <button type="button">
                <FiTrash2 />
              </button>
            </li>

            <li>
              <strong>CASOS:</strong>
              <p>Caso teste</p>

              <strong>DESCRIÇÃO:</strong>
              <p>Descrição do Caso teste</p>

              <strong>VALOR:</strong>
              <p>R$ 220,00</p>
              <button type="button">
                <FiTrash2 />
              </button>
            </li>

            <li>
              <strong>CASOS:</strong>
              <p>Caso teste</p>

              <strong>DESCRIÇÃO:</strong>
              <p>Descrição do Caso teste</p>

              <strong>VALOR:</strong>
              <p>R$ 220,00</p>
              <button type="button">
                <FiTrash2 />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default profile;
