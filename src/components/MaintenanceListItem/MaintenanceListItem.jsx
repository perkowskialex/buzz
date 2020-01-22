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
              <span class="card-title center">{maintenance.name}</span>
              <p>Description: {maintenance.description}</p>
              <p></p>
              <p>Location: {maintenance.location}</p>
              <p>Days to complete: {maintenance.time}</p>
            </div>
            <div class="card-action center">
              <Link to={{ pathname: "/details", state: { maintenance } }}>
                <button className="waves-effect waves-light btn">
                  DETAILS<i class="material-icons left">visibility</i>
                </button>
              </Link>
              <Link
                to={{
                  pathname: "/edit",
                  state: { maintenance }
                }}
              >
                <button className="waves-effect waves-light btn amber">
                  EDIT<i class="material-icons left">edit</i>
                </button>{" "}
              </Link>
              <button
                className="btn waves-effect waves-light red"
                onClick={() => handleDeleteMaintenance(maintenance._id)}
              >
                DELETE<i class="material-icons left">delete</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
