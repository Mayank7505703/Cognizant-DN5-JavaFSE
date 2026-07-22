import React from "react";
import FlightDetails from "./FlightDetails";

const GuestPage = () => {
  return (
    <div>
      <h1>Welcome Guest</h1>

      <p>You can browse available flights.</p>

      <FlightDetails />
    </div>
  );
};

export default GuestPage;