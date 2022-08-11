// Framer
import { AnimatePresence } from 'framer-motion';

// Hooks 
import { useCurrentScreen } from '../lib/context/ScreenProvider'

// Components
import Main from '../components/Main';
import Welcome from '../components/Welcome';

function Home() {
  const screen = useCurrentScreen()

  return (
    <>
      <AnimatePresence exitBeforeEnter>

        {screen === "main" &&
          <Main key="main" />
        }

        {screen === "welcome" &&
          <Welcome key="welcome" />
        }
      </AnimatePresence>
    </>
  )
}

export default Home
