import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './NewsArticle.module.css';


function NewsArticle(props) {
    const params = useParams();

    return (
        <div>
            <div className={styles["news-article"]}>
                <div className={styles["news-img-container"]}>
                    <img className={styles["news-img-container__image"]} src={props.newsArt[params.id].urlToImage} alt={props.newsArt[params.id].title}></img>
                </div>
                <div className={styles["news-description"]}>
                    <h2 className={styles["news-description__title"]}>{props.newsArt[params.id].title}</h2>
                    <p className={styles["news-description__content"]}>{props.newsArt[params.id].content}</p>
                    <div className={styles["news-back"]}>
                        <p className={styles["news-back__date"]}>{props.newsArt[params.id].publishedAt}</p>
                        <Link to='/' style={{ textDecoration: 'none', fontWeight: 'bold', textTransform: 'uppercase' }}><p>Go To Homepage</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsArticle;