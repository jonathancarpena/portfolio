import { useEffect } from 'react'
import Link from 'next/link'
import { FiHome } from 'react-icons/fi'
import { useRouter } from 'next/router'
import SEO from '../components/Layout/SEO'

function NotFound() {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 5000)
    })
    return (
        <>
            <SEO title={'Ooops! Are you lost?'} description="404 Page - jonathancarpena.me" />
            <div className='  relative top-12 h-[70vh] flex-col flex justify-center items-center'>
                <h1 className='text-center mb-10 text-5xl font-bold md:text-8xl'>
                    Whoops, wrong page.
                </h1>

                <Link href="/" >
                    <button className='flex  text-2xl space-x-1 items-center'>
                        <FiHome />
                        <span>Go Home</span>
                    </button>
                </Link>
            </div>
        </>

    )
}

export default NotFound