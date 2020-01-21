import React, { Component } from "react";
import MaintenanceListItem from "../../components/MaintenanceListItem/MaintenanceListItem";

export default function MaintenanceListPage(props) {
  return (
    <>
      <h1>Maintenance List</h1>
      <div>
        {props.maintenances.map(maintenance => (
          <MaintenanceListItem
            maintenance={maintenance}
            handleDeleteMaintenance={props.handleDeleteMaintenance}
            key={maintenance._id}
          />
        ))}
      </div>
    </>
  );
}
