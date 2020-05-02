import React from "react";
import "./styles.css";
import logoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

function register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img
            src={logoImg}
            alt="be the hero"
            style={{ marginBottom: "3rem" }}
          />
          <h1>Cadastro</h1>
          <p>
            Faça sua parate! Cadastre-se para que pessoas possam colabore com a
            ONG.
          </p>
          <Link className="link" to="/">
            <FiArrowLeft size={16} color="#8c69c1" /> Entrar na conta
          </Link>
        </section>
        <div className="form-container">
          <form>
            <input type="text" placeholder="Nome da ONG" />
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Whatsapp" />
            <div className="input-group">
              <input placeholder="Cidade" />
              <input placeholder="UF" style={{ width: 80 }} />
            </div>
            <button className="button" type="submit">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default register;
