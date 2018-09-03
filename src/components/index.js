import React from 'react';
import { Link } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';

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
              <Scrollchor to="#connect" animate={{duration: 800}}>
                <a href="#connect">
                  Connect
                </a>
              </Scrollchor>
            </li>

            <li>
              <Scrollchor to="#about" animate={{duration: 600}}>
                <a href="#about">
                  About
                </a>
              </Scrollchor>
            </li>

            <li>
              <Scrollchor to="#projects">
                <a href="#projects">
                  Projects
                </a>
              </Scrollchor>
            </li>
          </ul>
        </nav>
        <LandingPage />
        <ProjectLeft hashId="projects" content={phytochorContent}/>
        <ProjectRight content={content}/>
        <About />
        <Connect />
      </div>
    );
}
