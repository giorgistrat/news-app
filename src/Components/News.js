import React from 'react';
import { Link } from 'react-router-dom';
import styles from './News.module.css';

function News({ title, description, image, id }) {
    return (
        <div className={styles['news-section']}>
            <div className={styles['news-image']}>
                <img className={styles['news-image__img']} src={image} alt="" />
            </div>
            <div className={styles['news-details']}>
                <h2 className={styles['news-details__title']}>{title}</h2>
                <p className={styles['news-details__desc']}>{description}</p>
                <Link to={`/article/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <p className={styles['news-details__read']}>Read More</p>
                </Link>
            </div>
        </div >
    )
}

export default News