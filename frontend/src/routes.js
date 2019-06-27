import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./auth";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import PageNotFound from "./components/PageNotFound/PageNotFound";

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
            <Route exact path="/" component={Login}/>
            <PrivateRoute path="/dashboard" component={Dashboard}/>
            <Route path="*" component={PageNotFound}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;