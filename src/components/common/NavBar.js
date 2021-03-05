import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink  } from 'react-router-hash-link';

export const Navbar = ( { styleAnchor } ) => {
    return (
        <nav className="navbar align-center">
            <ul className="navigation flex-around">
                <li> <Link className={ styleAnchor && `${styleAnchor}` }  to="/">Home</Link></li>
                <li> <HashLink className={ styleAnchor && `${styleAnchor}` } to="/#about">About</HashLink></li>
                <img className="nav-img" src="./assets/img/logo.png" alt="logo" />
                <li> <Link className={ styleAnchor && `${styleAnchor}` } to="/projects">Projects</Link></li>
                <li> <Link className={ styleAnchor && `${styleAnchor}` } to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}
