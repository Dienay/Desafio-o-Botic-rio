/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from 'react';
import Loading from '../Components/Loading';
import Menu from '../Components/Menu';
import ListContext from '../Contexts/ListContext';
import { List, Title, Items, SmallCard } from './styles';
import Header from '../Components/Header/index';
import { Container } from '../GlobalStyles/GlobalStyle';
import useCashbackReturned from '../Hooks/useCashbackReturned';
import useConvertToCash from '../Hooks/useConvertToCash';

function ListPage() {
    const listContext = useContext(ListContext)

    const handleCashback = (value) => {
        let percentageCashback = 10
        if(value <= 1000) {
            return percentageCashback
        } else if(value > 1000 && value < 1500) {
            percentageCashback = 15
            return percentageCashback
        } else {
            percentageCashback = 20
            return percentageCashback
        }
    }


  return (
    <Container>
        <Header />
        <List>
            <Title>
                <h2>Minhas compras</h2>
            </Title>
            <Items>
                {listContext.listContext.map((item) => {
                    return (
                        <li key={item.cod}>
                            <div>
                                <p>Código da compra: {item.cod}</p>
                                <p>Valor total: R$ {useConvertToCash(item.value)}</p>
                                <p>Data: {item.date}</p>
                                <p>status: {item.status}</p>
                            </div>
                            <SmallCard>
                                <div>
                                    <h3>{handleCashback(item.value)}% de</h3>
                                    <h3>Cashback</h3>
                                </div>
                                <h3>+ R${useConvertToCash(useCashbackReturned(item.value))}</h3>
                            </SmallCard>
                        </li>
                    )
                })}
            </Items>
        </List>
            <Menu />
    </Container>
  )
}

export default ListPage;