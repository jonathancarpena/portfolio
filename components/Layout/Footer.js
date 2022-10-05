import Link from 'next/link'
import React from 'react'
import Socials from '../../lib/socials'

function Footer() {
    const General = [
        { text: 'Home', link: '/' },
        { text: 'My Work', link: 'work' },
        { text: 'Skills', link: 'skills' },
        { text: 'Links', link: 'links' },
    ]

    const Other = [
        { text: 'LinkedIn', link: 'https://www.linkedin.com/in/jonathan-carpena/' },
        { text: 'Github', link: 'https://www.github.com/jonathancarpena' },
        { text: 'Youtube', link: 'https://www.youtube.com' },
        { text: 'Tiktok', link: 'https://www.tiktok.com' },
        { text: 'Instagram', link: 'https://www.instagram.com' }
    ]


    return (
        <footer className='text-lg py-20  w-full flex justify-center items-center bg-accent-600'>


            <div className='max-w-7xl px-10 flex flex-col space-y-10 w-full  text-white'>
                <div className='flex space-x-20 w-full  '>

                    <div >
                        <span className=' font-semibold inline-block mb-1'>General</span>
                        <ul className='flex flex-col space-y-2'>
                            {General.map((item) => (
                                <li key={`${item.text}`} className=' cursor-pointer hover:underline'>
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
                            {Object.keys(Socials).map((item) => (
                                <li key={`${item.text}`} className='cursor-pointer hover:underline'>
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
                <span className='w-max inline-block px-3 py-1 rounded-md font-semibold bg-white text-accent-500'>
                    Built By Jonathan Carpena
                </span>
            </div>




        </footer>
    )
}

export default Footer