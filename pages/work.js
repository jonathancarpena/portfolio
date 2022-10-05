import { useState } from 'react'

import Projects from '../lib/projects'

import { FiGithub, FiExternalLink, FiPlay } from 'react-icons/fi'



const ProjectSquare = ({ project, featured, darkPreview }) => {

    const [open, setOpen] = useState(false)
    const [hover, setHover] = useState(false)
    return (

        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={`h-fit relative flex flex-col border-[1px] overflow-hidden    ${darkPreview ? 'text-black ' : ''}`} >

            {/* Image */}
            <img src={project.preview} className={`${hover ? "scale-110" : ''}  z-0 h-full w-full  object-cover transition-all duration-200   `} />


            {/* Details */}
            <div className='min-h-[238px] md:min-h-[378px] flex flex-col justify-between '>
                <div className={`  pt-4 px-4 md:pt-10 md:px-10 z-20 justify-start bg-white flex flex-col  space-y-5 `} >

                    <div>
                        <p className='text-accent-500 uppercase font-semibold text-xs md:text-base'>
                            {featured ? 'Featured Project' : 'Project'}
                        </p>
                        <p className='text-xl md:text-3xl font-bold   '>
                            {project.name}
                        </p>
                    </div>

                    <p onClick={() => setOpen(!open)} className={`cursor-pointer select-none overflow-hidden ${open ? 'h-max' : 'h-[70px]'} `}>
                        {project.description.length > 100
                            ? `${open
                                ? project.description
                                : `${project.description.substring(0, 100)}...`
                            } `
                            : project.description
                        }

                    </p>


                    <ul className='hidden md:flex flex-wrap'>
                        {project.tools.map((item) => (
                            <li key={`${project.name}-tool-${item}`} className='font-code mr-3  '>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={` flex space-x-3 text-2xl  ${open ? 'pt-5' : ''} px-4 pb-4 md:px-10 md:pb-10`}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <FiGithub className='hover:text-accent-500 hover:scale-110 transition-all duration-150' />
                    </a>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <FiExternalLink className='hover:text-accent-500 hover:scale-110 transition-all duration-150' />
                    </a>
                    {project.demo &&
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <FiPlay className='hover:text-accent-500 hover:scale-110 transition-all duration-150' />
                        </a>
                    }

                </div>
            </div>


        </div>
    )
}
function Work() {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className=' mb-40 lg:mb-28 relative top-28 place-self-start flex flex-col  space-y-10 px-5 lg:px-0 max-w-5xl w-full '>

                {/* Header */}
                <div>
                    <h1 className='text-center mb-4 text-5xl font-bold md:text-8xl'>
                        All of the Things I Built
                    </h1>
                    <h2 className='text-center text-stone-600 text-3xl '>
                        My Blood, Sweat, and Tears
                    </h2>
                </div>


                <ul className='grid grid-cols-2 auto-rows-[minmax(0,_2fr)] lg:grid-cols-3  '>
                    {Projects.map((item) => (

                        <ProjectSquare key={`project-${item.id}`} project={item} featured={item.featured} />


                    ))}

                </ul>
            </div>

        </div>
    )
}

export default Work