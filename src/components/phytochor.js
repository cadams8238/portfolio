import React from 'react';
import styles from './styles/phytochor.module.css';
import Button from './button';

export default function Phytochor() {

    return (
        <div className={styles.backgroundImage}>
            <div className={styles.circle}></div>
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
                <Button label="Live App"/>
                <Button label="See Code" className={styles.button}/>
                <p className={styles.roles}>My roles:  Fullstack Developer, Illustrator</p>
            </section>
        </div>
    );
}
