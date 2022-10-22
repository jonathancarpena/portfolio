import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FiBriefcase, FiZap, FiEdit2, FiFile } from 'react-icons/fi'
// import useScroll from '../../lib/hooks/useScroll'


function NavItem({ text, link, icon }) {
    const [hover, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const [wiggle, setWiggle] = useState(false)
    // const scroll = useScroll()
    const { pathname } = useRouter()

    const baseStyles = "px-2 py-1 rounded-md  cursor-pointer transition-all duration-200"
    const activeStyles = "bg-accent-500 text-white"


    useEffect(() => {

        if (pathname === link) {
            setActive(true)
            // } else if (pathname === "/" && text === "contact") {
            //     if (scroll >= 3800 && scroll <= 4700) {
            //         setActive(true)
            //     } else {
            //         setActive(false)
            //     }
            // } else {
        } else {
            setActive(false)
        }
    }, [pathname, link])
    function handleClick() {
        if (active) {
            setWiggle(true)
            setTimeout(() => {
                setWiggle(false)
            }, [400])
        }
    }

    return (
        <li
            onClick={handleClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`${baseStyles} ${active ? activeStyles : ''} ${wiggle ? 'animate-wiggle' : ''} ${(hover && !active) ? "scale-125" : "hover:bg-accent-600"} `}>

            <Link href={link} scroll={false} >
                <button className={` flex items-center space-x-1 outline-none `}>
                    <span className={`${(hover && !active) ? 'text-accent-500' : ''} `}>
                        {icon}
                    </span>
                    <span className='capitalize'>{text}</span>
                </button>

            </Link>
        </li>
    )
}

function MobileNavItem({ text, link, icon }) {

    const [active, setActive] = useState(false)
    const [wiggle, setWiggle] = useState(false)
    // const scroll = useScroll()
    const { pathname } = useRouter()
    const baseStyles = "border-b-4  flex justify-center items-center px-3 pt-3 pb-2  active:scale-90 active:bg-gray-200 active:border-b-gray-200  cursor-pointer transition-all duration-200"


    useEffect(() => {

        if (pathname.includes(link)) {
            setActive(true)
            // } else if (pathname === "/" && text === "contact") {
            //     if (scroll >= 3548 && scroll <= 3856) {
            //         setActive(true)
            //     } else {
            //         setActive(false)
            //     }
            // } else {
        } else {
            setActive(false)
        }
    }, [pathname, link])
    function handleClick() {
        if (active) {
            setWiggle(true)
            setTimeout(() => {
                setWiggle(false)
            }, [400])
        }
    }

    return (
        <li
            onClick={handleClick}
            className={`${baseStyles} ${active ? 'border-b-accent-500' : 'border-b-white'}   `}>


            <Link href={link} scroll={false}>
                <button className={`flex flex-col justify-center items-center space-x-1 outline-none ${wiggle ? 'animate-wiggle' : ''}`}>
                    <span className={`${active ? 'text-accent-500' : ''}`}>
                        {icon}
                    </span>
                    <span className='capitalize'>{text}</span>
                </button>
            </Link>

        </li>
    )
}


function Navbar() {

    const NavLink = [
        { icon: <FiBriefcase />, link: '/work', text: 'work' },
        { icon: <FiZap />, link: '/skills', text: 'skills' },
        { icon: <FiEdit2 />, link: '/blog', text: "blog" },
        { icon: <FiFile />, link: './Jonathan Carpena Resume.pdf', text: "Resume" },
    ]





    return (
        <>
            <nav className='hidden lg:block sticky top-0 z-50   bg-gradient-to-b from-white to-transparent  text-black px-5 py-32  w-full   '>

                <div className=' relative bottom-[7rem] text-black   w-full flex justify-between items-center'>
                    {/*  Brand */}
                    <div className='flex items-center space-x-3'>
                        {/* Logo */}
                        <Link href="/" >
                            <button className=' bg-white rounded-md drop-shadow-md w-[50px] h-[50px] flex justify-center items-center hover:scale-110 transition-transform duration-200 ease-in-out border-t-[1px]'>
                                <Image alt="logo-black" src="/logo-black.png" width={20} height={30} layout="fixed" />
                            </button>
                        </Link>
                        <p className='font-code '>jonathancarpena99@gmail.com</p>
                    </div>

                    {/*  Links */}
                    <ul className='flex space-x-4'>
                        {NavLink.map((item) => (
                            <NavItem
                                key={item.link}
                                text={item.text}
                                link={item.link}
                                icon={item.icon}
                            />
                        ))}
                    </ul>
                </div>
            </nav >

            <nav className='lg:hidden sticky top-0 z-50 bg-white drop-shadow-lg  mx-5 md:w-[450px] md:mx-auto  rounded-b-lg '>
                <ul className='flex justify-evenly overflow-hidden '>
                    {NavLink.map((item) => (
                        <MobileNavItem
                            key={`mobile-${item.link}`}
                            text={item.text}
                            link={item.link}
                            icon={item.icon}
                            anchor={item.anchor || false}
                            blank={item.blank || false}
                        />
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Navbar