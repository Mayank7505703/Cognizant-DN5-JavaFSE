import React from "react";
import ListOfPlayers from "./components/ListOfPlayers";
import IndianPlayers from "./components/IndianPlayers";

function App() {

    const flag = false;

    if (flag) {

        return <ListOfPlayers />;

    }

    else {

        return <IndianPlayers />;

    }

}

export default App;