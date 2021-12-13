import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    return (
        <div className={styles.navcontainer}>
                <p>Logo</p>
                <p>Titre</p>
                <p>Connexion</p>
        </div>
    )
}
