import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <h1>{process.env.REACT_APP_TITLE}</h1>
        <p>{process.env.NODE_ENV}</p>
      </div>
    );
  }
}

export default App;
