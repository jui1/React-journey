
// App.js
import React from 'react';
import Strudent from './student';

class App extends React.Component {
  constructor(){
    super()
    this.state={
        name:"jui",
    }
  }
  render() {
    return (
      <div className="App">
        <h1>ok fine</h1>
        <Strudent name={this.state.name}email="jui@31"></Strudent>
        <button onClick={()=>this.setState({name:"aman"})}>update</button>
      </div>
    );
  }
}

export default App;
