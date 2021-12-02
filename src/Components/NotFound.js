import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

function NotFound() {
    return (
        <div className={styles["error-container"]}>
            <h2 className={styles["error-container__title"]}>Ooops!</h2>
            <h1 className={styles["error-container__para"]}>404 - Page Not Found</h1>
            <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}>
                <button className={styles["error-container__btn"]}>Go To Homepage</button>
            </Link>
        </div >
    )
}

export default NotFound;