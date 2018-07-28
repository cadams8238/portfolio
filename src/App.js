import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';

import Home from './components/index';


class App extends Component {
  render() {
    return (
        <Home />
    );
  }
}

export default App;
