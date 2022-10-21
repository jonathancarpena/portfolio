import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiFilter, FiSearch } from 'react-icons/fi'


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
    }, [hover])
    return (
        <Link href={`/blog/${details.fields.slug}`}>
            <li onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)} className=' cursor-pointer hover:scale-105 active:scale-95 hover:drop-shadow-xl transition-all ease-in-out duration-150 h-max flex flex-col drop-shadow-lg '>
                <div className='min-h-[300px] relative overflow-hidden rounded-t-lg'>
                    <Image
                        priority
                        src={`https:${details.fields.thumbnail.fields.file.url}`}
                        alt={details.fields.thumbnail.fields.title}
                        layout="fill"
                        objectFit='cover'
                    />
                </div>

                <div className='bg-white p-3 flex flex-col relative'>
                    <h3 className='capitalize text-2xl font-semibold break-words'>{details.fields.title}</h3>

                    <p className=' text-gray-400'>{details.fields.summary}</p>
                    <ul className='flex flex-wrap mt-4'>
                        {details.fields.tags.sort().map((tag) => (
                            <li
                                key={`${details.fields.thumbnail.fields.title}-tag-${tag}`}
                                className='inline-block text-sm bg-accent-400 text-white mr-2 px-2 py-0.5 rounded-md capitalize'
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>

                    {hover &&
                        <button className={`${show ? 'text-black translate-y-2' : ''}  flex space-x-1 items-center text-white transition-all ease-in-out duration-300 absolute bottom-5 right-3 `}>
                            <span>Read More</span>
                            <FiSearch className='inline-block mt-0.5 ' />
                        </button>
                    }
                </div>

            </li>
        </Link>
    )
}
function ListOfBlogs({ tags, blogs }) {
    const [filter, setFilter] = useState(false)
    const [filteredBlogs, setFilterBlogs] = useState([])

    useEffect(() => {
        if (filter) {
            const newBlogs = blogs.filter((item) => item.fields.tags.includes(filter))
            setFilterBlogs(newBlogs)
        }
    }, [filter])

    function resetFilters() {
        setFilter(false)
        setFilterBlogs([])
    }

    return (
        <div>
            {tags.length > 1 &&
                <div className='flex justify-center lg:justify-start items-center space-x-3 mb-8'>
                    <span className='flex items-center space-x-1'>
                        <FiFilter />
                        <span className=''>
                            Filter By:
                        </span>

                    </span>
                    <ul className='flex '>

                        <li>
                            <button onClick={resetFilters} className={`${!filter ? 'text-accent-500  ' : ''}  cursor-pointer capitalize outline-none bg-white  rounded-md mr-1.5`}>
                                All
                            </button>
                            <span className='mr-2'>/</span>
                        </li>

                        {tags.map((item, idx) => (
                            <li key={`filter-tags-${item}`} className='flex items-center'>
                                <button
                                    onClick={() => setFilter(item)}
                                    className={`${filter === item ? 'text-accent-500' : ''} cursor-pointer capitalize outline-none bg-white  rounded-md flex mr-1.5`}>
                                    {item}
                                </button>
                                {idx !== tags.length - 1 &&
                                    <span className='mr-2'>/</span>
                                }

                            </li>


                        ))}
                    </ul>
                </div>
            }
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-10 '>
                {filteredBlogs.length > 0
                    ? filteredBlogs.map((item) => (
                        <Blog key={item.sys.id} details={item} />
                    ))
                    : blogs.map((item) => (
                        <Blog details={item} />
                    ))
                }

            </ul>
        </div>
    )
}

export default ListOfBlogs