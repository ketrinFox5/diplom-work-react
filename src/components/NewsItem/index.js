import React from 'react';
import { NavLink } from 'react-router-dom';
import DateNews from '../DateNews';

const NewsItem = props => { 

    return(
        <div className="news__item">
            <h4 className="news__title">
                <NavLink to={`/news/${props.item.name}`} >
                    {props.item.name}
                </NavLink>
            </h4>
            <div className="news__footer">
                <a href={props.item.url} className="news__source" target="_blank">
                    {props.item.provider[0].name}
                </a>
                <DateNews
                time = {props.item.datePublished}
                />
            </div>
        </div>
    )
}

export default NewsItem;