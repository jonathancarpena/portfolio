import { useState } from 'react'

// Data
import Projects from '../../../lib/projects'

// Components
import SEO from '../../../components/Layout/SEO'

// Icons
import { FiClock } from 'react-icons/fi'
import { FaBookmark } from 'react-icons/fa'


export async function getStaticPaths() {
    const paths = []
    Projects.forEach((item) => {
        if (item.demo) {
            paths.push({ params: { name: item.name } })
        }
    })


    return {
        paths,
        fallback: false,
    }
}


export async function getStaticProps(context) {
    const { params: { name } } = context
    const project = Projects.find((item) => item.name === name)
    const youtubeID = project.demo.link.split('/')[3]


    // Link Example
    // https://youtu.be/4HDr8Y_a3h4

    return {
        props: { project, youtubeID },
    }
}
function Demo({ project, youtubeID }) {
    const [timeStamp, setTimeStamp] = useState(0)

    function generateStart(time) {
        const timeSplit = time.split(':')
        const minutes = parseInt(timeSplit[0]) * 60
        const seconds = parseInt(timeSplit[1])
        return minutes + seconds
    }

    function videoSeek(time) {
        const startTime = generateStart(time)
        setTimeStamp(startTime)
    }


    return (
        <>

            <SEO title={`${project.name} (Live Demo) | Jonathan Carpena - Full Stack Software Engineer`} description={`${project.name} (Live Demo) built by Jonathan Carpena. Project Description: ${project.description}`} />
            <div className='relative  top-28 mb-48  lg:top-40 lg:mb-40 '>


                {/* Player and Chapter */}
                <div className=' flex flex-col space-y-10  justify-center items-center lg:flex-row lg:space-y-0 lg:space-x-20'>
                    <div>
                        <h1 className=' text-3xl font-semibold mb-2'>
                            {project.name} (Demo)
                        </h1>
                        <iframe
                            id="player"
                            className='w-[350px] h-[196.875px] md:w-[600px] md:h-[337.5px] lg:w-[900px] lg:h-[506px]'
                            src={`https://www.youtube.com/embed/${youtubeID}?start=${timeStamp}&autoplay=1&enablejsapi=1`}>
                        </iframe>
                    </div>


                    <div className=''>
                        <h2 className='relative lg:bottom-2 font-semibold uppercase text-3xl pl-2.5 flex items-center space-x-1'>
                            <FaBookmark className='text-accent-500' />
                            <span >Chapters</span>
                        </h2>
                        <div className='py-2 px-1 bg-gray-200 rounded-xl'>
                            <ul className={` ${project.demo.timeStamps.length > 5 ? 'overflow-y-scroll ' : ''}  bg-gray-200 h-[430px] lg:h-[480px] text-lighter  space-y-2 rounded-xl pt-3 pb-4 pl-3 pr-4`}>
                                {project.demo.timeStamps.map((time, idx) => (
                                    <li key={`${project.id}-timestamp-${idx}`} className='drop-shadow-md'>
                                        <button onClick={() => videoSeek(time.start)} className={` bg-white text-start hover:scale-105 hover:bg-accent-500 hover:text-white active:bg-accent-600 active:scale-95 active:text-white transition-all duration-150 ease-in-out rounded-lg w-full flex flex-col items-start p-3`}>
                                            <p>{time.title}</p>
                                            <span className='flex items-center space-x-2'>
                                                <FiClock />
                                                <span >{time.start}-{time.end}</span>
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

            </div>

        </>


    )
}

export default Demo