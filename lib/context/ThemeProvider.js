import { createContext, useState, useContext } from "react";


const ThemeContext = createContext()
const ThemeUpdateContext = createContext()

export function useDarkMode() {
    return useContext(ThemeContext)
}

export function useToggleDarkMode() {
    return useContext(ThemeUpdateContext)
}


function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(true)

    function toggleTheme() {
        setDarkMode(darkMode => !darkMode)
    }
    return (

        <ThemeContext.Provider value={darkMode}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>

    )
}

export default ThemeProvider