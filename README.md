# Desafio-o-Boticário

Seja bem vindo(a) ao Cashback do Boticário.
Insira as informações da sua compra e veja o quanto de cashback você pode ganhar.

Você pode ver o projeto funcionando neste link [Cashback o Boticário](http://cashback-boticario.surge.sh)

## Escopo do projeto
Criar um projeto que simula um aplicação de cashback, e que a pessoa recebe uma porcentagem específica dependendo do valor pago pela compra.

<br>

## Principais tecnologias/ferramentas utilizadas

1. React
2. Estilização Avançada com CSS
3. Bootstrap
4. Aplicações com múltiplas rotas utilizando React Router
5. Formulários com Validação(com validação básica)
6. Teste unitário de lógica e de componentes com react-testing-library e Jest
7. Responsividade e adaptação de aplicação web para front.

<br>

### O que Tem no projeto
- Tela de [Loading](http://cashback-boticario.surge.sh/loading)
- Tela de [criação de usuário](http://cashback-boticario.surge.sh/criar-usuario)
- Tela de [Login](http://cashback-boticario.surge.sh/login)
- Tela com [lista de produtos](http://cashback-boticario.surge.sh/) com seus status
- Tela de [saldo](http://cashback-boticario.surge.sh/saldo) onde você verifica o quanto já recebeu de cashback(Só é contabilizado cashback com status de "Aprovado")
- Tela de cadastro de novos produtos[cadastro de novos produtos](http://cashback-boticario.surge.sh/registrar-produto)(o status do cashback é gerado automaticamente de forma aleatória com as opções de "Aprovado", "Em Análise" e "Reprovado".
- E na versão mobile temos uma tela extra para navegar entre as telas de cadastro e login

<br>

## Como rodar a aplicação

No terminal, clone o projeto:
```
git clone 
```

Entre na pasta do projeto:
```
cd Labenu-labefood/app
```

Instale as dependências:
```
npm install
```

Execute a aplicação:
```
npm start 
```
<br>

Ao executar a aplicação, se acrescentar ao final da URL ```/loading``` você verá a simulação da inicialização da aplicação.

## Versão Mobile
Na versão mobile o menu fica na parte inferior da tela e tem uma tela a mais para direcionar para as telas de login e cadastro de usuário
![mobile](https://user-images.githubusercontent.com/2151948/102435876-24647480-3ff6-11eb-9194-cdb7da4594bd.png)

## Versão Desktop
![desktop](https://user-images.githubusercontent.com/2151948/102435882-27f7fb80-3ff6-11eb-9d3a-316ac8a94fde.png)
