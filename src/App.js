import React, { Component } from 'react';
import LandingPage from './components/landingPage';
import Phytochor from './components/phytochor';
import About from './components/about';
import Connect from './components/connect';


import './App.css';

class App extends Component {
  render() {
    return (
        <React.Fragment>
            <LandingPage />
            <Phytochor />
            <About />
            <Connect />
        </React.Fragment>
    );
  }
}

export default App;
