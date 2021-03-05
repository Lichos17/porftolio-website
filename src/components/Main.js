import React, { Fragment } from 'react'
import { AboutSection } from './about/AboutSection'
import { Footer } from './footer/Footer'
import { MainHeader } from './header/MainHeader'
import { Projects } from './projects/Projects'

export const Main = () => {
    return (
        <Fragment>
            <MainHeader />
            <AboutSection />
            <Projects />
            <Footer />
        </Fragment>
    )
}
