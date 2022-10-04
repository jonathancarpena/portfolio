import React from 'react'
import Section from './Section'
import Projects from '../../lib/projects'

import { FiExternalLink, FiGithub } from 'react-icons/fi'

const FeaturedProject = ({ direction = "left", project = null }) => {

    if (!project) {
        return <p>No Project to Display</p>
    }
    return (

        <>
            {direction === "left" &&
                <li className={`flex -space-x-14 `} >

                    {/* Image */}

                    <img src={project.preview} className=" w-3/5 object-cover rounded-md hover:z-50 hover:scale-105 hover:drop-shadow-xl transition-all duration-200" />


                    {/* Details */}
                    <div className={`flex flex-col justify-center space-y-8 items-end`} >

                        <div>
                            <p className='text-accent-500 uppercase font-semibold text-end'>
                                Featured Project
                            </p>
                            <p className='text-3xl font-bold'>{project.name}</p>
                        </div>


                        <div className='border-t-[1px] bg-white drop-shadow-lg px-7 py-5 rounded-md   '>
                            <p>
                                {project.description}
                            </p>
                        </div>

                        <ul className='flex'>
                            {project.tools.map((item) => (
                                <li className='font-code ml-3 text-gray-500'>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className='flex space-x-3 text-2xl'>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <FiGithub className='hover:text-accent-500 hover:scale-110 transition-all duration-150' />
                            </a>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <FiExternalLink className='hover:text-accent-500 hover:scale-110 transition-all duration-150' />
                            </a>
                        </div>

                    </div>

                </li>
            }

            {direction === "right" &&
                <li className={`flex -space-x-14 `} >



                    {/* Details */}
                    <div className={`flex flex-col justify-center space-y-8 items-start`} >

                        <div >
                            <p className='text-accent-500 uppercase font-semibold text-start'>
                                Featured Project
                            </p>
                            <p className='text-3xl font-bold'>{project.name}</p>
                        </div>


                        <div className='border-t-[1px] bg-white drop-shadow-lg px-7 py-5 rounded-md   '>
                            <p>
                                {project.description}
                            </p>
                        </div>

                        <ul className='flex'>
                            {project.tools.map((item) => (
                                <li className='font-code mr-3 text-gray-500'>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className='flex space-x-3 text-2xl'>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <FiGithub className='hover:text-accent-500 hover:scale-110 transition-all duration-150' />
                            </a>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <FiExternalLink className='hover:text-accent-500 hover:scale-110 transition-all duration-150' />
                            </a>
                        </div>

                    </div>

                    {/* Image */}
                    <img src={project.preview} className="w-3/5 object-cover rounded-md hover:z-50 hover:scale-105 hover:drop-shadow-xl transition-all duration-200" />
                </li>
            }


        </>

    )
}
function Work() {


    return (
        <Section id="featured-work">
            <h1 className='text-6xl font-semibold text-center  my-20'>Some Things I've Built</h1>
            <ul className='flex flex-col space-y-36'>
                <FeaturedProject direction={"left"} project={Projects[0]} />
                <FeaturedProject direction={"right"} project={Projects[1]} />
                <FeaturedProject direction={"left"} project={Projects[2]} />
            </ul>
        </Section>
    )
}

export default Work