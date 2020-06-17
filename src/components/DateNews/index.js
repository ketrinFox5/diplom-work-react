import React from 'react';

const DateNews = props => {

    const  addZero = number => {
        return number < 10 ? '0' + number : number;
    }

    const date = Date.parse(props.time);
    const dateObj = new Date(date);
    const month = addZero(dateObj.getMonth());
    const day = addZero(dateObj.getDate());

    return(
        <div className="news__date">
                    <span>{day}</span>/<span>{month}</span>
                </div>
    )
}

export default DateNews;