import React from 'react';
import LoginForm from '../components/LoginForm';
import Layout from '../shared/layout/components/Layout';
import './styles/Login.css';
export default function Login() {
  return (
    <Layout
      classNameHeader="background-header"
      className="main-login"
      footerBackground="background-footer--login "
    >
      <LoginForm />
    </Layout>
  );
}
