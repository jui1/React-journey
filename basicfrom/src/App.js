import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [name ,setname] = useState("");
  const [tnc,settnc] = useState(false);
  const [inter ,setinter] = useState("")
  function getfromdata(e){
    console.log(name, tnc,inter)
    e.preventDefault()
  }
  return (
    <div className="App">
      <form onSubmit={getfromdata}>
        <input type="text" placeholder="enter name" onChange={(e)=>setname(e.target.value)}></input>
        <br></br>
        <select onChange={(e)=>setinter(e.target.value)}>
          <option>Select option</option>
          <option>Aman</option>
          <option>mammaa</option>
          <option>jui</option>
          </select>
          <br></br>
  <input type='checkbox' onChange={(e)=>settnc(e.target.checked)} /> <span>Accept terms and conditions</span>

  <br></br>

  <button type="submit">submit</button>
       
      </form>
    </div>
  );
}

export default App;
