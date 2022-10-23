import '../styles/globals.css'

import { useEffect } from 'react'
import { useRouter } from "next/router";
import Layout from '../components/Layout'
import AppContextProvider from '../lib/context/AppContext';


function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>

  )
}

export default MyApp
