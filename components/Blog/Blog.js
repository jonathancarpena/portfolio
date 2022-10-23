import { useState, useEffect } from 'react'

// Components
import Image from 'next/image'
import Link from 'next/link'

// Icons
import { FiSearch } from 'react-icons/fi'

function Blog({ details }) {
    const [hover, setHover] = useState(false)
    const [show, setShow] = useState(false)
    useEffect(() => {
        if (hover) {
            setTimeout(() => {
                setShow(true)
            }, 100)
        } else {
            if (show) {
                setShow(false)
            }
        }
    }, [hover, show])
    return (
        <Link href={`/blog/${details.fields.slug}`}>
            <li onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)} className=' border-[1px] rounded-t-lg cursor-pointer lg:hover:scale-105 active:scale-95 lg:hover:drop-shadow-xl transition-all ease-in-out duration-150 h-max flex flex-col drop-shadow-lg '>
                <div className='min-h-[300px] relative overflow-hidden rounded-t-lg  select-none '>
                    <Image
                        priority
                        src={`https:${details.fields.thumbnail.fields.file.url}`}
                        alt={details.fields.thumbnail.fields.title}
                        layout="fill"
                        objectFit='cover'
                    />
                </div>

                <div className='bg-white p-3 flex flex-col justify-between relative md:min-h-[160px] lg:min-h-[190px]'>
                    <div>
                        <h3 className='capitalize text-2xl font-semibold break-words select-none mb-1.5'>{details.fields.title}</h3>
                        <p className=' text-gray-400 select-none text-sm lg:text-lg '>{details.fields.summary}</p>
                    </div>

                    <ul className='flex flex-wrap mb-1 mt-3 md:mt-1 lg:mt-0 '>
                        {details.fields.tags.sort().map((tag) => (
                            <li
                                key={`${details.fields.thumbnail.fields.title}-tag-${tag}`}
                                className='inline-block text-sm bg-accent-400 text-white mr-2 px-2 py-0.5 rounded-md capitalize select-none'
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>





                    {hover &&
                        <button className={`${show ? 'text-black translate-y-2' : ''} hidden lg:flex space-x-1 items-center text-white transition-all ease-in-out duration-300 absolute bottom-5 right-3 `}>
                            <span>Read More</span>
                            <FiSearch className='inline-block mt-0.5 ' />
                        </button>
                    }
                </div>

            </li>
        </Link>
    )
}

export default Blog