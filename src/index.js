import React from "react";
import ReactDOM from "react-dom";
import {Router, Switch, Route, Link, HashRouter} from "react-router-dom";
import Index from "./component/Index";
import {createBrowserHistory} from 'history'
import CommonLayout from "./component/common/Layout";

let history = createBrowserHistory()
ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path='/' component={(props) => (
        <CommonLayout>
          <Index/>
        </CommonLayout>
      )} />
    </Switch>
  </HashRouter>, document.getElementById('root'));










