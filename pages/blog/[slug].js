import { cloneElement, useEffect } from 'react'
import { createClient } from 'contentful'
import Image from 'next/image'
import { FiChevronRight, FiLink } from 'react-icons/fi'
import Loading from '../../components/Layout/Loading'
import { useUpdateSeo } from '../../lib/hooks/useSeo'

export async function getStaticPaths() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_TOKEN
    })

    const res = await client.getEntries({
        content_type: 'blogPost'
    })

    return {
        paths: res.items.map((item) => ({
            params: {
                slug: item.fields.slug,
            },
        })),
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_TOKEN
    })


    const { items } = await client.getEntries({
        content_type: 'blogPost',
        'fields.slug': params.slug
    })

    if (!items.length) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }


    return {
        props: { blog: items[0] },
        revalidate: 1,
    };
}

function SingleBlog({ blog }) {
    const updateSeo = useUpdateSeo()
    useEffect(() => {
        updateSeo({
            title: `${blog.fields.metaTitle} | Jonathan Carpena's Blog`,
            description: `${blog.fields.metaDescription} - Jonathan Carpena's Blog`
        })
    })

    function formatDate(date) {
        const months = [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'
        ]
        const splitDate = date.split('T')[0].split('-')
        const year = splitDate[0]
        const month = months[parseInt(splitDate[1]) - 1]
        const day = splitDate[2]

        return `${month} ${day}, ${year}`
    }

    function generateRichText(body) {

        function gatherMarks(content) {
            const allMarks = []

            content.forEach((item) => {
                allMarks.push({
                    value: item.value,
                    mark: item.marks ? item.marks[0] : null,
                    hyperlink: item.nodeType === 'hyperlink'
                        ? {
                            uri: item.data.uri,
                            value: item.content[0].value
                        }
                        : false
                })
            })

            return allMarks
        }

        function markedUpContent(display) {
            const marks = {
                underline: 'underline',
                bold: 'font-semibold',
                italic: 'italic',
                code: 'font-code'
            }
            return (

                display.map((item, idx) => {
                    return (
                        item.hyperlink
                            ? <a
                                className='text-blue-500 flex space-x-1 items-center hover:text-blue-400'
                                key={item.hyperlink.value}
                                href={item.hyperlink.uri}
                                target="_blank" rel="noopener noreferrer"
                            >
                                <FiLink />
                                <span>{item.hyperlink.value}</span>
                            </a>

                            :
                            <span
                                key={`${item.value}-${idx}`}
                                className={`${item.mark ? marks[item.mark.type] : ''} leading-8 md:leading-9 lg:leading-10 tracking-wide`}>
                                {item.value}
                            </span>


                    )
                })
            )
        }

        const H2 = ({ content }) => {
            const display = gatherMarks(content)
            return (
                <h2 className='text-3xl md:text-4xl font-semibold'>
                    {markedUpContent(display)}
                </h2>
            )
        }

        const H3 = ({ content }) => {
            const display = gatherMarks(content)
            return (
                <h3 className='text-2xl md:text-3xl font-semibold'>
                    {markedUpContent(display)}
                </h3>
            )
        }

        const P = ({ content }) => {
            const display = gatherMarks(content)

            return (
                <p className='text-lg md:text-xl lg:text-2xl'>
                    {markedUpContent(display)}
                </p>
            )
        }

        const BQ = ({ content }) => {
            const display = gatherMarks(content[0].content)
            return (
                <p className='h-max text-lg md:text-xl lg:text-2xl relative py-5 bg-gray-100 flex items-center break-words'>
                    <span className='text-transparent absolute h-full bg-accent-400 '>_</span>
                    <span className='relative left-8 w-[85%] md:left-8 md:w-[94%] break-words'>{markedUpContent(display)}</span>
                </p>
            )
        }

        const UL = ({ content }) => {
            const ulDisplay = content.map((item, idx) => <P key={`ul-${idx}`} content={item.content[0].content} />)
            return (
                <ul className='-mt-2 flex flex-col text-lg md:text-xl lg:text-2xl'>
                    {ulDisplay.map((node, idx) => (
                        <li key={`ul-${idx}-${node.props.value}`} className='flex items-start ml-4'>
                            <span className='mr-2 mt-1'><FiChevronRight /></span>
                            {cloneElement(node)}
                        </li>
                    ))}
                </ul>
            )
        }
        const OL = ({ content }) => {
            const olDisplay = content.map((item, idx) => <P key={`ol-${idx}`} content={item.content[0].content} />)
            return (
                <ol className='-mt-2 flex flex-col text-lg md:text-xl lg:text-2xl'>
                    {olDisplay.map((node, idx) => (
                        <li key={`ol-${idx}-${node.props.value}`} className='flex items-start ml-4'>
                            <span className='mr-2 mt-1'>{idx + 1}.</span>
                            {cloneElement(node)}
                        </li>
                    ))}
                </ol>
            )
        }

        const IMG = ({ content }) => {

            return (

                <div className=' justify-center  bg-gray-100 flex  p-5 max-h-[300px] md:max-h-[600px] my-3  '>
                    <Image
                        priority
                        src={`https:${content.fields.file.url}`}
                        alt={content.fields.title}
                        width={content.fields.file.details.image.width}
                        height={content.fields.file.details.image.height}
                        objectFit="contain"
                        objectPosition="center"
                    />
                </div>


            )
        }

        const HR = () => {

            return (
                <div className='my-5'>
                    <hr />
                </div>

            )
        }


        const elements = []
        body.content.forEach((item) => {
            if (item.nodeType === 'heading-2') elements.push(<H2 content={item.content} />)
            if (item.nodeType === 'paragraph') elements.push(<P content={item.content} />)
            if (item.nodeType === 'heading-3') elements.push(<H3 content={item.content} />)
            if (item.nodeType === 'embedded-asset-block') elements.push(<IMG content={item.data.target} />)
            if (item.nodeType === 'unordered-list') elements.push(<UL content={item.content} />)
            if (item.nodeType === 'ordered-list') elements.push(<OL content={item.content} />)
            if (item.nodeType === 'blockquote') elements.push(<BQ content={item.content} />)
            if (item.nodeType === 'hr') elements.push(<HR />)
        })


        return (
            <div className='flex flex-col md:px-5 lg:px-7 lg:pb-7 '>
                {elements.map((node, idx) => (
                    <div
                        key={`element-${node.type.name}-${idx}`}
                        className={'mb-3'}>
                        {cloneElement(node)}
                    </div>
                ))
                }
            </div >
        )
    }

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className={`${blog ? 'min-h-[75vh] justify-center top-20 md:top-24' : 'top-28'}  bg-white lg:drop-shadow-xl mb-40 lg:mb-28 relative  place-self-start flex flex-col  px-5 lg:px-0 max-w-6xl w-full `}>

                {!blog
                    ? <Loading />
                    : <>
                        <div>
                            <div className='border-[1px] min-h-[350px] md:min-h-[500px] relative overflow-hidden rounded-t-lg'>
                                <Image
                                    priority
                                    src={`https:${blog.fields.thumbnail.fields.file.url}`}
                                    alt={blog.fields.thumbnail.fields.title}
                                    layout="fill"
                                    objectFit='cover'
                                />
                            </div>
                            {/* Header */}
                            <div className='bg-white opacity-90 py-7 rounded-t-xl relative  z-50 md:px-5 lg:px-7'>
                                <h1 className='text-start mb-2 font-bold text-3xl md:text-6xl'>
                                    {blog.fields.title}
                                </h1>

                                <h2 className='text-start text-stone-600 text-xl md:text-3xl mb-2  '>
                                    {formatDate(blog.sys.createdAt)}
                                </h2>

                                <ul className='flex text-stone-500 text-xs md:text-sm'>
                                    <li className='mr-2'>Tags: </li>
                                    {blog.fields.tags.map((item, idx) => (
                                        <li key={item} className='italic mr-1 capitalize '>
                                            {item}
                                            {idx !== blog.fields.tags.length - 1 && <span>,</span>}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='md:px-5 lg:px-7 mt-2 mb-5'>
                            <hr className='' />
                        </div>



                        {generateRichText(blog.fields.body)}

                    </>

                }



            </div>
        </div>
    )
}

export default SingleBlog