import { useState, useEffect } from 'react'

// Hooks
import useScroll from '../../lib/hooks/useScroll';

// Context
import { useDarkMode, useToggleDarkMode } from '../../lib/context/ThemeProvider';

// Framer
import { motion } from "framer-motion";

// Icons
import { FiMoon, FiSun, FiLinkedin, FiMail, FiGithub } from 'react-icons/fi'


function InteractButtons() {
    const darkMode = useDarkMode()
    const toggleDarkMode = useToggleDarkMode()
    const scroll = useScroll()
    const [bottomPortion, setBottomPortion] = useState(null)
    useEffect(() => {
        if (bottomPortion === null) {
            setBottomPortion(document.body.scrollHeight - (1002 * 2.3))
        }

    }, [bottomPortion])




    const button = {
        initial: { opacity: 0, x: -25 },
        animate: {
            opacity: 1, x: 0,
            transition: {
                easeIn: "easeInOut"
            }
        },
        exit: {
            opacity: 0, x: -25,
            transition: {
                easeIn: "easeInOut"
            }
        },
    }


    return (
        <>



            <motion.div
                variants={button}
                initial="initial"
                animate="animate"
                exit="exit"
                className='z-[99] flex flex-col items-center space-y-10 fixed bottom-5 lg:bottom-0 left-5'
            >

                <button
                    className={`${darkMode ? 'bg-dark' : 'bg-lighter'}  outline-none flex items-center justify-center cursor-pointer z-[60]   w-[50px] h-[50px] rounded-xl hover:scale-110  active:scale-90 transition-all ease-in-out`}
                    onClick={toggleDarkMode}>
                    {darkMode
                        ? <FiMoon className='text-light text-[2rem]' />
                        : <FiSun className='text-dark text-[2rem]' />
                    }
                </button>
                <ul
                    className={` hidden lg:flex flex-col items-end  space-y-10  ${darkMode ? 'text-lighter' : 'text-dark'}`}>
                    <a href="" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'bg-dark' : 'bg-lighter'}  outline-none flex items-center justify-center cursor-pointer z-[60]   w-[50px] h-[50px] rounded-xl hover:scale-110  active:scale-90 transition-all ease-in-out`}>
                        <FiMail className='text-[2rem]' />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'bg-dark' : 'bg-lighter'}  outline-none flex items-center justify-center cursor-pointer z-[60]   w-[50px] h-[50px] rounded-xl hover:scale-110 active:scale-90 transition-all ease-in-out`}>
                        <FiLinkedin className='text-[2rem]' />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'bg-dark' : 'bg-lighter'}  outline-none flex items-center justify-center cursor-pointer z-[60]   w-[50px] h-[50px] rounded-xl hover:scale-110  active:scale-90 transition-all ease-in-out`}>
                        <FiGithub className='text-[2rem]' />
                    </a>

                    <div className={`h-[6rem] border-l-2 w-[1.5rem] ${darkMode ? `border-l-lighter` : `${scroll > bottomPortion ? 'border-l-white' : 'border-l-dark'} `}`}></div>

                </ul>
            </motion.div>


        </>


    )
}

export default InteractButtons