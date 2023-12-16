import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import Aman  from './aman';
import User from './User'


function App() {
  const[name,setName] =useState('jui')
  return (
    <div className="App">
      <h1>Render Method in React</h1>
      <Aman/>
      <User name ={name}/>
      <button onClick={()=>setName("aman")}>up </button>
    </div>
  );
}

export default App;
