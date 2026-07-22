import React from "react";

const FlightDetails = () => {
  return (
    <div>
      <h2>Flight Details</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Flight</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Fare</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI101</td>
            <td>Delhi</td>
            <td>Mumbai</td>
            <td>₹5500</td>
          </tr>

          <tr>
            <td>AI202</td>
            <td>Bangalore</td>
            <td>Chennai</td>
            <td>₹3200</td>
          </tr>

          <tr>
            <td>AI303</td>
            <td>Kolkata</td>
            <td>Hyderabad</td>
            <td>₹4800</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FlightDetails;