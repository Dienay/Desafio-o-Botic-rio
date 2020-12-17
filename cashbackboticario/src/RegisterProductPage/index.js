import React, { useContext, useState, useEffect } from 'react';
import Header from '../Components/Header/index';
import { Container, Form } from '../GlobalStyles/GlobalStyle';
import Button from 'react-bootstrap/Button';
import Menu from '../Components/Menu';
import useForm from '../Hooks/useForm';
import ListContext from '../Contexts/ListContext';
import { useHistory } from 'react-router-dom';

function RegisterProductPage() {
  const history = useHistory()
  const listContext = useContext(ListContext)
  const setListContext = useContext(ListContext)
  const {form, onChange} = useForm({cod: "", value: "", date: ""})
  const [date, setDate] = useState("")

  const handleInputChange = (event) => {
    const {name, value} = event.target
    onChange(name, value)
  }

  useEffect (() => {
    const date = new Date(form.date),
     day  = (date.getDate()+1).toString().padStart(2, '0'),
     month  = (date.getMonth()+1).toString().padStart(2, '0'),
     year  = date.getFullYear()
     return setDate(day+"/"+month+"/"+year)
   },[form.date])

  const inputData = () => {
    if(!form.cod || !form.value || !form.date) {
      alert("Todos os campos são obrigatórios")
    }

    const status = ["Aprovado", "Em validação", "Reprovado"]
    const statusCurrent = status[Math.floor(Math.random() * 3)]

    const body = {
      "cod": form.cod,
      "value": form.value,
      "date": date,
      "status": statusCurrent
    }

    let list = listContext.listContext

    list.push(body)

    setListContext.setListContext(list)

    history.push("/")
  }

  return (
    <Container>
      <Header />
      <Form>
        <h2>Registrar compra</h2>
        <fieldset>
          <input
            id="cod"
            value={form.cod}
            onChange={handleInputChange}
            type="text"
            name="cod" 
            required
            placeholder="Código da compra" 
          />
          <input
            id="value"
            value={form.value}
            onChange={handleInputChange}
            type="number"
            name="value" 
            required
            placeholder="Valor"
          />
          <input
            id="date"
            value={form.date}
            onChange={handleInputChange}
            type="date"
            name="date" 
            required
            placeholder="Data da compra"
          />
        </fieldset>
        <Button onClick={inputData} data-testid="testando" variant="secondary" size="lg" block>
          Cadastrar
        </Button>
      </Form>
      <Menu />
    </Container>
  )
}

export default RegisterProductPage;