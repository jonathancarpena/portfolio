// Components
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Work from '../components/Home/Work'
import Contact from '../components/Home/Contact'
import SEO from '../components/Layout/SEO'


function Home() {

  return (
    <>
      <SEO title="Jonathan Carpena - Full Stack Software Engineer" description="My name is Jonathan Carpena, and I'm a Full Stack Software Engineer specializing in building and designing exceptional digital experiences." />
      <Hero />
      <About />
      <Work />
      <Contact />
    </>
  )
}

export default Home
