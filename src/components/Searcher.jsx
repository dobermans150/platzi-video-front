import React from 'react';
import './styles/Searcher.css';

export default function Searcher() {
  return (
    <section className="main">
      <h2 className="main__title">¿Que quieres ver hoy?</h2>
      <input className="input" type="text" placeholder="Buscar..." />
    </section>
  );
}
