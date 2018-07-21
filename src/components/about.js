import React from 'react';
import styles from './styles/about.module.css';

import headshot from '../images/headshot.png';
import kayak from '../images/interests_kayak.svg';
import art from '../images/interests_art.svg';
import animation from '../images/interests_animation.svg';
import forest from '../images/interests_forest.svg';
import lettering from '../images/interests_lettering.svg';
import travel from '../images/interests_travel.svg';
import game from '../images/interests_game.svg';

export default function About() {

    return (
        <div className={styles.backgroundImage}>
            <section className={styles.flexGrid}>
                <div className={[styles.col, styles.allText].join(' ')}>
                    <h2 className={styles.header}>About Me</h2>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                        quis nostrud exerci tation ullamcorper suscipit
                    </p>
                    <div className={styles.underline}></div>
                </div>

                <div className={styles.col}>
                    <img className={styles.headshot}
                        src={headshot}
                        alt="Picture of Courtney Adams"
                    />
                </div>
            </section>

            <section>
                <p className={styles.subheading}>Things I Enjoy</p>

                <ul className={styles.iconList}>
                    <li className={styles.iconColumn}>
                        <img className={styles.icon}
                            src={kayak}
                            alt="kayaking icon"
                        />
                        <p className={styles.iconLabel}>Kayaking</p>
                    </li>

                    <li className={styles.iconColumn}>
                        <img className={styles.icon}
                            src={art}
                            alt="art icon"
                        />
                        <p className={styles.iconLabel}>Art</p>
                    </li>

                    <li className={styles.iconColumn}>
                        <img className={styles.icon}
                            src={animation}
                            alt="animation icon"
                        />
                        <p className={styles.iconLabel}>Stop Motion</p>
                    </li>

                    <li className={styles.iconColumn}>
                        <img className={styles.icon}
                            src={forest}
                            alt="forest icon"
                        />
                        <p className={styles.iconLabel}>Forests</p>
                    </li>

                    <li className={styles.iconColumn}>
                        <img className={styles.icon}
                            src={lettering}
                            alt="lettering icon"
                        />
                        <p className={styles.iconLabel}>Lettering</p>
                    </li>

                    <li className={styles.iconColumn}>
                        <img className={styles.icon}
                            src={travel}
                            alt="travel icon"
                        />
                        <p className={styles.iconLabel}>Travel</p>
                    </li>

                    <li className={styles.iconColumn}>
                        <img className={styles.icon}
                            src={game}
                            alt="game icon"
                        />
                        <p className={styles.iconLabel}>Game Dev</p>
                    </li>
                </ul>
            </section>
        </div>
    );
}
