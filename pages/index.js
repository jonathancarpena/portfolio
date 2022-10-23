
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Work from '../components/Home/Work'

import Contact from '../components/Home/Contact'
import { useUpdateSeo } from '../lib/hooks/useSeo'
import { useEffect } from 'react'

function Home() {
  const updateSeo = useUpdateSeo()
  useEffect(() => {
    updateSeo({
      title: 'Jonathan Carpena - Full Stack Software Engineer',
      description: "My name is Jonathan Carpena, and I'm a Full Stack Software Engineer specializing in building and designing exceptional digital experiences.",
      keywords: "Full-Stack Software Engineer, Software Engineer, Self-Taught Developer, Computer Science"
    })
  })
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Contact />

    </>
  )
}

export default Home
