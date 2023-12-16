import logo from './logo.svg';
import './App.css';
import User from './user';
import Jui from './members' 
function App() {
  function getData(){
    alert("hlww")
  }
  return (
    <div className="App">
      <User data={getData}/>
      <div>
        <Jui  data={getData}/>
      </div>
    </div>
  );
}

export default App;
