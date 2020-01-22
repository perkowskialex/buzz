import React, { Component } from "react";
import MaintenanceCard from "../../components/MaintenanceCard/MaintenanceCard";

function MaintenanceDetailPage(props) {
  const maintenance = props.location.state.maintenance;
  return (
    <>
      <h1>Maintenance Details</h1>
      <MaintenanceCard
        handleDeleteMaintenance={props.handleDeleteMaintenance}
        key={maintenance._id}
        maintenance={maintenance}
      />
    </>
  );
}

export default MaintenanceDetailPage;
