import React from 'react';
import Logo from '../../img/logo.png'

import { Container } from './styles';

function Header() {
  return (
    <Container>
        <figure>
            <img src={Logo}  alt="Logo Grupo Boticário"/>
        </figure>
    </Container>
  )
}

export default Header;