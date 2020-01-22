import React, { Component } from "react";

export default class EditMaintenancePage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.maintenance
  };
  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateMaintenance(this.state.formData);
  };

  handleChange = e => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value
    };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <>
        <h1>Edit Maintenance</h1>
        <form
          ref={this.formRef}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <div>
            <label>Maintenance Name</label>
            <input
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Maintenance Description</label>
            <input
              name="description"
              value={this.state.formData.description}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Time to Complete (in days)</label>
            <input
              name="time"
              value={this.state.formData.time}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Location</label>
            <input
              name="location"
              value={this.state.formData.location}
              onChange={this.handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn"
            disabled={this.state.invalidForm}
          >
            EDIT MAINTENANCE
          </button>
        </form>
      </>
    );
  }
}
