/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from 'react';
import Loading from '../Components/Loading';
import Menu from '../Components/Components';
import ListContext from '../Contexts/ListContext';
import { Container, Header, Items, SmallCard } from './styles';
import useCashbackReturned from '../Hooks/useCashbackReturned';
import useConvertToCash from '../Hooks/useConvertToCash';

function ListPage() {
    const listContext = useContext(ListContext)
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        simulateLoading()
    },[])

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

    const simulateLoading = () => {
        setTimeout(
            () => setLoading(false),3000
        )
    }

  return (
    <Container>
        {
            loading === true
        ?
            <Loading />
        :
            <>
            <Header>
                <h2>Minhas compras</h2>
            </Header>
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
                                <h3>{handleCashback(item.value)}% de</h3>
                                <h3>Cashback</h3>
                                <h3>+ R${useConvertToCash(useCashbackReturned(item.value))}</h3>
                            </SmallCard>
                        </li>
                    )
                })}
            </Items>
            <Menu />
            </>
        }
    </Container>
  )
}

export default ListPage;