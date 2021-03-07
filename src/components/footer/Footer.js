import React from 'react';

export const Footer = () => {
    return (
        <section id="footer" className="flex-column align-center">
            <p>&copy; 2021 lichosmx</p>
            <div className="footer-icons">
                <a href="https://github.com/Lichos17"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/lichosmx/"><i className="fab fa-linkedin"></i></a>
            </div>
            <ul className="navigation">
                <li> <a href="/">Home</a></li>
                <li> <a href="#about">About</a></li>
                <li> <a href="#projects">Projects</a></li>
                <li> <a href="#contact">Contact</a></li>
            </ul>
        </section>
    )
}
