import logo from './logo.svg';
import './App.css';

import React from 'react'
class App extends React.Component {
  constructor(){
    super();
    this.state={
      count:0
    }
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate")
    if(this.state.count>5 && this.state.count<10){
      return true;
    }
    else{
      return false;
    }
  }
  render(){
    return (
      <div className="App">
        <h1>should update {this.state.count} </h1>
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>bb</button>
      </div>
    );
  }
  
}

export default App;
