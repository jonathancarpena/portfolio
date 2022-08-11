// Framer
import { motion } from 'framer-motion'

// Components
import Hero from './Hero'
import About from './About'
import Work from './Work'
import Skills from './Skills'
import InteractButtons from '../Layout/InteractButtons'

function Main() {

    const container = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                duration: 1.25,
                easeIn: "easeInOut",
                when: "beforeChildren"
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 1,
                easeIn: "easeInOut"
            }
        }
    }
    return (
        <motion.main
            variants={container}
            initial="initial"
            animate="animate"
            exit="exit"
        >

            <InteractButtons />
            <Hero />
            <About />
            <Work />
            <Skills />
        </motion.main>
    )
}

export default Main