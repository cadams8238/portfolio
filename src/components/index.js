import React from 'react';
import { Link } from 'react-router-dom';

import LandingPage from './landingPage';
import ProjectLeft from './project-left';
import ProjectRight from './project-right';
import About from './about';
import Connect from './connect';

import styles from './styles/index.module.css';
import {phytochorContent, content} from './project-content';

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
        <ProjectLeft content={phytochorContent}/>
        <ProjectRight content={content}/>
        <About />
        <Connect />
      </div>
    );
}
