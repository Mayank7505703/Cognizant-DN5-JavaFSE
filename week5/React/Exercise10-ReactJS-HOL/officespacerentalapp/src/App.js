import React from "react";

function App() {

  const office = {
    Name: "DBS Business Center",
    Rent: 55000,
    Address: "Sector 62, Noida"
  };

  const officeList = [

    {
      Name: "DBS Business Center",
      Rent: 55000,
      Address: "Sector 62, Noida"
    },

    {
      Name: "Tech Park",
      Rent: 75000,
      Address: "Whitefield, Bangalore"
    },

    {
      Name: "Cyber Hub",
      Rent: 45000,
      Address: "Gurugram"
    }

  ];

  return (

    <div style={{ margin: "20px" }}>

      <h1>Office Space Rental App</h1>

      <img
        src="/office.avif"
        alt="Office Space"
        width="100"
      />

      <hr />

      <h2>Featured Office</h2>

      <p><b>Name:</b> {office.Name}</p>

      <p
        style={{
          color:
            office.Rent < 60000
              ? "red"
              : "green"
        }}
      >
        <b>Rent:</b> {office.Rent}
      </p>

      <p><b>Address:</b> {office.Address}</p>

      <hr />

      <h2>Office List</h2>

      {

        officeList.map((item, index) => (

          <div key={index}>

            <h3>{item.Name}</h3>

            <p
              style={{
                color:
                  item.Rent < 60000
                    ? "red"
                    : "green"
              }}
            >
              Rent : {item.Rent}
            </p>

            <p>
              Address : {item.Address}
            </p>

            <hr />

          </div>

        ))

      }

    </div>

  );

}

export default App;