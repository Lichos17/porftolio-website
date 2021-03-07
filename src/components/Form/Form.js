import React from 'react';

export const Form = () => {

    return (
        <section id={ 'contact' }>
            <div className="container margin-auto text-center">
                <h2 className="title">Contact</h2>
                <hr />

                <div className="m-2 flex-around contact-content">
                    <div className="contact-message">
                        <h3 className="text-bold">Important!</h3>
                        <p>Currently, I'm still working on my backend to implement a native way to make form submissions. <br /> <br /> While I'm working on it, you can contact me through my social media or fill the form in the following options. <br /> <br /> <span className="text-bold"> All my apologies</span></p>
                    </div>
                    <div className="contact-media flex-column">
                        <a className="contact text-bold contact-mail m-1" type="button" href="mailto:luissazp1@gmail.com"><i className="fas fa-envelope-square fa-2x"></i>&nbsp; luissazp1@gmail.com</a>
                        <a className="contact text-bold contact-linkedin m-1" type="button" href="https://www.linkedin.com/in/lichosmx/"><i className="fab fa-linkedin fa-2x"></i>&nbsp; Click to Linkedin</a>
                        <a className="contact text-bold contact-form m-1" type="button" href="https://forms.gle/TyJ3JXx3xh8U3muC7"><i className="fas fa-user-tie fa-2x"></i>&nbsp; Fill this form</a>
                    </div>
                </div>

            </div>
        </section>
    )
}
