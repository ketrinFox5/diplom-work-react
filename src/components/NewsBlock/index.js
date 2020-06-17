import React from 'react';
import  PageTitle  from '../PageTitle/index';
import NewsItem from '../NewsItem';
import Loader from '../Loader';



const NewsBlock = props => {
    return props.content.length ? (
        <div className='news__block'>
            <PageTitle
                title={props.title}
            />
            <div className="news__items">
            {props.content.map(item => {
                return(
                    <NewsItem
                    key = {item.title}
                    item={item}
                    />  
                )
            })}
            </div>
        </div>
    ) : <Loader/>
}

export default NewsBlock;