import React from 'react'

function Section({ children, id = "", height = null }) {
    return (
        <section id={id} className={`${height ? height : "min-h-screen"}  flex justify-center items-center`}>
            <div className='max-w-5xl w-full '>
                {children}
            </div>
        </section>
    )
}

export default Section