import React, { Component } from "react";
import MaintenanceCard from "../../components/MaintenanceCard/MaintenanceCard";

export default function MaintenanceListPage(props) {
  return (
    <>
      <h1>Maintenance List</h1>
      <div>
        {props.maintenances.map(maintenance => (
          <MaintenanceCard
            maintenance={maintenance}
            handleDeleteMaintenance={props.handleDeleteMaintenance}
            key={maintenance._id}
          />
        ))}
      </div>
    </>
  );
}
