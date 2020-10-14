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

  const request = {
   "URL" : "https://bing-news-search1.p.rapidapi.com/news?mkt=en-US&safeSearch=Off&category=ScienceAndTechnology&textFormat=Raw",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
		"x-rapidapi-key": "b566ab13e3mshb2660fdb884e553p111656jsn03abd125b9e5",
		"x-bingapis-sdk": "true"
  }}
  

  useEffect(() => {
    fetch(request.URL, {headers:request.headers})
    .then(function(response) {
        return response.json();
    }).then((response) =>{
      const formattedActicles = response.value.map(ac =>({ ...ac, name: ac.name.replace(/%/gi, 'percent')}));
      setNews(formattedActicles);
    })
  },[])
  // var unirest = require("unirest");

  // var req = unirest("GET", "https://bing-news-search1.p.rapidapi.com/news");
  
  // req.query({
  //   "mkt": "en-US",
  //   "safeSearch": "Off",
  //   "category": "ScienceAndTechnology",
  //   "textFormat": "Raw"
  // });
  
  // req.headers({
  //   "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  //   "x-rapidapi-key": "b566ab13e3mshb2660fdb884e553p111656jsn03abd125b9e5",
  //   "x-bingapis-sdk": "true",
  //   "useQueryString": true
  // });
  
  
  // req.end(function (res) {
  //   if (res.error) throw new Error(res.error);
  
  //   console.log(res.body);
  // });
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
