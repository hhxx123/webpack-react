import React from "react";
import ReactDOM from "react-dom";
import {Router, Switch, Route, Link, HashRouter} from "react-router-dom";
import Hooks from "./component/Hooks";
import {createBrowserHistory} from 'history'
import CommonLayout from "./component/common/Layout";

let history = createBrowserHistory()
ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path='/' component={(props) => (
        <CommonLayout>
          <Hooks/>
        </CommonLayout>
      )} />
    </Switch>
  </HashRouter>, document.getElementById('root'));










