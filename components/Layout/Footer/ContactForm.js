
import React from 'react'

function ContactForm() {
    return (
        <form
            className="container"
            method="POST"
            name="contact-form"
            action="/"
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
            />
            <label htmlFor="company">Company *</label>
            <input id="company" name="company" required type="text" />
            <label htmlFor="email">E-mail Address *</label>
            <input id="email" type="email" name="email" required />
            <label htmlFor="message">Message *</label>
            <textarea id="message" name="message" required />
            <button type="submit">Submit</button>
        </form>
    )
}

export default ContactForm