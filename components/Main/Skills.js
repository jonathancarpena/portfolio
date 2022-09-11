// Hooks
import { useDarkMode } from '../../lib/context/ThemeProvider'

// Framer
import { motion } from 'framer-motion'

// Data
import DATA from '../../lib/skills'


function Card({ header, skills }) {
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

    return (
        <motion.li
            variants={card}
            className={`${darkMode ? 'bg-dark' : 'bg-lighter'}  w-full p-8 space-y-8 drop-shadow-lg flex flex-col overflow-hidden rounded-xl items-center`}>
            <h3 className='capitalize font-semibold text-xl lg:text-2xl '>
                {header}
            </h3>

            {/* grid grid-cols-3 gap-7 justify-items-center  */}
            <ul className='w-full grid grid-cols-5 gap-6 md:flex md:gap-0 md:justify-start md:space-x-5 lg:space-x-6 xl:space-x-8'>
                {skills.map((item) => (
                    <li key={item.name} className='w-max '>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className='cursor-default flex flex-col items-center space-y-1  hover:text-accent-500 hover:scale-110 active:text-accent-500 active:scale-95 transition-all ease-in-out'>
                            <span className='text-[3rem] '>{item.icon}</span>
                            <span className='hidden lg:inline text-base  w-max'>{item.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </motion.li>
    )
}
function Skills() {

    const container = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 1
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

    const gridContainer = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
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
    return (
        <motion.section
            variants={container}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.0001 }}
            id='skills' className='pt-28 pb-40  min-h-screen flex flex-col justify-start items-center lg:px-10 xl:px-80  '>


            {/* Header */}
            <div className='relative flex  justify-center mb-10 items-center lg:space-x-5 '>
                <h3 className='tracking-tight text-6xl font-design  font-bold md:text-7xl lg:text-[6rem] '>
                    Skillset
                </h3>
                <span className='w-[75px] h-[75px]  ml-3  md:w-[70px] md:h-[70px] md:mb-1 lg:w-[100px] lg:h-[100px] lg:mr-0  lg:mb-4'>
                    <motion.svg
                        variants={svgContainer}
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%" height="100%" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="text-accent-500">
                        <motion.polyline
                            variants={draw}
                            points="8 6 2 12 8 18"></motion.polyline>
                        <motion.polyline
                            variants={draw}
                            points="16 18 22 12 16 6"></motion.polyline>
                    </motion.svg>
                </span>
            </div>

            {/* grid-cols-1 gap-5 px-12 md:px-5  md:grid-cols-2  xl:max-w-[1400px] lg:px-0  lg:grid-cols-4 lg:gap-10 */}
            {/* Skills */}
            <motion.ul
                variants={gridContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.0001 }}
                className='px-12 md:px-5 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-5 xl:max-w-[1400px]  '
            >
                {Object.entries(DATA).map((skill) => (
                    <Card
                        key={`card-${skill[0]}`}
                        header={skill[0]}
                        skills={Object.values(skill[1])}
                    />
                ))}

            </motion.ul>








        </motion.section>
    )
}

export default Skills