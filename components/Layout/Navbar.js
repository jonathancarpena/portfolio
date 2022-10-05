import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FiBriefcase, FiZap, FiMessageSquare, FiBook } from 'react-icons/fi'
import useScroll from '../../lib/hooks/useScroll'


function NavItem({ text, link, icon, anchor = false, blank = false }) {
    const [hover, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const [wiggle, setWiggle] = useState(false)
    const scroll = useScroll()
    const { pathname } = useRouter()

    const baseStyles = "px-2 py-1 rounded-md  cursor-pointer transition-all duration-200"
    const activeStyles = "bg-accent-500 text-white"


    useEffect(() => {

        if (pathname === link) {
            setActive(true)
        } else if (pathname === "/" && text === "contact") {
            if (scroll >= 3548 && scroll <= 3856) {
                setActive(true)
            } else {
                setActive(false)
            }
        } else {
            setActive(false)
        }
    }, [pathname, scroll])
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
            {!anchor
                ? <Link href={link} >
                    <button className=" flex items-center space-x-1 outline-none">
                        <span className={`${(hover && !active) ? 'text-accent-500' : ''}`}>
                            {icon}
                        </span>
                        <span className='capitalize'>{text}</span>
                    </button>

                </Link>
                : <a href={link}
                    title={blank ? text : ''}
                    target={blank ? "_blank" : ""}
                    rel={blank ? 'noopener noreferrer' : ''}
                >
                    <button className="flex items-center space-x-1 outline-none">
                        <span className={`${(hover && !active) ? 'text-accent-500' : ''}`}>
                            {icon}
                        </span>

                        <span className='capitalize'>{text}</span>
                    </button>
                </a>
            }
        </li>
    )
}

function Navbar() {

    const NavLink = [
        { icon: <FiBriefcase />, link: '/work', text: 'work' },
        { icon: <FiZap />, link: '/skills', text: 'skills' },
        { icon: <FiMessageSquare />, link: '/#contact', text: "contact", anchor: true },
        { icon: <FiBook />, link: './Jonathan Carpena Resume.pdf', text: "Resume", anchor: true, blank: true },
    ]





    return (
        <nav className=' sticky top-0 z-50 bg-gradient-to-b from-white to-transparent  text-black px-5 py-32  w-full   '>

            <div className=' relative bottom-[7rem] text-black   w-full flex justify-between items-center'>
                {/*  Brand */}
                <div className='flex items-center space-x-2'>
                    {/* Logo */}
                    <Link href="/">
                        <>
                            <button className='bg-white rounded-md drop-shadow-md w-[50px] h-[50px] flex justify-center items-center hover:scale-110 transition-transform duration-200 ease-in-out border-t-[1px]'>
                                <Image alt="logo-black" src="/logo-black.png" width={20} height={30} layout="fixed" />
                            </button>
                        </>
                    </Link>
                </div>

                {/*  Links */}
                <ul className='flex space-x-4'>
                    {NavLink.map((item) => (
                        <NavItem

                            key={item.link}
                            text={item.text}
                            link={item.link}
                            icon={item.icon}
                            anchor={item.anchor || false}
                            blank={item.blank || false}
                        />
                    ))}

                </ul>
            </div>

        </nav >
    )
}

export default Navbar