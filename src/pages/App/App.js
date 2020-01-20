import React, { Component } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import userService from "../../utils/userService";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import HomePage from "../HomePage/HomePage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignuporLogin = () => {
    this.setState({ user: userService.getUser() });
  };
  render() {
    return (
      <div>
        <Link exact to="/">
          Home
        </Link>
        <Link exact to="/signup">
          Sign Up
        </Link>
        <Link exact to="/login">
          Log In
        </Link>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignuporLogin={this.handleSignuporLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignuporLogin={this.handleSignuporLogin}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
