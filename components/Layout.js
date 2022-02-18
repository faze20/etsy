import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

function Layout({children}) {
  return (
    <div >
            <Nav />

               <main className='mx-4 my-1'>
                   {children}
                </main>
            <Footer />

    </div>
  )
}

export default Layout