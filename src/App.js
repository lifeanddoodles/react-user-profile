import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
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
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/user-profile' component={UserProfile} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
