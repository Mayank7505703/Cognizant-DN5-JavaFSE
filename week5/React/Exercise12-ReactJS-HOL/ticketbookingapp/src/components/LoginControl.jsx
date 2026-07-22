import React, { useState } from "react";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

const LoginControl = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ margin: "20px" }}>

      {
        isLoggedIn
          ? <UserPage />
          : <GuestPage />
      }

      <br />

      {
        isLoggedIn
          ?
          <button onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
          :
          <button onClick={() => setIsLoggedIn(true)}>
            Login
          </button>
      }

    </div>
  );
};

export default LoginControl;