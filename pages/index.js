import { useState, useEffect } from 'react';

// Next
import Head from 'next/head'

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
      <Head>
        <title>Jonathan Carpena - Frontend Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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