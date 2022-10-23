
// Components
import Link from 'next/link'
import SEO from '../components/Layout/SEO'

// Icons
import { FiHome, FiMessageSquare } from 'react-icons/fi'


function MyFault() {


    return (
        <>
            <SEO title="Sorry! 500 Server Error." description="500 Page - jonathancarpena.me" />
            <div className='  relative top-12 h-[70vh] flex-col flex justify-center items-center'>
                <h1 className='text-center mb-10 text-5xl font-bold md:text-8xl'>
                    <p>{`It's Not You,`}</p>
                    <p>{`It's Me.`}</p>
                </h1>
                <div className='flex space-x-3'>
                    <Link href="/#contact">
                        <button className='hover:bg-accent-400 active:bg-accent-600 select-none hover:scale-105 active:scale-95 transition-all ease-in-out duration-150 flex bg-accent-500 px-3 py-2 rounded-md text-white text-2xl space-x-1.5 items-center'>
                            <FiMessageSquare />
                            <span>Contact Me</span>
                        </button>
                    </Link>

                    <Link href="/" >
                        <button className=' hover:bg-accent-400 active:bg-accent-600 flex  text-2xl space-x-1.5 items-center bg-accent-500 px-3 py-2 rounded-md text-white select-none hover:scale-105 active:scale-95 transition-all ease-in-out duration-150'>
                            <FiHome />
                            <span>Go Home</span>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MyFault