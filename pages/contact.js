import { useEffect } from 'react'
import { FiHome } from 'react-icons/fi'
import Link from 'next/link'
import { useUpdateSeo } from '../lib/hooks/useSeo'

function Contact() {
    const updateSeo = useUpdateSeo()
    useEffect(() => {
        updateSeo({
            title: 'Message Sent!',
            description: "Your beautiful message was successfully sent to Jonathan Carpena. I will get back to you in 24-48 hours. Promise.",
        })
    })

    return (
        <div className=' relative lg:top-20  h-[94vh] lg:mb-0  lg:h-[70vh] flex-col flex justify-center items-center'>
            <h1 className='text-center mb-5 text-5xl font-bold md:text-8xl'>
                Message sent!
            </h1>
            <h2 className='text-center text-2xl md:text-4xl mb-10 '>
                {`I'll get back to you in 24-48 hours.`}
            </h2>


            <Link href="/" >
                <button className='rounded-xl active:scale-90 active:bg-accent-600 hover:scale-110 hover:bg-accent-500 transition-all ease-in-out duration-200 bg-black text-white px-10 py-4 flex  text-2xl space-x-1 items-center'>
                    <FiHome />
                    <span>Go Home</span>
                </button>
            </Link>


        </div>
    )
}

export default Contact