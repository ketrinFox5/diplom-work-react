import React, { useState, useEffect } from 'react';
import {Route, NavLink} from 'react-router-dom';
import NewsBlock from './components/NewsBlock/index';
import Contacts from './components/Contacts';
import MainPage from './components/MainPage';
import NewsDetail from './components/NewsDetail';

const  App=() => {

  const [news, setNews] = useState([]);


  const newsMain = news.filter((item, index) => {
    return index < 6 ?  item : null
  })

  const url = 'http://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=9babfe25f9334478ab5fa17bf649ffef';
  

  useEffect(() => {
    fetch(url)
    .then(function(response) {
        return response.json();
    }).then((response) =>{
      setNews(response.articles);
    })
  },[url])

  return (
    <div className="App">

      <Route
        path='/'
        exact
        component={()=><MainPage
          title='Всегда
          свежие новости'
          content={newsMain}
        />}
        />
        <Route
        path='/news'
        exact
        component={()=><NewsBlock
          title="Быть 
          в курсе событий"
          content={news}
        />}
        />
        <Route
        path='/contacts'
        exact
        component={Contacts}
        />
        <Route
        path='/news/:id'
        exact
        component={()=><NewsDetail
        news = {news}
        />}
        />
    </div>
  );
}

export default App;
