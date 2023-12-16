import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [DataTransfer, setDate] = useState("anil");

  function upDate() {
    setDate("jam");  
  }

  return (
    <div className="App">
      <p>DataTransfer: {DataTransfer}</p>
      <button onClick={upDate}>Dam</button>
    </div>
  );
}

export default App;
