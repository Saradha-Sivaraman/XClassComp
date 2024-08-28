import React, { Component } from 'react';

class CounterApp extends Component {
  constructor(props) {
    super(props);
    // Initialize state with a counter
    this.state = {
      count: 0
    };
  }

  // Method to increment the counter
  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  // Method to decrement the counter
  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default CounterApp;



