import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function MaintenanceListItem({
  maintenance,
  handleDeleteMaintenance
}) {
  return (
    <div>
      <div>
        <h3>{maintenance.name}</h3>
      </div>
      <div>
        <Link to={{ pathname: "/details", state: { maintenance } }}>
          DETAILS
        </Link>
        <Link
          to={{
            pathname: "/edit",
            state: { maintenance }
          }}
        >
          EDIT
        </Link>
        <button onClick={() => handleDeleteMaintenance(maintenance._id)}>
          DELETE
        </button>
      </div>
    </div>
  );
}
