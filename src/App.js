import React, { Component } from 'react';
import LandingPage from './components/landingPage';
import Connect from './components/connect';
import About from './components/about';


import './App.css';

class App extends Component {
  render() {
    return (
        <React.Fragment>
            <LandingPage />
            <About />
            <Connect />
        </React.Fragment>
    );
  }
}

export default App;
