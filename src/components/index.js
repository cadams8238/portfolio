import React from 'react';
import { Link } from 'react-router-dom';

import LandingPage from './landingPage';
import Phytochor from './phytochor';
import ProjectRight from './project-right';
import About from './about';
import Connect from './connect';

import styles from './styles/index.module.css';


export default function Home() {

    return (
      <div>
        <nav>
          <ul>
            <li>
              <a href="#connect">
                Connect
              </a>
            </li>

            <li>
              <a href="#about">
                About
              </a>
            </li>

            <li>
              <a href="#projects">
                Projects
              </a>
            </li>
          </ul>
        </nav>
        <LandingPage />
        <Phytochor />
        <ProjectRight />
        <About />
        <Connect />
      </div>
    );
}
