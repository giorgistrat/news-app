import React, { useState, useEffect } from 'react';
import NewsFormField from './Components/NewsFormField';
import News from './Components/News';
import NewsArticle from './Components/NewsArticle';
import NotFound from './Components/NotFound';
import { Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
import Spinner from 'react-bootstrap/Spinner';

const API_KEY = 'd01e0d3535a0470f90994aea83bf056d';


function App() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Apple');
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getNews()
  }, [query])

  const inputHandler = (e) => {
    setSearch(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setQuery(search)
    setSearch('')
    setLoading(false)
    console.log(news)
  }

  const getNews = async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2021-11-28&sortBy=popularity&apiKey=${API_KEY}`)
    const data = await response.json();
    setNews(data.articles)
    setLoading(true)
  }

  return (
    <div className={styles["App"]}>
      <div className={styles["news-container"]}>
        <h1 className={styles['news-logo']}>RSSCHOOL News</h1>
        <h3 className={styles['news-bar']}>NEWS</h3>
        <NewsFormField value={search} inputHandlerFunc={inputHandler} submitHandlerFunc={submitHandler} />
      </div>
      <div className={styles["news"]}>
        <Switch>
          <Route path='/' exact>
            {news.length === 0 && loading === true ? (<p className={styles['data-information']}>No information was found</p>) : ''}
            {loading ?
              (news.map((newsItem, i) => (
                <News key={i} id={i} title={newsItem.title} description={newsItem.description} image={newsItem.urlToImage} />
              )))
              : (<div className={styles['spinner-center']}>
                <Spinner animation="border" variant="warning" />
              </div>)}
          </Route>
          <Route path='/article/:id'>
            <NewsArticle newsArt={news} />
          </Route>
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
