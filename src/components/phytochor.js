import React from 'react';
import styles from './styles/phytochor.module.css';
import Button from './button';

import phytochor from '../images/projects_phytochor-screenshots.svg';
import {phytochorContent} from './content';

export default function Phytochor() {

    return (
      <div className={styles.backgroundImage}>
        <div className={styles.projectBackground}></div>
        <img className={styles.projectPhoto}
          src={phytochor}
          alt="phytochor screenshots"
        />
        <section className={styles.allText}>
          <h2 className={styles.title}>
            {phytochorContent.title}
          </h2>
          <p className={styles.description}>
            {phytochorContent.description}
          </p>
          <a href={phytochorContent.links.app}>
            <Button label="Live App"
              className={styles.buttonLinks}
            />
          </a>
          <a href={phytochorContent.links.code}>
            <Button label="See Code"
              className={[styles.button, styles.buttonLinks].join(' ')}
            />
          </a>
          <p className={styles.roles}>{phytochorContent.stack}</p>
        </section>
      </div>
    );
}
