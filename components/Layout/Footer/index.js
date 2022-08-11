import { useState } from 'react'


// Framer
import { motion } from 'framer-motion'

// Icons
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'
import { IoMdCloseCircle } from 'react-icons/io'

// Components
import Popover from '../Popover'



function FormInput({ type = "text", placeholder = "", label, value, setValue, icon }) {

    return (

        <p className={`pt-7 cursor-text relative text-lg w-full `}>
            <label htmlFor={label} className="">
                <div className='absolute top-0 flex space-x-1.5 items-center capitalize'>
                    <span className=''>{icon}</span>
                    <span>{label}</span>
                </div>

                {type === "textarea"
                    ? <textarea
                        id={label}
                        name={label}
                        value={value}
                        placeholder={placeholder}
                        onChange={(e) => setValue(e.target.value)}
                        className='w-full min-h-[150px] bg-light outline-none pl-4 pr-10 py-2  rounded-md focus:ring-2 focus:ring-accent-500'
                    />
                    : <input
                        type={type}
                        id={label}
                        name={label}
                        value={value}
                        placeholder={placeholder}
                        onChange={(e) => setValue(e.target.value)}
                        className='w-full bg-light  outline-none pl-4 pr-10 py-2  rounded-md focus:ring-2 focus:ring-accent-500'
                    />
                }


                <button
                    onClick={() => setValue('')}
                    type="button" className='cursor-pointer hover:text-neutral-600 absolute right-3 bottom-3 text-xl text-neutral-500'>
                    <IoMdCloseCircle />
                </button>

            </label>
        </p>
    )
}

function Footer() {
    const mainContainer = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 1
            }
        }
    }

    const header = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 }
    }

    const contactContainer = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5
            }
        },

    }

    return (
        <motion.footer
            variants={mainContainer}
            initial="initial"
            animate="animate"
            id='contact' className='bg-accent-500 font-sans   min-h-screen flex justify-center items-center w-full relative lg:px-36'>


            <motion.section
                variants={contactContainer}
                className='z-20 text-white flex flex-col justify-center items-center space-y-10 lg:px-96 lg:py-36'>


                {/* Header */}
                <div className='w-full relative  flex flex-col justify-center items-center space-y-2 lg:space-y-0'>
                    <motion.h2
                        variants={header}
                        className='text-5xl p-3  text-accent-500 font-bold uppercase rounded-xl  bg-lighter   lg:text-[6rem] lg:px-3'>
                        Get In Touch
                    </motion.h2>

                    <motion.p
                        variants={header}
                        className='flex flex-col text-[1.5rem] text-center rounded-xl text-white  font-semibold  uppercase lg:space-x-2 lg:flex-row lg:text-[2rem]'>
                        <span>{`Don't Hesitate. `}</span>
                        <span>My Inbox is always open!</span>
                    </motion.p>
                </div>

                <ul className='flex flex-col space-y-5'>
                    <li>
                        <a href="https://github.com/jonathancarpena" target="_blank" rel="noopener noreferrer" className='flex items-end  text-xl space-x-5'>
                            <FiGithub className=' text-[3rem] h-[45px]' />
                            <p className='flex-1 flex items-center font-semibold bg-lighter text-accent-500 px-2 h-[45px] rounded-md'>/jonathancarpena</p>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/in/jonathan-carpena-582873196/" target="_blank" rel="noopener noreferrer" className='flex items-end  text-xl space-x-5'>
                            <FiLinkedin className=' text-[3rem] h-[45px]' />
                            <p className='flex-1 flex items-center font-semibold bg-lighter text-accent-500 px-2 h-[45px] rounded-md'>/jonathancarpena</p>
                        </a>

                    </li>
                    <li >
                        <Popover long={true} className='w-max flex items-end  text-xl space-x-5 '>
                            <FiMail className='text-[3rem] h-[45px]' />
                            <p className=' flex-1 flex items-center font-semibold bg-lighter text-accent-500 px-2 h-[45px] rounded-md'>jonathancarpena01@gmail.com</p>
                        </Popover>
                    </li>



                </ul>





                {/* <form
                    name="contactForm"
                    method="POST"
                    data-netlify="true"
                    action="/success"
                    // data-netlify-honeypot="bot-field"
                    className='w-full flex flex-col space-y-7 text-dark px-5  pt-1 pb-5 lg:px-10 lg:pb-10 lg:pt-1 rounded-xl bg-lighter'>

                    <input type="hidden" name="form-name" value="contactForm" />

                    <p>
                        <label htmlFor='nameForm'>Name</label>
                        <input type="text" id="nameForm" name="nameForm" />
                    </p>
                    <p>
                        <label htmlFor='emailForm'>Email</label>
                        <input type="email" id="emailForm" name="emailForm" />
                    </p>
                    <p>
                        <label htmlFor='messageForm'>Message</label>
                        <textarea id="messageForm" name="messageForm" />
                    </p> */}
                {/* 

                    <FormInput
                        type="text"
                        label={'name'}
                        value={name}
                        setValue={setName}
                        icon={<FiUser />}
                        placeholder=""
                    />

                    <FormInput
                        type="email"
                        label={'email'}
                        value={email}
                        setValue={setEmail}
                        icon={<FiMail />}
                        placeholder=""
                    />

                    <FormInput
                        type="textarea"
                        label={'message'}
                        value={message}
                        setValue={setMessage}
                        icon={<FiMessageSquare />}
                        placeholder=""
                    /> */}

                {/* <div data-netlify-recaptcha="true" ></div> */}
                {/* <p className=''>
                        <button
                            type="submit"
                            className='w-full bg-accent-500 hover:bg-accent-400 active:bg-accent-500 active:scale-95 transition-all ease-in-out py-4 rounded-lg text-white text-xl'>
                            Submit
                        </button>
                    </p> */}



                {/* </form> */}





                <motion.span
                    variants={header}
                    className=' font-semibold text-sm bottom-5 lg:text-xl text-lighter absolute lg:bottom-10'>
                    DESIGNED BY JONATHAN CARPENA
                </motion.span>
            </motion.section>



        </motion.footer>
    )
}

export default Footer