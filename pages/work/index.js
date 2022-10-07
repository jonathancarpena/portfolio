import { useState } from 'react'
import Image from 'next/image'
import Projects from '../../lib/projects'

import { FiGithub, FiExternalLink, FiPlay } from 'react-icons/fi'



const ProjectSquare = ({ project, featured, darkPreview }) => {
    const [hover, setHover] = useState(false)

    return (

        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={`h-full relative flex flex-col border-[1px] overflow-hidden    ${darkPreview ? 'text-black ' : ''}`} >

            {/* Image */}
            <div className={`${hover ? "scale-110" : ''} md:min-h-[197px] z-0   object-cover transition-all duration-200   `}>
                <Image
                    alt={`${project.name}-preview`}
                    src={project.preview}
                    width={400}
                    height={225}
                    layout="responsive"
                    priority
                />
            </div>



            {/* Details */}

            <div className={`h-max p-4 md:p-10 z-20 justify-start bg-white flex flex-col space-y-3 md:space-y-5 `} >

                <div>
                    <p className='text-accent-500 uppercase font-semibold text-base select-none'>
                        {featured ? 'Featured Project' : 'Project'}
                    </p>
                    <p className='text-3xl font-bold select-none  '>
                        {project.name}
                    </p>
                </div>

                <p className={` cursor-pointer select-none break-words    `}>
                    {project.brief ? project.brief : `${project.name} description.`}
                </p>


                <ul className='flex flex-wrap select-none'>
                    {project.tools.map((item) => (
                        <li key={`${project.name}-tool-${item}`} className='capitalize font-code mr-3  '>
                            {item}
                        </li>
                    ))}
                </ul>

                <div className={` flex space-x-3 text-xl md:text-2xl  `}>

                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <FiGithub className='hover:text-accent-500 hover:scale-110 transition-all duration-150 active:scale-90' />
                    </a>
                    {project.link &&
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <FiExternalLink className='hover:text-accent-500 hover:scale-110 transition-all duration-150 active:scale-90' />
                        </a>
                    }
                    {project.demo &&
                        <a href={`work/demo/${project.name}`} target="_blank" rel="noopener noreferrer">
                            <FiPlay className='hover:text-accent-500 hover:scale-110 transition-all duration-150 active:scale-90' />
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
                    <h1 className='text-center mb-2 md:mb-4 text-6xl font-bold md:text-8xl'>
                        All of the Things I Built
                    </h1>
                    <h2 className='text-center text-stone-600 text-2xl md:text-3xl'>
                        My Blood, Sweat, and Tears
                    </h2>
                </div>


                <ul className='grid gap-4 md:gap-0 grid-cols-1 md:grid-cols-2  lg:grid-cols-3  '>
                    {Projects.map((item) => (

                        <ProjectSquare key={`project-${item.id}`} project={item} featured={item.featured} />


                    ))}

                </ul>
            </div>

        </div>
    )
}

export default Work