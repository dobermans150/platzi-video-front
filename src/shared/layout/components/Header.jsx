import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Header.css';
import platziVideoLogo from '../../../assets/images/logo-platzi-video-BW2.png';

import userIcon from '../../../assets/images/user-icon.png';

export default function Header(props) {
  return (
    <>
      <header className={`header ${props.classNameHeader}`}>
        <img
          tabIndex="0"
          className="header__img"
          src={platziVideoLogo}
          alt="logo Platzi Video"
        />

        {props.isLoggedIn && (
          <div className="header__menu">
            <div className="header__menu--profile">
              <img src={userIcon} alt="user" />
              <p>Perfil</p>
            </div>
            <ul>
              <li>
                <Link to="/">Cuenta</Link>
              </li>
              <li>
                <Link to="/">Cerrar Sesion</Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      {props.children}
    </>
  );
}
