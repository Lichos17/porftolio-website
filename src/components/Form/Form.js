import React from 'react'
import { Navbar } from '../common/NavBar';

export const Form = () => {

    return (
        <section className="form">
                <div className="container flex-column margin-auto">
                    <Navbar />

                    <form className="card-form margin-auto" name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true">
                        <div className="contact-form margin-auto">
                            <h2 className="text-center">Contact Me!</h2>
                            <p className="text-center">Good to see you here</p>
                            <div className="input-form">
                                <label htmlFor="name">Name</label>
                                <input autoComplete="off" id="name" name="name" type="text"/>
                            </div>
                            <div className="input-form">
                                <label htmlFor="Email">Email</label>
                                <input autoComplete="off" id="Email" name="email" type="text" />
                            </div>
                            <div className="input-form">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" ></textarea>
                            </div>

                            <div className="m-1">
                                <div data-netlify-recaptcha="true"></div>
                            </div>
            
                            <button type="submit" className="btn btn-form margin-auto">
                                Send It
                            </button>
                        </div>

                    </form>


                </div>

        </section>
    )
}
