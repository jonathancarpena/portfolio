import React from 'react'
import { FiBook, FiBriefcase, FiMessageSquare, FiUser } from 'react-icons/fi'

import Socials from '../lib/socials'


const Card = ({ text, link, icon }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className='flex space-x-3 items-center active:scale-95 active:bg-gray-100 transition-all ease-in-out duration-200 select-none bg-white py-4 rounded-md hover:drop-shadow-lg text-2xl drop-shadow-md w-full px-5 capitalize border-[1px]' >
            <span className='text-xl'>{icon}</span>
            <span>{text}</span>

        </a>
    )
}
function Links() {

    const ExternalLinks = [
        { text: 'Contact Me', link: '/#contact', icon: <FiMessageSquare /> },
        { text: 'My Work', link: 'work', icon: <FiBriefcase /> },
        { text: 'Portfolio', link: '/', icon: <FiUser /> },
        { text: 'Resume', link: './Jonathan Carpena Resume.pdf', icon: <FiBook /> },

    ]

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className=' select-none relative top-10 lg:top-80 place-self-start flex flex-col justify-center items-center  space-y-10 px-5 lg:px-0 max-w-5xl w-full '>

                {/* Header */}
                <div>
                    <h1 className='text-center mb-2 text-6xl font-bold md:text-6xl'>
                        Links
                    </h1>
                    <h2 className='text-center text-stone-600 text-2xl '>
                        Just Some Extra Stuff.
                    </h2>
                </div>

                <ul className='flex justify-around items-center w-full max-w-sm'>
                    {Object.keys(Socials).map((item) => (

                        <a href={Socials[item]['link']} target="_blank" rel="noopener noreferrer" className='text-2xl'>
                            {Socials[item]['icon']}
                        </a>
                    ))}
                </ul>

                <ul className='max-w-sm w-full flex flex-col space-y-7  items-center justify-center'>
                    {ExternalLinks.map((item) => (
                        <Card key={item.text} link={item.link} text={item.text} icon={item.icon} />
                    ))}

                </ul>





            </div>

        </div>
    )
}

export default Links