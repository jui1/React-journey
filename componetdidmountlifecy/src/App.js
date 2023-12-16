import logo from './logo.svg';
import './App.css';
import React from 'react'; // Fix: Correct the import statement for React

class App extends React.Component {
  constructor() {
    super();
   this.state={
    name:"jui"
   }
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        <h1>Component Did Mount{this.state.name}</h1>
        <button onClick={()=>{this.setState({name:"aman"})}}>Update name</button>
      </div>
    );
  }
}

export default App;
