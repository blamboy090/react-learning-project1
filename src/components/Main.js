import React from 'react';
import styles from './Main.module.css';

function Main() {
    return (
        <main className={styles.main}>
        <h1 className={styles.mainTitle}>Fun facts about React</h1>
        <ul className={styles.mainFacts}>
            <li>Was first realeased in 2013</li>
            <li>Was origionally created by Jordan Walke</li>
            <li>Has well over 100k stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousand of enterprise apps, including mobile apps</li>
        </ul>
        </main>
    )
}
export default Main;