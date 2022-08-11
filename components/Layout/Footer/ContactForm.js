
import React, { useState } from 'react'

function ContactForm() {
    const [submitterName, setSubmitterName] = useState("");
    return (
        <form
            className="container bg-lighter text-dark flex flex-col"
            method="POST"
            name="contact-form"
            action="contact/?success=true"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
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
                className='bg-light'
            />
            <label htmlFor="company">Company *</label>
            <input id="company" name="company" required type="text" className='bg-light' />
            <label htmlFor="email">E-mail Address *</label>
            <input id="email" type="email" name="email" required className='bg-light' />
            <label htmlFor="message">Message *</label>
            <textarea id="message" name="message" required className='bg-light' />


            <button type="submit">Submit</button>
        </form>
    )
}

export default ContactForm