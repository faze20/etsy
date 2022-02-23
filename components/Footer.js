import React from 'react'
import Link  from 'next/link'
import { FiFacebook ,FiTwitter , FiInstagram} from "react-icons/fi";
import { HiOutlineAtSymbol } from "react-icons/hi";
import { FaPinterestP } from "react-icons/fa";



function Footer() {
  return (
    <div className='grid  grid-cols-1 py-4 mx-3 mt-12 md:grid-cols-4 gap-4'>
{/* first div footer start */}
      <div className='my-6 text-center md:text-left'>
        <h2 className='text-2xl tracking-tighter  font-bold'>
          SHOP
        </h2>
        <div>
          <ul className='space-y-4 mt-4'>
            <li>

          <Link  href="/" >
              <a> HOME</a> 
          </Link>
            </li>
            <li>
              
          <Link  href="shop" >
              <a>SHOP</a> 
          </Link>
            </li>
            <li>
              
          <Link  href="policy" >
              <a>POLICY</a> 
          </Link>
            </li>
            <li>
              
          <Link  href="contact" >
              <a> CONTACT US</a> 
          </Link>
            </li>
          </ul>
        </div>
      </div>
{/* first div footer end*/}

{/* second div footer start */}
<div className='my-6 text-center  md:text-left'>
        <h2 className='text-2xl tracking-tighter  font-bold'>
          FOLLOW US ON SOCIAL
        </h2>
        <div>
          <ul className='space-y-4 mt-4 flex flex-col items-center '>
            <li className='flex items-center'>
              <FiFacebook />
              <Link  href="https://facebook.com.com/" passHref={true} >
                  <a className='mx-2'> Facebook</a> 
              </Link>
            </li>

            <li className='flex items-center'>
              <FiTwitter />
              <Link  href="https://twitter.com/" passHref={true} >
                  <a className='mx-2'>Twitter</a> 
              </Link>
            </li>

            <li className='flex items-center'>
              <FaPinterestP />
              <Link  href="https://pinterest.com/" passHref={true} >
                  <a className='mx-2'>Pinterest</a> 
              </Link>
            </li>

            <li className='flex items-center'>
              <FiInstagram />
              <Link  href="https://instagram.com/" passHref={true} >
                  <a className='mx-2'>Instagram</a> 
              </Link>
            </li>

            <li className='flex items-center'>
              <HiOutlineAtSymbol />
              <Link  href="contact" >
                  <a className='mx-2'>email</a> 
              </Link>
            </li>

          </ul>
        </div>
      </div>

{/* second div footer end */}

{/* third div footer start */}
<div className='my-6 text-center  md:text-left'>
<h2 className='text-2xl tracking-tighter  font-bold'>
    Sign Up For Emails
  </h2>
  <p className='mt-4'>
    Thank you for supporting not only my small business but my dream!
     Sign up for emmails to know when we come out with new products .
  </p>
</div>

{/* third div footer end */}

{/* fourth div footer start */}
<div className='my-6 text-center  md:text-left'>

<h2 className='text-2xl tracking-tighter  font-bold'>
    NEWSLETTER
  </h2>
  <form className='mt-4'>
    <input className='border-solid border border-gray-200 p-1 outline-0' type="email" placeholder='your@email.com'/>
    <button className='px-4 py-1 bg-black text-white'>
        Subscribe
    </button>
    {/* <input type="submit" value="SUBSCRIBE" /> */}
  </form>
</div>


{/* fourth div footer start */}





    </div>
  )
}

export default Footer