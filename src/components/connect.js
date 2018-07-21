import React from 'react';
import styles from './styles/connect.module.css';

import github from '../images/contact_github.svg';
import email from '../images/contact_email.svg';
import linkedin from '../images/contact_linkedin.svg';


export default function LandingPage() {
    return (
        <div className={styles.backgroundImage}>
            <div className={styles.allHeaderText}>
                <h2 className={[styles.heading, styles.firstHeading].join(' ')}>Let's</h2>
                <h2 className={styles.heading}>Connect</h2>
            </div>

            <div className={styles.icons}>
                <a href="https://github.com/cadams8238">
                    <img className={styles.iconImg}
                        src={github}
                        alt="Github icon"
                    />
                </a>

                <a href="mailto:cadams8238@gmail.com">
                    <img className={styles.iconImg}
                        src={email}
                        alt="Email icon"
                    />
                </a>

                <a href="https://www.linkedin.com/in/coadams88/">
                    <img className={[styles.iconImg, styles.linkedin].join(' ')}
                        src={linkedin}
                        alt="LinkedIn icon"
                    />
                </a>
            </div>

            <div className={styles.supportingText}>
                <p>Looking forward to hearing</p>
                <p>from you!</p>
            </div>
        </div>
    );
}
