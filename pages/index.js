// Components
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Work from '../components/Home/Work'
import Contact from '../components/Home/Contact'
import SEO from '../components/Layout/SEO'


function Home() {

  return (
    <>
      <SEO title="Jonathan Carpena - Front End Engineer" description="My name is Jonathan Carpena, and I'm a Front End Engineer specializing in building and designing exceptional digital experiences." />
      <Hero />
      <About />
      <Work />
      <Contact />
    </>
  )
}

export default Home
