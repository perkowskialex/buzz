import React, { Component } from "react";
import "./App.css";
import userService from "../../utils/userService";
import Nav from "../../components/Nav/Nav";
import * as maintenanceAPI from "../../services/maintenances-api";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      maintenances: []
    };
  }

  handleAddMaintenance = async newMaintenanceData => {
    const newMaintenance = await maintenanceAPI.create(newMaintenanceData);
    this.setState(
      state => ({
        maintenances: [...state.maintenances, newMaintenance]
      }),
      () => this.props.history.push("/")
    );
  };

  handleDeleteMaintenance = async id => {
    await maintenanceAPI.deleteOne(id);
    this.setState(
      state => ({
        maintenances: state.maintenances.filter(m => m._id !== id)
      }),
      () => this.props.history.push("/")
    );
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignuporLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  async componentDidMount() {
    const maintenances = await maintenanceAPI.getAll();
    this.setState({ maintenances });
  }

  render() {
    return (
      <div>
        <Nav
          props={this.props}
          maintenances={this.state.maintenances}
          user={this.state.user}
          handleLogout={this.handleLogout}
          handleSignuporLogin={this.handleSignuporLogin}
          handleAddMaintenance={this.handleAddMaintenance}
          handleDeleteMaintenance={this.handleDeleteMaintenance}
        />
      </div>
    );
  }
}

export default App;
