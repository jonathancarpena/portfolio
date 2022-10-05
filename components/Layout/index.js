import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import SocialButtons from './SocialButtons'
import HomeButton from './HomeButton'
import { useRouter } from 'next/router'

function Layout({ children }) {
    const { pathname } = useRouter()


    return (
        <>
            <Head>
                <title>Jonathan Carpena - Full Stack Software Engineer</title>
                <meta name="description" content="My name is Jonathan, and I'm a Full Stack Software Engineer specializing in building and designing exceptional digital experiences." />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"></link>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"></link>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"></link>
                <link rel="manifest" href="/favicon/site.webmanifest"></link>
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#1e1e1e"></link>
                <meta name="msapplication-TileColor" content="#ffffff"></meta>
                <meta name="theme-color" content="#ffffff"></meta>
            </Head>

            <div className='font-body flex justify-center items-center flex-col'>
                <div className='relative w-full max-w-screen-xl '>

                    {pathname !== '/links' && <Navbar />}

                    <main className='relative lg:bottom-[15rem]'>
                        {children}
                    </main>

                    {pathname !== '/links' &&
                        <>
                            <SocialButtons />
                            <HomeButton />
                        </>
                    }

                </div>

                {pathname !== '/links' &&
                    <Footer />
                }

            </div>
        </>

    )
}

export default Layout