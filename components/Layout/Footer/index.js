import { useState } from 'react'


// Framer
import { motion } from 'framer-motion'

// Icons
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'

// Components
import Popover from '../Popover'



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
                        <a href="https://github.com/jonathancarpena" target="_blank" rel="noopener noreferrer" className='flex items-end  text-lg md:text-xl space-x-2 md:space-x-5'>
                            <FiGithub className=' text-[3rem] h-[40px] md:h-[45px]' />
                            <p className='flex-1 flex items-center font-semibold bg-lighter text-accent-500 px-2 h-[45px] rounded-md'>/jonathancarpena</p>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/in/jonathan-carpena-582873196/" target="_blank" rel="noopener noreferrer" className='flex items-end  text-lg md:text-xl space-x-2 md:space-x-5'>
                            <FiLinkedin className=' text-[3rem] h-[40px] md:h-[45px]' />
                            <p className='flex-1 flex items-center font-semibold bg-lighter text-accent-500 px-2 h-[45px] rounded-md'>/jonathancarpena</p>
                        </a>
                    </li>
                    <li className='hidden md:block'>
                        <Popover long={true} className='w-max flex items-end  text-xl space-x-2 md:space-x-5'>
                            <FiMail className='text-[3rem] h-[40px] md:h-[45px]' />
                            <p className=' flex-1 flex items-center font-semibold bg-lighter text-accent-500 px-2 h-[45px] rounded-md'>jonathancarpena01@gmail.com</p>
                        </Popover>
                    </li>
                    <li className=' md:hidden'>
                        <Popover long={true} mobile={true} position="bottom" className='w-max flex items-end  text-lg md:text-xl space-x-2 md:space-x-5 '>
                            <FiMail className='text-[3rem] h-[40px] md:h-[45px]' />
                            <p className=' flex-1 flex items-center font-semibold bg-lighter text-accent-500 px-2 h-[45px] rounded-md'>jonathancarpena01@gmail.com</p>
                        </Popover>
                    </li>
                </ul>

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