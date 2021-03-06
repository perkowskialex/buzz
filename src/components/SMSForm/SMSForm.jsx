import React, { Component } from "react";
import "./SMSForm.css";

export default class SMSForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: {
        to: "",
        body: ""
      },
      submitting: false,
      error: false
    };
  }

  onHandleChange = event => {
    const name = event.target.getAttribute("name");
    this.setState({
      message: { ...this.state.message, [name]: event.target.value }
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({ submitting: true });
    fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify(this.state.message)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.setState({
            error: false,
            submitting: false,
            message: {
              to: "",
              body: ""
            }
          });
        } else {
          this.setState({
            error: true,
            submitting: false
          });
        }
      });
  };

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        className={this.state.error ? "error-sms-form" : "sms-form"}
      >
        <div>
          <label htmlFor="to">To:</label>
          <input
            type="tel"
            name="to"
            id="to"
            value={this.state.message.to}
            onChange={this.onHandleChange}
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            name="body"
            id="body"
            value={this.state.message.body}
            onChange={this.onHandleChange}
          />
        </div>
        <button
          className="waves-effect waves-light btn blue darken-4"
          type="submit"
          disabled={this.state.submitting}
        >
          <i class="material-icons left">send</i>
          <i class="material-icons right">send</i>
          Send message
        </button>
      </form>
    );
  }
}
