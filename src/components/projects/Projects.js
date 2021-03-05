import React from 'react'
import { projectsMain } from '../../data/projects'
import { MediaCard } from '../common/MediaCard'
import { MediaCardShow } from '../common/MediaCardShow'



export const Projects = () => {
    return (
        <section className="text-center m-1">
            <div className="margin-auto container">
                <h2 className="title">Projects</h2>
                <hr />


                <div className="flex-around" style={{flexWrap:'wrap'}}>
                    {
                        projectsMain.map( project => (
                            <MediaCard 
                                { ...project }
                                key={ project.cardTitle }
                            />
                        ))
                    }
                    <MediaCardShow />
                </div>

            </div>
        </section>
    )
}
