import Link from 'next/link'
import React from 'react'

function Footer() {
    const General = [
        { text: 'Home', link: '/' },
        { text: 'My Work', link: 'work' },
        { text: 'Resume', link: '#resume' }
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

            <div className='max-w-[1980px] flex space-x-10 w-full bg-accent-600 text-white'>
                <div >
                    <span className=' font-semibold inline-block mb-1'>General</span>
                    <ul className='flex flex-col space-y-1'>
                        {General.map((item) => (
                            <li className=' cursor-pointer hover:underline'>
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
                    <span className=' font-semibold inline-block mb-1'>Other</span>
                    <ul className='flex flex-col space-y-1'>
                        {Other.map((item) => (
                            <li className='cursor-pointer hover:underline'>
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <span>
                                        {item.text}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>


        </footer>
    )
}

export default Footer