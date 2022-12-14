// Components
import Section from './Section'
import Image from 'next/image'

// Icons
import { FiChevronRight } from 'react-icons/fi'



function TechStack() {
    const Technologies = ["React", "Typescript", "Redux", "Next.js", "Node.js", "MySQL"]
    // const [hover, setHover] = useState(false)
    // const [show, setShow] = useState(false)

    // useEffect(() => {
    //     if (hover) {
    //         setTimeout(() => {
    //             setShow(true)
    //         }, 100)
    //     } else {
    //         if (show) {
    //             setShow(false)
    //         }
    //     }
    // }, [hover, show])

    return (
        <div className='relative' >
            <p>{`Here are a few technologies I’ve been working with recently:`}</p>
            <ul className='grid grid-cols-2 w-3/4 mt-2'>
                {Technologies.map((item) => (
                    <li key={`technologies-${item}`} className='flex space-x-2 items-center'>
                        <FiChevronRight className='text-accent-500' />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>


        </div>
    )
}
function About() {



    return (
        <Section id="about-me" className=' h-screen flex justify-center items-center'>

            <div className='border-[1px]   drop-shadow-lg md:drop-shadow-xl  rounded-lg  bg-white '>

                <div className='flex flex-col lg:flex-row rounded-t-lg'>

                    <div className='overflow-hidden  rounded-t-lg  lg:rounded-l-lg lg:rounded-tr-none w-full lg:w-1/2 min-h-[600px] relative flex justify-center items-center bg-neutral-200'>
                        <Image
                            src='/avatar.PNG'
                            alt="avatar"
                            layout="fill"
                            objectFit='cover'
                        />
                    </div>
                    <div className='w-full lg:w-1/2 flex flex-col justify-center space-y-5 p-7 '>
                        <p className='text-3xl md:text-4xl font-semibold'>
                            A little bit about me
                        </p>

                        {/* Coding Background */}
                        <p>
                            {` I'm a front-end engineer specializing in building and designing exceptional digital experiences. I began tinkering with coding and programming when I was 10, but not until college did I begin taking it more seriously. Since then, I have upgraded my technology toolkit and am capable of building responsive web applications.
`}
                        </p>

                        {/* Current Occupation */}
                        <p>
                            {`Most recently, I've been helping local businesses make the most of their customers and audiences, by providing them with great user experiences.`}
                        </p>

                        {/* Outside of Work */}
                        <p> {`Outside the professional environment, I enjoy creating lifestyle videos, debating what food actually deserves a 10/10 in taste, and walking my dog!`}</p>



                        {/* Tech Stack */}
                        <TechStack />
                    </div>
                </div>


            </div>
        </Section>
    )
}

export default About