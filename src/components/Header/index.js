import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return(
        <header className="header">
            <NavLink
            to="/"
            className="logo"
             >
                Новостник
            </NavLink>
            <ul className='menu'>
                <li className="menu__item">
                <NavLink 
                to="/"
                exact
                className="menu__link"
                activeClassName={'menu__link_active'}
                >
                    Главная
                </NavLink>
                </li>
                <li className="menu__item">
                <NavLink 
                to="/news"
                className="menu__link"
                activeClassName={'menu__link_active'}
                >
                    Новости
                </NavLink>
                </li>
                <li className="menu__item">
                <NavLink 
                to="/contacts"
                className="menu__link"
                activeClassName={'menu__link_active'}
                >
                    Контакты
                </NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Header;