import React from 'react';
import styles from './styles/phytochor.module.css';
import Button from './button';

import phytochor from '../images/projects_phytochor-screenshots.svg';

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
            Phytochor
          </h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magna
            aliquam erat volutpat. Ut wisi enim ad minim
            veniam, quis nostrud exerci tation ullamcorper
            suscipit
          </p>
          <a href="https://garden-client.herokuapp.com/">
            <Button label="Live App"
              className={styles.buttonLinks}
            />
          </a>
          <a href="https://github.com/cadams8238/Garden-app_client">
            <Button label="See Code"
              className={[styles.button, styles.buttonLinks].join(' ')}
            />
          </a>
          <p className={styles.roles}>My roles:  Fullstack Developer, Illustrator</p>
        </section>
      </div>
    );
}
