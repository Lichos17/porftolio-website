import React from 'react'
import { allProjects } from '../../data/projects'
import { MediaCard } from '../common/MediaCard'



export const Projects = () => {
    return (
        <section id="projects" className="text-center m-1">
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
        </section>
    )
}
