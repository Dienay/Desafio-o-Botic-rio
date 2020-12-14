import React from 'react';
import { Container, Form, Header } from './styles';
import Logo from '../img/logo.png'
import Button from 'react-bootstrap/Button';
import Menu from '../Componets/Menu';

function RegisterProductPage() {
  return (
    <Container>
      <Header>
        <figure>
          <img src={Logo} />
        </figure>
      </Header>
      <Form>
        <h2>Cadastrar compra</h2>
        <fieldset>
          <input placeholder="Código da compra" />
          <input placeholder="Valor" />
          <input placeholder="Data da compra" />
        </fieldset>
        <Button variant="secondary" size="lg" block>
          Cadastrar
        </Button>
      </Form>
      <Menu />
    </Container>
  )
}

export default RegisterProductPage;