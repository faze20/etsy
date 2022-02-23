import React from 'react'
import Link  from 'next/link'
import { FiFacebook } from "react-icons/fa";


function Footer() {
  return (
    <div className='grid  grid-cols-1 py-4 mx-3 mt-12 md:grid-cols-4 gap-4'>
{/* first div footer start */}
      <div>
        <h2 className='text-4xl tracking-tighter  font-bold'>
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
<div>
        <h2 className='text-4xl tracking-tighter  font-bold'>
          FOLLOW US OUT THERE
        </h2>
        <div>
          <ul className='space-y-4 mt-4'>
            <li>

          <Link  href="/" >
              <a> Facebook</a> 
          </Link>
              {/* <FiFacebook /> */}
            </li>
            <li>
              
          <Link  href="shop" >
              <a>Twitter</a> 
          </Link>
            </li>
            <li>
              
          <Link  href="policy" >
              <a>Pinterest</a> 
          </Link>
            </li>
            <li>
              
          <Link  href="contact" >
              <a>Instagram</a> 
          </Link>
            </li>
            <li>
              
          <Link  href="contact" >
              <a>email</a> 
          </Link>
            </li>
          </ul>
        </div>
      </div>

{/* second div footer end */}

{/* third div footer start */}
<div>
<h2 className='text-4xl tracking-tighter  font-bold'>
    Sign Up For Emails
  </h2>
  <p className='mt-4'>
    Thank you for supporting not only my small business but my dream!
     Sign up for emmails to know when we come out with new products .
  </p>
</div>

{/* third div footer end */}

{/* fourth div footer start */}
<div>

<h2 className='text-4xl tracking-tighter  font-bold'>
    NEWSLETTER
  </h2>
  <form className='mt-4'>
    <input type="email" placeholder='your@email.com'/>
    <input type="submit" value="SUBSCRIBE" />
  </form>
</div>


{/* fourth div footer start */}





    </div>
  )
}

export default Footer