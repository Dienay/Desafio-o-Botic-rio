import React from 'react';
import { ContainerLoading } from './styles';
import Logo from '../../img/logo-loading-page.png'

function Loading() {
  return (
    <ContainerLoading>
      <img src={Logo} alt="Logo Grupo Boticário"/>
    </ContainerLoading>
  )
}

export default Loading;