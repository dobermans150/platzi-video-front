import React from 'react';

import './styles/Header.css';
import platziVideoLogo from '../../../assets/images/logo-platzi-video-BW2.png';

export default function Header() {
  return (
    <header>
      <img src={platziVideoLogo} alt="logo Platzi Video" />
    </header>
  );
}
