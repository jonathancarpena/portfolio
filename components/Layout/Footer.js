import Link from 'next/link'
import React from 'react'
import Socials from '../../lib/socials'
import Image from 'next/image'

function Footer() {
    const General = [
        { text: 'Home', link: '/' },
        { text: 'My Work', link: '/work' },
        { text: 'Contact Me', link: '/#contact' },

    ]


    const Others = [
        { text: 'Blog', link: '/blog' },
        { text: 'Extras', link: '/links' }
    ]


    return (
        <footer className='text-lg py-20  w-full flex justify-center items-center bg-accent-600'>


            <div className='max-w-7xl px-10 flex flex-col space-y-20 w-full  text-white'>
                <div className='flex flex-col lg:items-start space-y-10 lg:space-y-0 lg:flex-row lg:justify-between w-full  '>
                    <div className='flex space-x-3 items-center  '>

                        <Link href="/" >
                            <button className=' bg-white rounded-md drop-shadow-md w-[50px] h-[50px] flex justify-center items-center border-t-[1px]'>
                                <Image alt="logo-black" src="/logo-black.png" width={20} height={30} layout="fixed" />
                            </button>
                        </Link>
                        <p className='flex flex-col text-lg -space-y-1 uppercase font-semibold'>
                            <span>Jonathan</span>
                            <span>Carpena</span>
                        </p>
                    </div>

                    <div >
                        <span className=' font-semibold  inline-block mb-2 text-xl'>General</span>
                        <ul className='flex flex-col space-y-2'>
                            {General.map((item, idx) => (
                                <li key={`General-${item.text}-${idx}`} className=' cursor-pointer hover:underline'>
                                    <Link href={item.link} >
                                        <span>
                                            {item.text}
                                        </span>
                                    </Link>
                                </li>
                            ))}

                        </ul>
                    </div>

                    <div>
                        <span className=' font-semibold inline-block mb-2 text-xl'>Others</span>
                        <ul className='flex flex-col space-y-2'>
                            {Others.map((item, idx) => (
                                <li key={`Other-${item.text}-${idx}`} className=' cursor-pointer hover:underline'>
                                    <Link href={item.link} >
                                        <span>
                                            {item.text}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                            <li className=' cursor-pointer hover:underline'>
                                <a href="./Jonathan Carpena Resume.pdf"
                                    // download
                                    title="Resume"
                                    target="_blank"
                                    rel='noopener noreferrer'>
                                    <span >Resume</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <span className=' font-semibold inline-block mb-2 text-xl'>Find Me On</span>
                        <ul className='flex space-x-5'>
                            {Object.keys(Socials).map((item, idx) => (
                                <li key={`Socials-${item.text}-${idx}`} className='cursor-pointer hover:underline text-3xl'>
                                    <a href={Socials[item]['link']} target="_blank" rel="noopener noreferrer">
                                        {Socials[item].icon}
                                        {/* <span className='capitalize'>
                                            {item}
                                        </span> */}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>




        </footer>
    )
}

export default Footer