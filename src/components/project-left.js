import React from 'react';
import styles from './styles/projectLeft.module.css';
import Button from './button';


export default function ProjectLeft(props) {

    return (
      <div className={styles.backgroundImage}
        id={props.hashId ? props.hashId : ''}
      >
        <div className={styles.projectBackground}></div>
        <img className={styles.projectPhoto}
          src={props.content.img.src}
          alt={props.content.img.alt}
        />
        <section className={styles.allText}>
          <h2 className={styles.title}>
            {props.content.title}
          </h2>
          <p className={styles.description}>
            {props.content.description}
          </p>
          <a href={props.content.links.app}>
            <Button label="Live App"
              className={styles.buttonLinks}
            />
          </a>
          <a href={props.content.links.code}>
            <Button label="See Code"
              className={styles.button}
            />
          </a>
          <p className={styles.roles}>Tech Stack: {props.content.stack}</p>
        </section>
      </div>
    );
}
