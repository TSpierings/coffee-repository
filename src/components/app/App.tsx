import './App.scss';
import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Home } from '../home/home';
import { About } from '../about/about';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/about">
        <About />
      </Route>

      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default App;
