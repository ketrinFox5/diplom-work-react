import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return(
        <header className="header">
            <NavLink
            to="/"
            className="logo"
             >
                News Portal
            </NavLink>
            <ul className='menu'>
                <li className="menu__item">
                <NavLink 
                to="/"
                exact
                className="menu__link"
                activeClassName={'menu__link_active'}
                >
                    Main
                </NavLink>
                </li>
                <li className="menu__item">
                <NavLink 
                to="/news"
                className="menu__link"
                activeClassName={'menu__link_active'}
                >
                    News
                </NavLink>
                </li>
                <li className="menu__item">
                <NavLink 
                to="/contacts"
                className="menu__link"
                activeClassName={'menu__link_active'}
                >
                    Contacts
                </NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Header;