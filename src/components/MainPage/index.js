import React from 'react';
import NewsBlock from '../NewsBlock';
import { NavLink } from 'react-router-dom';

const MainPage = props =>{
    return(
        <div className="main__block">
            <NewsBlock
            title={props.title}
            content= {props.content}
            handleCurrentNews={props.handleCurrentNews}
            />
            <NavLink to='/news' 
            className="main__link">
                Keep abreast of events
            </NavLink>
        </div>
    )
}

export default MainPage;