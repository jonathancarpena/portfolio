import { useState, useEffect } from 'react'

// Hooks
import useScroll from '../../lib/hooks/useScroll';

// Context
import { useDarkMode, useToggleDarkMode } from '../../lib/context/ThemeProvider';

// Framer
import { motion, AnimatePresence } from "framer-motion";

// Icons
import { FiMoon, FiSun, FiLinkedin, FiMail, FiGithub } from 'react-icons/fi'

// Components
import Popover from './Popover';


function InteractButtons() {
    const darkMode = useDarkMode()
    const toggleDarkMode = useToggleDarkMode()
    const scroll = useScroll()
    const [bottomPortion, setBottomPortion] = useState(null)
    useEffect(() => {
        if (bottomPortion === null) {
            setBottomPortion(document.body.scrollHeight - (1002 * 1.5))
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
            <AnimatePresence>
                {scroll < bottomPortion && (
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
                            <li className=''>
                                <Popover className={`${darkMode ? 'bg-dark' : 'bg-lighter'}  outline-none flex items-center justify-center cursor-pointer z-[60]   w-[50px] h-[50px] rounded-xl hover:scale-110  active:scale-90 transition-all ease-in-out`}>
                                    <FiMail className='text-[2rem] ' />
                                </Popover>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/jonathan-carpena-582873196/" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'bg-dark' : 'bg-lighter'}  outline-none flex items-center justify-center cursor-pointer z-[60]   w-[50px] h-[50px] rounded-xl hover:scale-110 active:scale-90 transition-all ease-in-out`}>
                                    <FiLinkedin className='text-[2rem]' />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/jonathancarpena" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'bg-dark' : 'bg-lighter'}  outline-none flex items-center justify-center cursor-pointer z-[60]   w-[50px] h-[50px] rounded-xl hover:scale-110  active:scale-90 transition-all ease-in-out`}>
                                    <FiGithub className='text-[2rem]' />
                                </a>
                            </li>


                            <div className={`h-[6rem] border-l-2 w-[1.5rem] ${darkMode ? `border-l-lighter` : `${scroll > bottomPortion ? 'border-l-white' : 'border-l-dark'} `}`}></div>

                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>



        </>


    )
}

export default InteractButtons