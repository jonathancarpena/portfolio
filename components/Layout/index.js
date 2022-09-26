// Next
import Head from 'next/head'
import { useRouter } from 'next/router'

// Framer
import { AnimatePresence } from 'framer-motion'

// Hooks
import { useDarkMode } from '../../lib/context/ThemeProvider'
import { useCurrentScreen } from '../../lib/context/ScreenProvider'

// Components
import Navbar from './Navbar'
import Footer from './Footer'



function Layout({ children }) {
    const darkMode = useDarkMode()
    const screen = useCurrentScreen()
    const router = useRouter()
    const pathname = router.pathname.split('/')[1]
    const layoutPages = ["main", "contact", "work"]



    return (
        <div className={`${darkMode ? 'bg-darker' : 'bg-light'}   w-full min-h-screen flex justify-center `}>
            <Head>
                <title>Jonathan Carpena - Full Stack Software Engineer</title>
                <meta name="description" content="My name is Jonathan, and I'm a Full Stack Software Engineer specializing in building and designing exceptional digital experiences." />
                <meta name="avatar" content="%PUBLIC_URL%/avatar.png"></meta>
                <meta name="msapplication-TileColor" content="#5020df"></meta>
                <meta name="theme-color" content="#5020df"></meta>
                <link rel="icon" href="/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5020DF" />

            </Head>

            <div className={`${darkMode ? 'bg-darker text-lighter' : 'bg-light text-darker'}   overflow-hidden w-full    min-h-screen flex flex-col items-center`}>

                <AnimatePresence exitBeforeEnter>
                    {(screen !== "welcome" || layoutPages.includes(pathname)) &&
                        <Navbar key="navbar" />
                    }
                </AnimatePresence>

                {children}

                <AnimatePresence exitBeforeEnter>
                    {(screen !== "welcome" || layoutPages.includes(pathname)) &&
                        <Footer key="footer" />
                    }
                </AnimatePresence>

            </div>



        </div>



    )
}

export default Layout