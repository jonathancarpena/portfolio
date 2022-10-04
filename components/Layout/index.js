import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

function Layout({ children }) {
    return (
        <div className='font-body flex justify-center items-center flex-col'>
            <div className='relative w-full max-w-screen-xl '>
                <Navbar />
                <main className='relative bottom-[15rem]'>
                    {children}
                </main>

            </div>
            <Footer />
        </div>
    )
}

export default Layout