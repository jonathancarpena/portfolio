import { useState } from 'react'
import { FiHome } from 'react-icons/fi'
import { useRouter } from 'next/router'
import Link from 'next/link'
function HomeButton() {
    const [wiggle, setWiggle] = useState(false)
    const { pathname } = useRouter()

    function handleClick() {
        if (pathname === '/') {
            setWiggle(true)
            setTimeout(() => {
                setWiggle(false)
            }, [400])
        }
    }
    return (
        <Link href="/" >
            <button onClick={handleClick} className={`${wiggle ? 'animate-wiggle' : ''} lg:hidden z-[100] max-w-screen-2xl flex flex-col-reverse   fixed bottom-5 items-center    right-5`}>
                <span className={` text-black hover:scale-110 active:scale-90 transition-all duration-200 ease-in-out text-5xl bg-white h-[50px] w-[50px] flex justify-center items-center rounded-full drop-shadow-lg`}>
                    <FiHome className='text-3xl' />
                </span>
            </button>

        </Link>
    )
}

export default HomeButton