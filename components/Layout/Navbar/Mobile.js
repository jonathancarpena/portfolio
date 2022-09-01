import { useState } from "react";

// Next 
import { useRouter } from "next/router";

// Hooks
import useScroll from "../../../lib/hooks/useScroll";
import { useDarkMode } from "../../../lib/context/ThemeProvider";

// Framer
import { motion, AnimatePresence } from "framer-motion";

// Icons
import { FiLinkedin, FiMail, FiGithub } from 'react-icons/fi'

// Components
import Popover from "../Popover";


const Path = props => {
    return (
        <motion.path
            strokeWidth="3"
            stroke={`${props.color}`}
            strokeLinecap="round"
            className='transition-colors ease-in-out duration-500'
            {...props}
        />
    )
};

function Toggle({ toggle, color, bg }) {
    return (
        <button onClick={toggle} className={`${bg} px-2 pt-2 pb-1 rounded-xl absolute right-5 top-5 outline-none z-[60] text-white`} >
            <svg width="30" height="30" viewBox="0 0 23 23">
                <Path
                    color={color}
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" }
                    }}
                />
                <Path
                    color={color}
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 }
                    }}
                    transition={{ duration: 0.2 }}
                />
                <Path
                    color={color}
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" }
                    }}
                />
            </svg>
        </button>
    )
}

function MobileNav() {
    const scroll = useScroll()
    const darkMode = useDarkMode()
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState('')
    const router = useRouter()

    function handleNavItemClick(link) {
        setActive(link)
        setIsOpen(false)
    }
    const navItemContainer = {
        initial: { x: '200%' },
        animate: {
            x: 0,
            transition: {
                type: 'linear',
                easeIn: "easeInOut",
                duration: 0.5,
                when: 'beforeChildren',
                staggerChildren: 0.2
            }
        },
        exit: {
            x: '200%',
            transition: {
                type: 'linear',
                duration: 0.5,
                easeIn: "easeInOut",
            }
        }
    }

    const navItem = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { type: 'linear' } },
        exit: { opacity: 0, transition: { type: 'linear' } }
    }
    const NavLinks = [
        { link: '/#about', text: 'about' },
        { link: '/#work', text: 'work' },
        { link: '/#skills', text: 'skills' },
        { link: '/contact', text: 'contact' },
    ]

    return (
        <>
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className={` bg-transparent text-white
            lg:hidden z-[60]  drop-shadow-xl fixed top-0 w-full flex justify-between p-4 transition-all ease-in-out duration-500`}
            >
                <Toggle
                    color={scroll > 600
                        ? `${isOpen ? '#ffffff' : '#5020df'}`
                        : '#ffffff'
                    }
                    bg={
                        scroll > 600
                            ? `${isOpen ? 'bg-transparent' : `${darkMode ? `${scroll > 7400 ? 'bg-lighter' : 'bg-dark'} ` : 'bg-lighter'} `}`
                            : 'bg-transparent'
                    }
                    toggle={() => setIsOpen(!isOpen)}
                />

                <AnimatePresence exitBeforeEnter>
                    {isOpen &&
                        <motion.div
                            variants={navItemContainer}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="py-20 px-5 bg-accent-500 flex-col h-screen w-[80vw] fixed top-0 bottom-0 right-0 z-[50]  md:w-[50vw]"
                        >

                            {/* Nav Links */}
                            <ul className="flex-col flex justify-between items-start h-[90%]">
                                {NavLinks.map((item) => (
                                    <motion.a
                                        key={`mobile-nav-${item.text}`}
                                        variants={navItem}
                                        className={`${(active === item.text || router.pathname === item.link) ? 'bg-lighter text-accent-500' : ''}  active:bg-accent-600 w-[110%] rounded-xl  p-5 capitalize text-[3rem]`}
                                        href={item.link} onClick={() => handleNavItemClick(item.text)} >
                                        {item.text}
                                    </motion.a>
                                ))}

                                <motion.a
                                    variants={navItem}
                                    href="./Jonathan Carpena Resume.pdf"
                                    // download
                                    title="Resume"
                                    target="_blank"
                                    rel='noopener noreferrer'
                                    className={`  active:bg-accent-600 w-[110%] rounded-xl  p-5 capitalize text-[3rem]`}
                                >
                                    Resume
                                </motion.a>
                            </ul>

                            {/* Socials */}

                            <ul className=" bg-accent-600 text-[2rem] absolute  bottom-0 left-0  w-full flex   rounded-t-3xl py-[1.8rem]  justify-around  ">
                                <li>
                                    <a href="https://github.com/jonathancarpena" target="_blank" rel="noopener noreferrer" className="active:scale-90 transition-all ease-in-out">
                                        <FiGithub />
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.linkedin.com/in/jonathan-carpena-582873196/" target="_blank" rel="noopener noreferrer" className="active:scale-90 transition-all ease-in-out">
                                        <FiLinkedin />
                                    </a>
                                </li>

                                <li>
                                    <Popover position="top" mobile={true} className="active:scale-90 transition-all ease-in-out">
                                        <FiMail data="jonathancarpena99@gmail.com" />
                                    </Popover>
                                </li>

                            </ul>

                        </motion.div>



                    }
                </AnimatePresence>

            </motion.nav>

            <AnimatePresence exitBeforeEnter>
                {isOpen &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6, transition: { type: 'linear', duration: 0.5, easeIn: "easeInOut" } }}
                        exit={{ opacity: 0, transition: { type: 'linear', duration: 0.5, easeIn: "easeInOut" } }}
                        className="py-20 bg-dark  h-screen w-screen fixed inset-0 z-[50]"
                    >
                    </motion.div>
                }
            </AnimatePresence>
        </>
    );
}

export default MobileNav
