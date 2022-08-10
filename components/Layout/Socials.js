import React from 'react'

// Framer
import { motion } from 'framer-motion'

// Icons
import { FiLinkedin, FiMail, FiGithub } from 'react-icons/fi'



function Socials() {
    const header = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 }
    }
    return (
        <motion.ul
            variants={header}
            className='relative top-10 flex flex-row-reverse lg:flex-row  w-full justify-evenly text-accent-500 '>
            <a href="" target="_blank" className=''>
                <span className='bg-white h-[80px] w-[80px] lg:h-[110px] lg:w-[110px] rounded-xl hover:scale-110 active:scale-95 transition-all ease-in-out flex items-center justify-center  flex-col uppercase'>
                    <FiMail className=' text-[2.5rem] h-[42px] lg:h-[57px] lg:text-[3rem]' />
                    <span className='text-sm lg:text-base'>Email</span>
                </span>
            </a>

            <a href="" target="_blank" className=' '>
                <span className='bg-white h-[80px] w-[80px] lg:h-[110px] lg:w-[110px] rounded-xl hover:scale-110 active:scale-95 transition-all ease-in-out flex items-center justify-center flex-col uppercase'>
                    <FiLinkedin className='text-[2.5rem] h-[42px] lg:h-[57px] lg:text-[3rem]' />
                    <span className='text-sm lg:text-base'>LinkedIn</span>
                </span>
            </a>

            <a href="" target="_blank" className=''>
                <span className='bg-white h-[80px] w-[80px] lg:h-[110px] lg:w-[110px] rounded-xl hover:scale-110 active:scale-95 transition-all ease-in-out flex items-center justify-center flex-col uppercase'>
                    <FiGithub className='text-[2rem] h-[42px] lg:h-[57px] lg:text-[3rem]' />
                    <span className='text-sm lg:text-base'>Github</span>
                </span>
            </a>


        </motion.ul>
    )
}

export default Socials