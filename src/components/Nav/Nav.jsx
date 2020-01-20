import React, { Component } from "react";
import SignupPage from "../../pages/SignupPage/SignupPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import HomePage from "../../pages/HomePage/HomePage";
import { Link, Route, Switch } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <Link exact to="/">
            Home
          </Link>
          <Link exact to="/signup">
            Sign Up
          </Link>
          <Link exact to="/login">
            Log In
          </Link>
        </div>
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
