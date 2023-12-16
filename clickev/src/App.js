import logo from './logo.svg';
import './App.css';


function App() {
  let data="JUI MANDAZ"
  function apple()
  {
    data ="AMAN"
  alert(data)
    // alert("You can di it");
  } 
  return (
  
    <div className="App">
      <h1>Hellow world</h1>
      <h2>{data}</h2>
  <button onClick= {apple}>Click me</button>
  <button onClick= {()=>alert("hellow")}>Click me</button>
    </div>
  );
}

export default App;
