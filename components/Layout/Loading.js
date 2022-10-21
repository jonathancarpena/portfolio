
import { FiLoader } from 'react-icons/fi'
import { loadingMessages } from '../../lib/utils'

function Loading() {
    function pickRandom(array) {
        return array[Math.floor(Math.random() * array.length)]
    }

    return (
        <div className='flex flex-col justify-center items-center h-[40vh] '>
            <span className='text-[5rem] animate-pulse '>
                <FiLoader className='animate-spin-slow' />
            </span>
            <p className='animate-pulse mt-1'>{
                pickRandom(loadingMessages)
            }</p>
        </div>
    )
}

export default Loading