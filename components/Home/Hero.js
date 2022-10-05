import React from 'react'

import { FiArrowDownCircle } from 'react-icons/fi'

function Hero() {
    return (
        <div className='h-[93vh] flex flex-col justify-center  items-center'>
            <div className='max-w-screen-xl flex flex-col justify-center space-y-4 items-center'>
                <p className='text-2xl font-medium text-stone-600 md:text-4xl'>Hello I'm Jonathan,</p>
                <h1 className='  text-center text-5xl font-bold md:text-8xl'>
                    I'm a full-stack developer and thingy-builder
                </h1>

                <div>
                    <p className='px-5 max-w-screen-md text-center text-lg text-stone-600 md:text-xl'>
                        Currently helping local businesses make the most of their customers and audiences, by providing them with great user experiences
                    </p>
                    <p className='px-5 max-w-screen-md text-center text-lg text-stone-600 md:text-xl'>
                        More importantly, I am searching for the next best place to eat some good food.
                    </p>
                </div>

                <a href="/#featured-work">
                    <button className=' bg-black hover:bg-accent-500 active:bg-accent-600 active:scale-95 transition-all ease-in-out  duration text-white p-4 rounded-lg'>
                        View My Work
                    </button>
                </a>

                <a href="/#featured-work" className='relative top-4 block animate-bounce text-3xl'>
                    <button>
                        <FiArrowDownCircle />
                    </button>
                </a>



            </div>


        </div>
    )
}

export default Hero