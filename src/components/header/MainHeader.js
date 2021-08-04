import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive'

import { Navbar } from '../common/NavBar';
import { MainContent } from './MainContent';
import { ResponsiveNav } from '../common/ResponsiveNav';



export const MainHeader = () => {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1022px)' });
    const isPortrait = useMediaQuery({ orientation: 'landscape' })


    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <header className={ `main-header ${ !click && 'display-header'}` } style={{background: "url('https://res.cloudinary.com/dw8xidhnh/image/upload/v1628098005/portfolio/oia43tw8gt730tnspwuc.jpg') no-repeat center center / cover"}}>
            <div className="container main-content flex-column margin-auto">
                { (isTabletOrMobile || ( isTabletOrMobile && isPortrait)) 
                 ? (   <ResponsiveNav 
                        click={ click }
                        setClick={ setClick }
                        handleClick={handleClick}
                        closeMobileMenu={closeMobileMenu}                    

                    />)
                : (
                    <Navbar />
                )
            
            }
                <MainContent />
            </div>
        </header>
    )
}
