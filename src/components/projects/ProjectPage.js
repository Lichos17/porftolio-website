import React from 'react'
import { allProjects } from '../../data/projects'
import { MediaCard } from '../common/MediaCard'
import { Navbar } from '../common/NavBar'

export const ProjectPage = () => {
    return (
        <div className="text-center">
            <Navbar
                styleAnchor="anchor-project"
            />
            <div className="margin-auto container">
                <h2 className="title">Projects</h2>
                <hr />

                <div className="flex-around" style={{flexWrap:'wrap'}}>
                    {
                        allProjects.map( project => (
                            <MediaCard 
                                { ...project }
                                key={ project.cardTitle }
                            />
                        ))
                    }
                </div>

            </div>

        </div>
    )
}
