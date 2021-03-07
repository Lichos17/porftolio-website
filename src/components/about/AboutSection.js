import React from 'react'

export const AboutSection = () => {

    const handleSubmit = ( e ) => {
        e.preventDefault();
        window.open('https://drive.google.com/file/d/1sUDVd-O7Y2QoODBYzCnJB4kx_FSM7S-V/view', "_blank");
    }

    return (
        <section id={ 'about' }>
            <div className="container margin-auto text-center">
                <h2 className="title">About Me</h2>
                 <hr />
                <div className="m-1 flex-around about-content">
                    <div className="about-img">
                        <img src="https://res.cloudinary.com/dw8xidhnh/image/upload/v1614995164/portfolio/f10-min_hapoxt.jpg" alt="lichos" />
                    </div>
                    <div className="about-text flex-column">
                        <p> I am 21 years old. Actuary student at Universidad Autonoma de Yucatán and self-taught web development student currently studying React.
                            My philosophy is never stop learning and my main motivation is to learn new things day by day, searching new experiences in order to be a better professional and person in the future</p>
                        <button className="btn btn-about m-1" type="submit" onClick={ handleSubmit }>My Resume</button>
                    </div>
                </div>
            </div>
        </section>

    )
}
