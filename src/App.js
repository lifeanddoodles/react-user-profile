import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Aside from './components/Aside';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error404 from './pages/Error404';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <a className='skip-link screen-reader-text' href='#content'>
        Skip to content
      </a>
      <div id='page' className='App'>
        <Header />
        <div id='content' className='content'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route component={Error404} />
          </Switch>
          <Aside />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
