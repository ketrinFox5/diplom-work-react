import React from 'react';
import PageTitle from '../PageTitle';
import DateNews from '../DateNews';
import { withRouter } from 'react-router-dom';
import Loader from '../Loader';

const NewsDetail = props => {
    const path = props.location.pathname.split("/");
    const urlTitle = path[path.length - 1];
    const currentNews = props.news && props.news.find(news => news.title === urlTitle);
    return currentNews ? (
        <div className="news__detail">
            <div className="news__info">
            <PageTitle
            title={currentNews.title}
            />
            <a href={currentNews.url} className="news__source" target="_blank">
                    {currentNews.source.name}
                </a>
                <DateNews
                time = {currentNews.publishedAt}
                />
            </div>
            <div className="news__content">
                <img src={currentNews.urlToImage} className="news__img"/>
                <p>
                    {currentNews.content}
                </p>
            </div>
        </div>
    ) : <Loader/>
}

export default withRouter (NewsDetail);