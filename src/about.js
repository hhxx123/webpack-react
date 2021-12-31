import React from "react";
import ReactDOM from "react-dom";
import {Router, Switch, Route, Link, HashRouter} from "react-router-dom";
import Index from "./component/About/index.js"
import CommonLayout from "./component/common/Layout";

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










