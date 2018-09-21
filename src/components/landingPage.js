import React from 'react';
import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
import styles from './styles/landingPage.module.css';

export default function LandingPage() {

    return (
        <div className={styles.background}>
          <header className={styles.flexContainer}>
            <div>
              <p className={styles.hello}>Hello!</p>
              <p className={styles.myNameIs}>My name is</p>
              <div className={styles.nameAndDesc}>
                  <h1 className={styles.nameHeading}>Courtney</h1>
                  <h1 className={styles.nameHeading}>Adams</h1>

                  <p className={[styles.description, styles.firstDesc].join(' ')}>I'm a fullstack developer and designer based in the</p>
                  <p className={styles.description}>beautiful PNW. I'm an avid problem solver looking to</p>
                  <p className={styles.description}>join a rad, collaborative team where my skills and</p>
                  <p className={styles.description}>passions can shine!</p>

              </div>
            </div>
          </header>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
          <div className={styles.circle4}></div>
        </div>
    );
}
