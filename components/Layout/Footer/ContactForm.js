
import React, { useState } from 'react'
import { useRouter } from "next/router";


function ContactForm() {
    const [submitterName, setSubmitterName] = useState("");
    const router = useRouter();
    const confirmationScreenVisible =
        router.query?.success && router.query.success === "true";
    const formVisible = !confirmationScreenVisible;
    const Form = (
        <form
            className="container bg-lighter text-dark flex flex-col space-y-2"
            method="POST"
            name="contact-form"
            action="/?success=true"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            data-netlify-recaptcha="true"
        >
            <input
                type="hidden"
                name="subject"
                value={`You've got mail from ${submitterName}`}
            />
            <input type="hidden" name="form-name" value="contact-form" />
            <p hidden>
                <label>
                    Don’t fill this out: <input name="bot-field" />
                </label>
            </p>

            <label htmlFor="name">Name *</label>
            <input
                id="name"
                name="name"
                required
                onChange={(e) => setSubmitterName(e.target.value)}
                type="text"
                className='w-full bg-light  outline-none pl-4 pr-10 py-2  rounded-md focus:ring-2 focus:ring-accent-500'
            />
            <label htmlFor="email">Email *</label>
            <input
                id="email"
                type="email"
                name="email"
                required
                className='w-full bg-light  outline-none pl-4 pr-10 py-2  rounded-md focus:ring-2 focus:ring-accent-500'
            />

            <label htmlFor="message">Message *</label>
            <textarea
                id="message"
                name="message"
                required
                className='w-full min-h-[150px] bg-light outline-none pl-4 pr-10 py-2  rounded-md focus:ring-2 focus:ring-accent-500'
            />

            <div data-netlify-recaptcha="true"></div>
            <button type="submit" className='w-full bg-accent-500 hover:bg-accent-400 active:bg-accent-500 active:scale-95 transition-all ease-in-out py-4 rounded-lg text-white text-xl'>
                Submit
            </button>
        </form>
    )
    const ConfirmationMessage = (
        <React.Fragment>
            <p>
                Thank you for submitting this form. Someone should get back to you
                within 24-48 hours.
            </p>


        </React.Fragment>
    );
    return (

        <form
            className="container bg-lighter text-dark flex flex-col space-y-2"
            method="POST"
            name="contact-form"
            action="/?success=true"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            data-netlify-recaptcha="true"
        >
            <input
                type="hidden"
                name="subject"
                value={`You've got mail from ${submitterName}`}
            />
            <input type="hidden" name="form-name" value="contact-form" />
            <p hidden>
                <label>
                    Don’t fill this out: <input name="bot-field" />
                </label>
            </p>

            <label htmlFor="name">Name *</label>
            <input
                id="name"
                name="name"
                required
                onChange={(e) => setSubmitterName(e.target.value)}
                type="text"
                className='w-full bg-light  outline-none pl-4 pr-10 py-2  rounded-md focus:ring-2 focus:ring-accent-500'
            />
            <label htmlFor="email">Email *</label>
            <input
                id="email"
                type="email"
                name="email"
                required
                className='w-full bg-light  outline-none pl-4 pr-10 py-2  rounded-md focus:ring-2 focus:ring-accent-500'
            />

            <label htmlFor="message">Message *</label>
            <textarea
                id="message"
                name="message"
                required
                className='w-full min-h-[150px] bg-light outline-none pl-4 pr-10 py-2  rounded-md focus:ring-2 focus:ring-accent-500'
            />

            <div data-netlify-recaptcha="true"></div>
            <button type="submit" className='w-full bg-accent-500 hover:bg-accent-400 active:bg-accent-500 active:scale-95 transition-all ease-in-out py-4 rounded-lg text-white text-xl'>
                Submit
            </button>
        </form>


    )
}

export default ContactForm