import React from 'react';
import styles from './NewsFormField.module.css';

function NewsFormField(props) {
    return (
        <div className={styles['form-container']}>
            <form className={styles['news-form']} onSubmit={props.submitHandlerFunc}>
                <input className={styles['news-form__field']} type="text" placeholder='Title' value={props.value} onChange={props.inputHandlerFunc} />
                <button className={styles['news-form__btn']}>Search</button>
            </form>
        </div>
    )
}

export default NewsFormField;