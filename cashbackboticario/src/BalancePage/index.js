/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from 'react';
import { Container, Balance, Header } from './styles';
import Logo from '../img/logo.png'
import Menu from '../Components/Components';
import ListContext from '../Contexts/ListContext';
import useCashbackReturned from '../Hooks/useCashbackReturned';
import useConvertToCash from '../Hooks/useConvertToCash';

function BalancePage() {
  const listContext = useContext(ListContext)
  const [sum, setSum] = useState(0)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sumCashback = () => {
    let result = 0

    // eslint-disable-next-line array-callback-return
    listContext.listContext.map(item => {
      if(item.status === "Aprovado") {
        const cashback = useCashbackReturned(item.value)
        return setSum(result += cashback)
      }


    })
  }

  useEffect(()=> {
    sumCashback()
  },[sum, sumCashback])
   
  return (
    <Container>
      <Header>
        <figure>
          <img src={Logo} alt="Logo Grupo Boticário"/>
        </figure>
      </Header>
      <Balance>
        <h1>Cashback</h1>
        <h2>Saldo:</h2>
        <h2>R${useConvertToCash(sum)}</h2>
      </Balance>
      <Menu />
    </Container>
  )
}

export default BalancePage;