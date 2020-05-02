import React from "react";
import "./styles.css";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";

import { FiLogIn } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";
import animationData from "../../assets/hero.json";

function logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="be the hero" />
        <form>
          <h1>Login</h1>
          <input type="text" placeholder="Sua Id" />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="link" to="/register">
            <FiLogIn size={16} color="#8c69c1" /> Não tenho cadastro
          </Link>
        </form>
      </section>
      <div className="lottie-container">
        <div className="lottie-json" style={{ marginTop: "4rem" }}>
          <Lottie
            width={400}
            height={400}
            options={{
              loop: true,
              autoplay: true,
              animationData,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
          ></Lottie>
        </div>
      </div>
    </div>
  );
}

export default logon;
