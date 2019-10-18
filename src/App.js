import React, { Component, Fragment } from "react";
import "./bootstrap/css/bootstrap.css";
import Page from "./component/Page";
import "./bootstrap/js/bootstrap.js.map";
import "./App.css";
import Home from "./component/Home";
import About from "./component/About";
import Login from "./component/Login";
import { Route, BrowserRouter, Swtich } from "react-router-dom";

class App extends Component {
  renderRoutes = () => {
    let routes = [
      {
        path: "/home",
        component: Home
      },
      {
        path: "/login",
        component: Login
      },
      {
        path: "/about",
        component: About
      }
    ];

    return routes.map(route => {
      return <Route path={route.path} component={route.component} />;
    });
  };

  render() {
    return (
      <Fragment>
        <BrowserRouter>
          {this.renderRoutes()}
          <Page />
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
