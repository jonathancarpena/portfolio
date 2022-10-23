import { useState, createContext } from 'react'

// Context
export const AppContext = createContext()
export const AppUpdateContext = createContext()


function AppContextProvider({ children }) {
    const [app, setApp] = useState(
        {
            seo: {
                title: "Jonathan Carpena - Full Stack Software Engineer",
                description: "My name is Jonathan, and I'm a Full Stack Software Engineer specializing in building and designing exceptional digital experiences.",
                keywords: "Full-Stack Software Engineer, Software Engineer, Self-Taught Developer, Computer Science"
            }
        }
    )


    function updateContext(type, payload) {
        const newContext = {
            ...app,
            [type]: {
                ...app[type],
                ...payload
            }
        }
        setApp(newContext)
    }

    return (
        <AppContext.Provider value={app}>
            <AppUpdateContext.Provider value={updateContext}>
                {children}
            </AppUpdateContext.Provider>
        </AppContext.Provider>
    )
}

export default AppContextProvider