import { useSession, signIn, signOut } from "next-auth/react"
import { React, useState, useEffect } from 'react'
import Link from 'next/link'
import { HiMenu   } from "react-icons/hi";
import { AiOutlineClose , AiOutlineSearch, AiOutlineRight, AiOutlineUp } from "react-icons/ai";
import {RiArrowDropDownLine} from "react-icons/ri";
import { useCookies } from "react-cookie"
import Cookies from "js-cookie";





const titles = [
  {
    id: 1,
    title: "perfect lips collection"
  },
  {
    id: 2,
    title: "lips"
  },
  {
    id: 3,
    title: "face"
  },
  {
    id: 4,
    title: "eyes"
  },
  {
    id: 5,
    title: "accessories"
  },
  {
    id: 6,
    title: "sales"
  }
];

// let item


// const item = ()=>{
//     if (typeof window !== 'undefined') {
//         const item = localStorage.getItem('cartqty')

// }

function Nav() {
    const [showMobileNav , setShowMobileNav] = useState(false)
    const [showMobileMenuArrow , setShowMobileMenuArrow] = useState(false)
    const [showMobilePolicyArrow , setShowMobilePolicyArrow] = useState(false)
    const [cookie, setCookie] = useCookies('signinToken')
    const [cartQuantity, setCartQuantity] = useState(0)
    const { data: session, status } = useSession()



    const mobileToggle = () => {
        setShowMobileNav(prev => !prev)
    }
    const mobileMenuArrowToggle = () => {
        setShowMobileMenuArrow(prev => !prev)
    }
    const mobilePolicyArrowToggle = () => {
        setShowMobilePolicyArrow(prev => !prev)
    }

    
    // const cartcookie = Cookies.get('cartValue')

    // const [qty, setQty] = useState(() => {
    //     const saved = localStorage.getItem("cartqty");
    //     const initialValue = JSON.parse(saved);
    //     return initialValue || "";
    //   });

    // useEffect(() => {
    //     setCartQuantity(() => {

    //         localStorage.getItem("cartqty", JSON.stringify(cartQuantity))
        
    // }, [])
    // return qty
    
    // console.log(qty)
    // Cookies.set("cartValue", JSON.stringify(cartItem));
    // = useState(
    //     localStorage.getItem('cartqty') || ''
    //   );

    //   React.useEffect(() => {
    //     localStorage.setItem('myValueInLocalStorage', value);
    //   }, [value]);
    useEffect(() => {
        const item = localStorage.getItem('cartqty')
        setCartQuantity(item)
      }, [])


    // const ISSERVER = typeof window === "undefined";
    // if (!ISSERVER) setCartQuantity(localStorage.getItem('cartqty'));
   
        // return null
 
    // if (typeof window !== undefined) {
        
    //     setCartQuantity(localStorage.getItem('cartqty'));
        
    // }
    
    // if(typeof window !== "undefined") {
    //     if(localStorage.getItem("cartqty")) {
    //       return JSON.parse(localStorage.getItem("cartqty"))
    //     } else{
    //     return []
    //     }
    //  }
            
    

  





  


  return (
    <div className='mx-4'>
                   {/* secondary nav bar start */}
        <div className=' md:flex justify-end mt-2 '>
            <div className='mx-2 hidden md:block'> 
                {
                    status === 'authenticated' ? <p> welcome {session.user.name} </p>  :

                <Link href="/account">
                    <a >Join Us</a> 
                </Link>
                }
            </div>

            <div className='mx-2 hidden md:block'> 

            {session ?
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                 onClick={() => signOut()}>Sign out</button> :
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                 onClick={() => signIn()}>Sign in</button>
             }
               
            </div>

                 {/* cart section display on mobile*/}
            <div className='ml-72 mb-6 md:mx-2 justify-end'>
                <Link href="/cart">
                    <a >
                        CART({cartQuantity})
                    </a> 
                </Link>
                    {/* CART({!!window ? window.localStorage.getItem("cartqty") : "0"}) */}
            </div> 
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
                <h1 className='text-4xl tracking-tighter  font-bold'>Fashion Brand</h1>
                <span className='absolute left-1/3 top-2/3 italic'>By  Afeez</span>
            </div>
            <div className='text-2xl'>
                  <AiOutlineSearch />
            </div>
        </div>

        <div className={showMobileNav ?  'block w-4/5' :'hidden' } >
            <div className='w-full h-px bg-blue-400 mt-12 mb-4'></div>
            <ul className='mx-2 space-y-4 divide-y divide-blue-200 h-screen'>
                <li className='p-2 '>
                    <Link href="/">
                        <a  onClick={e =>setShowMobileNav(false)}>HOME</a>
                    </Link> </li>
                <li className='p-2 flex items-center justify-between relative' >
                     <Link href="/shop" >
                         <a onClick={e =>setShowMobileNav(false)} >SHOP</a>
                    </Link>
                     <button onClick={mobileMenuArrowToggle}  >
                             {showMobileMenuArrow ? <AiOutlineUp /> : <AiOutlineRight />    }
                     </button>
                     <div  className={showMobileMenuArrow ?  'block absolute top-0' :'hidden' }>
                        <ul className='text-sm bg-black z-50 rounded text-white py-2 space-y-4 px-2'>
                            {titles.map((title) => (
                               <li key={`shop-${title.id}`}>
                                    <Link  href= {`/collections/${title.title}`}>
                                        
                                        <a>{title.title}</a>
                                    </Link>
                                 </li>
                            ))}
                        </ul>
                     </div>
                </li>
                <li className='p-2 flex items-center justify-between relative'>
                    <Link href="/policy">
                        <a  onClick={e =>setShowMobileNav(false)}>POLICY</a>
                    </Link>
                    <button onClick={mobilePolicyArrowToggle}  >
                             {showMobilePolicyArrow ? <AiOutlineUp /> : <AiOutlineRight />    }
                     </button>
                     <div className={showMobilePolicyArrow ?  'block absolute top-0' :'hidden' }>
                        <ul className='text-sm bg-black rounded text-white py-2 space-y-4 px-2'>
                            <li>
                                <Link href="/policy">
                                    <a onClick={e =>setShowMobileNav(false)} >STORE POLICY</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy">
                                    <a onClick={e =>setShowMobileNav(false)} >PRIVACY</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/termscondition">
                                    <a onClick={e =>setShowMobileNav(false)} >TERMS & CONDITIONS</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <a onClick={e =>setShowMobileNav(false)} >ABOUT US</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a onClick={e =>setShowMobileNav(false)} >SOCIALS</a>
                                </Link>
                            </li>

                        </ul>

                     </div>
                </li>
                <li className='p-2' >
                    <Link href="/contact">
                        <a onClick={e =>setShowMobileNav(false)} >CONTACT US</a>
                    </Link>
                </li>
                <li className='p-2' >
                    <Link href="/account">
                        <a onClick={e =>setShowMobileNav(false)}>ACCOUNT</a>
                    </Link>
                </li>
            </ul>

        </div>

              {/* mobile nav end */}

              {/* large screen nav start */}
              <div className='hidden md:flex items-center justify-between'>
                <div>
                    <h1 className='text-4xl tracking-tighter  font-bold'>Fashion Brand</h1>
                    <span>By  Afeez</span>
                </div>
                <div>
                    <div className='flex justify-between space-x-10'>
                        <div>
                            <Link  href="/" >
                                <a> HOME</a> 
                            </Link>
                        </div>
                        <div className='group relative flex bg-inherit hover:bg-gray-100'>
                            <span className='  px-1  '>
                                <Link href='/shop'>
                                    SHOP
                                </Link> 

                            </span> 
                            <div className='text-2xl'>
                              <RiArrowDropDownLine/>
                            </div>
                            <div className='invisible group-hover:visible absolute top-6 pt-4 z-10 w-56 bg-gray-100 '>
                                <ul className='text-sm  space-y-4 px-2'>
                                    {titles.map((title) => (
                                        <li key={`shop-${title.id}`}>
                                            <Link  href= {`/collections/${title.title}`}>
                                                
                                                <a className="uppercase hover:text-green-600 hover:tracking-wider">{title.title}</a>
                                            </Link>
                                        </li>
                                ))}
                                </ul>
                            </div>
                        </div>
                        <div className='group relative flex bg-inherit hover:bg-gray-100'>
                            <span className='px-1'>
                                <Link href='/policy'>
                                    POLICY
                                </Link> 
                            </span> 
                            <div className='text-2xl'>
                              <RiArrowDropDownLine/>
                            </div>
                            <div className='invisible group-hover:visible duration-100 absolute top-6 pt-4 z-10 w-56 bg-gray-100'>
                                <ul className='text-sm  space-y-4 px-2'>
                                    <li>
                                        <Link href="/policy">
                                             <a className="uppercase hover:text-green-600 hover:tracking-wider" >STORE POLICY </a>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/privacy">
                                             <a className="uppercase hover:text-green-600 hover:tracking-wider">Privacy </a>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/termscondition">
                                            <a className="uppercase hover:text-green-600 hover:tracking-wider">TERMS & CONDITIONS </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about">
                                            <a className="uppercase hover:text-green-600 hover:tracking-wider">ABOUT US </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about">
                                            <a className="uppercase hover:text-green-600 hover:tracking-wider">SOCIALS </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <Link  href="/contact">
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

               <div className="w-full bg-gray-100  h-px my-4 "></div>
                                
    </div>





  )   
}

export default Nav