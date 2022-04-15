import { useState } from 'react'

import Link from "next/link"
import {RiArrowDropDownLine} from "react-icons/ri";


function Policy() {
  const [showDropdown, setShowDropdown]  = useState(false)
  const mobileToggle = () => {
      setShowDropdown(prev => !prev)
  }
  return (
    <div id='top-div' className="relative">
        <div className='my-4 bg-zinc-200 rounded relative scroll-smooth pt-0 lg:pt-12' >
                     <h1 className='underline font-medium pt-2 md:pt-0 text-center text-2xl'>
                     Our Policy
                    </h1>
                <div className='flex flex-col mt-12 md:mt-0 lg:flex-row mx-1 justify-between items-center lg:mx-24'>
                   
                    <div className='w-80 '>
                        <div className='my-4'>
                            <label htmlFor="categories">Select Category</label>
                        </div>
                       
                        <button 
                            onClick={mobileToggle}
                            className='flex items-center w-full border-2 border-gray-400 justify-between mb-4 p-2 rounded-md'>
                            Shipping Policy <RiArrowDropDownLine />
                         </button>
                        <div className= {showDropdown ?"absolute bg-slate-500 rounded-md" : "hidden"} >
                            <ul>
                                 <li className='p-2 hover:text-white'><Link href="#shipping">Shipping Policy</Link></li>
                                 <li className='p-2 hover:text-white'><Link href="#address">Insufficient Address</Link></li>
                                 <li className='p-2 hover:text-white'><Link href="#return">Return/Refund Policy </Link></li>
                                <li className='p-2 hover:text-white'>
                                    <Link href="#cancel">Cancellation Policy</Link>
                                </li>
                                <li className='p-2 hover:text-white'>
                                    <Link href="#fraud"> Fraudulent Order Detected</Link>
                                </li>
                                <li className='p-2 hover:text-white'>
                                    <Link href="#allergies">Allergies/Injuries</Link>
                                </li>
                               
                            </ul>
                        </div>
                    </div> 
                    <div  className='w-80 mb-4 lg:mb-0'>
                        <div className='my-4'>
                            <label htmlFor="search">Search</label>
                        </div>
                        <div className='flex items-center border-b border-gray-400'>
                            <input
                             className=' bg-zinc-200 mr-4 w-full pb-2'
                              type="text"
                               placeholder='Search by typing keywords...' />
                            &#128269;
                        </div>
                    </div>

                </div>

            </div>

      <div className="flex justify-center leading-8">

     
      <div className="max-w-screen-sm ">
        <h2 className='underline font-medium my-8 text-center'>
          PLEASE READ BEFORE ORDERING. THANK YOU!
        </h2>
        <h3 id='shipping' className='underline font-medium my-2 '>
           Shipping Policy: 
        </h3>
        <p className="mb-4">
            Please allow 3-5 business days for your order to be processed/shipped out. Once shipping label
            is created you should receive an email confirming that your order has been shipped out. All 
            orders are shipped out with USPS. 
            Lost, Stolen, or damaged packages:
            Fashion Brand LLC is not responsible for any Lost, Stolen, or Damaged packages. Please contact 
            USPS for any Lost, Stolen, or Damaged packages. Fashion Brand LLC will provide any details you
            might need to report the incident. 
        </p>
        <h3 id='address' className='underline font-medium my-2 '>
            Insufficient Address: 
        </h3>
        <p className="mb-4">

          Please make sure the address provided when ordering is correct. Fashion Brand LLC is not 
          responsible if an order is returned back to us. If an order is returned back to us we will
           contact the receiver to fix the address. The receiver will have to pay the shipping fee 
           again. (Via. CashApp, or PayPal)
        </p>
        <h3 id='return' className='underline font-medium my-2 '>

            Return/Refund Policy:
        </h3>
        <p className="mb-4">
            All sale are final. Fashion Brand LLC does not accept returns. If an item arrives damaged, 
            Fashion Brand LLC will need proof. Once proof is provided Fashion Brand LLC will then provide
            an exchange/new product once damaged item is returned back to 25630 Felicia
              Sun city Los Angeles. CA 93456. 
        </p>
        <h3 id='cancel' className='underline font-medium my-2 '>
           Cancellation Policy:
        </h3>
        <p className="mb-4">
            Please contact fashionband@fashionbrand.com to cancel your order. Once shipping label
             is created an order cannot and will not be cancelled. 
        </p>
        <h3 id='fraud' className='underline font-medium my-2 '>

            Fraudulent Order Detected:
        </h3 >
        <p className="mb-4">

            Any order that is detected as a fraudulent order will automatically be cancelled. 
            The receiver will get an email stating that the order has been cancelled. For further
             information please contact Fashion Brand LLC via. Email. fashionband@fashionbrand.com
        </p>
        <h3 id='allergies' className='underline font-medium my-2 '>

            Allergies/Injuries:
        </h3>
        <p className="mb-4">
            Fashion Brand LLC is not responsible for any allergies/injuries. All ingredients are 
            listed under every cosmetic product produced by Fashion Brand. All products are made
             in a safe and sanitized area.
        </p>


      </div>
      </div>
      <div>
        <Link href='/returns'>
          Check our Returns 
        </Link>
      </div>
      <div className='sticky bottom-1 right-0 left-0 text-right p-4 '>
          <span className='w-16  border bg-green-700 rounded-md p-2  mb-1 text-white'>
            <Link 
            href="#top-div">
              Back to Top &uarr;
            </Link>

          </span>

         
        </div>

    </div>
  )
}

export default Policy