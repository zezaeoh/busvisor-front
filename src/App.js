import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/shards-dashboards.1.1.0.min.css";

import { Store, Constants } from "./flux";

class App extends React.Component{
  state = {
    login: false
  };

  componentWillMount() {
    Store.addListener(Constants.CHANGE_LOGIN_STATUS, this.onChange);
  }

  componentWillUnmount() {
    Store.removeListener(Constants.CHANGE_LOGIN_STATUS, this.onChange);
  }

  onChange = () => {
    this.setState({
      ...this.state,
      login: Store.getLoginState(),
    });
  }

  render() {
    return (
      <Router basename={process.env.REACT_APP_BASENAME || ""}>
        <div>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={() => {
                  return (
                    <route.layout login={this.state.login}>
                      <route.component login={this.state.login}/>
                    </route.layout>
                  );
                }}
              />
            );
          })}
        </div>
      </Router>
    );
  }
}

export default App;