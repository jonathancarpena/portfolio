import { useState } from 'react'


function Test() {

    const [start, setStart] = useState(30)
    function videoSeek() {
        const video = document.getElementById('player')
        setStart(120)
    }


    return (
        <div className='h-screen w-screen flex flex-col space-y-5 justify-center items-center relative'>
            <button onClick={videoSeek} className='bg-light p-3 text-darker rounded-xl'>Go to 1:50</button>
            <iframe

                id="player"
                width="480"
                height="270"
                src={`https://www.youtube.com/embed/tgbNymZ7vqY?start=${start}&autoplay=true&enablejsapi=1`}>
            </iframe>


        </div>
    )
}

export default Test