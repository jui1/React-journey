import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: "anil",
    };
  }

  apple() {
    alert('hie champ');
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.data}</h1>
        <button onClick={() => this.apple()}>ugg</button>
      </div>
    );
  }
}

export default App;
