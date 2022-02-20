import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { HiMenu   } from "react-icons/hi";
import { AiOutlineClose , AiOutlineSearch } from "react-icons/ai";
import {RiArrowDropDownLine} from "react-icons/ri";



function Nav() {
    const [showMobileNav , setShowMobileNav] = useState(false)

    const mobileToggle = () => {
        setShowMobileNav(prev => !prev)
    }


  return (
    <div className='mx-4'>
                   {/* secondary nav bar start */}
        <div className=' md:flex justify-end mt-2 '>
            <div className='mx-2 hidden md:block'> <a href="#">ACCOUNT</a> </div>
            <div className='mx-2 hidden md:block'> <a href="#">CHECKOUT</a> </div>
                 {/* cart section display on mobile*/}
            <div className='mx-2 justify-end'><a href="#">CART(0)</a> </div> 
        </div>
                 {/* secondary nav bar end */}

        
                {/* mobile nav start */}
        <div className='block md:hidden'>
            <a  onClick={mobileToggle}>
                {showMobileNav ?  <AiOutlineClose />  : <HiMenu />} 
            </a>
        </div>

        <div className={showMobileNav ?  'block' :'hidden' } >
            <ul className='mx-2'>
                <li>HOME</li>
                <li>SHOP</li>
                <li>POLICY</li>
                <li>CONTACT US</li>
                <li>ACCOUNT</li>
            </ul>
        </div>

              {/* mobile nav end */}

              {/* large screen nav start */}
              <div className='hidden md:flex items-center justify-between'>
                <div>
                    <h1 className='text-4xl tracking-tighter  font-bold'>KLMV COSMETICS</h1>
                    <span>By  Afeez</span>
                </div>
                <div>
                    <div className='flex justify-between space-x-10'>
                        <div >HOME</div>
                        <div className='group relative flex'>
                            <span className='hover:border-green-800 hover:border-t-4 hover:border-r-4 hover:border-l-4'>
                                <Link href='#'>SHOP</Link> 

                            </span> 
                            <div className='text-2xl'>
                              <RiArrowDropDownLine/>
                            </div>
                            <div className='invisible group-hover:visible duration-100 absolute top-10 z-10 w-56 bg-gray-100 border-2 border-lime-900'>
                                <ul className='text-sm  space-y-4 px-2'>
                                    <li>PERFECT LIPS COLLECTION</li>
                                    <li>LIPS</li>
                                    <li>EYES</li>
                                    <li>FACE</li>
                                    <li>ACCESSSORIES</li>
                                    <li>SALE</li>
                                </ul>
                            </div>
                        </div>
                        <div className='group relative flex '>
                            <span className='hover:border-b-4 hover:border-green-800'>
                                <Link href='#'>POLICY</Link> 
                            </span> 
                            <div className='text-2xl'>
                              <RiArrowDropDownLine/>
                            </div>
                            <div className='invisible group-hover:visible duration-100 absolute top-10 z-10 w-56 bg-gray-100'>
                                <ul className='text-sm  space-y-4 px-2'>
                                    <li>STORE POLICY</li>
                                    <li>PRIVACY</li>
                                    <li>TERMS & CONDITIONS</li>
                                    <li>ABOUT US</li>
                                    <li>SOCIALS</li>
                                </ul>
                            </div>
                        </div>
                        <div>CONTACT US</div>
                    </div>
                </div>
                {/* search bar start */}
                <div className='flex border border-gray-700 items-center px-2 rounded-sm'>
                    <input className='outline-0' type="search" name="" id="" placeholder='Search' />
                    <AiOutlineSearch />
                </div>



                {/* search bar end */}


              </div>
               {/* large screen nav end */}


    </div>





  )
}

export default Nav