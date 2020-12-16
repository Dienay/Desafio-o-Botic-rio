import React from 'react';
import { Container, Form } from '../GlobalStyles/GlobalStyle';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { useHistory } from 'react-router-dom';
import useForm from '../Hooks/useForm';
import Header from '../Components/Header/index';
import Menu from '../Components/Menu';

function LoginPage() {
  const history = useHistory()

  const {form, onChange} = useForm({email: "", password: ""})

  const handleInputChange = (event) => {
    const {name, value} = event.target
    onChange(name, value)
  }

  const login = () => {
    if(!form.email || !form.password) {
      return alert("Todos os campos são obrigatórios")
    }

    if(form.email.indexOf("@") === -1){
        return alert("Email inválido")
    }

    if(form.password.length < 6){
      return alert("A senha deve ter no mínimo 6 characters")
    }

    const body = {
      "email": form.email,
      "password": form.password
    }

    history.replace("/")
  }
  return (
    <Container>
      <Header />
      <Form>
        <h2>Login</h2>
        <fieldset>
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
        <Button onClick={login} variant="secondary" size="lg" block>
          Entrar
        </Button>
        <Nav.Item>
          <Nav.Link href="/criar-usuario">Cadastar usuário</Nav.Link>
        </Nav.Item>
      </Form>
      <Menu />
    </Container>
  )
}

export default LoginPage;