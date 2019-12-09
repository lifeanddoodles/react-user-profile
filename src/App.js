import React, { Component, Fragment } from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import Aside from './components/Aside';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div id='page' class='grid'>
        <Header />
        <Main />
        <Aside />
        <Footer />
      </div>
    );
  }
}

export default App;
