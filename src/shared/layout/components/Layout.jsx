import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Layout(props) {
  return (
    <section className={props.className}>
      <Header
        classNameHeader={props.classNameHeader}
        isLoggedIn={props.isLoggedIn}
      />
      {props.children}
      <Footer />
    </section>
  );
}
