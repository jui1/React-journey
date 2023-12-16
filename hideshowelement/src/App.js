import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {
  const [status,setStatus] =React.useState(false)
  return (
    <div className="App">
      {
    status ? <h1> hie...Hide and show</h1>:null
      }
        
        {/* <button onClick={()=>setStatus(false)}>Hide</button>
        <button onClick={()=>setStatus(true)}>show</button> */
        <button onClick={()=>setStatus(!status)}>show</button>}
    </div>
  );
}

export default App;
