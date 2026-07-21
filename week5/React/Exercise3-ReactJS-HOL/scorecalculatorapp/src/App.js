import React from "react";

import CalculateScore from "./Components/CalculateScore";

function App() {

  return (

    <div>

      <CalculateScore
        name="Mayank Sharma"
        school="GLA University"
        total={475}
        goal={5}
      />

    </div>

  );

}

export default App;