import { useState } from "react"
function Password({ validate, error }) {
    const [input, setInput] = useState('')
    return (
        <form onSubmit={(e) => validate(e, input)} className='text-lg flex space-x-2 fixed top-[50%] -translate-y-[50%]'>
            <input
                type="password"
                value={input}
                onChange={(e) => setInput(e.target.value)}
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