import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to React</h1>
        <p>
          You are in <i>{process.env.NODE_ENV}</i> mode.
        </p>
        <p>
          Your 'Secret Code' for this environment would be:{' '}
          {process.env.REACT_APP_SECRET_CODE}. You can change it in the{' '}
          <code>.env.{process.env.NODE_ENV}</code> file.
        </p>
      </div>
    );
  }
}

export default App;
