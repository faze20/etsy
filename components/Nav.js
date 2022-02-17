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
   
    <div  className='flex'>
        <a  onClick={mobileToggle}>
            {showMobileNav ? <HiMenu />  : <AiOutlineClose />} 
        </a>




</div>

  )
}

export default Nav