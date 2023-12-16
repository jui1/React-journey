import React from 'react';

const Student = (props) => {
  console.log(props);
  return (
    <div>
      <h1>hello: {props.name}</h1>
    </div>
  );
}

export default Student;
