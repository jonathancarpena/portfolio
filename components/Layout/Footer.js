import { useState } from 'react'

// Framer
import { motion } from 'framer-motion'


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
            id='contact' className='bg-accent-500 font-sans px-10  min-h-screen flex justify-center items-center w-full relative lg:px-36'>


            <motion.section
                variants={contactContainer}
                className='z-20 text-white flex flex-col justify-center items-center space-y-10 lg:px-96 lg:py-36'>


                {/* Header */}
                <div className='w-max relative  flex flex-col justify-center items-center space-y-2 lg:space-y-0'>
                    <motion.h2
                        variants={header}
                        className='text-5xl p-3  text-accent-500 font-bold uppercase rounded-xl  bg-lighter   lg:text-[6rem] lg:px-3'>
                        Get In Touch
                    </motion.h2>

                    <motion.p
                        variants={header}
                        className='flex flex-col text-[1.5rem] text-center rounded-xl text-white  font-semibold  uppercase lg:space-x-2 lg:flex-row lg:text-[2rem]'>
                        <span>Don't Hesitate. </span>
                        <span>My Inbox is always open!</span>
                    </motion.p>
                </div>

                <form className='text-dark'>
                    <input />
                </form>



                <motion.h3
                    variants={header}
                    className=' font-semibold text-sm bottom-5 lg:text-xl text-lighter absolute lg:bottom-10'>
                    DESIGNED BY JONATHAN CARPENA
                </motion.h3>
            </motion.section>



        </motion.footer>
    )
}

export default Footer