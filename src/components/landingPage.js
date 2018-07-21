import React from 'react';
import styles from './styles/landingPage.module.css';

export default function LandingPage() {

    return (
        <div className={styles.backgroundImage}>
            <nav role={styles.navigation}>
                <ul>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Connect</li>
                </ul>
            </nav>
            <header>
                <p className={styles.hello}>Hello!</p>
                <p className={styles.myNameIs}>My name is</p>

                <div className={styles.nameAndDesc}>
                    <h1 className={styles.nameHeading}>Courtney</h1>
                    <h1 className={styles.nameHeading}>Adams</h1>

                    <p className={[styles.description, styles.firstDesc].join(' ')}>I'm a fullstack developer and designer based</p>
                    <p className={styles.description}>in the beautiful PNW</p>
                </div>

            </header>
        </div>
    );
}
