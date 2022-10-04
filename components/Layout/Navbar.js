import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiBriefcase, FiZap, FiMessageSquare, FiBook } from 'react-icons/fi'


function Navbar() {
    const NavLink = [
        { icon: <FiBriefcase />, link: '/work', text: 'work' },
        { icon: <FiZap />, link: '/skills', text: 'skills' },
        { icon: <FiMessageSquare />, link: '/contact', text: 'contact' },
        { icon: <FiBook />, link: '', text: 'resume' },
    ]




    return (
        <nav className='sticky top-0 z-50 bg-gradient-to-b from-white to-transparent  text-black px-5 py-32  w-full   '>

            <div className=' relative bottom-[7rem] text-black   w-full flex justify-between items-center'>
                {/*  Brand */}
                <div className='flex items-center space-x-2'>
                    {/* Logo */}
                    <Link href="/">
                        <button className='bg-white rounded-md drop-shadow-md w-[50px] h-[50px] flex justify-center items-center hover:scale-110 transition-transform duration-200 ease-in-out'>
                            <Image src="/logo-black.png" width={20} height={30} layout="fixed" />
                        </button>
                    </Link>



                </div>

                {/*  Links */}
                <ul className='flex space-x-6'>
                    {NavLink.map((item) => (
                        <li className='cursor-pointer border-b-4 border-b-transparent hover:border-b-accent-500'>
                            <Link href={item.link} >
                                <span className="flex items-center space-x-1">
                                    {item.icon}
                                    <span className='capitalize'>{item.text}</span>
                                </span>

                            </Link>
                        </li>
                    ))}

                </ul>
            </div>

        </nav >
    )
}

export default Navbar