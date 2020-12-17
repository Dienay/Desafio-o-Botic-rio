import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from './App';
import LoginPage from './LoginPage';

describe('Boticário testes', () => {
  test('renders app', async () => {
    const { getByText } = render(<App />);
    const title = getByText(/Minhas compras/)
    const compra = getByText(/2343542fw/)
    expect(title).toBeInTheDocument()
    expect(compra).toBeInTheDocument()
  });

  test('Test login', async () => {
    const utils = render(<LoginPage />);

    const email = utils.getByPlaceholderText(/E-mail/)
    expect(email).toBeInTheDocument()
    fireEvent.change(email, {
      target: {
        value: "dienay@email.com"
      }
    })

    const password = utils.getByPlaceholderText(/Senha/)
    expect(password).toBeInTheDocument()
    fireEvent.change(password, {
      target: {
        value: 986861962
      }
    })

    const enterButton = utils.getByText(/Entre/i)
    fireEvent.click(enterButton)

  })

  

  test('Check balance', async () => {
    const { getByAltText, getByText } = render(<App />);
    const buttonSaldo = getByAltText(/Saldo/)
    expect(buttonSaldo).toBeInTheDocument()
    fireEvent.click(buttonSaldo)

    const title = getByText(/Cashback/)
    expect(title).toBeInTheDocument()
    
    const saldo = getByText(/Saldo:/)
    expect(saldo).toBeInTheDocument()
  })

  test('Add new product', async () => {
    const { getByPlaceholderText, getByAltText, getByText } = render(<App/>);
    const buttonAdicionar = getByAltText(/Adicionar/)
    fireEvent.click(buttonAdicionar)

    const cod = getByPlaceholderText(/Código da compra/)
    expect(cod).toBeInTheDocument()
    fireEvent.change(cod, {
      target: {
        value: "fy494yfa87"
      }
    })

    const value = getByPlaceholderText(/Valor/)
    expect(value).toBeInTheDocument()
    fireEvent.change(value, {
      target: {
        value: 300
      }
    })

    const date = getByPlaceholderText(/Data da compra/)
    expect(date).toBeInTheDocument()
    fireEvent.change(date, {
      target: {
        value: "2020-11-09"
      }
    })

    const addButton = getByText(/Cadastrar/i)
    fireEvent.click(addButton)

    const productAded = getByText(/fy494yfa87/)
    expect(productAded).toBeInTheDocument()
  })


})