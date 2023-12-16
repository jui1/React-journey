import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
function App() {
  const [data,setData]=useState(null)
  const [print ,setPrint] = useState(false)
   function getData(val){
   console.log(val.target.value)
    setData(val.target.value)
    setPrint(false)
   }
  return (
    <div className="App">
    {
      print?
      <h1>{data}</h1>
      :null
    }
    <input type="text" onChange={getData}></input>
    <button onClick={()=>setPrint(true)}>print data</button>
    </div>
  );
}

export default App;
