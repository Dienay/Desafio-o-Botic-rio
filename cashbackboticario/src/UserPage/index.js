/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from 'react';
import Header from '../Components/Header/index';
import { Container } from '../GlobalStyles/GlobalStyle';
import { User } from './styles';
import Menu from '../Components/Menu';
import { useHistory } from 'react-router-dom';

function UserPage() {
  const history = useHistory()

  const onClickMenu = (tela) => {
    history.push(tela)
  }

  return (
    <Container>
      <Header />
        <User>
          <div onClick={() => onClickMenu("/criar-usuario")}>
            <h1>Cadastrar</h1>
          </div>
          <div onClick={() => onClickMenu("/login")}>
            <h1>Entrar</h1>
          </div>
        </User>
      <Menu />
    </Container>
  )
}

export default UserPage;