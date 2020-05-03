import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";
import "./styles.css";

import logoImg from "../../assets/logo.svg";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    //console.log(data);

    try {
      const response = await api.post("ongs", data);
      alert(`Sua ID: ${response.data.id}`);
      history.push("/");
    } catch (err) {
      alert("Erro cadastro");
    }
  }

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
          <form onSubmit={handleRegister}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome da ONG"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
            />
            <input
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="Whatsapp"
            />
            <div className="input-group">
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Cidade"
              />
              <input placeholder="UF" style={{ width: 80 }} />
            </div>
            <button
              value={uf}
              onChange={(e) => setUf(e.target.value)}
              className="button"
              type="submit"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
