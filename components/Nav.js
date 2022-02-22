import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { HiMenu   } from "react-icons/hi";
import { AiOutlineClose , AiOutlineSearch, AiOutlineRight, AiOutlineUp } from "react-icons/ai";
import {RiArrowDropDownLine} from "react-icons/ri";

const ROUTE_POST_ID = "collections/[title]";
const titles = [
  {
    id: 1,
    title: "Perfect Lips Collection"
  },
  {
    id: 2,
    title: "Lips"
  },
  {
    id: 3,
    title: "Face"
  },
  {
    id: 4,
    title: "Eyes"
  },
  {
    id: 5,
    title: "Accessories"
  },
  {
    id: 6,
    title: "Sale"
  }
];

function Nav() {
    const [showMobileNav , setShowMobileNav] = useState(false)
    const [showMobileMenuArrow , setShowMobileMenuArrow] = useState(false)
    const [showMobilePolicyArrow , setShowMobilePolicyArrow] = useState(false)



    const mobileToggle = () => {
        setShowMobileNav(prev => !prev)
    }
    const mobileMenuArrowToggle = () => {
        setShowMobileMenuArrow(prev => !prev)
    }
    const mobilePolicyArrowToggle = () => {
        setShowMobilePolicyArrow(prev => !prev)
    }

    


  return (
    <div className='mx-4'>
                   {/* secondary nav bar start */}
        <div className=' md:flex justify-end mt-2 '>
            <div className='mx-2 hidden md:block'> <a href="account">ACCOUNT</a> </div>
            <div className='mx-2 hidden md:block'> <a href="#">CHECKOUT</a> </div>
                 {/* cart section display on mobile*/}
            <div className='ml-80 mb-6 md:mx-2 justify-end'><a href="cart">CART(0)</a> </div> 
        </div>
                 {/* secondary nav bar end */}

        
                {/* mobile nav start */}
        <div className='flex justify-between items-center mb-8  md:hidden '>
            <div  className='text-2xl'>
                <a  onClick={mobileToggle}>
                    {showMobileNav ?  <AiOutlineClose />  : <HiMenu />} 
                </a>
            </div>
            <div className='relative'>
                <h1 className='text-4xl tracking-tighter  font-bold'>KLMV COSMETICS</h1>
                <span className='absolute left-1/3 top-2/3 italic'>By  Afeez</span>
            </div>
            <div className='text-2xl'>
                  <AiOutlineSearch />
            </div>
        </div>

        <div className={showMobileNav ?  'block w-4/5' :'hidden' } >
            <div className='w-full h-px bg-blue-400 mt-12 mb-4'></div>
            <ul className='mx-2 space-y-4 divide-y divide-blue-200 h-screen'>
                <li className='p-2 '><Link href=""><a  onClick={e =>setShowMobileNav(false)}>HOME</a></Link> </li>
                <li className='p-2 flex items-center justify-between relative' >
                     <Link href="shop" ><a onClick={e =>setShowMobileNav(false)} >SHOP</a></Link>
                     <button onClick={mobileMenuArrowToggle}  >
                             {showMobileMenuArrow ? <AiOutlineUp /> : <AiOutlineRight />    }
                     </button>
                     <div  className={showMobileMenuArrow ?  'block absolute top-0' :'hidden' }>
                        <ul className='text-sm bg-black z-50 rounded text-white py-2 space-y-4 px-2'>
                            {titles.map((title) => (
                                <li key={`shop-${title.id}`}>
                                <Link
                                    href={{
                                    pathname: ROUTE_POST_ID,
                                    query: {id:title.id }
                                    }} >
                               
                                    <a>{title.title}</a>
                                </Link>
                                </li>
                            ))}
                        </ul>
                     </div>
                </li>
                <li className='p-2 flex items-center justify-between relative'>
                    <Link href="policy"><a  onClick={e =>setShowMobileNav(false)}>POLICY</a></Link>
                    <button onClick={mobilePolicyArrowToggle}  >
                             {showMobilePolicyArrow ? <AiOutlineUp /> : <AiOutlineRight />    }
                     </button>
                     <div className={showMobilePolicyArrow ?  'block absolute top-0' :'hidden' }>
                        <ul className='text-sm bg-black rounded text-white py-2 space-y-4 px-2'>
                            <li><Link href="policy"><a onClick={e =>setShowMobileNav(false)} >STORE POLICY</a></Link></li>
                            <li><Link href="privacy"><a onClick={e =>setShowMobileNav(false)} >PRIVACY</a></Link></li>
                            <li><Link href="termscondition"><a onClick={e =>setShowMobileNav(false)} >TERMS & CONDITIONS</a></Link></li>
                            <li><Link href="about"><a onClick={e =>setShowMobileNav(false)} >ABOUT US</a></Link></li>
                            <li><Link href="about"><a onClick={e =>setShowMobileNav(false)} >SOCIALS</a></Link></li>

                        </ul>

                     </div>
                </li>
                <li className='p-2' ><Link href="contact"><a onClick={e =>setShowMobileNav(false)} >CONTACT US</a></Link></li>
                <li className='p-2' ><Link href="account"><a onClick={e =>setShowMobileNav(false)}>ACCOUNT</a></Link></li>
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
                        <div>
                            <Link  href="/" >
                                <a> HOME</a> 
                            </Link>
                        </div>
                        <div className='group relative flex'>
                            <span className='hover:border-green-800 hover:border-t-4 hover:border-r-4 hover:border-l-4'>
                                <Link href='shop'>SHOP</Link> 

                            </span> 
                            <div className='text-2xl'>
                              <RiArrowDropDownLine/>
                            </div>
                            <div className='invisible group-hover:visible duration-100 absolute top-10 z-10 w-56 bg-gray-100 border-2 border-lime-900'>
                                <ul className='text-sm  space-y-4 px-2'>
                                    {titles.map((title) => (
                                        <li key={`shop-${title.id}`}>
                                            <Link
                                                href={{
                                                pathname: ROUTE_POST_ID,
                                                query: {id:title.id , title:title.title }
                                                }} >
                                        
                                                <a>{title.title}</a>
                                            </Link>
                                        </li>
                                ))}
                                </ul>
                            </div>
                        </div>
                        <div className='group relative flex '>
                            <span className='hover:border-b-4 hover:border-green-800'>
                                <Link href='policy'>POLICY</Link> 
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
                        <div>
                            <Link  href="contact">
                                <a>CONTACT US</a>
                            </Link>
                        </div>
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