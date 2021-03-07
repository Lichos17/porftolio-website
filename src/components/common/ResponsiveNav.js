import React from 'react';
import { ReactComponent as CloseMenu } from '../../assets/x.svg'
import { ReactComponent as MenuIcon } from '../../assets/menu.svg'

export const ResponsiveNav = ( { click,handleClick, closeMobileMenu } ) => {

    return (
        <div className="responsive-nav">
            <div className="logo-nav">
            <div className="logo-container">
                <a href="/">
                    <img alt="logo-img" src="https://res.cloudinary.com/dw8xidhnh/image/upload/v1614995155/portfolio/logo_xb8z47.png" className="logo" />
                </a>
            </div>
            <ul className={click ? "nav-options active" : "nav-options"}>
                <li className="option" onClick={closeMobileMenu}>
                    <a href="/">Home</a>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                    <a href="#about">About</a>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                    <a href="#projects">Projects</a>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            </div>
            <div className="mobile-menu" onClick={handleClick}>
            {click ? (
                <CloseMenu className="menu-icon" />
            ) : (
                <MenuIcon className="menu-icon" />
            )}
            </div>
        </div>
    )
}
