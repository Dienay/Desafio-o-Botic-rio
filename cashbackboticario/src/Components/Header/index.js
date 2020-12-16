import React from 'react';
import Logo from '../../img/logo.png'
import Nav from 'react-bootstrap/Nav';

import { Container } from './styles';

function Header() {
  return (
    <Container>
        <figure>
            <img src={Logo}  alt="Logo Grupo Boticário"/>
        </figure>
        <div>
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/saldo">Saldo</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/registrar-produto">Adicionar</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/criar-usuario">Cadastar</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/login">Entrar</Nav.Link>
          </Nav.Item>
        </div>
    </Container>
  )
}

export default Header;