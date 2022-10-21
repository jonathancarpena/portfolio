import Link from 'next/link'
import React from 'react'
import Socials from '../../lib/socials'

function Footer() {
    const General = [
        { text: 'Home', link: '/' },
        { text: 'My Work', link: '/work' },
        { text: 'Contact Me', link: '/#contact' },
    ]




    return (
        <footer className='text-lg py-20  w-full flex justify-center items-center bg-accent-600'>


            <div className='max-w-7xl px-10 flex flex-col space-y-20 w-full  text-white'>
                <div className='flex space-x-20 w-full  '>

                    <div >
                        <span className=' font-semibold inline-block mb-1'>General</span>
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
                        <span className=' font-semibold inline-block mb-1'>Other</span>
                        <ul className='flex flex-col space-y-2'>
                            {Object.keys(Socials).map((item, idx) => (
                                <li key={`Other-${item.text}-${idx}`} className='cursor-pointer hover:underline'>
                                    <a href={Socials[item]['link']} target="_blank" rel="noopener noreferrer">
                                        <span className='capitalize'>
                                            {item}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
                <span className='w-max inline-block rounded-md  '>
                    Built By Jonathan Carpena
                </span>
            </div>




        </footer>
    )
}

export default Footer