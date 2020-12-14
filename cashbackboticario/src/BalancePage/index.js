import React, { useEffect, useState } from 'react';
import { Container, Balance, Header } from './styles';
import Logo from '../img/logo.png'
import Menu from '../Componets/Menu';
import * as data from '../data.json'

function BalancePage() {
  const [list, setList] = useState([])
  const [sum, setSum] = useState(0)

  const convertToCash = (value) => {
    let result = parseFloat(value).toFixed(2).replace('.',',')
    return result
  }

  const cashbackReturned = (value) => {
    let result = 0
    if(value <= 1000) {
        result = value * 0.1
        return result
    } else if(value > 1000 && value < 1500) {
        result = value * 0.15
        return result
    } else {
        result = value * 0.2
        return result
    }
  }

  const sumCashback = () => {
    let result = 0

    list.map(item => {
      if(item.status === "Aprovado") {
        const cashback = cashbackReturned(item.value)
        return setSum(result += cashback)
      }


    })
  }

  useEffect(()=> {
    setList(data.default)
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
        <h2>R${convertToCash(sum)}</h2>
      </Balance>
      <Menu />
    </Container>
  )
}

export default BalancePage;