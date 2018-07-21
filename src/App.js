import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';

import LandingPage from './components/landingPage';
import Phytochor from './components/phytochor';
import About from './components/about';
import Connect from './components/connect';



class App extends Component {
  render() {
    return (
        // <HashRouter>
        //     <React.Fragment>
        //         <Route path="/" component={LandingPage} />
        //         <Route path="/projects" component={Phytochor} />
        //         <Route path="/about" component={About} />
        //         <Route path="/connect" component={Connect} />
        //     </React.Fragment>
        // </HashRouter>
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
