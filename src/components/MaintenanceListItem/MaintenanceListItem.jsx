import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function MaintenanceListItem({
  maintenance,
  handleDeleteMaintenance,
  handleSendText
}) {
  return (
    <div>
      <div class="row">
        <div class="col s12 m6">
          <div class="card blue darken-1">
            <div class="card-content white-text">
              <span class="card-title">{maintenance.name}</span>
              <p>{maintenance.description}</p>
              <p></p>
              <p>Location: {maintenance.location}</p>
              <p>Days to complete: {maintenance.time}</p>
            </div>
            <div class="card-action">
              <Link to={{ pathname: "/details", state: { maintenance } }}>
                DETAILS
              </Link>
              <Link
                to={{
                  pathname: "/edit",
                  state: { maintenance }
                }}
              >
                EDIT{" "}
              </Link>
              <button
                className="btn waves-effect waves-light red"
                onClick={() => handleDeleteMaintenance(maintenance._id)}
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
