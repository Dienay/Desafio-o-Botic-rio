import React from 'react';
import { Container, Form, Header } from './styles';
import Logo from '../img/logo.png'
import Button from 'react-bootstrap/Button';

function CreateUserPage() {
  return (
    <Container>
      <Header>
        <figure>
          <img src={Logo} />
        </figure>
      </Header>
      <Form>
        <h2>Cadastrar usuário</h2>
        <fieldset>
          <input placeholder="Nome" />
          <input placeholder="CPF" />
          <input placeholder="E-mail" />
          <input placeholder="Senha" />
        </fieldset>
        <Button variant="secondary" size="lg" block>
          Cadastrar
        </Button>
      </Form>
    </Container>
  )
}

export default CreateUserPage;