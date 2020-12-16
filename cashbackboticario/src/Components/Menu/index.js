import React from 'react';
import { useHistory } from 'react-router-dom';
import { ContainerMenu } from './styles';
import Home from '../../img/home.svg'
import Dollar from '../../img/dollar.svg'
import Plus from '../../img/plus.svg'
import User from '../../img/user.svg'

function Menu() {
  const history = useHistory()

  const onClickMenu = (tela) => {
    history.push(tela)
  }
  
  return (
    <ContainerMenu>
      <div onClick={() => onClickMenu("/")}>
        <img src={Home} alt="Home" />
      </div>
      <div onClick={() => onClickMenu("/saldo")}>
        <img src={Dollar} alt="Saldo" />
      </div>
      <div onClick={() => onClickMenu("/registrar-produto")}>
        <img src={Plus} alt="Adicionar compra" />
      </div>
      <div onClick={() => onClickMenu("/usuario")}>
        <img src={User} alt="Usuário" />
      </div>
    </ContainerMenu>
  )
}

export default Menu;