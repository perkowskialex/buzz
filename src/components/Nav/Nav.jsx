import React, { Component } from "react";
import SignupPage from "../../pages/SignupPage/SignupPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import MaintenanceListPage from "../../pages/MaintenanceListPage/MaintenanceListPage";
import AddMaintenancePage from "../../pages/AddMaintenancePage/AddMaintenancePage";
import EditMaintenancePage from "../../pages/EditMaintenancePage/EditMaintenancePage";
import { Link, Route, Switch } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar/AppBar";
import { Toolbar } from "@material-ui/core";

export default class Nav extends Component {
  render() {
    return (
      <>
        <AppBar
          position="static"
          style={{ display: "flex", alignItems: "space-around" }}
        >
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
            <Link exact to="/add">
              Add Maintenance
            </Link>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MaintenanceListPage
                user={this.props.user}
                handleLogout={this.props.handleLogout}
                handleDeleteMaintenance={this.props.handleDeleteMaintenance}
                handleUpdateMaintenance={this.props.handleUpdateMaintenance}
                maintenances={this.props.maintenances}
                props={this.props}
              />
            )}
          />
          <Route
            exact
            path="/edit"
            render={({ location }) => (
              <EditMaintenancePage
                handleUpdateMaintenance={this.props.handleUpdateMaintenance}
                location={location}
              />
            )}
          />
          <Route
            exact
            path="/add"
            render={() => (
              <AddMaintenancePage
                user={this.props.user}
                handleLogout={this.props.handleLogout}
                handleAddMaintenance={this.props.handleAddMaintenance}
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
