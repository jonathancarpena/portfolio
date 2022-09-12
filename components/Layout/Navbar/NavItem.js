
// Hooks
import { useDarkMode } from "../../../lib/context/ThemeProvider"

function NavItem({ link, text, active, scroll }) {
    const darkMode = useDarkMode()
    return (
        <a
            href={link}
            className={`
            ${scroll > 500 ? 'text-white' : `${darkMode ? ' hover:bg-dark' : 'hover:bg-lighter'}`}  
            ${(active === text) ? 'text-accent-500 bg-white' : `hover:bg-accent-600 `} 
            transition-colors ease-in-out duration-300  overflow-hidden rounded-xl py-2  flex flex-col items-center  text-center  relative px-6 `}>
            <span className='z-[55]'>
                {text}
            </span>
        </a >
    )

}

export default NavItem