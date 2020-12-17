import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BalancePage from '../BalancePage';
import Loading from '../Components/Loading';
import CreateUserPage from '../CreateUserPage';
import ListPage from '../ListPage';
import LoginPage from '../LoginPage';
import RegisterProductPage from '../RegisterProductPage';
import UserPage from '../UserPage';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <ListPage />
                </Route>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/criar-usuario">
                    <CreateUserPage />
                </Route>
                <Route exact path="/registrar-produto">
                    <RegisterProductPage />
                </Route>
                <Route exact path="/saldo">
                    <BalancePage />
                </Route>
                <Route exact path="/usuario">
                    <UserPage />
                </Route>
                <Route exact path="/loading">
                    <Loading />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;