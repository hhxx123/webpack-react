import React from "react";
import ReactDOM from "react-dom";
import {Router, Switch, Route, Link, HashRouter} from "react-router-dom";
import App from "./App";
import {createBrowserHistory} from 'history'

let history = createBrowserHistory()
ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path='/' component={(props) => (
        <App/>
      )} />
    </Switch>
  </HashRouter>, document.getElementById('root'));










