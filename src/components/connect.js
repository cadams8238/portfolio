import React from 'react';
import styles from './styles/connect.module.css';

import github from '../images/contact_github.svg';
import email from '../images/contact_email.svg';
import linkedin from '../images/contact_linkedin.svg';


export default function LandingPage() {
    return (
        <div className={styles.backgroundImage}>
            <h2 className={[styles.heading, styles.firstHeading].join(' ')}>Let's</h2>
            <h2 className={styles.heading}>Connect</h2>

            <div className={styles.icons}>
                <img src={github}
                    alt="Github icon" />
                <img src={email}
                    alt="Email icon" />
                <img src={linkedin}
                    alt="LinkedIn icon" />
            </div>

            <div className={styles.supportingText}>
            <p>Looking forward to hearing</p>
            <p>from you!</p>
            </div>
        </div>
    );
}
