import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiFilter, FiSearch, FiX } from 'react-icons/fi'


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
function CloseButton({ resetFilters }) {

    return (
        <>
            <button onClick={resetFilters} className='absolute  hover:text-accent-500 active:text-accent-500 -right-8 top-4 hover:scale-110 active:scale-90 transition-all duration-150 ease-in-out'>
                <FiX className='text-xl' />

            </button>

        </>

    )
}
function ListOfBlogs({ tags, blogs }) {
    const [filter, setFilter] = useState(false)
    const [filteredBlogs, setFilterBlogs] = useState([])
    const [open, setOpen] = useState(false)
    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        if (filter) {
            const newBlogs = blogs.filter((item) => item.fields.tags.includes(filter))
            setFilterBlogs(newBlogs)
        }
    }, [filter, blogs])

    function resetFilters() {
        setFilter(false)
        setFilterBlogs([])
        if (open) {
            setOpen(false)
            setHidden(false)
        }

    }

    function handleFilter(item) {
        setFilter(item)
        handleClick()
    }

    function handleClick() {
        let current = open

        if (current) {
            setOpen(!current)
            setTimeout(() => {
                setHidden(true)
            }, [300])
        } else {
            setHidden(false)
            setTimeout(() => {
                setOpen(true)
            }, [200])
        }

    }

    return (
        <div>
            {tags.length > 1 &&
                <>
                    <div className=' hidden lg:block z-[100] left-10 fixed  top-[50%] -translate-y-[50%] w-max h-max'>

                        <button onClick={handleClick} className={` space-x-1 bg-white px-3 outline-none border-[1px] text-black hover:scale-110 active:scale-90 transition-all duration-200 ease-in-out  active:bg-gray-100  h-[60px] max-h-[60px] flex justify-center items-center rounded-lg drop-shadow-lg`}>
                            <FiFilter className='text-xl' />
                            <span>Filter By:</span>
                            <span className='capitalize font-medium text-accent-500'>{filter ? filter : 'All'}</span>
                        </button>

                        {filter &&
                            < CloseButton resetFilters={resetFilters} />
                        }

                        <div className={`${open ? 'scale-100' : ' scale-0  -translate-y-[110px]  opacity-0 '} ${hidden ? '' : ''} absolute top-[140%]  transition-all duration-300 drop-shadow-lg rounded-lg border-[1px] bg-white  `}>
                            <ul className={`w-max transition-all duration-200  flex flex-col  rounded-lg overflow-hidden `}>
                                {tags.map((item) => (
                                    <li key={`filter-tags-${item}`} className=''>
                                        <button
                                            disabled={filter === item}
                                            onClick={() => handleFilter(item)}
                                            className={`${filter === item ? 'bg-accent-500 text-white ' : 'bg-white active:bg-gray-100'} active:scale-90 text-start px-4 py-2 cursor-pointer capitalize outline-none   w-full`}>
                                            {item}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className=' lg:hidden flex flex-col justify-center items-baseline   mb-8    '>
                        <span className='flex items-center space-x-1 '>
                            <FiFilter />
                            <span className='w-max'>
                                Filter By:
                            </span>
                        </span>
                        <ul className='flex  flex-wrap '>

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
                </>
            }
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-10 '>
                {filteredBlogs.length > 0
                    ? filteredBlogs.map((item) => (
                        <Blog key={item.sys.id} details={item} />
                    ))
                    : blogs.map((item) => (
                        <Blog key={item.sys.id} details={item} />
                    ))
                }

            </ul>
        </div>
    )
}

export default ListOfBlogs