import { useEffect, useState } from 'react'

import Navbar from './Navbar'
import Footer from './Footer'
import SocialButtons from './SocialButtons'
import HomeButton from './HomeButton'
import { useRouter } from 'next/router'


function Layout({ children }) {
    const router = useRouter()
    // generator function




    return (
        <>

            <div className='font-body flex justify-center items-center flex-col'>
                <div className='relative w-full max-w-screen-2xl '>
                    {router.pathname !== '/links' && <Navbar />}
                    <main className='relative lg:bottom-[15rem]'>
                        {children}
                    </main>
                    {router.pathname !== '/links' &&
                        <>
                            <SocialButtons />
                            <HomeButton />
                        </>
                    }
                </div>
                {router.pathname !== '/links' &&
                    <Footer />
                }
            </div>
        </>

    )
}

export default Layout