import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return(
        <footer className="footer">
            <NavLink
            to="/"
            className="logo"
             >
                News Portal
                <span>
                    Single Page Application
                </span>
            </NavLink>
            <p>
                Diplom work
            </p>
            <p className="logo">
                <span className="text-right">
                    Made by
                </span>
                Katerina Kashleva
            </p>
        </footer>
    )
}

export default Footer;