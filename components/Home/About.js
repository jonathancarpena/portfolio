import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import Section from './Section'

function About() {

    const Technologies = ["React", "Typescript", "Redux", "Node.js", "Express", "MongoDB"]

    return (
        <Section className=' h-screen flex justify-center items-center'>

            <div className='border-t-[1px]  flex drop-shadow-xl rounded-lg overflow-hidden bg-white '>
                <div className='w-1/2 h-[600px] flex justify-center items-center bg-neutral-200'>
                    <span>IMG</span>
                </div>
                <div className='w-1/2 flex flex-col justify-center space-y-5 p-5 '>
                    <p className='text-4xl font-semibold'>
                        A little about me
                    </p>

                    {/* Background */}
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloribus hic iusto accusantium
                        aperiam quaerat tenetur odio ratione beatae, culpa error minima explicabo quisquam? Consequuntur
                        a asperiores debitis voluptatibus amet?
                    </p>

                    {/* Current Occupation */}
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloribus hic iusto accusantium
                        aperiam quaerat tenetur odio ratione beatae, culpa error minima explicabo quisquam? Consequuntur

                    </p>

                    {/* Tech Stack */}
                    <div>
                        <p>Here are a few technologies I’ve been working with recently:</p>
                        <ul className='grid grid-cols-2 w-3/4'>
                            {Technologies.map((item) => (
                                <li className='flex space-x-2 items-center'>
                                    <FiChevronRight />
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