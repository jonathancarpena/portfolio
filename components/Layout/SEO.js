import React from 'react'
import Head from 'next/head'
import useSeo from '../../lib/hooks/useSeo'



function SEO() {
    const seo = useSeo()

    return (
        <Head>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="keywords" content={seo.keywords} />


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