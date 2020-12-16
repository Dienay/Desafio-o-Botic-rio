import React from 'react';
import Header from '../Components/Header/index';
import { Container, Form } from '../GlobalStyles/GlobalStyle';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import useForm from '../Hooks/useForm';
import { useHistory } from 'react-router-dom';

function CreateUserPage() {
  const history = useHistory()

  const {form, onChange} = useForm({name: "", cpf: "", email: "", password: ""})

  const handleInputChange = (event) => {
    const {name, value} = event.target
    onChange(name, value)
  }

  const createUser = () => {
    if(!form.name || !form.cpf || !form.email || !form.password) {
      return alert("Todos os campos são obrigatórios")
    }

    if(form.email.indexOf("@") === -1){
        return alert("Email inválido")
    }

    if(form.password.length < 6){
      return alert("A senha deve ter no mínimo 6 characters")
    }

    const body = {
      "name": form.name,
      "cpf": form.cpf,
      "email": form.email,
      "password": form.password
    }

    alert("Usuário criado com sucesso!")
    history.replace("/login")
  }

  return (
    <Container>
      <Header />
        <Form>
          <h2>Cadastrar usuário</h2>
          <fieldset>
            <input
              id="name"
              value={form.name}
              onChange={handleInputChange}
              type="text"
              name="name" 
              required
              placeholder="Nome"
            />
            <input 
              id="cpf"
              value={form.cpf}
              onChange={handleInputChange}
              type="Number"
              name="cpf" 
              required
              placeholder="CPF"
            />
            <input
              id="email"
              value={form.email}
              onChange={handleInputChange}
              type="email"
              name="email" 
              required
              placeholder="E-mail"
            />
            <input
              id="password"
              value={form.password}
              onChange={handleInputChange}
              type="password"
              name="password" 
              required
              placeholder="Senha"
            />
          </fieldset>
          <Button onClick={createUser} variant="secondary" size="lg" block>
            Cadastrar
          </Button>
          <Nav.Item>
            <Nav.Link href="/Login">Login</Nav.Link>
          </Nav.Item>
        </Form>
    </Container>
  )
}

export default CreateUserPage;