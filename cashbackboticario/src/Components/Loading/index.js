import React from 'react';
import { ContainerLoading } from './styles';
import Logo from '../../img/logo-loading-page.png'

function Loading() {
  return (
    <ContainerLoading>
      <figure>
        <img src={Logo} alt="Logo Grupo Boticário"/>
      </figure>
    </ContainerLoading>
  )
}

export default Loading;