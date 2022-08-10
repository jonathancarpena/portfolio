import { useState, useEffect } from 'react'

// Hooks
import useScroll from '../../lib/hooks/useScroll';

// Context
import { useDarkMode, useToggleDarkMode } from '../../lib/context/ThemeProvider';

// Framer
import { AnimatePresence, motion } from "framer-motion";

// Icons
import { FiMoon, FiSun } from 'react-icons/fi'

function DarkModeToggle() {
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

            <AnimatePresence exitBeforeEnter>
                {(scroll < bottomPortion) &&
                    <motion.button

                        variants={button}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className={`${darkMode ? 'bg-dark' : 'bg-lighter'}  outline-none flex items-center justify-center cursor-pointer z-[60] fixed bottom-5 lg:top-[50%] lg:-translate-y-[50%]  left-5  w-[50px] h-[50px] rounded-xl`}
                        onClick={toggleDarkMode}>
                        {darkMode
                            ? <FiMoon className='text-light text-[2rem]' />
                            : <FiSun className='text-dark text-[2rem]' />
                        }
                    </motion.button>
                }
            </AnimatePresence>
        </>


    )
}

export default DarkModeToggle