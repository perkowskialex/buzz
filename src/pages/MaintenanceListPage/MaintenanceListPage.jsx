import React, { Component } from "react";
import MaintenanceListItem from "../../components/MaintenanceListItem/MaintenanceListItem";
import SMSForm from "../../components/SMSForm/SMSForm";

export default function MaintenanceListPage(props) {
  return (
    <>
      <h1 className="center ">Maintenance List</h1>
      <div>
        {props.maintenances.map(maintenance => (
          <MaintenanceListItem
            maintenance={maintenance}
            handleDeleteMaintenance={props.handleDeleteMaintenance}
            handleSendText={props.handleSendText}
            key={maintenance._id}
          />
        ))}
        <h3 className="center">Send a Message</h3>
        <SMSForm />
      </div>
    </>
  );
}
