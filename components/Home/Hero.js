import React from 'react'

function Hero() {
    return (
        <div className='h-[93vh] flex flex-col justify-center  items-center'>
            <div className='max-w-screen-xl flex flex-col justify-center space-y-4 items-center'>
                <p className='text-2xl font-medium text-stone-600 md:text-4xl'>Hello I'm Jonathan,</p>
                <h1 className='  text-center text-5xl font-bold md:text-8xl'>
                    I'm a full-stack developer and thingy-builder
                </h1>
                <p className='px-5 max-w-screen-md text-center text-lg text-stone-600 md:text-xl'>
                    Currently helping small businesses and creators make the most of their customers and audiences, by providing them with great user experiences.
                </p>

                <a href="/#featured-work">
                    <button className='bg-black hover:bg-accent-500 active:bg-accent-600 active:scale-95 transition-all ease-in-out  duration text-white p-4 rounded-lg'>
                        View My Work
                    </button>
                </a>
            </div>


        </div>
    )
}

export default Hero