import React, { Component } from "react";
import CurrencyConvertor from "./components/CurrencyConvertor";

class App extends Component {

  constructor() {

    super();

    this.state = {

      counter: 0

    };

  }

  increment = () => {

    this.setState({

      counter: this.state.counter + 1

    });

  };

  decrement = () => {

    this.setState({

      counter: this.state.counter - 1

    });

  };

  sayHello = () => {

    alert("Hello! Have a nice day.");

  };

  incrementAndHello = () => {

    this.increment();

    this.sayHello();

  };

  sayWelcome = (message) => {

    alert(message);

  };

  syntheticEvent = () => {

    alert("I was clicked");

  };

  render() {

    return (

      <div style={{ margin: "20px" }}>

        <h1>React Event Examples</h1>

        <h2>Counter : {this.state.counter}</h2>

        <button onClick={this.incrementAndHello}>

          Increment

        </button>

        &nbsp;

        <button onClick={this.decrement}>

          Decrement

        </button>

        <br /><br />

        <button
          onClick={() => this.sayWelcome("Welcome")}
        >

          Say Welcome

        </button>

        <br /><br />

        <button onClick={this.syntheticEvent}>

          OnPress

        </button>

        <hr />

        <CurrencyConvertor />

      </div>

    );

  }

}

export default App;