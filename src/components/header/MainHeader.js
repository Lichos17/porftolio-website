import React from 'react'
import { Navbar } from '../common/NavBar'
import { MainContent } from './MainContent'

export const MainHeader = () => {
    return (
        <header className="main-header" style={{background: "url('./assets/img/f9-min.jpg') no-repeat center center / cover"}}>
            <div className="container main-content flex-column margin-auto">
                <Navbar />
                <MainContent />
            </div>
        </header>
    )
}
