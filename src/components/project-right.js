import React from 'react';
import styles from './styles/projectRight.module.css';
import Button from './button';

import phytochor from '../images/projects_phytochor-screenshots.svg';
import {content} from './content';



export default function ProjectRight() {
  return (
    <div className={styles.backgroundImage}>
      <div className={styles.projectBackground}></div>
      <img className={styles.projectPhoto}
        src={phytochor}
        alt="phytochor screenshots"
      />
      <section className={styles.allText}>
        <h2 className={styles.title}>
          {content.title}
        </h2>
        <p className={styles.description}>
          {content.description}
        </p>
        <a href={content.links.app}>
          <Button label="Live App"
            className={styles.buttonLinks}
          />
        </a>
        <a href={content.links.code}>
          <Button label="See Code"
            className={[styles.button, styles.buttonLinks].join(' ')}
          />
        </a>
        <p className={styles.roles}>{content.stack}</p>
      </section>
    </div>
  );
}
