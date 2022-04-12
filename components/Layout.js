import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

function Layout({children}) {
  return (
    <div >
       <div>
          <div className='bg-black'>
            <p className='font-sans text-xs text-white break-normal py-4 text-center'>
              Every order gets a freebie item!! Fashion Brand only doing US and Canada shipping at the moment!! 
            </p>
          </div>
        </div>
            <Nav />
               <main className='mx-4 my-1'>
                   {children}
                </main>
            <Footer />

    </div>
  )
}

export default Layout