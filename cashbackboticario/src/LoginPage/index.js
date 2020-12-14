import React from 'react';
import { Container, Form, Header } from './styles';
import Logo from '../img/logo.png'
import Button from 'react-bootstrap/Button';

function LoginPage() {
  return (
    <Container>
      <Header>
        <figure>
          <img src={Logo} />
        </figure>
      </Header>
      <Form>
        <h2>Login</h2>
        <fieldset>
          <input placeholder="E-mail" />
          <input placeholder="Senha" />
        </fieldset>
        <Button variant="secondary" size="lg" block>
          Entrar
        </Button>
      </Form>
    </Container>
  )
}

export default LoginPage;