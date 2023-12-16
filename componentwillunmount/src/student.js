import logo from './logo.svg';

import React from 'react'

class  student extends React.Component{
    componentWillUnmount(){
        console.log("thiss cold")
    }
  render(){
  return (
    <div className="App">
     <h1>componet willunmount</h1>
       
    </div>
  );
}
}
export default student;
