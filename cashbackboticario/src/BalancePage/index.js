/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from 'react';
import Header from '../Components/Header/index';
import { Container } from '../GlobalStyles/GlobalStyle';
import { Balance} from './styles';
import Menu from '../Components/Menu';
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
      <Header />
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