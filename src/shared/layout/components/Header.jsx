import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Header.css';
import platziVideoLogo from '../../../assets/images/logo-platzi-video-BW2.png';

import userIcon from '../../../assets/images/user-icon.png';

export default function Header() {
  return (
    <header className="header">
      <img
        className="header__img"
        src={platziVideoLogo}
        alt="logo Platzi Video"
      />

      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={userIcon} alt="user" />
          <p>perfil</p>
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
    </header>
  );
}
