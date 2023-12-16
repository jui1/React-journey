import React from 'react';

export default class Strudent extends React.Component {
    
    
  render() {
    console.log(this.props);
    return (
      <div style={{ backgroundColor: 'green' }}>
        Strudent {this.props.name}
        <button>update</button>
      </div>
    );
  }
}
