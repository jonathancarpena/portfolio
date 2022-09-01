import { useState, useCallback, useRef } from 'react'

// Next
import Image from 'next/image'

// Hooks
import { useDarkMode } from '../../lib/context/ThemeProvider'

// Framer
import { motion, AnimatePresence } from 'framer-motion'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";

// Data
import PROJECTS from '../../lib/projects'
import { ICONS } from '../../lib/skills';

// Icons
import {
    FiGithub,
    FiExternalLink,
    FiClock,
    FiArrowRightCircle,
    FiX,
    FiArrowLeft,
    FiArrowRight,
    FiPlay
} from 'react-icons/fi'


function ProjectDetails({ id, handleShowDetails }) {
    const darkMode = useDarkMode()
    const sliderRef = useRef(null)
    const mobileSliderRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)

    const project = PROJECTS.find((item) => item.id === id)
    let mobilePhoto = project.screenshots.some((item) => item.includes('mobile'))

    // Carousel Navigator Functions
    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);
    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);
    const handleMobilePrev = useCallback(() => {
        if (!mobileSliderRef.current) return;
        mobileSliderRef.current.swiper.slidePrev();
    }, []);
    const handleMobileNext = useCallback(() => {
        if (!mobileSliderRef.current) return;
        mobileSliderRef.current.swiper.slideNext();
    }, []);


    // Project Navigator Functions
    const projectChange = (projectId) => {
        handleShowDetails(projectId)
        const myDiv = document.getElementById('project-details');
        const mobileDiv = document.getElementById('mobile-project-details');
        sliderRef.current.swiper.slideTo(0)
        mobileSliderRef.current.swiper.slideTo(0)
        setActiveIndex(0)
        myDiv.scroll({ top: 0, behavior: 'smooth' })
        mobileDiv.scroll({ top: 0, behavior: 'smooth' })
    }

    // Motion Variant
    const desktopVariant = {
        initial: {
            x: '100%',
            y: 0
        },
        animate: {
            x: 0, y: 0,
            transition: {
                type: "spring",
                bounce: 0.15,
                easeIn: "easeInOut",
            }
        },
        exit: {
            x: '100%',
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.15,
                easeIn: "easeInOut",
            }
        }
    }
    const mobileVariant = {
        initial: {
            x: 0,
            y: '100%'
        },
        animate: {
            x: 0, y: 0,
            transition: {
                type: "spring",
                bounce: 0.15,
                easeIn: "easeInOut",
            }
        },
        exit: {
            x: 0,
            y: '100%',
            transition: {
                type: "spring",
                bounce: 0.15,
                easeIn: "easeInOut",
            }
        }
    }

    return (
        <>
            {/* Main Card */}
            <motion.div
                id="project-details"
                variants={desktopVariant}
                initial="initial"
                animate="animate"
                exit="exit"
                className={`${darkMode ? 'bg-dark text-light' : ' bg-lighter text-dark'}  hidden md:inline-block z-[90]   overflow-y-scroll  scrollbar scrollbar-thumb-accent-500 scrollbar-thumb-rounded-full  scrollbar-track-inherit drop-shadow-2xl fixed bottom-0   w-screen h-[85vh] rounded-t-3xl lg:max-w-[1080px] md:rounded-tr-none md:rounded-l-3xl md:w-[70vw] md:right-0 md:top-0 md:h-screen`}>

                {/* Header */}
                <div className='sticky top-0 bg-inherit z-[100] px-10 py-4 text-[1.75rem] md:text-[2.5rem]  flex justify-between items-center'>
                    <h2 className=' font-semibold'>
                        {project.title}
                    </h2>
                    <button onClick={() => handleShowDetails(null)} className='z-[200]'>
                        <FiX className=' hover:text-accent-500 hover:scale-110 active:text-accent-500 active:scale-95 transition-all ease-in-out' />
                    </button>
                </div>

                {/* Details */}
                <div className='px-5 pb-5 md:px-10 md:pb-10 flex flex-col space-y-4  bg-inherit '>

                    {/* Screenshot Carousel */}
                    <div className='relative overflow-hidden'>

                        {!project.complete &&
                            <div className='z-[20] drop-shadow-md -left-[6rem] top-[2rem] w-[300px] justify-center flex items-center space-x-2 bg-accent-500 text-lighter absolute p-3 -rotate-45'>
                                <FiClock className='text-[1.5rem]' />
                                <span>In Progress</span>
                            </div>
                        }

                        <Swiper
                            ref={sliderRef}
                            spaceBetween={0}
                            slidesPerView={1}
                            initialSlide={0}
                            className='bg-neutral-100 max-h-[540px] rounded-lg'
                            centeredSlides={true}
                            onSlideChange={(e) => setActiveIndex(e.activeIndex)}
                        >
                            {project.screenshots.map((item, index) => {
                                if (item.includes('mobile')) {
                                    return (
                                        <SwiperSlide key={`${project.id}-slide-${index}`} className='py-5  max-h-[540px] w-full  flex  justify-center items-center cursor-grab active:cursor-grabbing'>
                                            <div className='max-h-[500px] h-[500px] w-[230px] overflow-hidden rounded-xl drop-shadow-xl ring-4 ring-neutral-700'>
                                                <Image
                                                    alt={`${project.title}-screenshot-${index}`}
                                                    src={item}
                                                    layout="fill"
                                                    objectFit="contain"
                                                />
                                            </div>

                                        </SwiperSlide>
                                    )
                                } else {
                                    return (
                                        <SwiperSlide key={`${project.id}-slide-${index}`} className='w-full h-full block   cursor-grab active:cursor-grabbing '>
                                            <div className='lg:hidden drop-shadow-xl relative w-[100%] h-[540px]' >
                                                <Image
                                                    alt={`${project.title}-screenshot-${index}`}
                                                    src={item}
                                                    layout="fill"
                                                    objectFit="contain"
                                                />
                                            </div>
                                            <div className='drop-shadow-xl relative w-[100%] h-[540px]' >
                                                <Image
                                                    alt={`${project.title}-screenshot-${index}`}
                                                    src={item}
                                                    layout="fill"
                                                    objectFit="cover"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    )
                                }
                            })}
                        </Swiper>

                        {activeIndex !== 0 &&
                            <button onClick={handlePrev} className='bg-lighter rounded-lg opacity-70 hover:opacity-100 transition-all ease-in-out flex flex-col items-center -space-y-1.5 cursor-pointer z-50 absolute top-[50%] -translate-y-[50%] left-4 lg:left-8 text-darker'>
                                <FiArrowLeft className='text-4xl lg:text-5xl' />
                                <span className='hidden md:inline text-sm'>Prev</span>
                            </button>
                        }

                        {activeIndex !== project.screenshots.length - 1 &&
                            <button onClick={handleNext} className='bg-lighter rounded-lg opacity-70 hover:opacity-100 transition-all ease-in-out flex flex-col items-center -space-y-1.5 cursor-pointer z-50 top-[50%] -translate-y-[50%] right-4 lg:right-8 absolute text-darker'>
                                <FiArrowRight className='text-4xl lg:text-5xl' />
                                <span className='hidden md:inline text-sm'>Next</span>
                            </button>
                        }

                    </div>

                    {/* Links */}
                    <div className='flex items-center space-x-4'>
                        {project.externalLink &&
                            <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className='flex space-x-2 items-center text-[1.2rem] rounded-lg bg-accent-500 text-lighter px-3 py-1 hover:bg-accent-400 hover:scale-105 active:bg-accent-500 active:scale-95 transition-all ease-in-out'>
                                <span>Visit Site</span> <FiExternalLink />
                            </a>
                        }

                        {project.github &&
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className='flex space-x-2 items-center text-[1.2rem] rounded-lg bg-accent-500 text-lighter px-3 py-1 hover:bg-accent-400 hover:scale-105 active:bg-accent-500 active:scale-95 transition-all ease-in-out'>
                                <span>Github</span> <FiGithub />
                            </a>
                        }

                        {project.demo &&
                            <a href={`/demo/${project.title}`} target="_blank" rel="noopener noreferrer" className='flex space-x-2 items-center text-[1.2rem] rounded-lg bg-accent-500 text-lighter px-3 py-1 hover:bg-accent-400 hover:scale-105 active:bg-accent-500 active:scale-95 transition-all ease-in-out'>
                                <span>Live Demo</span> <FiPlay />
                            </a>
                        }

                    </div>

                    {/* Tools */}
                    <div className=''>
                        <h3 className='text-xl font-semibold underline underline-offset-2 mb-2'>
                            Tools
                        </h3>
                        <ul className='grid md:grid-cols-3 lg:grid-cols-5 gap-2'>
                            {project.tools.map((item) => (
                                <li key={item} className={`${darkMode ? 'bg-darker ' : 'bg-light'} w-full  px-3 py-2 rounded-xl capitalize flex flex-row space-x-1 items-center   `}>
                                    <span>{ICONS[item].icon}</span>
                                    <span>{ICONS[item].name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Overview */}
                    <div className=''>
                        <h3 className='text-xl font-semibold underline underline-offset-2 mb-1'>
                            Overview
                        </h3>
                        <p className='text-lg '>{project.overview}</p>
                    </div>

                    {/* Features */}
                    <div className=''>
                        <h3 className='text-xl font-semibold underline underline-offset-2 mb-1'>
                            Features
                        </h3>
                        <ul className='text-lg'>
                            {project.features.map((item, idx) => (
                                <li key={`${project.id}-features-${idx}`} className='list-inside flex space-x-1 items-center'>
                                    - {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Focus */}
                    <div className=''>
                        <h3 className='text-xl font-semibold underline underline-offset-2 mb-1'>
                            Focus
                        </h3>
                        <ul className='text-lg'>
                            {project.focus.map((focus, idx) => (
                                <li key={`${project.id}-focus-${idx}`} className='list-inside flex space-x-1 items-center'>
                                    - {focus}
                                </li>
                            ))}
                        </ul>
                    </div>



                    {/* Reflection */}
                    <div className=''>
                        <h3 className='text-xl font-semibold underline underline-offset-2 mb-1'>
                            Reflection
                        </h3>
                        <ul className='text-lg'>
                            {project.reflection.map((item, idx) => (
                                <li key={`${project.id}-reflection-${idx}`} className='list-inside flex space-x-1 items-center'>
                                    - {item}
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* Project Navigators */}
                    <div className='py-12 relative w-full bg-inherit'>
                        {id !== 1 &&
                            <button onClick={() => projectChange(id - 1)} className=' text-white overflow-hidden w-[175px] rounded-lg absolute top-[50%] -translate-y-[50%] p-3 left-0 flex flex-col space-y-1 bg-accent-500 drop-shadow-md hover:scale-105 hover:drop-shadow-lg active:scale-95 transition-all ease-in-out'>
                                <span className='flex items-center space-x-2 place-self-start text-sm'>
                                    <FiArrowLeft className=' text-base' />
                                    <span>Prev</span>
                                </span>
                                <span className='font-semibold place-self-start '>
                                    {PROJECTS[id - 2].title.length > 14
                                        ? PROJECTS[id - 2].title.substring(0, 13) + '...'
                                        : PROJECTS[id - 2].title
                                    }
                                </span>
                            </button>
                        }

                        {id !== PROJECTS.length &&
                            <button onClick={() => projectChange(id + 1)} className=' text-white overflow-hidden  w-[175px] rounded-lg absolute top-[50%] -translate-y-[50%] p-3 right-0 flex flex-col space-y-1 bg-accent-500 drop-shadow-md hover:scale-105 hover:drop-shadow-lg active:scale-95 transition-all ease-in-out '>
                                <span className='flex items-center space-x-2 place-self-end text-sm'>
                                    <span>Next</span>
                                    <FiArrowRight className=' text-base' />
                                </span>
                                <span className='font-semibold place-self-end  '>
                                    {PROJECTS[id].title.length > 14
                                        ? PROJECTS[id].title.substring(0, 13) + '...'
                                        : PROJECTS[id].title
                                    }
                                </span>
                            </button>

                        }

                    </div>

                </div>




            </motion.div>

            {/* Mobile Card */}
            <motion.div
                id="mobile-project-details"
                variants={mobileVariant}
                initial="initial"
                animate="animate"
                exit="exit"
                className={`${darkMode ? 'bg-dark text-light' : ' bg-lighter text-dark'} block md:hidden z-[90]   overflow-y-scroll  scrollbar-thin scrollbar-thumb-accent-500 scrollbar-thumb-rounded-full  scrollbar-track-inherit drop-shadow-2xl fixed bottom-0 w-screen h-[85vh] rounded-t-3xl`}>

                {/* Header */}
                <div className='sticky top-0 bg-inherit z-[100] px-10 py-4 text-[1.75rem] md:text-[2.5rem]  flex justify-between items-center'>
                    <h2 className=' font-semibold'>
                        {project.title}
                    </h2>
                    <button onClick={() => handleShowDetails(null)} className='z-[200]'>
                        <FiX className=' hover:text-accent-500 hover:scale-110 active:text-accent-500 active:scale-95 transition-all ease-in-out' />
                    </button>
                </div>

                {/* Details */}
                <div className='px-5 pb-5 md:px-10 md:pb-10 flex flex-col space-y-4  bg-inherit '>

                    {/* Screenshot Carousel */}
                    <div className='relative overflow-hidden'>

                        {!project.complete &&
                            <div className='z-[20] drop-shadow-md -left-[6rem] top-[2rem] w-[300px] justify-center flex items-center space-x-2 bg-accent-500 text-lighter absolute p-3 -rotate-45'>
                                <FiClock className='text-[1.5rem]' />
                                <span>In Progress</span>
                            </div>
                        }

                        <Swiper
                            ref={mobileSliderRef}
                            spaceBetween={0}
                            slidesPerView={1}
                            className='bg-neutral-200  h-max rounded-lg flex justify-center items-center'
                            centeredSlides={true}
                            onSlideChange={(e) => setActiveIndex(e.activeIndex)}
                        >
                            {project.screenshots.map((item, index) => {
                                if (item.includes('mobile')) {
                                    return (
                                        <SwiperSlide key={`${project.id}-slide-${index}`} className='py-5  max-h-[50vh] w-full  flex  justify-center items-center cursor-grab active:cursor-grabbing'>
                                            <div className='max-h-[300px] h-[300px] w-[138px] overflow-hidden rounded-xl drop-shadow-xl ring-4 ring-neutral-700'>
                                                <Image
                                                    alt={`${project.title}-screenshot-${index}`}
                                                    src={item}
                                                    layout="fill"
                                                    objectFit="contain"
                                                />
                                            </div>

                                        </SwiperSlide>
                                    )
                                } else {
                                    return (
                                        <SwiperSlide key={`${project.id}-slide-${index}`} className={`${mobilePhoto ? 'relative top-[3rem]  ' : ''} w-full h-full block  cursor-grab active:cursor-grabbing`}>
                                            <div className='drop-shadow-xl relative w-[100%] h-[30vh] ' >
                                                <Image
                                                    alt={`${project.title}-screenshot-${index}`}
                                                    src={item}
                                                    layout="fill"
                                                    objectFit="contain"
                                                />
                                            </div>

                                        </SwiperSlide>
                                    )
                                }
                            })}

                        </Swiper>

                        {activeIndex !== 0 &&
                            <button onClick={handleMobilePrev} className='bg-lighter rounded-lg opacity-70 hover:opacity-100 transition-all ease-in-out flex flex-col items-center -space-y-1.5 cursor-pointer z-50 absolute top-[50%] -translate-y-[50%] left-4 lg:left-8 text-darker'>
                                <FiArrowLeft className='text-4xl lg:text-5xl' />
                                <span className='hidden md:inline text-sm'>Prev</span>
                            </button>
                        }

                        {activeIndex !== project.screenshots.length - 1 &&
                            <button onClick={handleMobileNext} className='bg-lighter rounded-lg opacity-70 hover:opacity-100 transition-all ease-in-out flex flex-col items-center -space-y-1.5 cursor-pointer z-50 top-[50%] -translate-y-[50%] right-4 lg:right-8 absolute text-darker'>
                                <FiArrowRight className='text-4xl lg:text-5xl' />
                                <span className='hidden md:inline text-sm'>Next</span>
                            </button>
                        }

                    </div>

                    {/* Links */}
                    <div className='flex items-center space-x-4 relative top-1'>
                        {project.externalLink &&
                            <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className='flex space-x-2 items-center text-[1.2rem] rounded-lg bg-accent-500 text-lighter px-3 py-1 hover:bg-accent-400 hover:scale-105 active:bg-accent-500 active:scale-95 transition-all ease-in-out'>
                                <span>Visit Site</span> <FiExternalLink />
                            </a>
                        }

                        {project.github &&
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className='flex space-x-2 items-center text-[1.2rem] rounded-lg bg-accent-500 text-lighter px-3 py-1 hover:bg-accent-400 hover:scale-105 active:bg-accent-500 active:scale-95 transition-all ease-in-out'>
                                <span>Github</span> <FiGithub />
                            </a>
                        }
                        {project.demo &&
                            <a href={`/demo/${project.title}`} target="_blank" rel="noopener noreferrer" className='flex space-x-2 items-center text-[1.2rem] rounded-lg bg-accent-500 text-lighter px-3 py-1 hover:bg-accent-400 hover:scale-105 active:bg-accent-500 active:scale-95 transition-all ease-in-out'>
                                <span>Live Demo</span> <FiPlay />
                            </a>
                        }

                    </div>

                    {/* Tools */}
                    <div className=''>
                        <h3 className='text-xl font-semibold underline underline-offset-2 mb-2'>
                            Tools
                        </h3>
                        <ul className='grid grid-cols-2 gap-2 '>
                            {project.tools.map((item) => (
                                <li key={item} className={`${darkMode ? 'bg-darker ' : 'bg-light'} w-full px-3 py-2 rounded-xl capitalize flex flex-row space-x-1 items-center   `}>
                                    <span>{ICONS[item].icon}</span>
                                    <span>{ICONS[item].name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Overview */}
                    <div className=''>
                        <h3 className='text-xl font-semibold underline underline-offset-2 mb-1'>
                            Overview
                        </h3>
                        <p className='text-lg '>{project.overview}</p>
                    </div>

                    {/* Features */}
                    <div className=''>
                        <h3 className='text-xl font-semibold underline underline-offset-2 mb-1'>
                            Features
                        </h3>
                        <ul className='text-lg'>
                            {project.features.map((item, idx) => (
                                <li key={`${project.id}-focus-${idx}`} className='list-inside flex space-x-1 items-center'>
                                    - {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Focus */}
                    <div className=''>
                        <h3 className='text-xl font-semibold underline underline-offset-2 mb-1'>
                            Focus
                        </h3>
                        <ul className='text-lg'>
                            {project.focus.map((focus, idx) => (
                                <li key={`${project.id}-focus-${idx}`} className='list-inside flex space-x-1 items-center'>
                                    - {focus}
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* Reflection */}
                    <div className=''>
                        <h3 className='text-xl font-semibold underline underline-offset-2 mb-1'>
                            Reflection
                        </h3>
                        <ul className='text-lg'>
                            {project.reflection.map((item, idx) => (
                                <li key={`${project.id}-reflection-${idx}`} className='list-inside flex space-x-1 items-center'>
                                    - {item}
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* Project Navigators */}
                    <div className='py-10 relative w-full bg-inherit'>
                        {id !== 1 &&
                            <button onClick={() => projectChange(id - 1)} className='text-white overflow-hidden w-[150px] rounded-lg absolute top-[50%] -translate-y-[50%] p-3 left-0 flex flex-col space-y-1 bg-accent-500 drop-shadow-md hover:scale-105 hover:drop-shadow-lg active:scale-95 transition-all ease-in-out'>
                                <span className='flex items-center space-x-2 place-self-start text-sm'>
                                    <FiArrowLeft className='text-white text-base' />
                                    <span>Prev</span>
                                </span>
                                <span className='font-semibold place-self-start'>
                                    {PROJECTS[id - 2].title.length > 10
                                        ? PROJECTS[id - 2].title.substring(0, 11) + '...'
                                        : PROJECTS[id - 2].title
                                    }
                                </span>
                            </button>
                        }

                        {id !== PROJECTS.length &&
                            <button onClick={() => projectChange(id + 1)} className='text-white overflow-hidden  w-[150px] rounded-lg absolute top-[50%] -translate-y-[50%] p-3 right-0 flex flex-col space-y-1 bg-accent-500 drop-shadow-md hover:scale-105 hover:drop-shadow-lg active:scale-95 transition-all ease-in-out '>
                                <span className='flex items-center space-x-2 place-self-end text-sm'>
                                    <span>Next</span>
                                    <FiArrowRight className='text-white text-base' />
                                </span>
                                <span className='font-semibold place-self-end '>
                                    {PROJECTS[id].title.length > 10
                                        ? PROJECTS[id].title.substring(0, 9) + '...'
                                        : PROJECTS[id].title
                                    }
                                </span>
                            </button>

                        }

                    </div>

                </div>




            </motion.div>


            {/* Backdrop */}
            <motion.div
                onClick={() => handleShowDetails(0)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                className="z-[85] opacity-50 fixed inset-0 bg-black"></motion.div>
        </>
    )
}

function Card({ project, handleShowDetails }) {
    const [hover, setHover] = useState(false)

    const darkMode = useDarkMode()
    const card = {
        initial: { opacity: 0, y: '70%', },
        animate: {
            opacity: 1, y: 0,
            transition: {
                type: "spring",
                bounce: 0.3,
                easeIn: "easeIn",
                delayChildren: 0.25,
                staggerChildren: 0.5,
            }
        },
        exit: {
            opacity: 0, y: '35%', transition: {
                easeIn: "easeInOut"
            }
        },
    }
    const details = {
        initial: { opacity: 0, y: "50%" },
        animate: { opacity: 1, y: 0, transition: { easeIn: "easeInOut", duration: 0.2 } },
        exit: { opacity: 0, y: 0, transition: { easeIn: "easeInOut", duration: 0.2 } }
    }



    return (
        <motion.li
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            variants={card}
            className={`${darkMode ? 'bg-dark' : 'bg-lighter'}  drop-shadow-lg flex flex-col  overflow-hidden rounded-xl  `}>
            {/* ScreenShots */}
            <div onClick={() => handleShowDetails(project.id)} className=' cursor-pointer w-full overflow-hidden relative'>
                {!project.complete &&
                    <div className='z-[20] drop-shadow-md -left-[6rem] top-[2rem] w-[300px] justify-center flex items-center space-x-2 bg-accent-500 text-lighter absolute p-3 -rotate-45'>
                        <FiClock className='text-[1.5rem]' />
                        <span>In Progress</span>
                    </div>
                }
                <div className='drop-shadow-xl relative w-[100%] h-[30vh] ' >
                    <Image
                        layout="fill"
                        objectFit="cover"
                        src={!darkMode ? project['preview-dark'] ? project['preview-dark'] : project.preview : project.preview}
                        alt={`${project.title}`}
                        className={`w-full ${hover ? 'scale-110' : 'scale-100'}  transition-all duration-200 ease-in-out`}
                    />
                </div>

            </div>

            {/* Project Details */}
            <div className='flex-1 border-t-2 border-t-accent-500 p-8 flex flex-col space-y-4 justify-between   w-full'>

                <div className=' flex flex-col space-y-4'>
                    {/* Title */}
                    <p onClick={() => handleShowDetails(project.id)} className='cursor-pointer capitalize font-semibold text-2xl '>
                        {project.title}
                    </p>

                    {/* Overview */}
                    <p className='text-xl'>
                        {project.overview}
                    </p>

                    {/* Tools */}
                    <ul className='flex  flex-wrap relative right-1'>
                        {project.tools.map((tool) => (
                            <li key={`${project.title}-tool-${tool}`} className={`${darkMode ? 'bg-darker' : 'bg-light'} select-none cursor-default mb-2 px-3 py-1 rounded-xl text-sm capitalize  mr-2`}>
                                {ICONS[tool].name}
                            </li>
                        ))}
                    </ul>
                </div>


                {/* Links */}
                <div className='flex justify-between w-full'>
                    <div className=' flex space-x-4'>
                        {project.externalLink &&
                            <a href={project.externalLink} target="_blank" rel="noopener noreferrer">
                                <FiExternalLink className='text-[2rem] hover:text-accent-500 hover:scale-110 active:text-accent-500 active:scale-95 transition-all ease-in-out' />
                            </a>
                        }
                        {project.github &&
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <FiGithub className='text-[2rem] hover:text-accent-500 hover:scale-110 active:text-accent-500 active:scale-95 transition-all ease-in-out' />
                            </a>
                        }
                        {project.demo &&
                            <a href={`/demo/${project.title}`} target="_blank" rel="noopener noreferrer">
                                <FiPlay className='text-[2rem] hover:text-accent-500 hover:scale-110 active:text-accent-500 active:scale-95 transition-all ease-in-out' />
                            </a>
                        }
                    </div>




                    <AnimatePresence exitBeforeEnter>
                        {hover
                            &&
                            <motion.button
                                whileTap={{ scale: 0.9, backgroundColor: '#734de5' }}
                                whileHover={{ backgroundColor: '#734de5', scale: 1.1 }}
                                variants={details}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                onClick={() => handleShowDetails(project.id)}
                                className='
                                hidden lg:flex bg-accent-500 text-lighter px-3 py-1 rounded-xl  space-x-2 items-center'
                            >
                                <span>Details</span> <FiArrowRightCircle className='text-lg' />
                            </motion.button>
                        }
                    </AnimatePresence>

                    {/* Mobile Details Button */}
                    <motion.button
                        whileTap={{ scale: 0.9, backgroundColor: '#734de5' }}
                        whileHover={{ backgroundColor: '#734de5', scale: 1.1 }}
                        variants={details}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        onClick={() => handleShowDetails(project.id)}
                        className='
                                lg:hidden flex bg-accent-500 text-lighter px-3 py-1 rounded-xl  space-x-2 items-center'
                    >
                        <span>Details</span> <FiArrowRightCircle className='text-lg' />
                    </motion.button>
                </div>
            </div>
        </motion.li >
    )
}

function Work() {
    const [showDetails, setShowDetails] = useState(null)
    function handleShowDetails(id) {
        setShowDetails(id)
    }
    const container = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 1
            }
        },
        exit: {
            transition: {
                when: "afterChildren",
            }
        }
    }

    const gridContainer = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        },
        exit: {
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const draw = {
        initial: {
            opacity: 0,
            pathLength: 0
        },
        animate: {
            opacity: 1,
            pathLength: 1,
            transition: {
                duration: 1.5
            }
        }
    }

    const svgContainer = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 1,
            }
        }
    }


    return (
        <motion.section
            variants={container}
            initial="initial"
            exit="exit"
            whileInView="animate"
            viewport={{ once: true, amount: 0.0001 }}
            id='work' className='  pt-28 flex flex-col justify-center items-center lg:px-10 xl:px-80 min-h-screen '>

            {/* Header */}
            <div className='relative flex justify-center mb-10 items-center  lg:space-x-5 '>
                <h3 className='tracking-tight text-6xl font-design  font-bold md:text-7xl lg:text-[6rem] '>
                    My Work
                </h3>
                <span className='w-[65px] h-[65px] ml-3 mb-1 md:w-[70px] md:h-[70px] md:mb-1 lg:w-[100px] lg:h-[100px] lg:mr-0  lg:mb-4'>
                    <motion.svg
                        variants={svgContainer}
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%" height="100%" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="text-accent-500">
                        <motion.rect
                            variants={draw}
                            x="2" y="7" width="20" height="14" rx="2" ry="2"></motion.rect>
                        <motion.path
                            variants={draw}
                            d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></motion.path>
                    </motion.svg>
                </span>
            </div>

            {/* Projects */}
            <motion.ul
                variants={gridContainer}
                initial="initial"
                exit="exit"
                whileInView="animate"
                viewport={{ once: true, amount: 0.0001 }}
                className='  grid grid-cols-1 gap-5 px-12 md:px-5 lg:px-0  xl:max-w-[1400px] md:grid-cols-2 lg:grid-cols-3 lg:gap-10 '>
                {PROJECTS.map((project) => (
                    <Card
                        key={project.id}
                        project={project}
                        handleShowDetails={handleShowDetails}
                    />
                ))}
            </motion.ul>

            {/* Details */}
            <AnimatePresence exitBeforeEnter>
                {showDetails &&
                    <ProjectDetails id={showDetails} handleShowDetails={handleShowDetails} />
                }

            </AnimatePresence>

        </motion.section>
    )
}

export default Work