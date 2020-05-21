import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Main from './pages/Home/index.js';
import Simulation from './pages/Simulation/index';
import Autoproducao from './pages/Autoproducao/index';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/simulacao" component={Simulation}/>
        <Autoproducao path="/autoproducao" component={Autoproducao}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
