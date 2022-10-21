import React from 'react'
import Section from './Section'

function BlogPost() {
    return (
        <Section height={'h-max'}  >
            <h1 className='text-6xl font-semibold text-center  mt-32 mb-10 lg:my-20'>{`Recent Blog Post`}</h1>
        </Section>
    )
}

export default BlogPost