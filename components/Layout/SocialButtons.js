import { useState } from 'react'

import Socials from '../../lib/socials'

import { FiBook, FiBookOpen, FiChevronDown, FiChevronUp } from 'react-icons/fi'
function SocialButtons() {

    const [open, setOpen] = useState(false)
    const [hidden, setHidden] = useState(false)

    function handleClick() {
        let current = open

        if (current) {
            setOpen(!current)
            setTimeout(() => {
                setHidden(true)
            }, [200])
        } else {
            setHidden(false)
            setTimeout(() => {
                setOpen(!current)
            }, [100])

        }

    }
    return (
        <div className=' z-[100] max-w-screen-2xl flex flex-col   fixed bottom-5 lg:bottom-10 items-center   lg:left-10 left-5'>

            <div className={`${open ? 'scale-100' : 'scale-0 translate-y-40  opacity-0 '} ${hidden ? 'hidden' : ''} relative bottom-5 transition-all duration-200 drop-shadow-md md:drop-shadow-lg rounded-full border-[1px] bg-white w-[60px] max-w-[60px]`}>
                <ul className={`  w-full transition-all duration-200  flex flex-col items-center   rounded-full  overflow-hidden `}>
                    {Object.keys(Socials).map((item) => (
                        <a
                            key={`social-btn-${item}`}
                            href={Socials[item].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-xl  py-6 flex justify-center w-full hover:bg-accent-500  hover:text-white transition-all duration-200 ease-in-out active:bg-accent-600 active:scale-90 '>
                            {Socials[item].icon}
                        </a>
                    ))}
                </ul>
            </div>

            <button onClick={handleClick} className={` bg-white outline-none border-[1px] text-black hover:scale-110 active:scale-90 transition-all duration-200 ease-in-out text-5xl active:bg-gray-100  h-[60px] max-h-[60px] w-[60px] max-w-[60px] flex justify-center items-center rounded-full drop-shadow-md md:drop-shadow-lg`}>
                {open
                    ? <FiBookOpen className='text-3xl' />
                    : <FiBook className='text-3xl' />
                }
            </button>
        </div>
    )
}

export default SocialButtons