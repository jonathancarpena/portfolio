import React from 'react'
import Link from 'next/link'
import { FiArrowDownCircle } from 'react-icons/fi'

function Hero() {
    return (
        <div className='h-[80vh] md:h-[93vh] flex flex-col justify-center  items-center'>
            <div className='max-w-screen-2xl  flex flex-col justify-center space-y-4 items-center '>
                <p className='text-2xl font-medium text-stone-600 md:text-4xl'>{`Hello I'm Jonathan,`}</p>
                <h1 className=' text-center text-5xl font-bold md:text-8xl'>
                    {`I'm a front`}<span className='text-accent-500'>-</span>end developer and thingy<span className='text-accent-500'>-</span>builder
                </h1>

                <div>

                    <p className='px-5 max-w-screen-md text-center text-lg text-stone-600 md:text-xl'>
                        Building beautiful React.js applications for all types of clients one piece at a time!
                    </p>
                    {/* <p className='px-5 max-w-screen-md text-center text-lg text-stone-600 md:text-xl'>
                        Currently helping local businesses make the most of their customers and audiences, by providing them with great user experiences.
                    </p> */}

                </div>

                <Link href="/#about-me" scroll={false}>

                    <button className=' bg-black hover:bg-accent-500 active:bg-accent-600 active:scale-95 transition-all ease-in-out  duration text-white p-4 rounded-lg'>
                        Learn More
                    </button>


                </Link>

                <Link href="/#about-me" scroll={false}>

                    <button className='relative top-4 block animate-bounce text-3xl'>
                        <FiArrowDownCircle />
                    </button>

                </Link>




            </div>


        </div>
    )
}

export default Hero