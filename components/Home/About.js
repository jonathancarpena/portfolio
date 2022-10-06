import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import Section from './Section'

function About() {

    const Technologies = ["React", "Typescript", "Redux", "Node.js", "Express", "MongoDB"]

    return (
        <Section className=' h-screen flex justify-center items-center'>

            <div className='border-t-[1px] flex flex-col lg:flex-row drop-shadow-xl rounded-lg overflow-hidden bg-white '>
                <div className='w-full lg:w-1/2 h-[600px] flex justify-center items-center bg-neutral-200'>
                    <span>IMG</span>
                </div>
                <div className='w-full lg:w-1/2 flex flex-col justify-center space-y-5 p-5 '>
                    <p className='text-4xl font-semibold'>
                        A little bit about me
                    </p>

                    {/* Coding Background */}
                    <p>
                        {` I'm a full-stack software engineer specializing in building and designing exceptional digital experiences.
                        I began tinkering with coding and programming since I was 10, but not until college did I began taking it
                        more seriously. Since then, I have upgraded my technology toolkit and am capable of building responsive web
                        applications.`}
                    </p>

                    {/* Current Occupation */}
                    <p>
                        {`Most recently, I've been helping local businesses make the most of their customers and audiences,
                        by providing them with great user experiences`}
                    </p>

                    {/* Outside of Work */}
                    <p> {`Outside the professional environment, I enjoy creating lifestyle videos, debating what food actually deserves
                        a 10/10 in taste, and walking my dog!`}</p>



                    {/* Tech Stack */}
                    <div>
                        <p>{`Here are a few technologies I’ve been working with recently:`}</p>
                        <ul className='grid grid-cols-2 w-3/4 mt-2'>
                            {Technologies.map((item) => (
                                <li key={`technologies-${item}`} className='flex space-x-2 items-center'>
                                    <FiChevronRight className='text-accent-500' />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>

            </div>
        </Section>
    )
}

export default About