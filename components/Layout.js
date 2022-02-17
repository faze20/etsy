import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

function Layout({children}) {
  return (
    <div>
            <Nav />

               <main className='flex'>
                   {children}
                </main>
            <Footer />

    </div>
  )
}

export default Layout