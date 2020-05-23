import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Main from './pages/Home/index.js';
import Autoproducao from './pages/Autoproducao/index';
import MercadoLivre from './pages/MercadoLivre/index';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Autoproducao path="/autoproducao" component={Autoproducao}/>
        <MercadoLivre path="/mercado-livre" component={MercadoLivre}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
