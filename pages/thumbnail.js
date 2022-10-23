import { useState, useEffect } from 'react'
import { useUpdateSeo } from '../lib/hooks/useSeo'

// 1450x500
function Thumbnail() {
    const [input, setInput] = useState('')
    const [color, setColor] = useState('accent')

    const updateSeo = useUpdateSeo()
    useEffect(() => {
        updateSeo({
            title: "Blog Thumbnail Generator | Jonathan Carpena's Blog",
            description: "Jonathan Carpena's Blog Post Thumbnail Generator",
        })
    })

    const background = {
        accent: 'bg-accent-400',
        red: 'bg-red-500',
        blue: 'bg-blue-500',
        green: 'bg-green-500',
        yellow: 'bg-yellow-500',
        emerald: 'bg-emerald-500',
        orange: 'bg-orange-500',

    }
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <div className='relative w-[1550px]  h-[600px] flex justify-center items-center'>
                <div className={`${background[color]} bg- w-[1450px] h-[500px]  z-50 flex justify-center items-center`}>
                    <p className=' w-[500px]  drop-shadow-[10px_10px_2px_rgba(0,0,0,0.35)] font-semibold text-white text-[6rem] text-center leading-none tracking-tight'>{input}</p>
                </div>

                <div className='bg-[#303030] w-full h-full opacity-20 absolute z-10' />
            </div>

            <div className='flex items-baseline space-x-2'>
                <input
                    className='border-4 px-2 py-1 mt-12  '
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <select
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className='bg-gray-200 px-2 py-1'>
                    <option value={'accent'}>Main</option>
                    <option value={'red'}>Red</option>
                    <option value={'blue'}>Blue</option>
                    <option value={'green'}>Green</option>
                    <option value={'yellow'}>Yellow</option>
                    <option value={'emerald'}>Emerald</option>
                    <option value={'orange'}>Orange</option>
                </select>
            </div>

        </div>
    )
}

export default Thumbnail