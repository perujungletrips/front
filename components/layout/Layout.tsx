import Head from 'next/head'
import React from 'react'
import Footer from './footer/Footer';
import NavBar from './navbar/NavBar';

interface Props{
  children: React.ReactNode
}

export const siteTitle = 'Peru Jungle Trips';

const Layout: React.FC<Props> = ({children}) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta 
          name='description'
          content='Peru Jungle Trips'
        />
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1" 
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>  
  )
}

export default Layout