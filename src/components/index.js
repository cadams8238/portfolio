import React from 'react';
import { Link } from 'react-router-dom';

import LandingPage from './landingPage';
import Phytochor from './phytochor';
import About from './about';
import Connect from './connect';

import styles from './styles/index.module.css';


export default class Home extends React.Component {

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <a href="#projects">
                Projects
              </a>
            </li>

            <li>
              <a href="#about">
                About
              </a>
            </li>

            <li>
              <a href="#connect">
                Connect
              </a>
            </li>
          </ul>
        </nav>
        <LandingPage />
        <Phytochor />
        <About />
        <Connect />
      </div>
    );
  }
}
