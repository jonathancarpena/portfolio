import { useState } from 'react'
import Section from './Section'

import { FiUser, FiMail, FiMessageCircle } from 'react-icons/fi'

function Contact() {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        message: ''
    })
    return (
        <Section>
            <div className='flex justify-center items-center '>
                <form
                    className=" bg-white drop-shadow-xl flex flex-col w-1/2  p-5 rounded-md"
                    method="POST"
                    name="contact-form"
                    action={`contact/?success=true`}
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                // data-netlify-recaptcha="true"
                >
                    <input
                        type="hidden"
                        name="subject"
                        value={`You've got mail from ${inputs.name}`}
                    />
                    <input type="hidden" name="form-name" value="contact-form" />
                    <p hidden>
                        <label>
                            Dont fill this out: <input name="bot-field" />
                        </label>
                    </p>

                    <label htmlFor="name" className="flex items-center space-x-1.5 mb-1 text-lg">
                        <FiUser />
                        <span>Name</span>
                    </label>

                    <input
                        id="name"
                        name="name"
                        required
                        onChange={(e) => setSubmitterName(e.target.value)}
                        type="text"
                        className={`bg-gray-100 focus:bg-lighter mb-5 w-full   outline-none pl-4 pr-10 py-2  rounded-md focus:ring-2 focus:ring-accent-500`}
                    />

                    <label htmlFor="email" className=" flex items-center space-x-1.5  mb-1 text-lg">
                        <FiMail />
                        <span>Email</span>
                    </label>

                    <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        className={` mb-5 w-full   outline-none pl-4 pr-10 py-2  rounded-md focus:ring-2 focus:ring-accent-500`}
                    />

                    <label htmlFor="message" className=" flex items-center space-x-1.5 mb-1 text-lg">
                        <FiMessageCircle />
                        <span>Message</span>
                    </label>

                    <textarea
                        id="message"
                        name="message"
                        required
                        className='mb-5 w-full min-h-[150px] text-dark bg-light focus:bg-lighter outline-none pl-4 pr-10 py-2  rounded-md focus:ring-2 focus:ring-accent-500'
                    />
                    {/* <div data-netlify-recaptcha="true"></div> */}
                    <button type="submit" className='w-full bg-accent-700 hover:bg-accent-400 active:bg-accent-700 active:scale-95 transition-all ease-in-out py-4 rounded-lg text-white text-xl'>Submit</button>
                </form>
            </div>

        </Section>
    )
}

export default Contact