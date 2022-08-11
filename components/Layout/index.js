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

    return (
        <div className={`${darkMode ? 'bg-darker' : 'bg-light'}   w-full min-h-screen flex justify-center `}>


            <div className={`${darkMode ? 'bg-darker text-lighter' : 'bg-light text-darker'}   overflow-hidden w-full    min-h-screen flex flex-col items-center`}>

                <AnimatePresence exitBeforeEnter>
                    {screen !== "welcome" &&
                        <Navbar key="navbar" />
                    }
                </AnimatePresence>

                {children}

                <AnimatePresence exitBeforeEnter>
                    {screen !== "welcome" &&
                        <Footer key="footer" />}
                </AnimatePresence>
            </div>



        </div>



    )
}

export default Layout