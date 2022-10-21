import { createClient } from 'contentful'
import Loading from '../../components/Layout/Loading'
import ListOfBlogs from '../../components/Blog/ListOfBlogs'

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_TOKEN
    })

    const { items } = await client.getEntries({
        content_type: 'blogPost',
    })

    if (!items.length) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    const tags = []
    items.forEach((item) => {
        item.fields.tags.forEach((tag) => {
            if (!tags.includes(tag)) {
                tags.push(tag)
            }
        })
    })

    return {
        props: { blogs: items, tags: tags.sort() },
        revalidate: 1,
    };
}

function AllBlogs({ blogs, tags }) {

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className=' mb-40 lg:mb-28 relative top-20 md:top-28 place-self-start flex flex-col space-y-10 px-5 lg:px-0 max-w-6xl w-full '>

                {/* Header */}
                <div>
                    <h1 className='text-center mb-2 md:mb-4 text-6xl font-bold md:text-8xl'>
                        Blog Posts
                    </h1>
                    <h2 className='text-center text-stone-600 text-2xl md:text-3xl '>
                        Documenting My Thoughts
                    </h2>
                </div>
                {!blogs
                    ? <Loading />
                    : <ListOfBlogs blogs={blogs} tags={tags} />
                }
            </div>
        </div>
    )
}

export default AllBlogs