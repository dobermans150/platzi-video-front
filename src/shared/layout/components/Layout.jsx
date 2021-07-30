import React from 'react';
import Header from './Header';

export default function Layout(props) {
  return (
    <section className={props.className}>
      <Header isLoggedIn={props.isLoggedIn} />
      {props.children}
    </section>
  );
}
