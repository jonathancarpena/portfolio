import '../styles/globals.css'

// Context
import ThemeProvider from '../lib/context/ThemeProvider'
import ScreenProvider from '../lib/context/ScreenProvider'

// Components
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ScreenProvider>
        <Layout>
          <Component  {...pageProps} />
        </Layout>
      </ScreenProvider>
    </ThemeProvider>
  )
}

export default MyApp
