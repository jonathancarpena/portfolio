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
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"></link>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"></link>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"></link>
            <link rel="manifest" href="/favicon/site.webmanifest"></link>
            <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#1e1e1e"></link>
            <meta name="msapplication-TileColor" content="#ffffff"></meta>
            <meta name="theme-color" content="#ffffff"></meta>
        </Head>
    )
}

export default SEO