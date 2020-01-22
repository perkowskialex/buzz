import React, { Component } from "react";
import "./App.css";
import userService from "../../utils/userService";
import Nav from "../../components/Nav/Nav";
import * as maintenanceAPI from "../../services/maintenances-api";
import { Route } from "react-router-dom";
import MaintenanceDetailPage from "../../pages/MaintenanceDetailPage/MaintenanceDetailPage";
import Footer from "../../components/Footer/Footer";

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

  handleUpdateMaintenance = async updatedMaintenanceData => {
    const updatedMaintenance = await maintenanceAPI.update(
      updatedMaintenanceData
    );
    const newMaintenanceArray = this.state.maintenances.map(m =>
      m._id === updatedMaintenance._id ? updatedMaintenance : m
    );
    this.setState({ maintenances: newMaintenanceArray }, () =>
      this.props.history.push("/")
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
          handleUpdateMaintenance={this.handleUpdateMaintenance}
          handleSendText={this.handleSendText}
        />
        <main>
          <Route
            exact
            path="/details"
            render={({ location }) => (
              <MaintenanceDetailPage
                handleDeleteMaintenance={this.handleDeleteMaintenance}
                handleUpdateMaintenance={this.handleUpdateMaintenance}
                location={location}
              />
            )}
          />
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
