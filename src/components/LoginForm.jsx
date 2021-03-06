import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles/LoginForm.css';
import googleIcon from '../assets/images/icons8-google-plus-50.png';
import twitterIcon from '../assets/images/icons8-twitter-50.png';

export default function LoginForm() {
  useEffect(() => {
    const elemnt = document.getElementById('contraseña');

    console.log(elemnt.type);
  });

  return (
    <section className="login">
      <section className="login__container">
        <h2 tabIndex="0">Inicia Sesion</h2>

        <form className="login__container--form">
          <input
            aria-label="correo"
            className="login__container-input"
            type="text"
            placeholder="Correo"
          />
          <input
            aria-label="contraseña"
            className="login__container-input"
            type="password"
            placeholder="contraseña"
            id="contraseña"
          />
          <button className="button">Iniciar sesion</button>
          <div className="login__container--remember-me">
            <label htmlFor="">
              <input type="checkbox" className="" id="cbox1" value="checkbox" />
              Recuerdame
            </label>
            <Link to="/">Olvide mi contraseña</Link>
          </div>
        </form>

        <section className="login__container--social-media">
          <div>
            <img src={googleIcon} alt="Google" /> Inicia sesion con Google
          </div>
          <div>
            <img src={twitterIcon} alt="twitter" /> Inicia sesion con Twitter
          </div>
        </section>

        <p className="login__container--register">
          No tienes ninguna cuenta <Link to="/">Registrate</Link>
        </p>
      </section>
    </section>
  );
}
