import React from "react";
import ReactDOM from "react-dom";
import {Router, Switch, Route, Link, HashRouter} from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path='/' component={(props) => (
        <div>About</div>
      )} />
    </Switch>
  </HashRouter>, document.getElementById('root'));










