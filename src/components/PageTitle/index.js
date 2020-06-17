import React from 'react';

const PageTitle = props => {
    const splitedTitle = props.title.split(' ');
    const titleFirst = splitedTitle[0];
    const titleStart = splitedTitle.slice(1, splitedTitle.length - 1).join(' ');
    const titleEnd = splitedTitle[splitedTitle.length - 1];
    return(
        <h1 className="title">
            <span className="title__start">{titleFirst} </span>
            {titleStart} <span>{titleEnd}</span>  
        </h1>
    )
}

export default PageTitle;