import { useState } from 'react'

// Hooks
import { useChangeScreen } from '../../lib/context/ScreenProvider'

import Popover from '../Layout/Popover'

function Password() {
    const [value, setValue] = useState("")
    const [error, setError] = useState(false)
    const change = useChangeScreen()
    const password = "jackjackjack"

    function validate(e) {
        e.preventDefault()
        if (value === password) {
            change("main")
            setValue("")
        } else {
            setValue("")
            showError()
        }
    }

    function showError() {
        setError(true)
        setTimeout(() => {
            setError(false)
        }, [2000])
    }

    return (
        <form onSubmit={validate} className='relative text-lg flex space-x-2'>
            <input
                type="password"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="py-2 px-4 outline-none rounded-md text-dark focus:ring-4 focus:ring-accent-500"
            />
            {error && <span className='absolute -top-8 '>Incorrect. Try again.</span>}

            <button
                type="submit"
                className="bg-accent-500 rounded-md px-4 py-2 hover:bg-accent-400 active:bg-accent-500 active:scale-95 transition-all ease-in-out"
            >Enter</button>


        </form>
    )
}

export default Password