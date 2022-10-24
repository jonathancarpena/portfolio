import React from 'react'
import Head from 'next/head'




function SEO({
    title = "Jonathan Carpena - Full Stack Software Engineer",
    description = "My name is Jonathan Carpena, and I'm a Full Stack Software Engineer specializing in building and designing exceptional digital experiences.",
    keywords = "Full-Stack Software Engineer, Software Engineer, Self-Taught Developer, Web Development, Computer Science"
}) {


    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />


            {/* Default */}
            <meta name="author" content="Jonathan Carpena"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta charSet="UTF-8"></meta>

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default SEO