import React from 'react';
import {BrowserRouter,Route, Switch, Redirect } from 'react-router-dom';
import Main from './pages/Home/index.js';
import Autoproducao from './pages/Autoproducao/index';
import MercadoLivre from './pages/MercadoLivre/index';
import Register from './pages/Register/index';
import Simulacao from './pages/Simulacao/index';
import Pesquisa from './pages/Pesquisa/index';

import Client from './pages/Client/index';
import Perfil from './pages/Perfil/index';

import { isAuthenticated } from './Services/auth';

import './App.css';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/autoproducao" component={Autoproducao} />
      <Route path="/mercado-livre" component={MercadoLivre} />
      <Route path="/register" component={Register} />
      <Route path="/pesquisa-mercado-livre" component={Pesquisa} />
      <PrivateRoute path="/client" component={Client} />
      <PrivateRoute path="/simulacao" component={Simulacao} />
      <PrivateRoute path="/perfil" component={Perfil} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
