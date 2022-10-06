import React from 'react'
import Section from './Section'
import Projects from '../../lib/projects'
import Image from 'next/image'

import { FiExternalLink, FiGithub, FiPlay } from 'react-icons/fi'

export const Project = ({ direction = "left", project = null, darkPreview = false, featured = false }) => {

    if (!project) {
        return <p>No Project to Display</p>
    }
    return (

        <li className={`h-max relative border-2 overflow-hidden rounded-md  lg:border-none lg:overflow-visible ${darkPreview ? 'text-white lg:text-black' : ''}`}>

            {direction === "left" &&
                <div className={` flex lg:-space-x-14    `} >

                    {/* Image */}
                    <div className=" blur-md absolute z-0 h-full w-full object-cover rounded-md lg:blur-none lg:opacity-100 lg:relative lg:min-w-[615px] lg:min-h-[350px]   lg:hover:z-50 lg:hover:scale-105 lg:hover:drop-shadow-xl transition-all duration-200" >
                        <Image
                            alt={`${project.name}-preview`}
                            src={project.preview}

                            objectFit="cover"
                            layout="fill"
                            priority
                        />
                    </div>



                    {/* Details */}
                    <div className={` p-5 w-full z-10 flex flex-col justify-center space-y-5 lg:space-y-8 lg:p-0 lg:items-end`} >

                        <div>
                            <p className='text-accent-500 uppercase font-semibold lg:text-end'>
                                {featured ? 'Featured Project' : 'Project'}
                            </p>
                            <p className='text-3xl font-bold'>{project.name}</p>
                        </div>


                        <div className='lg:border-t-[1px] bg-white lg:drop-shadow-lg lg:px-7 lg:py-5 rounded-md font-medium lg:font-normal  bg-opacity-70 lg:bg-opacity-100 p-3'>
                            <p className=''>
                                {project.description}
                            </p>
                        </div>

                        <ul className='flex flex-wrap lg:justify-end lg:max-w-[400px] w-fit lg:rounded-none lg:bg-transparent lg:p-0 rounded-md bg-white bg-opacity-70 p-3'>
                            <li className='lg:hidden capitalize font-code mr-2 font-semibold   '>Tools: </li>
                            {project.tools.map((item) => (
                                <li key={`${project.id}-tool-${item}`} className='capitalize font-code mr-4 lg:ml-4 lg:mr-0  font-medium lg:font-normal lg:text-gray-500 '>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className='flex space-x-3 text-2xl px-1 lg:px-0'>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <FiGithub className='hover:text-accent-500 hover:scale-110 transition-all duration-150' />
                            </a>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <FiExternalLink className='hover:text-accent-500 hover:scale-110 transition-all duration-150' />
                            </a>
                            {project.demo &&
                                <a href={`work/demo/${project.name}`} target="_blank" rel="noopener noreferrer">
                                    <FiPlay className='hover:text-accent-500 hover:scale-110 transition-all duration-150' />
                                </a>
                            }
                        </div>

                    </div>

                </div>
            }

            {direction === "right" &&
                <div className={` flex lg:-space-x-14    `} >


                    {/* Details */}
                    <div className={` p-5 w-full z-10 flex flex-col justify-center space-y-5 lg:space-y-8 lg:p-0 lg:items-start`} >

                        <div>
                            <p className='text-accent-500 uppercase font-semibold lg:text-start'>
                                Featured Project
                            </p>
                            <p className='text-3xl font-bold'>{project.name}</p>
                        </div>


                        <div className='lg:border-t-[1px] bg-white lg:drop-shadow-lg lg:px-7 lg:py-5 rounded-md font-medium lg:font-normal  bg-opacity-70 lg:bg-opacity-100 p-3  '>
                            <p>
                                {project.description}
                            </p>
                        </div>

                        <ul className='flex flex-wrap justify-start  lg:max-w-[400px] w-fit lg:rounded-none lg:bg-transparent lg:p-0 rounded-md bg-white bg-opacity-70 p-3'>
                            <li className='lg:hidden capitalize font-code mr-2 font-semibold   '>Tools: </li>
                            {project.tools.map((item) => (
                                <li key={`${project.id}-tool-${item}`} className='font-code mr-4  lg:text-gray-500  font-medium lg:font-normal capitalize'>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className='flex space-x-3 text-2xl px-1 lg:px-0'>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <FiGithub className='hover:text-accent-500 hover:scale-110 transition-all duration-150' />
                            </a>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <FiExternalLink className='hover:text-accent-500 hover:scale-110 transition-all duration-150' />
                            </a>
                            {project.demo &&
                                <a href={`work/demo/${project.name}`} target="_blank" rel="noopener noreferrer">
                                    <FiPlay className='hover:text-accent-500 hover:scale-110 transition-all duration-150' />
                                </a>
                            }
                        </div>

                    </div>

                    {/* Image */}
                    <div className=" blur-md absolute z-0 h-full w-full object-cover rounded-md lg:blur-none lg:opacity-100 lg:relative lg:min-w-[615px] lg:min-h-[350px]   lg:hover:z-50 lg:hover:scale-105 lg:hover:drop-shadow-xl transition-all duration-200" >
                        <Image
                            alt={`${project.name}-preview`}
                            src={project.preview}
                            width={615}
                            height={350}
                            objectFit="cover"
                            layout="fill"
                            priority
                        />
                    </div>

                </div>
            }





        </li>

    )
}
function Work() {


    return (
        <Section id="featured-work" >
            <h1 className='text-6xl font-semibold text-center  mt-32 mb-10 lg:my-20'>{`Some Things I've Built`}</h1>
            <ul className=' flex flex-col space-y-10 lg:space-y-36'>
                <Project direction={"left"} project={Projects[0]} featured={true} />
                <Project direction={"right"} project={Projects[1]} featured={true} />
                <Project direction={"left"} project={Projects[2]} featured={true} />
            </ul>
        </Section>
    )
}

export default Work