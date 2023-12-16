import logo from './logo.svg';
import './App.css';
import React from 'react'
class  App  extends React.Component{
  constructor(){
    super()
   this.state={
    data:"jui"
   }
  }
  render()
  {
    return(
    
     <h1>hie jui hows everythig going{this.state.data}</h1>
    
  );
}
}
export default App;
