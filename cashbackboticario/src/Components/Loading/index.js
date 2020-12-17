import React from 'react';
import { ContainerLoading } from './styles';
import Logo from '../../img/logo-loading-page.png'
import { useHistory } from 'react-router-dom';

function Loading() {
  const history = useHistory()
  
  setTimeout(() => history.push("/"),3000)
    
  return (
    <ContainerLoading>
      <figure>
        <img src={Logo} alt="Logo Grupo Boticário"/>
      </figure>
    </ContainerLoading>
  )
}

export default Loading;