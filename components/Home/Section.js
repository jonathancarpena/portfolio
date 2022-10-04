import React from 'react'

function Section({ children, id = "" }) {
    return (
        <section id={id} className='min-h-screen flex justify-center items-center'>
            <div className='max-w-5xl w-full '>
                {children}
            </div>
        </section>
    )
}

export default Section