import React from 'react'

export const AboutSection = () => {

    const handleSubmit = ( e ) => {
        e.preventDefault();
        window.open('https://drive.google.com/file/d/1Rb7waMZZpiN20WZ_H0jcnDvTt-fES5AY/view?usp=sharing', "_blank");
    }

    return (
        <section id={ 'about' }>
            <div className="container margin-auto text-center">
                <h2 className="title">About Me</h2>
                 <hr />
                <div className="m-1 flex-around about-content">
                    <div className="about-img">
                        <img src="https://res.cloudinary.com/dw8xidhnh/image/upload/v1628098054/portfolio/dhecxe3y66xditrorveo.jpg" alt="lichos" />
                    </div>
                    <div className="about-text flex-column">
                        <p> I am 21 years old. Computer Science student at Universidad Autonoma de Yucatán and self-taught web development student currently studying React.
                            My philosophy is never stop learning and my main motivation is to learn new things day by day, searching new experiences in order to be a better professional and person in the future</p>
                        <button className="btn btn-about m-1" type="submit" onClick={ handleSubmit }>My Resume</button>
                    </div>
                </div>
            </div>
        </section>

    )
}
