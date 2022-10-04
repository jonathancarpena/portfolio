import Head from 'next/head'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Work from '../components/Home/Work'
import Contact from '../components/Home/Contact'

function Home() {
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

      <Hero />
      <About />
      <Work />
      <Contact />

    </>
  )
}

export default Home
