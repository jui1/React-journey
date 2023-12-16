import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component {
  constructor(){
    super();
    this.state={
      count :0
    }
  }
  componentDidUpdate(preProps,Prestate,snapshot)
  {
   console.log("com" ,Prestate.count,this.state.count )
   if(Prestate.count===this.state.count)
   {
    alert("data is already sma")
   }
  }
  render(){
    return (
      <div className="App">
        
          <h1>Componet did Update{this.state.count}</h1>
          {/* <button onClick={()=>this.setState({count:this.state.count+1})}>bb</button> */}
          <button onClick={()=>this.setState({count:1})}>bb</button>
      </div>
    );
  }
 
}

export default App;
