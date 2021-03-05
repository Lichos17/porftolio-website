import React from 'react'

export const AboutSection = () => {
    return (
        <section id={ 'about' }>
            <div className="container margin-auto text-center">
                <h2 className="title">About Me</h2>
                <hr />
                <div className="about-content flex-around">
                    <div className="about-img">
                        <img src="./assets/img/f10-min.png" alt="lichos" />
                    </div>
                    <div className="about-text flex-column">
                        <p> I am 21 years old. Actuary student at Universidad Autonoma de Yucatán and self-taught web development student currently studying React.
                            My philosophy is never stop learning and my main motivation is to learn new things day by day, searching new experiences in order to be a better professional and person in the future</p>
                        <button className="btn btn-about m-1" type="submit">My Resume</button>
                    </div>
                </div>
            </div>
        </section>

    )
}
