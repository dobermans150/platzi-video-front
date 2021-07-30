import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <Link to="/"> Términos de uso </Link>
      <Link to="/"> Declaracion de privacidad </Link>
      <Link to="/"> Centro de ayuda </Link>
    </footer>
  );
}
