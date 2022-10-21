import '../styles/globals.css'

import { useEffect } from 'react'
import { useRouter } from "next/router";
import Layout from '../components/Layout'


function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>

  )
}

export default MyApp
