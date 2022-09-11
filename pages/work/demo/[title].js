import { useState } from 'react'

// Context
import { useDarkMode } from '../../../lib/context/ThemeProvider'

// Components
import InteractButtons from '../../../components/Layout/InteractButtons'

// Data
import Projects from '../../../lib/projects'

// Icons
import { FiClock } from 'react-icons/fi'
import { FaBookmark } from 'react-icons/fa'


export async function getStaticPaths() {
    const paths = []
    Projects.forEach((item) => {
        if (item.demo) {
            paths.push({ params: { title: item.title } })
        }
    })


    return {
        paths,
        fallback: false,
    }
}


export async function getStaticProps(context) {
    const { params: { title } } = context
    const project = Projects.find((item) => item.title === title)
    const youtubeID = project.demo.link.split('/')[3]


    // Link Example
    // https://youtu.be/4HDr8Y_a3h4

    return {
        props: { project, youtubeID },
    }
}
function Demo({ project, youtubeID }) {
    const darkMode = useDarkMode()
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
            <div className='min-h-screen flex flex-col space-y-10  justify-center items-center lg:flex-row lg:space-y-0 lg:space-x-20'>


                <iframe
                    id="player"
                    className='w-[350px] h-[196.875px] md:w-[600px] md:h-[337.5px] lg:w-[900px] lg:h-[506px]'
                    src={`https://www.youtube.com/embed/${youtubeID}?start=${timeStamp}&autoplay=1&enablejsapi=1`}>
                </iframe>

                <div className=''>
                    <h2 className='font-semibold uppercase text-3xl pl-2.5 flex items-center space-x-1'>
                        <FaBookmark className='text-accent-500' />
                        <span >Chapters</span>
                    </h2>
                    <ul className={` ${project.demo.timeStamps.length > 5 ? 'overflow-y-scroll scrollbar-thumb-rounded' : ''}   h-[430px] lg:h-[480px] text-lighter  space-y-2 rounded-xl pt-3 pb-4 pl-3 pr-4`}>
                        {project.demo.timeStamps.map((time, idx) => (
                            <li key={`${project.id}-timestamp-${idx}`} className='drop-shadow-md'>
                                <button onClick={() => videoSeek(time.start)} className={`${darkMode ? 'bg-dark text-lighter' : 'bg-lighter text-darker'} hover:scale-105 hover:bg-accent-500 hover:text-white active:bg-accent-600 active:scale-95 active:text-white transition-all duration-150 ease-in-out rounded-lg w-full flex flex-col items-start p-3`}>
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
            <InteractButtons />
        </>


    )
}

export default Demo