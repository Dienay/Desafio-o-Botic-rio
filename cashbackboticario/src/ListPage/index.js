import React, { useEffect, useState } from 'react';
import Loading from '../Componets/Loading';
import Menu from '../Componets/Menu';
import * as data from '../data.json'
import { Container, Header, Items, SmallCard } from './styles';

function ListPage() {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        getList()
        simulateLoading()
    },[])

    const getList = async () => {
        try {
            setList(data.default)
        } catch (error) {
            console.log(error, "Erro")
        }
    }

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

    const convertToCash = (value) => {
        let result = parseFloat(value).toFixed(2).replace('.',',')
        return result
    }

    const simulateLoading = () => {
        setTimeout(
            () => setLoading(false),3000
        )
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
                {list.map((item) => {
                    return (
                        <li>
                            <div>
                                <p>Código da compra: {item.cod}</p>
                                <p>Valor total: R$ {convertToCash(item.value)}</p>
                                <p>Data: {item.date}</p>
                                <p>status: {item.status}</p>
                            </div>
                            <SmallCard>
                                <h3>{handleCashback(item.value)}% de</h3>
                                <h3>Cashback</h3>
                                <h3>+ R${convertToCash(cashbackReturned(item.value))}</h3>
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