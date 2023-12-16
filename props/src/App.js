import Student from './student';

import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const[name,setName]= useState('anil')
  return (
    <div className="App">
     <h1>My new Learning:</h1>
     <Student name={name}></Student> 
     <button onClick={()=>{setName("jam")}}>update name </button>
    </div>
  );
}

export default App;
