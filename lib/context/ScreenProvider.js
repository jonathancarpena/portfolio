import { createContext, useState, useContext } from "react";

const ScreenContext = createContext()
const ScreenUpdateContext = createContext()


export function useCurrentScreen() {
    return useContext(ScreenContext)
}

export function useChangeScreen() {
    return useContext(ScreenUpdateContext)
}


function ScreenProvider({ children }) {
    const [screen, setScreen] = useState("main")

    function toggleScreen(page) {
        setScreen(page)
    }
    return (

        <ScreenContext.Provider value={screen}>
            <ScreenUpdateContext.Provider value={toggleScreen}>
                {children}
            </ScreenUpdateContext.Provider>
        </ScreenContext.Provider>

    )
}

export default ScreenProvider