import { useState } from 'react'

import Socials from '../../lib/socials'

import { FiChevronRight, FiChevronLeft, FiChevronDown, FiChevronUp } from 'react-icons/fi'
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
        <div className='z-[100] max-w-screen-2xl flex flex-col-reverse   fixed bottom-5 items-center lg:space-y-0 lg:space-x-2 lg:flex-row  lg:bottom-[50%] lg:translate-y-[50%] left-5'>

            <button onClick={handleClick} className={` hover:scale-110 active:scale-90 transition-all duration-200 ease-in-out text-5xl bg-white h-[50px] w-[50px] flex justify-center items-center rounded-full drop-shadow-lg`}>
                {open
                    ? <>
                        <FiChevronLeft className='hidden lg:inline-block' />
                        <FiChevronDown className='lg:hidden' />
                    </>
                    : <>
                        <FiChevronRight className='hidden lg:inline-block' />
                        <FiChevronUp className='lg:hidden' />
                    </>
                }
            </button>

            <ul className={`${open ? 'scale-100' : 'scale-0 translate-y-40 lg:-translate-x-[60px] lg:translate-y-0 opacity-0'} ${hidden ? 'hidden' : ''}  bottom-2 lg:bottom-0 transition-all duration-200 relative flex flex-col  bg-white drop-shadow-md rounded-full overflow-hidden `}>
                {Object.keys(Socials).map((item) => (
                    <a
                        key={`social-btn-${item}`}
                        href={Socials[item].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-xl  py-6 px-4 hover:bg-accent-500 bg-white hover:text-white transition-all duration-200 ease-in-out active:bg-accent-600 active:scale-125 '>
                        {Socials[item].icon}
                    </a>
                ))}
            </ul>




        </div>
    )
}

export default SocialButtons