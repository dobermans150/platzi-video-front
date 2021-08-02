import React from 'react';
import Layout from '../shared/layout/components/Layout';
import './styles/NotFound.css';

export default function NotFound() {
  return (
    <Layout
      className="not-found"
      classNameHeader="background-header--not-found"
      footerBackground="background-footer--not-found"
    >
      <section className="main--not-found">
        <h2 className="animated wobble">404</h2>
        <p>Pagina no encontrada</p>
      </section>
    </Layout>
  );
}
