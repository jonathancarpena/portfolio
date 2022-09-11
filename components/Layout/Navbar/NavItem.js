// Next
import { useRouter } from "next/router"

// Context
import { useChangeScreen } from "../../../lib/context/ScreenProvider"

function NavItem({ link, text, active, handleActive, scroll, darkMode }) {
    const router = useRouter()
    const toggleScreen = useChangeScreen()

    function handleClick() {
        if (text === 'contact') {
            toggleScreen('contact')
        }
        handleActive(text)
    }
    return (
        <a
            href={link}
            onClick={handleClick}
            className={`  ${scroll > 500 ? 'text-white' : `${darkMode ? ' hover:bg-dark' : 'hover:bg-lighter'}`}  ${(active || router.pathname === link) ? 'text-accent-500 bg-white' : `hover:bg-accent-600 `} transition-colors ease-in-out duration-300  overflow-hidden rounded-xl py-2  flex flex-col items-center  text-center  relative px-6 `}>
            <span className='z-[55]'>
                {text}
            </span>
        </a >
    )

}

export default NavItem