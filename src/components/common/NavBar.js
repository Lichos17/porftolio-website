import React from 'react';

export const Navbar = ( { styleAnchor } ) => {
    return (
        <nav className="navbar align-center">
            <ul className="navigation flex-around">
                <li> <a className={ styleAnchor && `${styleAnchor}` }  href="/">Home</a></li>
                <li> <a className={ styleAnchor && `${styleAnchor}` } href="#about">About</a></li>
                <img className="nav-img" src="https://res.cloudinary.com/dw8xidhnh/image/upload/v1614995155/portfolio/logo_xb8z47.png" alt="logo" />
                <li> <a className={ styleAnchor && `${styleAnchor}` } href="#projects">Projects</a></li>
                <li> <a className={ styleAnchor && `${styleAnchor}` } href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}
