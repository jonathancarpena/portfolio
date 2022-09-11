// Hooks
import { useDarkMode } from '../../lib/context/ThemeProvider';

// Framer
import { motion } from "framer-motion";

function BackDrop() {
    const darkMode = useDarkMode()
    const backDrop = {
        initial: { x: "-100%" },
        animate: {
            x: '100%',
            transition: {
                type: "spring",
                duration: 7
            }
        },
    }

    return (
        <>
            <motion.div
                variants={backDrop}
                initial="initial"
                animate="animate"
                className={`${darkMode ? 'bg-darker' : 'bg-light'} absolute w-screen h-screen  z-[20]`}
            ></motion.div>
            <div
                className={`absolute top-0 bg-hero-sm md:bg-hero-md lg:bg-hero bg-cover  w-screen h-screen  `}>
            </div>


        </>

    )
}
function Hero() {
    const darkMode = useDarkMode()
    const mainContainer = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 2
            }
        },
        exit: {}
    }

    const headerContainer = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.75
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 2
            }
        },

    }

    const header = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        exit: {
            opacity: 0, y: 50,
            transition: {
                duration: 1
            }
        },
    }

    const job = {
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
        exit: {
            opacity: 0, y: 50,
            transition: {
                type: 'tween',
                easeIn: "easeInOut",
                duration: 1
            }
        },
    }





    return (
        <motion.section
            variants={mainContainer}
            initial="initial"
            animate="animate"
            exit="exit"
            id='portfolio'
            className='overflow-visible font-sans px-10  min-h-screen  flex justify-center items-center w-full relative lg:px-36'>


            <BackDrop />

            {/* Header */}
            <motion.div
                variants={headerContainer}
                className='flex flex-col z-20 space-y-3'>


                <motion.h1
                    variants={header}
                    className={`${darkMode ? 'text-white' : 'text-dark'} z-[30] text-center  text-5xl font-bold uppercase   lg:text-[6rem] lg:px-3   flex flex-col -space-y-2 `}>
                    Jonathan Carpena
                </motion.h1>

                <motion.h2
                    variants={job}
                    className={`${darkMode ? 'bg-dark text-lighter' : 'bg-lighter text-dark'} z-[20] mx-auto px-6 py-3 w-max text-xl text-center rounded-xl   font-semibold  tracking-tight uppercase md:text-4xl lg:text-[2rem]`}>
                    Full Stack Developer
                </motion.h2>

            </motion.div>




        </motion.section>
    )
}

export default Hero