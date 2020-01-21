import React, { Component } from "react";
import "./App.css";
import userService from "../../utils/userService";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import AddMaintenancePage from "../AddMaintenancePage/AddMaintenancePage";
import EditMaintenancePage from "../EditMaintenancePage/EditMaintenancePage";
import MaintenanceDetailPage from "../MaintenanceDetailPage/MaintenanceDetailPage";
import MaintenanceListPage from "../MaintenanceListPage/MaintenanceListPage";

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
        <Nav
          user={this.state.user}
          handleLogout={this.handleLogout}
          handleSignuporLogin={this.handleSignuporLogin}
        />
        <Footer className="footer" />
      </div>
    );
  }
}

export default App;
