import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function MaintenanceCard({ maintenance }) {
  return (
    <div>
      <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{maintenance.name}</span>
              <p>{maintenance.description}</p>
              <p></p>
              <p>Location: {maintenance.location}</p>
              <p>Days to complete: {maintenance.time}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
