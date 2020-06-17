import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return(
        <footer className="footer">
            <NavLink
            to="/"
            className="logo"
             >
                Новостник
                <span>
                    Single Page Application
                </span>
            </NavLink>
            <p>
                Дипломный проект
            </p>
            <p className="logo">
                <span className="text-right">
                    Made by
                </span>
                Катерина Кашлева
            </p>
        </footer>
    )
}

export default Footer;