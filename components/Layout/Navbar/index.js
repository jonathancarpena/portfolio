import { useState } from 'react'

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
import { useEffect } from 'react'

// Icons
import { FiFileText } from 'react-icons/fi'


function Navbar() {
    const scroll = useScroll()
    const darkMode = useDarkMode()
    const { pathname } = useRouter()
    const [active, setActive] = useState('')
    function handleActive(text) {
        setActive(text)
    }

    useEffect(() => {
        if (active !== '' && scroll === 0) {
            setActive('')
        }
    }, [scroll, active])


    const NavLinks = [
        { link: '/#about', text: 'about' },
        { link: '/#work', text: 'work' },
        { link: '/#skills', text: 'skills' },
        { link: '/contact', text: 'contact' },
    ]


    return (

        <>
            <motion.nav
                initial={{ y: `${pathname.includes('contact') ? '0' : '-100%'}` }}
                animate={{ y: 0, transition: { duration: 1.25 } }}
                exit={{ y: '-100%' }}
                className={`
            ${scroll > 500 ? `bg-accent-500 text-white drop-shadow-xl` : `${darkMode ? 'text-white' : 'text-dark'} bg-transparent`}  lg:flex
              hidden  z-50   fixed top-0 w-full  justify-center transition-all ease-in-out duration-300 `}
            >

                {/* Responsive Container */}
                <div className='lg:px-10 xl:px-80 w-full flex items-center justify-between max-w-[1980px]  '>
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
                                    handleActive={handleActive}
                                    scroll={scroll}
                                    darkMode={darkMode}
                                    active={scroll > 500 && active === item.text}
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