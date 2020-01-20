import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import About from "../About/About";
import Buzzme from "../Buzzme/Buzzme";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { user: userService.getUser() };
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
        <h1>Buzz App</h1>
        <Link exact to="/about">
          <button>About</button>
        </Link>
        <Link exact to="/buzzme">
          <button>Buzz Me!</button>
        </Link>
        <Link exact to="/signup">
          Sign Up
        </Link>
        <Link exact to="/login">
          Log In
        </Link>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/buzzme">
            <Buzzme />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route
            exact
            path="/"
            render={() => (
              <About user={this.state.user} handleLogout={this.handleLogout} />
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
