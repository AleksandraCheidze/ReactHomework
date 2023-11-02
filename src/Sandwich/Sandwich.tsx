import React, { useState } from 'react';
import styles from './Sandwich.module.css';

export default function Sandwich(): JSX.Element {
    const [sandwich, setSandwich] = useState<string>('Sandwich:');
    function handleAddCheese(): void {
        setSandwich(`${sandwich} cheese `);
    }
    function handleAddBread(): void {
        setSandwich(`${sandwich} bread `);
    }
    function handleAddHam(): void {
        setSandwich(`${sandwich} ham `);
    }

    return (
        <div className={styles.container}>
            <h1>Sandwich</h1>
            <p>{sandwich}</p>
            <div className={styles.buttons}>
                <button type="button" onClick={handleAddCheese}>Add cheese</button>
                <button type="button" onClick={handleAddBread}>Add bread</button>
                <button type="button" onClick={handleAddHam}>Add ham</button>
            </div>
            <img src="https://www.koch-mit.de/app/uploads/2022/10/club-sandwich1.jpg" className={styles.image} alt="" />
        </div>
    );
}
