import { useState, useEffect } from 'react'

// Next
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Framer
import { motion } from 'framer-motion'

// Hooks
import useScroll from '../../../lib/hooks/useScroll'
import { useDarkMode } from '../../../lib/context/ThemeProvider'

// Image 
import Logo from '../../../public/logo.png'

// Components
import NavItem from './NavItem'
import MobileMenu from './Mobile'

// Icons
import { FiFileText } from 'react-icons/fi'


function Navbar() {
    const scroll = useScroll()
    const darkMode = useDarkMode()
    const { pathname } = useRouter()
    const [active, setActive] = useState('')


    useEffect(() => {
        if (pathname.includes('demo')) {
            setActive('work')
        } else if (pathname.includes('contact')) {
            setActive('contact')
        } else {
            if (scroll >= 350 && scroll < 1299) {
                setActive('about')
            } else if (scroll >= 1300 && scroll < 2999) {
                setActive('work')
            } else if (scroll >= 3000 && scroll < 4786) {
                setActive('skills')
            } else {
                setActive('')
            }
        }

    }, [scroll, active, pathname])


    const NavLinks = [
        { link: '/#about', text: 'about' },
        { link: '/#work', text: 'work' },
        { link: '/#skills', text: 'skills' },
        { link: '/contact', text: 'contact' },
    ]


    return (

        <>
            <motion.nav
                initial={{ y: '-100%' }}
                animate={{ y: 0, transition: { duration: 1.25 } }}
                exit={{ y: '-100%' }}
                className={`
            ${scroll > 500 ? `bg-accent-500 text-white drop-shadow-xl` : `${darkMode ? 'text-white' : 'text-dark'} bg-transparent`}  lg:flex
              hidden  z-50   fixed top-0 w-full  justify-center transition-all ease-in-out duration-300 `}
            >

                {/* <span className='absolute top-20 left-20'>{scroll}</span> */}
                {/* Responsive Container */}
                <div className='  px-10 w-full flex items-center justify-between max-w-[1980px]  '>
                    {/* Nav Container */}
                    <div className=' py-4 xl:py-3 flex justify-between items-center w-full'>
                        {/* Brand */}
                        <Link href='/#portfolio'  >
                            <a onClick={() => setActive('')} className=' flex-1 flex items-center space-x-3 '>
                                <div className={`${scroll > 500 ? 'bg-dark' : 'bg-accent-500'} rounded-lg overflow-hidden min-w-[50px] min-h-[50px] flex justify-center items-center`}>
                                    <Image
                                        src={Logo}
                                        alt='logo'
                                        width={27}
                                        height={27}
                                        objectFit='contain'
                                    />
                                </div>

                                <span className='font-bold uppercase text-xl  '>Jonathan Carpena</span>
                            </a>
                        </Link>

                        {/* NavItems */}
                        <ul className='flex items-center capitalize text-lg space-x-3 xl:text-xl'>
                            {NavLinks.map((item) => (
                                <NavItem
                                    key={item.link}
                                    scroll={scroll}
                                    active={active}
                                    link={item.link}
                                    text={item.text}
                                />
                            ))}

                            <a
                                href="./Jonathan Carpena Resume.pdf"
                                // download
                                title="Resume"
                                target="_blank"
                                rel='noopener noreferrer'
                            ><button className='transition-all ease-in-out duration-150  bg-accent-500 hover:bg-accent-600 hover:scale-105 active:scale-95 active:bg-accent-600 rounded-xl  flex space-x-1 py-2 px-4 items-center text-white'>
                                    <FiFileText />
                                    <span> Resume</span>
                                </button>
                            </a>



                        </ul>

                    </div>


                </div>

            </motion.nav>

            {/* Mobile: Menu  */}
            <MobileMenu />



        </>


    )
}

export default Navbar