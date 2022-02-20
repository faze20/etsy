import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { HiMenu   } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";



function Nav() {
    const [showMobileNav , setShowMobileNav] = useState(false)

    const mobileToggle = () => {
        setShowMobileNav(prev => !prev)
    }


  return (
   

      

        

        <div className='mx-4'>

       

        <div className=' md:flex justify-end mt-2 '>

            <div className='mx-2 hidden md:block'> <a href="#">ACCOUNT</a> </div>
            <div className='mx-2 hidden md:block'> <a href="#">CHECKOUT</a> </div>
           

        {/* cart section */}
            <div className='mx-2 justify-end'>
                <a href="#">CART(0)</a>
              
            </div> 

           
        </div>
        

        <div>

        <a  onClick={mobileToggle}>
            {showMobileNav ?  <AiOutlineClose />  : <HiMenu />} 
        </a>
        </div>

        <div className={showMobileNav ?  'block' :'hidden' } >
            <ul>
                <li>HOME</li>
                <li>SHOP</li>
                <li>POLICY</li>
                <li>CONTACT US</li>
                <li>ACCOUNT</li>
            </ul>
        </div>

        </div>





  )
}

export default Nav