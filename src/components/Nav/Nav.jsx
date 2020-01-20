import React, { Component } from "react";
import SignupPage from "../../pages/SignupPage/SignupPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import HomePage from "../../pages/HomePage/HomePage";
import { Link, Route, Switch } from "react-router-dom";
import Tab from "@material-ui/core/Tab/Tab";
import AppBar from "@material-ui/core/AppBar/AppBar";
import { Toolbar } from "@material-ui/core";

export default class Nav extends Component {
  render() {
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <Link exact to="/">
              Home
            </Link>
            <Link exact to="/signup">
              Sign Up
            </Link>
            <Link exact to="/login">
              Log In
            </Link>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                user={this.props.user}
                handleLogout={this.props.handleLogout}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignuporLogin={this.props.handleSignuporLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignuporLogin={this.props.handleSignuporLogin}
              />
            )}
          />
        </Switch>
      </>
    );
  }
}
