import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "components/Auth/PrivateRoute";


// core components
import Admin from "layouts/Admin.js";

import Login from "views/Login/Login";
import Register from "views/Register/Register";

import "assets/css/material-dashboard-react.css?v=1.10.0";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <PrivateRoute path="/admin" component={Admin} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
