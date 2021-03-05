import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink  } from 'react-router-hash-link';

export const Footer = () => {
    return (
        <section id="footer" className="flex-column align-center">
            <p>&copy; 2021 lichosmx</p>
            <div className="footer-icons">
                <a href="https://github.com/Lichos17"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/lichosmx/"><i className="fab fa-linkedin"></i></a>
            </div>
            <ul className="navigation">
                <li> <Link to="/">Home</Link></li>
                <li> <HashLink to="#about">About</HashLink></li>
                <li> <Link to="/projects">Projects</Link></li>
                <li> <Link to="/contact">Contact</Link></li>
            </ul>
        </section>
    )
}
